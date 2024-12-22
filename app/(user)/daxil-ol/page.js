"use client"
// pages/login.tsx
import { useState } from "react";
// import { useRouter } from "next/router"; // To handle redirection
// import Layout from '../components/Layout';
import Link from 'next/link';
import { useRouter } from "next/router";
import { create, login,  } from "./actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); 
  // const router = useRouter(); // For redirecting to the home page after successful login

 

  return (
      <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h1>
        
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={() => login({email,password})} className="space-y-6" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Don’t have an account?{' '}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
  );
};

export default Login;
