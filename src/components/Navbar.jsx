import React, { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { HiX } from "react-icons/hi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { IoMdClose } from "react-icons/io";
import { useCart } from "./cart/CartContext";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems } = useCart();

  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("loginData"))
  );
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showConfirmLogout, setShowConfirmLogout] = useState(false);

  useEffect(() => {
    setShowLoginModal(location.pathname === "/login");
    setIsAuthenticated(Boolean(localStorage.getItem("loginData")));
  }, [location.pathname]);

  const handleLoginSuccess = () => {
    localStorage.setItem("loginData", JSON.stringify({ loggedIn: true }));
    setIsAuthenticated(true);
    setShowLoginModal(false);
    navigate("/");
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#product", label: "Product" },
    { href: "#about", label: "About Us" },
  ];

  return (
    <nav className="fixed w-full bg-white z-10 h-16 mb-10 md:h-20 transition-all">
      <div className="flex items-center justify-between">
        <div className="font-bold text-3xl opacity-80 flex items-center h-full py-3 md:py-5 ml-10 md:ml-16">
          <NavLink to="/">FURNIX.</NavLink>
        </div>

        {/* deskop menu  */}
        <div className="hidden md:flex items-center backdrop-blur-md bg-white/80 gap-10 mr-20">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.href}
              className={`text-xl font-semibold hover:scale-110 ${
                activeLink === link.href
                  ? "text-orange-600 after:w-full"
                  : "text-gray-800 hover:text-gray-900"
              }`}
              onClick={() => setActiveLink(link.href)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex text-2xl h-full md:mr-16 gap-6 cursor-pointer items-center">
          <NavLink to="/cart" className="relative">
            <FaShoppingBag className="hover:scale-110 hover:text-orange-500 mt-1.5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-600 text-amber-100 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </NavLink>

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
                  key={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMenuOpen(false);
                  }}
                  className={`block text-lg font-medium py-2 ${
                    activeLink === link.href
                      ? "text-orange-500"
                      : "text-gray-800 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Login modal */}
        {showLoginModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className=" bg-gray-100 rounded-xl p-6 w-full relative border-none shadow-lime-700 max-w-[400px]">
              <button
                onClick={() => navigate("/")}
                className="absolute top-2 right-2 text-gray-700 hover:text-amber-500 text-2xl"
              >
                <IoMdClose />
              </button>
              <h2 className="text-2xl font-bold text-center mb-4">FURNIX.</h2>
              <Login
                onLoginSuccess={handleLoginSuccess}
                onClose={() => navigate("/")}
              />
            </div>
          </div>
        )}

        {/*Confirm Logout Modal */}
        {showConfirmLogout && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 shadow-md w-full max-w-[300px]">
              <h3 className="text-lg font-semibold text-center mb-4">
                Are you sure you want to log out?
              </h3>
              <div className="flex justify-between gap-4">
                <button
                  onClick={() => {
                    localStorage.removeItem("loginData");
                    setIsAuthenticated(false);
                    setShowConfirmLogout(false);
                    navigate("/");
                  }}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
                >
                  Log out
                </button>
                <button
                  onClick={() => setShowConfirmLogout(false)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 py-2 rounded-lg"
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
