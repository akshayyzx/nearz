import React from "react";
import Button from "./Button";
import applelogo from '../assets/apple.jpg';
import playstorelogo from '../assets/google-play.jpg';
import mobileImage from "../assets/hero_banner.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h4 className="text-xl md:text-xl font-bold leading-tight text-black">
            Empowering Salons, Enriching Lives
          </h4>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#F25435] py-6">
            AI based Salon appointment booking App
          </h1>
          <p className="text-lg md:text-xl mt-4 opacity-90 ">
  Revolutionize Your Salon Experience with <strong className="text-[#F25435]">Nearz</strong> <br/>The Effortless Way to Book Appointments
</p>

          {/* Buttons Wrapper */}
          <div className="flex gap-9 mt-6 justify-center md:justify-start">
          <Button className="bg-gray-700 text-white flex items-center cursor-pointer gap-2 px-4 py-4 font-semibold shadow-[3px_3px_0px_black] 
            transition-all duration-200 hover:bg-[#F25435] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
    onClick={() => window.open("https://apps.apple.com/in/app/nearz/id1549902743", "_blank")}>
    Download App
    <img src={applelogo} alt="Apple Logo" className="h-5 w-5 md:h-6 md:w-6" />
</Button>

<Button className="bg-gray-700 text-white flex items-center gap-2 px-4 py-4 cursor-pointer font-semibold shadow-[3px_3px_0px_black] 
            transition-all duration-200 hover:bg-[#F25435] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
    onClick={() => window.open("https://play.google.com/store/apps/details?id=com.dazzleapp&pcampaignid=web_share", "_blank")}>
    Download App
    <img src={playstorelogo} alt="Google Play Logo" className="h-5 w-5 md:h-6 md:w-6" />
</Button>

          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center m-10 ">
        <motion.div
  className="relative flex justify-center items-center"
  initial={{ opacity: 0, y: 50, scale: 0.9 }} 
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1.5, ease: "easeOut" }}
  whileHover={{ scale: 1.05 }} // Subtle hover zoom
>
  {/* Glowing Background Effect */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 blur-3xl opacity-30 rounded-full"
    animate={{
      scale: [1, 1.1, 1],
      opacity: [0.2, 0.4, 0.2],
    }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* The Image with Hover + Parallax Effect */}
  <motion.img
    src={mobileImage}
    alt="Salon Illustration"
    className="max-w-3xl md:max-w-4xl w-full h-auto object-cover rounded-lg shadow-2xl"
    whileHover={{ scale: 1.05, rotate: 1 }} // Slight hover effect
    whileTap={{ scale: 0.98 }} // Small press effect for responsiveness
    animate={{
      y: [-5, 5, -5],
      transition: { repeat: Infinity, duration: 4 },
    }} // Floating effect
  />
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
