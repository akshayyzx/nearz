import React, { useState, useEffect } from "react";
import appleBadge from '../assets/app-store.jpg';
import playstoreBadge from '../assets/playstore.jpg';
import mobileImage from "../assets/hero_banner.jpg";
import backImage from "../assets/flip-image.jpg"; // New back-side image
import { motion } from "framer-motion";

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
    <section className="bg-white min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 mx-auto text-center md:text-left">

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center mx-auto">
        
        {/* Mobile View: Headings Above Image */}
        {isMobile && (
         <div className="text-center order mt-12">
         <h4 className="text-lg md:text-xl font-bold leading-snug md:leading-tight text-black">
           Empowering Salons, Enriching Lives
         </h4>
  
       
            <h1 className="text-3xl md:text-5xl font-black leading-tight text-[#F25435] py-3">
              AI-based Salon appointment booking App
            </h1>
          </div>
        )}

        {/* Right Section (Image) */}
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
                  className="absolute inset-0 flex items-center justify-center rounded-lg"
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

        {/* Text and Download Buttons - Below Image in Mobile View */}
        <div className="text-center md:text-left">
          {!isMobile && (
            <>
              <h4 className="text-lg md:text-xl font-bold leading-snug md:leading-tight text-black">
                Empowering Salons, Enriching Lives
              </h4>
              <h1 className="text-3xl md:text-5xl font-black leading-tight text-[#F25435] py-3">
                AI-based Salon appointment booking App
              </h1>
            </>
          )}
          <p className="text-lg md:text-lg mt-2 opacity-90 font-black">
            Revolutionize Your Salon Experience with<br></br>
            <strong className="text-[#F25435] text-4xl md:text-xl font-black">Nearz</strong> <br />
            The Effortless Way to Book Appointments
          </p>

          {/* Download Badges */}
          <div className="flex flex-wrap gap-6 mt-8 justify-center md:justify-start md:gap-12 ">
            <a href="https://apps.apple.com/in/app/nearz/id1549902743" target="_blank" rel="noopener noreferrer">
              <motion.img 
                src={appleBadge} 
                alt="Download on the App Store" 
                className="h-12.5 sm:h-14 w-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.dazzleapp&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
              <motion.img 
                src={playstoreBadge} 
                alt="Get it on Google Play" 
                className="h-12 sm:h-14 w-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
