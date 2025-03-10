import React from "react";
import { motion } from "framer-motion";
import featureIcon1 from "../assets/featureIcons/featureIcon1.gif";
import featureIcon2 from "../assets/featureIcons/featureIcon2.gif";
import featureIcon3 from "../assets/featureIcons/featureIcon3.gif";
import featureIcon4 from "../assets/featureIcons/featureIcon4.gif";
import featureIcon5 from "../assets/featureIcons/featureIcon5.gif";
import featureIcon6 from "../assets/featureIcons/featureIcon6.gif";
import featureIcon7 from "../assets/featureIcons/featureIcon7.gif";

const features = [
  { text: "Reduced wait time", icon: featureIcon1 },
  { text: "Choose your time slot & visit salon", icon: featureIcon2 },
  { text: "Save up to 50% OFF", icon: featureIcon3 },
  { text: "Cost-effective packages", icon: featureIcon4 },
  { text: "Ease of use", icon: featureIcon5 },
  { text: "Practice social distancing", icon: featureIcon6 },
  { text: "Refer a friend", icon: featureIcon7 },
];

const Features = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 flex flex-col items-center">
      {/* Title with Animated Stroke Effect */}
      <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1D] text-center mb-12 max-w-4xl leading-snug relative">
        Say Hello to Salon Life with{" "}
        <span className="relative inline-block">
          NEARZ
          <svg
            viewBox="0 0 400 150"
            fill="none"
            className="absolute -left-0 -right-4 -top-4 bottom-10 translate-y-1 scale-125"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              d="M200 10C120 40 10 20 5 90C0 140 80 150 200 140C320 130 420 130 380 80C330 20 140 60 60 10"
              stroke="#F25435"
              strokeWidth="4"
            />
          </svg>
        </span>
      </h2>

      {/* Features Grid (Custom Layout for 7th Feature Centered) */}
      <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-3 gap-8">
        {features.slice(0, 6).map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img src={feature.icon} alt="Feature Icon" className="h-24 w-24 md:h-32 md:w-32 mb-4" />
            <p className="text-xl font-semibold text-gray-800">{feature.text}</p>
          </div>
        ))}

        {/* 7th Feature Centered Below */}
        <div className="col-span-2 md:col-span-3 flex justify-center">
          <div className="flex flex-col items-center text-center">
            <img src={features[6].icon} alt="Feature Icon" className="h-24 w-24 md:h-32 md:w-32 mb-4" />
            <p className="text-xl font-semibold text-gray-800">{features[6].text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
