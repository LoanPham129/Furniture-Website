import React, { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { HiX } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import { useCart } from "./cart/CartContext";
import { useAuth } from "./pages/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const { isAuthenticated, logout } = useAuth();

  const [showConfirmLogout, setShowConfirmLogout] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleLoginSuccess = () => {
    login();
    navigate("/");
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "product", label: "Product" },
    { id: "about", label: "About Us" },
  ];

  return (
    <nav className="fixed w-full bg-white z-50 h-16 mb-10 md:h-20 transition-all">
      <div className="flex items-center justify-between">
        <div className="font-bold text-3xl opacity-80 flex items-center h-full py-3 md:py-5 ml-10 md:ml-16">
          <Link to="/">FURNIX.</Link>
        </div>

        {/* deskop menu  */}
        <div className="hidden md:flex items-center backdrop-blur-md bg-white/80 gap-10 mr-20">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className={`text-xl font-semibold hover:scale-110 cursor-pointer ${
                activeLink === `#${link.id}`
                  ? "text-amber-500 after:w-full"
                  : "text-gray-800 hover:text-amber-500"
              }`}
              onClick={() => {
                if (location.pathname === "/") {
                  const targetElement = document.getElementById(link.id);
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                    setActiveLink(`#${link.id}`);
                  }
                } else {
                  navigate("/");
                  setTimeout(() => {
                    const el = document.getElementById(link.id);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }, 50);
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex text-2xl h-full md:mr-16 gap-6 cursor-pointer items-center">
          <Link to="/cart" className="relative">
            <FaShoppingBag className="hover:scale-110 hover:text-orange-500 mt-1.5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-600 text-amber-100 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {isAuthenticated ? (
            <FiLogOut
              className="hover:scale-110 hover:text-orange-500 mt-1.5"
              onClick={() => setShowConfirmLogout(true)}
            />
          ) : (
            <IoPerson
              className="hover:scale-110 hover:text-orange-500 mt-1.5"
              onClick={() => navigate("/login")}
            />
          )}

          {/* mobile menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden mr-3"
          >
            {isMenuOpen ? (
              <HiX className="size-6" />
            ) : (
              <RiMenu3Line className="size-6" />
            )}
          </button>

          {isMenuOpen && (
            <div className="md:hidden absolute bg-white top-16 left-0 w-full shadow-md px-4 transition-all">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (location.pathname === "/") {
                      const el = document.getElementById(link.id);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                      setActiveLink(`#${link.id}`);
                    } else {
                      navigate("/");
                      setTimeout(() => {
                        const el = document.getElementById(link.id);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }, 50);
                    }
                  }}
                  className={`block text-lg font-medium py-2 ${
                    activeLink === link.href
                      ? "text-amber-500"
                      : "text-gray-800 hover:text-amber-500"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/*Confirm Logout Modal */}
        {showConfirmLogout && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 shadow-md w-full max-w-[280px]">
              <h3 className="text-lg font-semibold text-center mb-4">
                Are you sure you want to log out?
              </h3>
              <div className="flex justify-between gap-4">
                <button
                  onClick={() => {
                    logout(); // Gọi hàm từ context
  setShowConfirmLogout(false);
  navigate("/");
                  }}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg cursor-pointer"
                >
                  Log out
                </button>
                <button
                  onClick={() => setShowConfirmLogout(false)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 py-2 rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
