import React from "react";
import { login, OTPEmailLogin } from "@/src/app/api/login";

const Page = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Admin Login
        </h1>
        <form className="space-y-6" action={login}>
          <div className="flex flex-col space-y-4">
            <label htmlFor="email" className="text-gray-700 font-medium">
              Username
            </label>
            <input
              id="email"
              name="email"
              type="text"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label htmlFor="password" className="text-gray-700 font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
