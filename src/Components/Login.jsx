import React, { useState } from "react";
import logo from "../assets/games.png";
import img from '../assets/06.jpg';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-lg w-full max-w-4xl rounded-lg">
        {/* Left Side Image Section */}
        <div className="md:block w-full md:w-1/2 bg-gray-200 flex items-center justify-center">
          <img
            src={img}
            alt="Decorative"
            className="object-cover w-full h-full" // Make sure the image covers its container
          />
        </div>

        {/* Right Side Login Form */}
        <div className="w-full md:w-1/2 p-8">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <img src={logo} alt="Logo" className="mx-auto w-36" />
          </div>

          <h2 className="text-2xl font-bold text-purple-700 text-center">
            WELCOME BACK!
          </h2>
          <p className="text-gray-600 text-center">Login to your account</p>

          <form className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-purple-500"
                placeholder="admin@gamescorner.qa"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-purple-500"
                  placeholder="Password"
                />
                <span
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <i className="fas fa-eye text-gray-500"></i>
                  ) : (
                    <i className="fas fa-eye-slash text-gray-500"></i>
                  )}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-purple-600 hover:text-purple-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-blue-950 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Log in
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <a
                href="#"
                className="font-medium text-purple-600 hover:text-purple-500"
              >
                Register Now
              </a>
            </p>
            <a
              href="#"
              className="text-sm text-purple-600 hover:text-purple-500 mt-4 block"
            >
              ← Back to Previous Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
