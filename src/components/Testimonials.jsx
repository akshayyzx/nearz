import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const testimonials = [
  {
    text: "Highly recommend this app! It’s easy to use, and I love the seamless booking experience.",
    name: "Neha Verma",
    date: "Jul 5, 2023",
    rating: 4.8,
  },
  {
    text: "A game changer for salon appointments! Discounts and service quality are top-notch.",
    name: "Rohan Mehta",
    date: "Aug 12, 2023",
    rating: 4.9,
  },
  {
    text: "This app saved me so much time! Booking an appointment is now just a few taps away.",
    name: "Aditi Sharma",
    date: "Sep 30, 2023",
    rating: 5.0,
  },
  {
    text: "Easy interface and great features. Finally, an app that understands salon needs!",
    name: "Vikram Singh",
    date: "Oct 15, 2023",
    rating: 4.7,
  },
  {
    text: "Love how convenient this app makes scheduling. Great deals too!",
    name: "Megha Kapoor",
    date: "Nov 20, 2023",
    rating: 4.6,
  }
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]); // Depend on index to reset interval when it changes

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });

  return (
    <section className="text-center py-12 bg-white" {...handlers}>
      <h2 className="text-3xl font-bold mb-6 text-[#F25435]">Testimonials</h2>
      <div className="relative flex justify-center items-center">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-10 p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition"
        >
          <FaChevronLeft className="text-xl" />
        </button>

        {/* Animated Testimonial Card */}
        <div className="w-[90%] md:w-[60%] lg:w-[40%] h-48 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-gray-100 p-6 rounded-xl shadow-lg text-center w-full"
            >
              <p className="italic text-lg mb-3">"{testimonials[index].text}"</p>
              <h4 className="font-semibold text-lg text-[#F25435]">{testimonials[index].name}</h4>
              <p className="text-gray-600 text-sm">{testimonials[index].date}</p>
              <p className="text-yellow-500 text-lg mt-1">⭐ {testimonials[index].rating}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-10 p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition"
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>
    </section>
  );
}
