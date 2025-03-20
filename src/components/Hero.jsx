import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import appleBadge from "../assets/app-store.jpg";
import playstoreBadge from "../assets/playstore.jpg";
import mobileImage from "../assets/hero_banner.jpg";
import backImage from "../assets/flip-image.jpg";
import logo from "../assets/logo.jpg";
import peach from "../assets/peach.png";
import aquagreen from "../assets/aqua-green.png";

const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const updateViewport = () => setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
    
    updateViewport();
    window.addEventListener("resize", updateViewport);
    
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 2800);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 text-center md:text-left relative w-full">

      {/* Leaves for all screen sizes (including mobile) */}
      <motion.img
        src={peach}
        alt="Peach Leaf"
        className="absolute top-16 left-8 w-14 sm:w-16 md:w-28 opacity-20"
        initial={{ opacity: 0.4 }}
        animate={{ x: [-3, 3, -3], y: [3, -3, 3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.img
        src={aquagreen}
        alt="Aqua Green Leaf"
        className="absolute bottom-10 right-8 w-14 sm:w-16 md:w-28 opacity-20"
        initial={{ opacity: 0.4 }}
        animate={{ x: [3, -3, 3], y: [-3, 3, -3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full px-2">
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-black leading-tight">
            Empowering Salons, Enriching Lives
          </h4>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#F25435] leading-tight py-3">
            AI-based Salon Appointment Booking App
          </h1>

          {isMobile && (
            <div className="flex justify-center m-6 md:m-10">
              <motion.div 
                className="relative w-[90%] max-w-[400px] rounded-lg"
                style={{ perspective: "1000px" }}
              >
                <motion.div 
                  className="relative w-full h-auto"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.img
                    src={mobileImage}
                    alt="Salon Illustration"
                    className="w-full h-auto object-cover rounded-lg"
                    style={{ backfaceVisibility: "hidden" }}
                  />
                  <motion.img
                    src={backImage}
                    alt="Salon Services"
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  />
                </motion.div>
              </motion.div>
            </div>
          )}

          <p className="text-base sm:text-lg md:text-xl font-medium opacity-90 max-w-lg px-2">
            Revolutionize your salon experience with <br />
            <img src={logo} alt="Nearz Logo" className="h-12 md:h-14 my-3 mx-auto md:mx-0" />
            The effortless way to book appointments
          </p>
          <div className="flex gap-6 sm:gap-8 mt-6">
            <a
              href="https://apps.apple.com/in/app/nearz/id1549902743?platform=iphone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                src={appleBadge}
                alt="Download on the App Store"
                className="h-12 sm:h-15"
                whileHover={{ scale: 1.1 }}
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.dazzleapp&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                src={playstoreBadge}
                alt="Get it on Google Play"
                className="h-12 sm:h-15"
                whileHover={{ scale: 1.1 }}
              />
            </a>
          </div>
        </div>

        {!isMobile && (
          <div
            className="relative w-full h-auto group"
            style={{ perspective: "1000px" }}
          >
            <div
              className="relative w-full h-full"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.8s",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              <motion.div
                className="absolute inset-0 flex justify-center items-center w-full h-full cursor-pointer"
                style={{
                  backfaceVisibility: "hidden",
                  opacity: isFlipped ? 0 : 1,
                  transition: "opacity 0.5s",
                }}
                onMouseEnter={() => setIsFlipped(true)}
              >
                <motion.img
                  src={mobileImage}
                  alt="Salon Illustration"
                  className="w-full h-auto object-cover rounded-lg"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 flex justify-center items-center w-full h-full cursor-pointer"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  opacity: isFlipped ? 1 : 0,
                  transition: "opacity 0.5s",
                }}
                onMouseLeave={() => setIsFlipped(false)}
              >
                <img
                  src={backImage}
                  alt="Salon Services"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
