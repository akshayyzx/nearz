import React from "react";
import blogHeroBanner from '../assets/blog-hero-banner.jpg';
import appStore from "../assets/app-store.jpg";
import googlePlay from "../assets/playstore.jpg";

const BlogHero = () => {
  return (
    <div className="flex flex-col items-center max-w-8xl md:max-w-7xl mx-auto bg-white rounded-lg p-8">
      {/* Centered H3 at the Top */}
      <h3 className="text-teal-500 text-center font-bold text-sm md:text-base lg:text-xl md:-mt-4 mb-6">
  "Style. Grow. Succeed. #TogetherWeRise"
</h3>


      <div className="flex flex-col md:flex-row items-center w-8xl">
        <div className="flex-1">
          <img
            src={blogHeroBanner}
            alt="Travel destination"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="flex-1 mb-6 md:mb-5 md:ml-20">
          <p className="text-gray-500 text-sm mt-5">February 26, 2025</p>

          <h1 className="text-3xl font-bold text-gray-800 mt-2">
            The Future of Salon Appointments: Digital Booking Trends in 2025
          </h1>

          <div className="flex mt-4 space-x-4 ">
            <button 
  className="bg-[#F25435] text-white px-4 py-2 rounded-full text-md hover:bg-[#F25435] transition cursor-pointer "
  onClick={() => document.getElementById("blog-card").scrollIntoView({ behavior: 'smooth' })}
> Explore more
</button></div>

<h2 className="text-teal-900 text-xl md:text-2xl font-bold mt-5">
  Download Our App
</h2>
<div className="flex flex-row gap-4 items-center mt-4">
  <a
    href="https://apps.apple.com/in/app/nearz/id1549902743?platform=iphone"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={appStore}
      alt="Download on App Store"
      className="w-26.5 md:w-32.5 cursor-pointer transition-transform duration-300 hover:scale-105"
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
      className="w-32 md:w-36 cursor-pointer transition-transform duration-300 hover:scale-105"
    />
  </a>
</div>    
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
