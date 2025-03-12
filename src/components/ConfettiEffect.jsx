import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";

const ConfettiEffect = () => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);
  const [blurBackground, setBlurBackground] = useState(true);

  useEffect(() => {
    const confettiTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 4000); // Confetti duration

    const blurTimer = setTimeout(() => {
      setBlurBackground(false);
    }, 4500); // Remove blur after confetti stops

    return () => {
      clearTimeout(confettiTimer);
      clearTimeout(blurTimer);
    };
  }, []);

  return (
    <>
      {/* Confetti stays on top of blur effect */}
      {showConfetti && (
        <motion.div
          className="absolute inset-0 z-50 overflow-hidden " // Keep above blur effect
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 3.5, ease: "easeOut" }}
        >
          <Confetti width={width} height={height} numberOfPieces={450} gravity={0.3} recycle={false} tweenDuration={3000} />
        </motion.div>
      )}

      {/* Blur Hero Section (Does NOT blur Confetti) */}
      {blurBackground && (
        <motion.div
          className="absolute inset-0 bg-white/50 backdrop-blur-lg z-40 overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 3.8, ease: "easeInOut" }}
        />
      )}

      {/* Centered Heading */}
      {showConfetti && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-center z-50 overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#F25435] uppercase overflow-hidden">
            Welcome to Nearz, Your AI Appointment Booking App!
          </h1>
        </motion.div>
      )}
    </>
  );
};

export default ConfettiEffect;
