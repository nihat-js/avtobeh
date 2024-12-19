'use client'; // Ensure this component is rendered on the client side

import { useState } from "react";
import { FiFilter } from "react-icons/fi"; // Importing filter icon from react-icons

const CarFilter = () => {
  const [filters, setFilters] = useState({
    minYear: "",
    maxYear: "",
    minPrice: "",
    maxPrice: "",
    city: "",
    minEngine: "",
    maxEngine: "",
    minHorsepower: "",
    maxHorsepower: "",
  });

  const [isCollapsed, setIsCollapsed] = useState(false); // State for toggling visibility

  // Handle changes in the filter inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  // Toggle collapsibility
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Filter Options</h2>
        <button
          onClick={toggleCollapse}
          className="text-gray-600 hover:text-red-600 transition duration-300"
        >
          <FiFilter size={24} />
        </button>
      </div>

      {/* Collapsible Section with Animation */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isCollapsed ? "h-0 opacity-0" : "h-auto opacity-100"
        }`}
      >
        {/* Minimum and Maximum Year */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="minYear" className="block text-sm font-medium text-gray-700">
              Min Year
            </label>
            <input
              type="number"
              id="minYear"
              name="minYear"
              value={filters.minYear}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="2010"
            />
          </div>
          <div>
            <label htmlFor="maxYear" className="block text-sm font-medium text-gray-700">
              Max Year
            </label>
            <input
              type="number"
              id="maxYear"
              name="maxYear"
              value={filters.maxYear}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="2022"
            />
          </div>
          <div>
            <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">
              Min Price (AZN)
            </label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="5000"
            />
          </div>
        </div>

        {/* Maximum Price and City Selection */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">
              Max Price (AZN)
            </label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="50000"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <select
              id="city"
              name="city"
              value={filters.city}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select City</option>
              <option value="Baku">Baku</option>
              <option value="Ganja">Ganja</option>
              <option value="Sumgait">Sumgait</option>
              <option value="Mingachevir">Mingachevir</option>
              <option value="Lankaran">Lankaran</option>
            </select>
          </div>
          <div>
            <label htmlFor="maxEngine" className="block text-sm font-medium text-gray-700">
              Max Engine Volume (cc)
            </label>
            <input
              type="number"
              id="maxEngine"
              name="maxEngine"
              value={filters.maxEngine}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="5000"
            />
          </div>
        </div>

        {/* Engine Volume and Horsepower */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="minHorsepower" className="block text-sm font-medium text-gray-700">
              Min Horsepower (hp)
            </label>
            <input
              type="number"
              id="minHorsepower"
              name="minHorsepower"
              value={filters.minHorsepower}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="100"
            />
          </div>
          <div>
            <label htmlFor="maxHorsepower" className="block text-sm font-medium text-gray-700">
              Max Horsepower (hp)
            </label>
            <input
              type="number"
              id="maxHorsepower"
              name="maxHorsepower"
              value={filters.maxHorsepower}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="400"
            />
          </div>
          <div>
            <label htmlFor="minEngine" className="block text-sm font-medium text-gray-700">
              Min Engine Volume (cc)
            </label>
            <input
              type="number"
              id="minEngine"
              name="minEngine"
              value={filters.minEngine}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="1500"
            />
          </div>
        </div>

        {/* Apply Filter Button */}
        <button className="w-full py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 flex items-center justify-center">
          <FiFilter size={18} className="mr-2" />
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default CarFilter;
