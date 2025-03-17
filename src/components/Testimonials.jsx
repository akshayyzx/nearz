import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const testimonials = [
  { text: "Highly recommend this app! It’s easy to use, and I love the seamless booking experience.", name: "Neha Verma", date: "Jul 5, 2023", rating: 4.8 },
  { text: "A game changer for salon appointments! Discounts and service quality are top-notch.", name: "Rohan Mehta", date: "Aug 12, 2023", rating: 4.9 },
  { text: "This app saved me so much time! Booking an appointment is now just a few taps away.", name: "Aditi Sharma", date: "Sep 30, 2023", rating: 5.0 },
  { text: "Easy interface and great features. Finally, an app that understands salon needs!", name: "Vikram Singh", date: "Oct 15, 2023", rating: 4.7 },
  { text: "Love how convenient this app makes scheduling. Great deals too!", name: "Megha Kapoor", date: "Nov 20, 2023", rating: 4.6 }
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
  });

  return (
    <div id="testimonials" className="scroll-mt-10 " >
    <section className="text-center py-10 bg-white  overflow-hidden" {...handlers}>
      <h2 className="text-3xl  font-bold mb-6 text-[#F25435]">Testimonials</h2>
      <div className="relative flex justify-center items-center w-full">
        {/* Left Button - Fixed Positioning */}
        <button 
          onClick={prevSlide} 
          className="absolute left-1 md:left-10 p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition z-20"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <FaChevronLeft className="text-xl" />
        </button>

        {/* Testimonial Cards */}
        <div className="relative flex justify-center items-center w-[300px] h-[300px]">
          {testimonials.map((testimonial, i) => {
            let position =
              i === index
                ? "z-10 scale-110 opacity-100"
                : i === (index - 1 + testimonials.length) % testimonials.length
                ? "translate-x-[-120%] scale-90 opacity-60"
                : i === (index + 1) % testimonials.length
                ? "translate-x-[120%] scale-90 opacity-60"
                : "opacity-0";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`absolute bg-gray-100 p-6 rounded-xl shadow-lg text-center w-[250px] h-[250px] flex flex-col justify-center transition-transform duration-500 ease-in-out ${position}`}
              >
                <p className="italic text-md mb-2 px-2">"{testimonial.text}"</p>
                <h4 className="font-semibold text-lg text-[#F25435]">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.date}</p>
                <p className="text-yellow-500 text-lg mt-1">⭐ {testimonial.rating}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Right Button - Fixed Positioning */}
        <button 
          onClick={nextSlide} 
          className="absolute right-1 md:right-10 p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-300 transition z-20"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>
    </section>
    </div>
  );
}
