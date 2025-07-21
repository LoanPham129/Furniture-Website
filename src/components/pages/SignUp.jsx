import React from "react";

const SignUp = ({ onSwitch }) => {
  return (
    <div className="w-full max-w-md space-y-4">
      <h2 className="text-3xl font-bold text-gray-800">Sign Up</h2>
      {/* Form content */}
      <input type="text" placeholder="Username" className="w-full border p-2" />
      <input type="email" placeholder="Email" className="w-full border p-2" />
      <input type="password" placeholder="Password" className="w-full border p-2" />
      <button className="bg-amber-400 hover:bg-amber-600 text-white py-2 w-full cursor-pointer">Create Account</button>

      <p className="text-sm text-gray-600">
        Already have an account?{" "}
        <button onClick={onSwitch} className="text-blue-600 underline cursor-pointer">
          Login
        </button>
      </p>
    </div>
  );
};

export default SignUp;
