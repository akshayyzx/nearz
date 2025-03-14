import React, { useState } from "react";
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

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-xl md:text-2xl font-semibold m-4 py-4">Take a <strong className="text-[#F25435]">Close</strong> Look at Our App</h2>
      <div className="flex items-center space-x-4">
        {[currentIndex - 1, currentIndex, currentIndex + 1].map((index) => {
          const actualIndex = (index + images.length) % images.length;
          const isActive = actualIndex === currentIndex;

          return (
            <img
              key={actualIndex}
              src={images[actualIndex]}
              alt={`Slide ${actualIndex + 1}`}
              className={`transition-all duration-500 rounded-lg shadow-lg 
               ${isActive ? "w-64 h-112 md:w-80 md:h-[36rem] mx-auto transition-transform duration-700 ease-in-out scale-105" : "w-48 h-72 md:w-56 md:h-96 opacity-70 transition-transform duration-500 ease-out"}`}
            />
          );
        })}
      </div>
      
      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
        <ChevronRight size={24} />
      </button>
      
      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
