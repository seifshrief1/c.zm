import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md shadow-md bg-[#1a1a1a]/80">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-orange-400 font-extrabold text-2xl md:text-3xl tracking-tight hover:text-orange-300 transition"
        >
          C.ZM
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 items-center text-white font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-orange-300 transition duration-300"
            >
              الرئيسية
            </Link>
          </li>
          <li>
            <Link
              to="/transformations"
              className="hover:text-orange-300 transition duration-300"
            >
              التحولات
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-orange-300 transition duration-300"
            >
              خدماتي
            </Link>
          </li>
          <li>
            <Link
              to="/inquiries"
              className="hover:text-orange-300 transition duration-300"
            >
              استفسارات
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1a1a] text-white py-4 px-6 space-y-4 shadow-md">
          <Link
            to="/"
            className="block hover:text-orange-300 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            الرئيسية
          </Link>
          <Link
            to="/transformations"
            className="block hover:text-orange-300 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            التحولات
          </Link>
          <Link
            to="/services"
            className="block hover:text-orange-300 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            خدماتي
          </Link>
          <Link
            to="/inquiries"
            className="block hover:text-orange-300 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            استفسارات
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
