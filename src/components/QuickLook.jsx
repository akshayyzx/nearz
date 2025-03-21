import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "http://res.cloudinary.com/dquo71wwj/image/upload/v1741559074/vdukihsf4glaiubwf1au.png",
  "http://res.cloudinary.com/dquo71wwj/image/upload/v1741559090/jgl6famjfexwcggmxdtt.png",
  "http://res.cloudinary.com/dquo71wwj/image/upload/v1741559104/z9qnh5hdyb6uvbmt4rly.png",
  "http://res.cloudinary.com/dquo71wwj/image/upload/v1741559121/rpgop9niwfm2xa9rp4sf.png",
  "http://res.cloudinary.com/dquo71wwj/image/upload/v1741559136/ljmxy3jmq41bima4eqd6.png",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex]);

  // Handle touch start
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  // Handle touch end (detect swipe direction)
  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      swipeDistance > 0 ? nextSlide() : prevSlide();
    }
  };

  return (
    <div
      className="relative w-full max-w-3xl mx-auto flex flex-col items-center justify-center mb-10 overflow-hidden " 
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <h2 className="text-xl md:text-2xl font-semibold m-4 py-6">
        Take a <strong className="text-[#F25435]">Close</strong> Look at Our App
      </h2>

      <div className="flex items-center justify-center space-x-2 md:space-x-4">
        {[currentIndex - 1, currentIndex, currentIndex + 1].map((index) => {
          const actualIndex = (index + images.length) % images.length;
          const isActive = actualIndex === currentIndex;

          return (
            <img
              key={actualIndex}
              src={images[actualIndex]}
              alt={`Slide ${actualIndex + 1}`}
              className={`transition-transform duration-[1000ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform ${
                isActive
                  ? "w-64 h-112 md:w-80 md:h-[37rem] mx-auto scale-105 opacity-100"
                  : "w-48 h-72 md:w-56 md:h-96 opacity-60 scale-95"
              }`}
            />
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border border-gray-300 hover:bg-gray-100 transition-all duration-500 ease-in-out"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border border-gray-300 hover:bg-gray-100 transition-all duration-500 ease-in-out"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="mt-4 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              currentIndex === index ? "bg-[#F25435] scale-105" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
