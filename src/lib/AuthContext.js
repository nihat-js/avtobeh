"use client"
import { createContext, ReactNode, useContext, useState, useEffect } from "react";
export const AuthProvider = ({ children,data }) => {

  const [user, setUser] = useState(data.user);

  useEffect(() => {
    // Check if user is authenticated by checking localStorage, cookies, or session
    // const storedUser = localStorage.getItem("user");
    // if (storedUser) {
    //   setUser(JSON.parse(storedUser));
    //   setIsAuthenticated(true);
    // }
  }, []);

  async function login(data){
      let response = await axios.post("/api/auth/login", data)
      if (!response.data.error) {
          setUser(response.data.data)
          return true
      } else {
          alert(response.data["message"])
          return false
      }
  }
  async function register(data){
    let response = await axios.post("/api/auth/register", data)
    if (!response.data.error) {
        setUser(response.data.data)
        return true
    } else {
        alert(response.data["message"])
        return false
    }
  }

  async function logout(){
    let response = await axios.post("/api/auth/logout")
    if (!response.data.error) {
        setUser(null)
    } else {
        alert(response.data["message"])
    }
  }


  return (
    <AuthContext.Provider value={{ user,setUser, register,login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};



export const AuthContext = createContext();

export const  useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
