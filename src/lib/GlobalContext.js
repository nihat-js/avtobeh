"use client"
import React, { createContext, useContext, useState } from 'react';

// Create a Context
const GlobalContext = createContext();

// Create a custom hook to use the context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

// Create the provider component
export const GlobalProvider = ({ children, data }) => {

  const [brands, setBrands] = useState(data.brands);

  return (
    <GlobalContext.Provider value={{ brands, setBrands,  }}>
      {children}
    </GlobalContext.Provider>
  );
};
