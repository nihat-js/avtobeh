"use client"

import { useState } from "react";

const fuelTypes = [
  { name: "Benzin", value: "benzin" },
  { name: "Dizel", value: "dizel" },
  { name: "Elektrik", value: "elektrik" },
  { name: "Hibrid", value: "hibrid" },
  { name: "Qaz", value: "qaz" },
  { name: "Benzin/Qaz", value: "benzin/qaz" },


]

export default function Index({ brands }) {
  const [formData, setFormData] = useState({
    brand: "",
    category: "",
    vin: "",
    mileage: "",
    description: "",
    fuelType: "",
    images: [],
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 shadow-lg rounded-xl">
      <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-6">Maşınınızı Satın</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Brand */}
        <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
          <div className="w-1/2">
            <label htmlFor="brand" className="block text-lg font-medium text-gray-700">Marka</label>
            <select
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            >
              <option value="">Marka Seçin</option>
              {
                brands.map(brand => (
                  <option key={brand.id} value={brand.id}>{brand.name}</option>
                ))
              }
            </select>
          </div>
          <div className="w-1/2">
            <label htmlFor="brand" className="block text-lg font-medium text-gray-700">Model</label>
            <select
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            >
              <option value=""></option>
              <option value="toyota" >Toyota</option>
              <option value="ford">Ford</option>
              <option value="chevrolet">Chevrolet</option>
              <option value="honda">Honda</option>
            </select>
          </div>
        </div>


        {/* Category */}
        {/* <div>
          <label htmlFor="category" className="block text-lg font-medium text-gray-700">Kateqoriya</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          >
            <option value="">Kateqoriya Seçin</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="truck">Pick-up</option>
            <option value="hatchback">Hatchback</option>
          </select>
        </div> */}

        {/* VIN */}
        <div>
          <label htmlFor="vin" className="block text-lg font-medium text-gray-700">VİN (Avtomobilin identifikasiya nömrəsi)</label>
          <input
            type="text"
            id="vin"
            name="vin"
            value={formData.vin}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            placeholder="Məsələn: 1HGBH41JXMN109186"
          />
        </div>

        {/* Mileage */}
        <div>
          <label htmlFor="mileage" className="block text-lg font-medium text-gray-700">Yol Gedilən Məsafə (km)</label>
          <input
            type="number"
            id="mileage"
            name="mileage"
            value={formData.mileage}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            placeholder="Məsələn: 150000"
          />
        </div>




        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">Təsvir</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            placeholder="Avtomobiliniz haqqında daha çox məlumat əlavə edin"
          />
        </div>



        {/* Fuel Type */}
        <div>
          <label className="block text-lg font-medium text-gray-700">Yanacaq Növü</label>
          <div className="mt-2 flex space-x-6">

            {
              fuelTypes.map(fuelType => (
                <RadioButton key={fuelType.value} onChange={handleChange} formData={formData} name={fuelType.name} value={fuelType.value} />
              ))
            }

          </div>
        </div>

        {/* {{price}} */}
        <div>
          <label htmlFor="mileage" className="block text-lg font-medium text-gray-700">Qiymət</label>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              id="mileage"
              name="mileage"
              value={formData.mileage}
              onChange={handleChange}
              className="mt-2 block  px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
              placeholder="Məsələn: 23000"
            />
            <div>
              <select name="currency" className="px-4 py-2">
                <option value="azn">AZN</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
              </select>

            </div>
          </div>
        </div>
        <div>
        </div>

        {/* Image Upload */}
        <div>
          <label htmlFor="images" className="block text-lg font-medium text-gray-700">Şəkilləri Yükləyin</label>
          <input
            type="file"
            id="images"
            name="images"
            multiple
            onChange={handleFileChange}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>

        {formData?.images?.length < 4 && (
          <label htmlFor="image-upload" className="relative cursor-pointer w-full h-32 border-2 border-dashed border-gray-400 rounded-lg flex justify-center items-center text-gray-500">
            <input
              type="file"
              id="image-upload"
              name="images"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0"
            />
            <span className="text-2xl">+</span>
          </label>

        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gray-700 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Paylaş
          </button>
        </div>
      </form>
    </div>
  );
}


function RadioButton({ name, value, formData, handleChange }) {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={value}
        name="fuelType"
        value={value}
        checked={formData.fuelType === value}
        onChange={handleChange}
        className="h-5 w-5 text-indigo-600 border-gray-300 focus:ring-indigo-500"
      />
      <label htmlFor={value} className="ml-2 text-lg font-medium text-gray-700">{name}</label>
    </div>
  )
}