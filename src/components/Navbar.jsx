import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Ambassadors logo.png"; // Ensure you have the logo in the assets folder

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-500 p-4 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between relative">
        {/* Logo and Title - Centered */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-16 w-auto filter invert brightness-200 contrast-200" />
            <Link to="/" className="text-white text-2xl font-bold tracking-wide uppercase">Ambassadors of Humanity</Link>
          </div>
        </div>

        {/* Desktop Navigation - Right Aligned */}
        <div className="hidden md:flex space-x-6">
          <a href="#who-we-are" className="text-white hover:text-gray-200 transition-all">Who We Are</a>
          <a href="#immigration-lawyers" className="text-white hover:text-gray-200 transition-all">Immigration Lawyers</a>
          <a href="#donation" className="text-white hover:text-gray-200 transition-all">Donate</a>
          <a href="#download-flyer" className="text-white hover:text-gray-200 transition-all">Download Flyer</a>
          <a href="#volunteers" className="text-white hover:text-gray-200 transition-all">Volunteers</a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 flex flex-col items-center space-y-4 py-4">
          <a href="#who-we-are" className="text-white hover:text-gray-200 transition-all" onClick={() => setIsOpen(false)}>Who We Are</a>
          <a href="#immigration-lawyers" className="text-white hover:text-gray-200 transition-all" onClick={() => setIsOpen(false)}>Immigration Lawyers</a>
          <a href="#donation" className="text-white hover:text-gray-200 transition-all" onClick={() => setIsOpen(false)}>Donate</a>
          <a href="#download-flyer" className="text-white hover:text-gray-200 transition-all" onClick={() => setIsOpen(false)}>Download Flyer</a>
          <a href="#volunteers" className="text-white hover:text-gray-200 transition-all" onClick={() => setIsOpen(false)}>Volunteers</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
