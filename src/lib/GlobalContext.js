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
  const [models, setModels] = useState(data.models);
  const [cities, setCities] = useState(data.cities);

  return (
    <GlobalContext.Provider value={{ brands, setBrands, models, setModels, cities, setCities }}>
      {children}
    </GlobalContext.Provider>
  );
};
