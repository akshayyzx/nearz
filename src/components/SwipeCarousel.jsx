import React, { useState, useEffect, useRef } from "react";

export default function SwipeCarousel() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-scroll every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1)); // Just keeping index logic (in case it's used elsewhere)
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
      setIndex((prev) => prev - 1); // Swipe Right
    }
    if (swipeDistance < -50) {
      setIndex((prev) => prev + 1); // Swipe Left
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* You can add content here if needed */}
    </div>
  );
}
