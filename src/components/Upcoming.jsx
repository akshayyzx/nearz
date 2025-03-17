import React from "react";
import Button from "./Button";

const VirtualTryOn = () => {
  return (
    <section  id="upcoming" className="text-center py-12 px-4 md:px-8 lg:px-16 bg-white text-black scroll-mt-20 ">
      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold text-[#F25435]">Create Your Looks</h3>
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mt-2">
        Try Virtual Looks with  <strong className="text-[#F25435]"> Nearz's AI-Based Engine</strong>
      </h2>

      {/* Carousel */}


      {/* Text Info */}
      <div className="space-y-2 text-base md:text-lg mt-7">
        <Button className="text-lg md:text-xl font-bold  text-white bg-[#F25435] ">COMING SOON...</Button>
        <p className="mt-3">Scan your face</p>
        <p>Checkout your Hairstyles, HairColor, Makeup, Brows & much more</p>
        
      </div>
    </section>
  );
};

export default VirtualTryOn;
