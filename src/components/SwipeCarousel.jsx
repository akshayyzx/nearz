import React, { useState, useEffect, useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2V8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
  "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=",
  "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
  "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg",
];

export default function SwipeCarousel() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-scroll every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Handle Touch Start
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Handle Touch Move
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  // Handle Touch End (Detect Swipe)
  const handleTouchEnd = () => {
    const swipeDistance = touchEndX.current - touchStartX.current;
    if (swipeDistance > 50) {
      setIndex((prev) => (prev - 1 + images.length) % images.length); // Swipe Right
    }
    if (swipeDistance < -50) {
      setIndex((prev) => (prev + 1) % images.length); // Swipe Left
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Image Display */}
      <div
        className="overflow-hidden rounded-lg w-full max-w-[400px] aspect-square"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out w-full h-full"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
