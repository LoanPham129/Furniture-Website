import React, { useState } from "react";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { HiX } from "react-icons/hi";
import { a, input } from "framer-motion/client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [showInput, setShowInput] = useState(false);
  const [search, setSearch] = useState("");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#product", label: "Product" },
    { href: "#about", label: "About Us" },
  ];
  return (
    <nav
      className=" fixed w-full bg-gradient-to-r z-50 bg-white h-16 md:h-20"
    >
      <div className="flex items-center justify-between">
        <div className=" font-bold text-3xl opacity-80 flex items-center h-full py-3 md:py-5 ml-10 md:ml-16">
          FURNIX.
        </div>

        <div className="hidden md:flex items-center gap-10 mr-20">
          {navLinks.map((navLinks, i) => (
            <a
              key={i}
              href={navLinks.href}
              className={`text-xl font-semibold hover:scale-110 ${
                activeLink === navLinks.href
                  ? "text-orange-600 after:w-full"
                  : "text-gray-800 hover:text-gray-900"
              }`}
              onClick={() => setActiveLink(navLinks.href)}
            >
              {navLinks.label}
            </a>
          ))}
        </div>

        <div className="flex text-2xl h-full md:mr-16 gap-6 cursor-pointer">
          <FaShoppingBag className=" hover:scale-110 hover:text-orange-500 mt-1.5" />
          <IoPerson className="hover:scale-110 hover:text-orange-500 mt-1.5" />

          {/* mobile menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden mr-3"
          >
            {isMenuOpen ? (
              <HiX className="size-6" />
            ) : (
              <RiMenu3Line className=" size-6" />
            )}
          </button>

          {/* mobile menu item */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 w-full shadow-md px-4 transition-all">
              {navLinks.map((link) => (
                <a
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
      </div>
    </nav>
  );
};

export default Navbar;
