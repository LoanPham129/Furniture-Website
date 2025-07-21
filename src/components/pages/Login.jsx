import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export default function Login({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login(); 
    navigate("/");
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 mb-4 border border-gray-300 rounded"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 mb-6 border border-gray-300 rounded"
      />

      <button
        onClick={handleLogin}
        className="w-full bg-amber-400 hover:bg-amber-600 text-white cursor-pointer py-3 rounded transition"
      >
        Login
      </button>

      <p className="text-center mt-4">
        Don't have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer underline"
          onClick={onSwitch}
        >
          Create Account
        </span>
      </p>
    </div>
  );
}
