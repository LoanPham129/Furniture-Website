import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import bg from "../../assets/auth.jpg";

export default function AuthContainer() {
  const [isSignup, setIsSignup] = useState(false);

  const toggleAuth = () => setIsSignup(!isSignup);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={bg}
        alt="auth background"
        className="absolute inset-0 w-full h-full object-cover  z-0"
      />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-white/90 p-10 rounded-xl shadow-lg w-[90%] max-w-md">
          {isSignup ? (
            <SignUp onSwitch={toggleAuth} />
          ) : (
            <Login onSwitch={toggleAuth} />
          )}
        </div>
      </div>
    </div>
  );
}
