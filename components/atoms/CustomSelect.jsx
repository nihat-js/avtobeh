import React, { useState } from 'react';

const CustomSelect = ({ label, options, value, onChange }) => {
  // Custom styles for the container, select, and label
  const customSelectWrapper = {
    position: 'relative',
    width: '300px',
    fontFamily: 'Arial, sans-serif',
  };

  const selectStyles = {
    appearance: 'none', // Removes default select styles
    WebkitAppearance: 'none', // Safari-specific removal of default styles
    MozAppearance: 'none', // Firefox-specific removal of default styles
    width: '100%',
    padding: '12px 40px 12px 16px', // Padding inside the select box
    border: '2px solid #d1d5db', // Light gray border
    borderRadius: '10px', // Rounded corners
    fontSize: '16px',
    color: '#333',
    backgroundColor: '#fff',
    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 10 5\\"%3E%3Cpath fill=\\"none\\" stroke=\\"%23ccc\\" d=\\"M1 1l4 3 4-3\\"%3E%3C/svg%3E")', // Down arrow icon
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 16px center', // Position the arrow
    cursor: 'pointer',
    transition: 'all 0.3s ease', // Smooth transition for hover and focus
  };

  const labelStyles = {
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '8px',
    display: 'block',
    color: '#4b5563', // Slightly darker gray for the label
  };

  const selectFocusStyles = {
    ...selectStyles,
    borderColor: '#fbbf24', // Yellow border on focus
    boxShadow: '0 0 5px rgba(251, 191, 36, 0.5)', // Soft yellow glow on focus
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = '#fbbf24'; // Yellow border on focus
    e.target.style.boxShadow = '0 0 5px rgba(251, 191, 36, 0.5)'; // Soft yellow glow
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = '#d1d5db'; // Reset to light gray on blur
    e.target.style.boxShadow = 'none'; // Remove glow on blur
  };

  return (
    <div style={customSelectWrapper}>
      {/* Label */}
      <label htmlFor="custom-select" style={labelStyles}>
        {label}
      </label>

      {/* Select Element */}
      <select
        id="custom-select"
        style={selectStyles}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
