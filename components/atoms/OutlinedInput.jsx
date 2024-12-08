import React, { useState } from 'react';

const CustomInput = ({ label, placeholder, value, onChange }) => {
  return (
    <input type="text" name="cvv" placeholder=" " class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 border-gray-200 font-sans" />
  );
};

export default CustomInput;
