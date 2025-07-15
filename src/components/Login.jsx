import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaCheckCircle,
  FaLock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = ({ onLoginSuccess, onClose }) => {
  const [showToast, setShowToast] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem("loginData");
    if (stored) setFormData(JSON.parse(stored));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.rememberMe
      ? localStorage.setItem("loginData", JSON.stringify(formData))
      : localStorage.removeItem("loginData");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    onLoginSuccess();
  };

  const handleChange = ({ target: { name, value, type, checked } }) =>
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <div className=" space-y-6 relative">
      <div
        className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
          showToast ? " translate-y-0 opacity-100" : "-transy20 opacity-0"
        }`}
      >
        <div className=" bg-green-500 text-white px-4 py-3 rounded-md shadow-lg flex items-center gap-2 text-sm">
          <FaCheckCircle className="flex-shrinnk-0" />
          <span>Login Successful</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className=" space-y-6">
        <div className="relative">
          <FaUser className="absolute top-1/2 transform -translate-y-1/2 left-3" />
          <input
            type="text"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full rounded-lg bg-white placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 pl-10 pr-4 py-3"
          />
        </div>

        <div className="relative">
          <FaLock className="absolute top-1/2 transform -translate-y-1/2 left-3 " />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-lg bg-white placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 pl-10 pr-4 py-3"
          />
        </div>

        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute right-3 top-1/2 text-gray-800 hover:text-amber-600 flex items-center justify-center text-xl cursor-pointer"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>

        <div className=" flex items-center">
          <label className=" flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className=" h-5 w-5 text-amber-400 form-checkbox bg-gray-800 rounded "
            />
            <span className=" ml-2">Remember Me</span>
          </label>
        </div>

        <button className=" w-full py-3 bg-gradient-to-b from-amber-200 to-amber-400 font-bold rounded-lg flex items-center justify-center gap-2 transition-transform">
          <div className=" flex items-center justify-center gap-3 hover:scale-105 cursor-pointer">
            Sign In <FaArrowRight />
            </div>
        </button>
      </form>

      <div className=" text-center">
        <Link
          to="/signup"
          onClick={onClose}
          className=" inline-flex items-center gap-2 text-black hover:scale-105 transition-colors"
        >
          Create New Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
