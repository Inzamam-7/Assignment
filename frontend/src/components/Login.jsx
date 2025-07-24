// src/components/Login.jsx
import React from "react";
import loginImage from "../assets/login.svg";

export default function Login({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="w-full max-w-3xl">
        {/* Top green text */}
        <div className="bg-white rounded-t-md p-3 text-center">
          <p className="text-[13px] md:text-sm text-green-700 font-medium leading-snug">
            Let’s learn, share & inspire each other with our passion for computer engineering.
            <span className="text-green-600 font-bold"> Sign up now ✌️</span>
          </p>
        </div>

        {/* Modal Box */}
        <div className="bg-white w-full rounded-b-md shadow-lg flex flex-col md:flex-row relative p-6">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            onClick={onClose}
          >
            &times;
          </button>

          {/* Left section */}
          <div className="w-full md:w-1/2 pr-0 md:pr-4">
            <h2 className="text-xl font-bold mb-4">Sign In</h2>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Sign In
              </button>
            </form>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-sm text-gray-500">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <button className="w-full border flex items-center justify-center gap-2 border-gray-300 py-2 rounded mb-2">
              <img src="/icons/facebook.svg" alt="fb" className="w-5 h-5" />
              Sign in with Facebook
            </button>
            <button className="w-full border flex items-center justify-center gap-2 border-gray-300 py-2 rounded">
              <img src="/icons/google.svg" alt="google" className="w-5 h-5" />
              Sign in with Google
            </button>

            <p className="text-sm text-right mt-2">
              <a href="#" className="text-gray-600 hover:underline">Forgot Password?</a>
            </p>
          </div>

          {/* Right section */}
          <div className="hidden md:flex w-1/2 items-center justify-center">
            <div className="text-center">
              <p className="text-sm mb-2">
                Don’t have an account yet?{" "}
                <a href="#" className="text-blue-600 font-medium">Create new for free!</a>
              </p>
              <img
                src={loginImage}
                alt="Illustration"
                className="w-full max-w-xs mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
