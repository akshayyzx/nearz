import React from "react";
import appStore from "../assets/app-store.jpg";
import googlePlay from "../assets/playstore.jpg";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 bg-white py-4">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4">
        {/* Left Section - Text */}
        <p className="text-sm text-gray-600 text-center md:text-left">
          © 2025 | Product of TechWits IT Solutions Pvt Ltd
        </p>

        {/* Right Section - Buttons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://apps.apple.com/in/app/nearz/id1549902743?platform=iphone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={appStore}
              alt="Download on App Store"
              className="w-25 md:w-29 cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.dazzleapp&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={googlePlay}
              alt="Get it on Google Play"
              className="w-28 md:w-32 cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
