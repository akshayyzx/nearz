import React, { useState } from "react";
import logo from "../assets/logo.png";
import headerImage from "../assets/blog-logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Menu and Close icons
import RevealLinks from './RevealLinks';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-white px-4 md:px-8 py-2 w-full relative border-b border-gray-200">
      
      {/* Header Image on Mobile (replaces Nearz logo) */}
      <div className="block md:hidden">
        <img src={headerImage} alt="Welcome to Nearz Blogs" className="h-15 object-contain" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 center">
        <RevealLinks />
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-gray-800">
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu with RevealLinks */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg p-6 md:hidden">
          <RevealLinks /> {/* This will showcase the links inside the mobile menu */}
        </div>
      )}

      {/* Header Image on Desktop */}
      <div className="hidden md:block px-4">
        <img
          src={headerImage}
          alt="Welcome to Nearz Blogs"
          className="w-full h-14 md:h-20 object-contain"
        />
      </div>
    </header>
  );
}
