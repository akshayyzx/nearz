import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.jpg";
import Button from "./Button";

const Header = ({ isConfettiRunning }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [applyBlur, setApplyBlur] = useState(true);

  useEffect(() => {
    if (!isConfettiRunning) {
      setTimeout(() => setApplyBlur(false), 2500); // Smooth removal
    }
  }, [isConfettiRunning]);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full text-black py-6 z-50 transition-all duration-700 
        ${applyBlur ? "backdrop-blur-xl bg-white/50" : "bg-white"}`}
      style={{ filter: applyBlur ? "blur(8px)" : "none" }} // Force blur with CSS
    >
      <div className="relative flex items-center max-w-7xl mx-auto px-6">
        {/* Logo */}
        <div
          id="logo"
          className="absolute left-3 md:left-6 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={logo} alt="Logo" className="h-16 object-contain" />
        </div>

        {/* Centered Navigation */}
        <nav className="hidden md:flex flex-grow justify-center gap-10">
          {[
            { name: "Features", id: "features" },
            { name: "Upcoming", id: "upcoming" },
            { name: "Partners", id: "partners" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-black text-lg font-medium relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#F25435] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Buttons & Mobile Menu Icon */}
        <div className="flex items-center gap-4 absolute right-6">
          {/* Blogs Button (Desktop) */}
          <div className="hidden md:block">
            <Button
              className="bg-[#F25435] text-white cursor-pointer"
              onClick={() => window.open("https://nearz.in/blog.html", "_blank")}
            >
              Blogs
            </Button>
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

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 w-full bg-white flex flex-col top-[40px] items-center gap-2 p-6 transition-transform duration-300 shadow-lg md:hidden z-10 ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {[
          { name: "Features", id: "features" },
          { name: "Upcoming", id: "upcoming" },
          { name: "Partners", id: "partners" },
          { name: "Testimonials", id: "testimonials" },
          { name: "Contact", id: "contact" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => {
              handleScroll(item.id);
              setMenuOpen(false);
            }}
            className="text-black text-lg font-medium relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#F25435] after:transition-all after:duration-300 hover:after:w-full"
          >
            {item.name}
          </button>
        ))}

        {/* Blogs Button (Mobile) */}
        <Button
          className="bg-[#F25435] text-white"
          onClick={() => window.open("https://nearz.in/blog.html", "_blank")}
        >
          Blogs
        </Button>
      </div>
    </header>
  );
};

export default Header;
