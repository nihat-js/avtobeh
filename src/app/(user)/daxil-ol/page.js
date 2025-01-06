"use client"
// pages/login.tsx
import { useState } from "react";
// import { useRouter } from "next/router"; // To handle redirection
// import Layout from '../components/Layout';
import Link from 'next/link';
import { useRouter } from "next/router";
import { create, login, } from "./actions";
import { Card } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState(null);
  // const router = useRouter(); // For redirecting to the home page after successful login



  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md" style={{height : "100vh"}}>
      {/* <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h1>
        
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
        </p> */}

      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Qeydiyyat
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          {/* Nice to meet you! Enter your details to register. */}
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Ad
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Elektron Poçt
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Şifrə
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Təkrar Şifrə
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                Şərtlər və qaydalarla razıyam
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  {/* &nbsp;Terms and Conditions */}
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth color="indigo" >
            Qeydiyyat
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Hesabınız var?{" "}
            <Link href="daxil-ol" className="font-medium text-gray-900">
              Daxil ol
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Login;
