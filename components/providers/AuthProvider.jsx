"use client"
import { useState } from "react";
import { useEffect } from "react";
import {AuthContext} from "../contexts/AuthContext";
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is authenticated by checking localStorage, cookies, or session
    // const storedUser = localStorage.getItem("user");
    // if (storedUser) {
    //   setUser(JSON.parse(storedUser));
    //   setIsAuthenticated(true);
    // }
  }, []);

  function login(){

  }
  function logout(){
    
  }

//   const login = (user: User) => {
//     setUser(user);
//     setIsAuthenticated(true);
//     localStorage.setItem("user", JSON.stringify(user)); // Store user info
//   };

//   const logout = () => {
//     setUser(null);
//     setIsAuthenticated(false);
//     localStorage.removeItem("user");
//   };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
