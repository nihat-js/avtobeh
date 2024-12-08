import React, { useState } from 'react';

const CustomInput = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      {/* Label */}
      <label htmlFor="custom-input" className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      {/* Input Field */}
      <input
        id="custom-input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border-2 border-transparent rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50 text-gray-900 placeholder-gray-400 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400"
      />
    </div>
  );
};

export default CustomInput;
