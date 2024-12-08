import React, { useState } from 'react';
import CustomInput from '../atoms/OutlinedInput';
import PrimaryInput from '../atoms/BoringInput';
import Image from 'next/image';

const SidebarFilter = () => {
  const [priceRange, setPriceRange] = useState([5000, 50000]);
  const [yearRange, setYearRange] = useState([2000, 2023]);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [features, setFeatures] = useState({
    credit: false,
    offerWithOtherCars: false,
    leasing: false,
  });

  const brands = ['Toyota', 'Tesla', 'BMW', 'Audi', 'Mercedes'];
  const models = {
    Toyota: ['Corolla', 'Camry', 'Land Cruiser'],
    Tesla: ['Model S', 'Model 3', 'Model X'],
    BMW: ['Series 3', 'X5', 'Z4'],
    Audi: ['A4', 'Q7', 'A6'],
    Mercedes: ['C-Class', 'E-Class', 'GLC'],
  };

  const handlePriceChange = (e) => {
    setPriceRange([e.target.value[0], e.target.value[1]]);
  };

  const handleYearChange = (e) => {
    setYearRange([e.target.value[0], e.target.value[1]]);
  };

  const handleFeatureChange = (feature) => {
    setFeatures((prev) => ({ ...prev, [feature]: !prev[feature] }));
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setModel(''); // Reset model when brand changes
  };

  return (
    <div
      style={{
        width: '300px',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '20px' }}>Filter Cars</h2>

      {/* Price Range */}
      <div style={{ marginBottom: '20px' }} >
        <Image src="/icons/bg-squares.svg" width={100} height={100} alt="Background Squares" />
        <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Price Range</h3>
        {/* <CustomInput/>
        <CustomInput/> */}
        <PrimaryInput/>
        <input
          type="range"
          min="1000"
          max="100000"
          value={priceRange}
          onChange={handlePriceChange}
          style={{
            width: '100%',
            marginBottom: '8px',
            accentColor: '#ff6f00',
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{`$${priceRange[0]}`}</span>
          <span>{`$${priceRange[1]}`}</span>
        </div>
      </div>

      {/* Year Range */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Year Range</h3>
        <input
          type="range"
          min="1990"
          max="2023"
          value={yearRange}
          onChange={handleYearChange}
          style={{
            width: '100%',
            marginBottom: '8px',
            accentColor: '#ff6f00',
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{yearRange[0]}</span>
          <span>{yearRange[1]}</span>
        </div>
      </div>

      {/* Brand */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Brand</h3>
        <select
          value={brand}
          onChange={handleBrandChange}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '8px',
            border: '1px solid #ccc',
          }}
        >
          <option value="">Select a Brand</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      {/* Model */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Model</h3>
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '8px',
            border: '1px solid #ccc',
          }}
          disabled={!brand}
        >
          <option value="">Select a Model</option>
          {brand &&
            models[brand]?.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
        </select>
      </div>

      {/* Features */}
      <div>
        <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Features</h3>
        <label style={{ display: 'block', marginBottom: '8px' }}>
          <input
            type="checkbox"
            checked={features.credit}
            onChange={() => handleFeatureChange('credit')}
            style={{ marginRight: '8px' }}
          />
          Credit
        </label>
        <label style={{ display: 'block', marginBottom: '8px' }}>
          <input
            type="checkbox"
            checked={features.offerWithOtherCars}
            onChange={() => handleFeatureChange('offerWithOtherCars')}
            style={{ marginRight: '8px' }}
          />
          Offer with other cars
        </label>
        <label style={{ display: 'block', marginBottom: '8px' }}>
          <input
            type="checkbox"
            checked={features.leasing}
            onChange={() => handleFeatureChange('leasing')}
            style={{ marginRight: '8px' }}
          />
          Leasing
        </label>
      </div>
    </div>
  );
};

export default SidebarFilter;
