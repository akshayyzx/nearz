import React from "react";
import RotatingIcons from "./RevealLinks";
import ContactForm from "./ContactForm"; // Import your ContactForm component

const ContactSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto px-6 py-12 space-y-12 md:space-y-0 md:space-x-12">
      
      {/* Rotating Icons Component */}
      <div className="w-full md:w-1/2 flex justify-center">
        <RotatingIcons />
      </div>

      {/* Contact Form Component */}
      <div className="w-full md:w-1/2 flex justify-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
