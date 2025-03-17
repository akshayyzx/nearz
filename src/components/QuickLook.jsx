import React, { useState, useRef } from "react";
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
    const swipeThreshold = 50; // Minimum swipe distance to trigger change

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <div
      className="relative w-full max-w-3xl mx-auto flex flex-col items-center justify-center mb-10 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <h2 className="text-xl md:text-2xl font-semibold m-4 py-6">
        Take a <strong className="text-[#F25435]">Close</strong> Look at Our App
      </h2>

      <div className="flex items-center justify-center space-x-4 md:space-x-2">
        {[currentIndex - 1, currentIndex, currentIndex + 1].map((index) => {
          const actualIndex = (index + images.length) % images.length;
          const isActive = actualIndex === currentIndex;

          return (
            <img
            key={actualIndex}
            src={images[actualIndex]}
            alt={`Slide ${actualIndex + 1}`}
            className={`transition-all duration-1000 ease-in-out transform 
              ${isActive
                ? "w-64 h-112 md:w-80 md:h-[37rem] mx-auto scale-102 opacity-100"
                : "w-48 h-72 md:w-56 md:h-96 opacity-70 scale-98"
              }`}
            />
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border border-gray-300 hover:bg-gray-100 transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg border border-gray-300 hover:bg-gray-100 transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-[#F25435] scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
