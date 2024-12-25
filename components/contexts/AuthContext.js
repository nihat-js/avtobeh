// context/AuthContext.tsx
import { createContext, ReactNode, useContext, useState, useEffect } from "react";

// interface User {
//   username: string;
//   email: string;
// }

// interface AuthContextType {
//   isAuthenticated: boolean;
//   user: User | null;
//   login: (user: User) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthContext = createContext();

export const  useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
