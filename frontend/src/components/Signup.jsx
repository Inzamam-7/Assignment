import React, { useState } from "react";
import signupImage from "../assets/login.svg"; // make sure this matches your path
import { FaFacebookF, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignupModal({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="w-full max-w-4xl rounded-md overflow-hidden shadow-2xl bg-white">
        {/* Top Green Banner */}
        <div className="bg-green-100 text-green-700 text-center text-sm py-3 font-medium">
          Let’s learn, share & inspire each other with our passion for computer engineering. 
          <span className="text-green-800 font-bold"> Sign up now 🤘</span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row p-6 gap-6 relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
          >
            &times;
          </button>

          {/* Left side (Form) */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-2">Create Account</h2>
            <p className="text-sm text-right mb-4">
              Already have an account?{" "}
              <a href="#" className="text-blue-600 font-medium">Sign In</a>
            </p>

            <form className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 border border-gray-300 px-4 py-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 border border-gray-300 px-4 py-2 rounded"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full border border-gray-300 px-4 py-2 rounded pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-2.5 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700">
                Create Account
              </button>
            </form>

            <button className="w-full mt-4 border flex items-center justify-center gap-2 border-gray-300 py-2 rounded">
              <FaFacebookF className="text-blue-600" />
              Sign up with Facebook
            </button>
            <button className="w-full mt-2 border flex items-center justify-center gap-2 border-gray-300 py-2 rounded">
              <FaGoogle className="text-red-500" />
              Sign up with Google
            </button>
          </div>

          {/* Right side (Image) */}
          <div className="hidden md:flex w-1/2 flex-col justify-between items-center text-center">
            <img
              src={signupImage}
              alt="Sign up illustration"
              className="w-full max-w-xs"
            />
            <p className="text-xs text-gray-500 mt-4">
              By signing up, you agree to our{" "}
              <a href="#" className="underline">Terms & conditions</a>,{" "}
              <a href="#" className="underline">Privacy policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
