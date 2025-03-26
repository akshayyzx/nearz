import React, { useState, useEffect } from "react";
import mobileImageFront from "../assets/hero_banner_mobile.jpg";
import mobileImageFront2 from "../assets/hero_banner_desktop.jpg";
import mobileImageBack from "../assets/flip-image.jpg";
import appStore from "../assets/app-store.jpg";
import googlePlay from "../assets/playstore.jpg";
import logo from '../assets/logo.jpg'
import leave1 from '../assets/peach.png'
import leave2 from '../assets/aqua-green.png'

const Hero = () => {
  const [isMobileFlipped, setIsMobileFlipped] = useState(false);
  const [isDesktopFlipped, setIsDesktopFlipped] = useState(false);

  // Auto Flip for Mobile using setTimeout
  useEffect(() => {
    const interval = setInterval(() => {
      setIsMobileFlipped((prev) => !prev);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className=" sm:min-h-[100px] min-h-[600px] md:min-h-[700px] flex flex-col md:flex-row-reverse items-center justify-center md:gap-10 px-6 md:px-8 lg:px-12 py-17 bg-white"
    >
      <img 
        src={leave1} 
        alt="Leaf 1" 
        className="absolute top-15 left-2 w-16 md:w-24 opacity-75 animate-spin-slow hidden md:block" 
      />

      {/* Leaf 2 - Hidden on Mobile */}
      <img 
        src={leave2} 
        alt="Leaf 2" 
        className="absolute bottom-8 right-5 w-16 md:w-24 opacity-75 animate-pulse z-20 hidden md:block" 
      />

      {/* Text Section */}
      <div className="text-center md:text-left text-lg md:text-2xl lg:text-3xl md:w-1/2 px-6">
        <h2 className="text-lg text-gray-600 font-medium">Empowering Salons, Enriching Lives</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-[#F25435] mt-2 leading-tight">
          AI-based Salon <br /> Appointment Booking App
        </h1>

        {/* Hero Banner (Auto-Flip) */}
        <div className="md:hidden flex justify-center mt-5 w-full">
          <div
            className="relative w-[350px] h-[350px] rounded-lg overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            <img
              src={mobileImageFront}
              alt="Hero Banner Front"
              className="absolute left-0 w-full h-full object-contain rounded-lg"
              style={{
                backfaceVisibility: "hidden",
                transition: "transform 0.7s ease-in-out",
                transform: isMobileFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            />
            <img
              src={mobileImageBack}
              alt="Hero Banner Back"
              className="absolute left-0 w-full h-full object-contain rounded-lg"
              style={{
                backfaceVisibility: "hidden",
                transition: "transform 0.7s ease-in-out",
                transform: isMobileFlipped ? "rotateY(0deg)" : "rotateY(-180deg)",
              }}
            />
          </div>
        </div>

        <p className="text-gray-700 mt-5">Revolutionize your salon experience with</p>
        <img src={logo} alt="Nearz Logo" className="h-10 md:h-10 lg:h-12 inline-block flex justify-center my-2" />

        <p className="text-gray-700">The effortless way to book appointments</p>

        {/* App Store Buttons */}
        <div className="flex gap-8 mt-3 justify-center md:justify-start mt-10 md:gap-10">
          <a href="https://apps.apple.com/in/app/nearz/id1549902743?platform=iphone" target="_blank" rel="noopener noreferrer">
            <img src={appStore} alt="Download on App Store" className="w-37 cursor-pointer transition-transform duration-300 hover:scale-125 md:w-46" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.dazzleapp&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
            <img src={googlePlay} alt="Get it on Google Play" className="w-40.5 cursor-pointer transition-transform duration-300 hover:scale-125 md:w-50" />
          </a>
        </div>
      </div>

      {/* Desktop Image (Hover Flip) */}
      <div className="hidden md:flex justify-center lg:justify-center md:w-1/2">
        <div
          className="relative w-[400px] h-[450px] lg:w-[500px] lg:h-[600px] group transition-transform duration-700 ease-in-out animate-floating rounded-lg"
          onMouseEnter={() => setIsDesktopFlipped(true)}
          onMouseLeave={() => setIsDesktopFlipped(false)}
        >
          <div
            className="relative w-full h-full rounded-lg"
            style={{
              transform: isDesktopFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              transformStyle: "preserve-3d",
              transition: "transform 0.7s ease-in-out",
            }}
          >
            <img
              src={mobileImageFront2}
              alt="Mobile App Front"
              className="absolute top-0 left-0 w-full h-full object-contain rounded-lg"
              style={{
                backfaceVisibility: "hidden",
                animation: "float 3s ease-in-out infinite",
              }}
            />
            <img
              src={mobileImageBack}
              alt="Mobile App Back"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
