import React, { useState, useEffect } from "react";
import Button from "./Button";
import applelogo from '../assets/apple.jpg';
import playstorelogo from '../assets/google-play.jpg';
import mobileImage from "../assets/hero_banner.jpg";
import backImage from "../assets/flip-image.jpg"; // New back-side image
import { motion } from "framer-motion";
import ConfettiEffect from "./ConfettiEffect";

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
      }, 2500);
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
    <section className="bg-white min-h-screen flex items-center justify-center px-6 md:px-12">
      <ConfettiEffect />
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h4 className="text-xl md:text-xl font-bold leading-tight text-black">
            Empowering Salons, Enriching Lives
          </h4>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#F25435] py-6">
            AI based Salon appointment booking App
          </h1>
          <p className="text-lg md:text-xl mt-4 opacity-90">
            Revolutionize Your Salon Experience with <strong className="text-[#F25435]">Nearz</strong> <br />
            The Effortless Way to Book Appointments
          </p>

          {/* Buttons */}
          <div className="flex gap-9 mt-6 justify-center md:justify-start">
            <Button 
              className="bg-gray-500 text-white flex items-center cursor-pointer gap-2 px-4 py-4 font-semibold shadow-[3px_3px_0px_black] 
              transition-all duration-200 hover:bg-[#F25435] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
              onClick={() => window.open("https://apps.apple.com/in/app/nearz/id1549902743", "_blank")}
            >
              Download App
              <img src={applelogo} alt="Apple Logo" className="h-5 w-5 md:h-6 md:w-6" />
            </Button>

            <Button 
              className="bg-gray-500 text-white flex items-center gap-2 px-4 py-4 cursor-pointer font-semibold shadow-[3px_3px_0px_black] 
              transition-all duration-200 hover:bg-[#F25435] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
              onClick={() => window.open("https://play.google.com/store/apps/details?id=com.dazzleapp&pcampaignid=web_share", "_blank")}
            >
              Download App
              <img src={playstorelogo} alt="Google Play Logo" className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center m-10">
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Glowing Background Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 blur-3xl opacity-30 rounded-full"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Flip Card Container */}
            <div 
              className="w-full h-auto"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => !isMobile && setIsFlipped(true)}
              onMouseLeave={() => !isMobile && setIsFlipped(false)}
            >
              {/* Card Inner */}
              <div className="relative w-full h-full" style={cardInnerStyle}>
                
                {/* Front Side */}
                <div className="w-full h-full" style={backfaceHiddenStyle}>
                  <motion.img
                    src={mobileImage}
                    alt="Salon Illustration"
                    className="max-w-3xl md:max-w-4xl w-full h-auto object-cover rounded-lg"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                  />
                </div>

                {/* Back Side */}
                <div 
                  className="absolute inset-0 flex items-center justify-center rounded-lg "
                  style={backSideStyle}
                >
                  <img 
                    src={backImage} 
                    alt="Salon Services" 
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
