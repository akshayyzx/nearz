import React from "react";
import RotatingIcons from "./RevealLinks";
import ContactForm from "./ContactForm"; // Import your ContactForm component

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="scroll-mt-24 flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto px-6 py-12 space-y-12 md:space-y-0 md:space-x-12"
    >
      {/* Rotating Icons & Heading Section */}
      <div className="w-full  md:justify-center text-center">
        <h2 className="text-xl md:text-4xl font-semibold my-4  ">
          <strong className="text-[#F25435]">Follow</strong> and stay{" "}
          <strong className="text-[#F25435]">Updated</strong> 🚀
        </h2>
        <div className="w-full md:w-3/4 flex justify-center md:ml-12">
        <RotatingIcons />
      </div>
        
      </div>
      {/* Contact Form Component */}
      <div className="w-full md:w-3/4 flex justify-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
