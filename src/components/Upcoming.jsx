import React from "react";
import Button from "./Button";
import coming from '../assets/coming_soon.gif';
import peach from '../assets/peach.png';
import aquagreen from '../assets/aqua-green.png';
import { motion } from "framer-motion";

const VirtualTryOn = () => {
  return (
    <section id="upcoming" className="relative text-center py-12 px-4 md:px-8 lg:px-16 bg-white text-black scroll-mt-20">
      {/* Animated Leaves (Hidden on Mobile) */}
      <div className="md:block">
        <motion.img 
          src={peach} 
          alt="Peach Leaf" 
          className="absolute top-1 left-10 w-24 lg:w-32 opacity-30"
          animate={{ x: [0, -3, 3, -3, 3, 0], y: [0, 3, -3, 3, -3, 0] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.img 
          src={aquagreen} 
          alt="Aqua Green Leaf" 
          className="absolute bottom-1 right-10 w-24 lg:w-32 opacity-30"
          animate={{ x: [0, 3, -3, 3, -3, 0], y: [0, -3, 3, -3, 3, 0] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        />
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold text-[#F25435]">Create your looks</h3>
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mt-2">
        Try virtual looks with <strong className="text-[#F25435]">Nearz's AI-Based engine</strong>
      </h2>

      {/* Image */}
      <div className="flex justify-center mt-5">
        <img src={coming} alt="coming-soon" className="w-64 md:w-72 lg:w-80 rounded-md" />
      </div>

      {/* Text Info */}
      <div className="text-base md:text-lg mt-4 space-y-1">
        <p>Scan your face</p>
        <p>Checkout your Hairstyles, HairColor, Makeup, Brows & much more</p>
      </div>
    </section>
  );
};

export default VirtualTryOn;
