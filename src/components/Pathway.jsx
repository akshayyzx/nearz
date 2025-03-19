import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/step1.gif";
import img2 from "../assets/step2.gif";
import img3 from "../assets/step3.gif";
import img4 from "../assets/step4.gif";
import img5 from "../assets/step5.gif";

const steps = [
  { 
    text: "Discover nearby Salons", 
    img: img1, 
    desc: "Explore a variety of salons near you, from premium beauty studios to budget-friendly options, all in one place." 
  },
  { 
    text: "Compare services", 
    img: img2, 
    desc: "Easily compare salons based on pricing, distance, customer ratings, and available services to find the perfect match for your needs." 
  },
  { 
    text: "Book your appointment", 
    img: img3, 
    desc: "Choose your preferred date and time, book instantly, and secure your appointment hassle-free—all with just a few taps." 
  },
  { 
    text: "Earn loyalty rewards on every visit", 
    img: img4, 
    desc: "Get successive discount starting 10% OFF on 1st visit & upto 50% OFF on 5th visit." 
  },
  { 
    text: "Share your feedback", 
    img: img5, 
    desc: "Rate your experience, leave a review, and earn discounts, loyalty rewards, and exclusive deals for your next visit." 
  },
];


const Pathway = () => {
  return (
    <section className="relative bg-white py-16 px-6 md:px-12 flex flex-col items-center  ">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10 md:mb-16 text-center">
        How it works
      </h1>

      {/* Responsive SVG Paths */}
      <svg
        className="absolute hidden md:block w-full h-full top-0 left-0"
        viewBox="0 0 600 800"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M100 80C180 120 250 150 200 250S100 400 200 500 350 650 450 700"

          stroke="#CBD5E1"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="6,6"
        />
      </svg>

      {/* <svg
  className="absolute md:hidden w-full h-full top-0 left-0"
  viewBox="0 0 400 1200"
  fill="none"
  preserveAspectRatio="xMidYMid meet"
>
  {/* First stroke: Left side, reaching step 3 */}
  {/* <motion.path
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 2, ease: "easeInOut" }}
    d="M50 50C70 150 90 300 80 450"
    stroke="#CBD5E1"
    strokeWidth="4"
    strokeLinecap="round"
    strokeDasharray="6,6"
  /> */}

  {/* Second stroke: Right side, continuing to step 5 */}
  {/* <motion.path
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
    d="M80 400C120 600 160 750 140 900S100 1050 80 1100"
    stroke="#CBD5E1"
    strokeWidth="4"
    strokeLinecap="round"
    strokeDasharray="6,6"
  />
</svg> */} 

      {/* Step Cards */}
      <div className="relative z-10 flex flex-col space-y-16 max-w-5xl w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            <img src={step.img} alt={step.text} className="w-32 h-32 md:w-40 md:h-40 object-contain" />
            <div className="bg-white p-6 rounded-lg shadow-md md:w-1/2">
              <h3 className="text-xl font-bold text-gray-800">{index + 1}. {step.text}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pathway;
