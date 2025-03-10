import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.jpg";
import Button from "./Button"; // Importing the reusable button

const Header= ()=> {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white text-black py-6 z-50 ">
      <div className="relative flex items-center max-w-7xl mx-auto px-6">
        {/* Logo */}
        <div className="absolute left-3 md:left-6 top-1/2 transform -translate-y-1/2">
          <img src={logo} alt="Logo" className="h-16 object-contain" />
        </div>

        {/* Centered Navigation */}
        <nav className="hidden md:flex flex-grow justify-center gap-10">
          {["Features", "Upcoming", "Partners", "Testimonials","Contact"].map((item) => (
            <button
              key={item}
              className="text-black text-lg font-medium relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#F25435] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Buttons & Mobile Menu Icon */}
        <div className="flex items-center gap-4 absolute right-6">
          {/* Blogs Button (Desktop) */}
          <div className="hidden md:block">
            <Button className="bg-[#F25435]  text-white cursor-pointer"  onClick={() => window.open("https://nearz.in/blog.html", "_blank")}>Blogs</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-black text-2xl md:hidden z-20"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Refactored for Better Animation) */}
      <div
        className={`absolute left-0 w-full bg-white flex flex-col items-center gap-6 p-6 transition-transform duration-300 shadow-lg md:hidden z-10 ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {["Features", "Upcoming", "Testimonials", "Partners"].map((item) => (
          <button
            key={item}
            className="text-black text-lg font-medium relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#F25435] after:transition-all after:duration-300 hover:after:w-full"
          >
            {item}
          </button>
        ))}

        {/* Blogs Button (Mobile) */}
        <Button className="bg-[#F25435]  text-white"  onClick={() => window.open("https://nearz.in/blog.html", "_blank")}>Blogs</Button>
      </div>
    </header>
  );
}

export default Header;