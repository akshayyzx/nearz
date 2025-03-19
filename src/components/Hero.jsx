import React, { useState, useEffect } from "react";
import appleBadge from '../assets/app-store.jpg';
import playstoreBadge from '../assets/playstore.jpg';
import mobileImage from "../assets/hero_banner.jpg";
import backImage from "../assets/flip-image.jpg";
import { motion } from "framer-motion";
import logo from '../assets/logo.jpg';
import peach from '../assets/peach.png';
import aquagreen from '../assets/aqua-green.png';

const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    let interval;
    if (isMobile) {
      interval = setInterval(() => {
        setIsFlipped(prev => !prev);
      }, 2800);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isMobile]);

  const cardInnerStyle = {
    transformStyle: "preserve-3d",
    transition: "transform 0.8s",
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
  };

  const backfaceHiddenStyle = {
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden"
  };

  const backSideStyle = {
    ...backfaceHiddenStyle,
    transform: "rotateY(180deg)"
  };

  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 mx-auto text-center md:text-left relative">
      {/* Desktop Only Background Leaves */}
      {!isMobile && (
        <>
          <motion.img 
            src={peach} 
            alt="Peach Leaf" 
            className="absolute top-20 left-10 w-24 md:w-32 opacity-20"
            initial={{ opacity: 0.4, scale: 1 }}
            animate={{ x: [0, -2, 2, -2, 2, 0], y: [0, 2, -2, 2, -2, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
          />
          <motion.img 
            src={aquagreen} 
            alt="Aqua Green Leaf" 
            className="absolute bottom-10 right-10 w-24 md:w-32 opacity-20"
            initial={{ opacity: 0.4, scale: 1 }}
            animate={{ x: [0, 2, -2, 2, -2, 0], y: [0, -2, 2, -2, 2, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
          />
        </>
      )}

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {isMobile && (
          <div className="text-center min-h-[120px] px-4">
            <h4 className="text-[20px] sm:text-lg md:text-2xl font-bold leading-normal text-black mt-2 sm:mt-4">
              Empowering Salons, Enriching Lives
            </h4>
            <h1 className="text-[25px] sm:text-3xl md:text-5xl font-black leading-tight text-[#F25435] py-3">
              AI-based Salon Appointment Booking App
            </h1>
          </div>
        )}

        {/* Image Flip Section */}
        <div className="flex justify-center m-6 md:m-10">
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <div 
              className="w-full h-auto"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => !isMobile && setIsFlipped(true)}
              onMouseLeave={() => !isMobile && setIsFlipped(false)}
            >
              <div className="relative w-full h-full" style={cardInnerStyle}>
                <div className="w-[300px] sm:w-[350px] md:w-[450px] lg:w-[550px]" style={backfaceHiddenStyle}>
                  <motion.img
                    src={mobileImage}
                    alt="Salon Illustration"
                    className="w-full h-auto object-cover rounded-lg"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                  />
                </div>
                <div 
                  className="absolute inset-0 flex items-center justify-center rounded-lg"
                  style={backSideStyle}
                >
                  <img 
                    src={backImage} 
                    alt="Salon Services" 
                    className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px] object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Text and Buttons */}
        <div className="text-center md:flex md:flex-col md:items-center">
          {!isMobile && (
            <>
              <h4 className="text-lg md:text-xl font-bold leading-snug md:leading-tight text-black">
                Empowering Salons, Enriching Lives
              </h4>
              <h1 className="text-3xl md:text-5xl font-black leading-tight text-[#F25435] py-3">
                AI-based Salon Appointment Booking App
              </h1>
            </>
          )}
          <p className="text-lg md:text-xl mt-2 opacity-90 font-black px-4">
            Revolutionize your salon experience with
            <br />
            <img 
              src={logo} 
              alt="Nearz Logo" 
              className="h-12 md:h-14 my-3 md:my-2 mx-auto"
            />
            The effortless way to book appointments
          </p>
          <div className="flex flex-wrap gap-6 mt-8 justify-center md:gap-12">
            <a href="#">
              <motion.img 
                src={appleBadge} 
                alt="Download on the App Store" 
                className="h-12 sm:h-14 w-auto" 
                whileHover={{ scale: 1.1 }}
              />
            </a>
            <a href="#">
              <motion.img 
                src={playstoreBadge} 
                alt="Get it on Google Play" 
                className="h-12 sm:h-14 w-auto" 
                whileHover={{ scale: 1.1 }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
