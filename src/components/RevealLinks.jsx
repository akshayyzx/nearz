import React from "react";
import { motion } from "framer-motion";

const socialIcons = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png", alt: "Facebook", link: "https://www.facebook.com/profile.php?id=100063966076850" },
  { src: "https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg", alt: "Twitter", link: "https://x.com/Nearzsalon" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", alt: "Instagram", link: "https://www.instagram.com/nearz.app?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" },
  { src: "https://cdn-icons-png.flaticon.com/512/174/174857.png", alt: "LinkedIn", link: "https://www.linkedin.com/in/nearz-app-468120202/" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png", alt: "Pinterest", link: "https://in.pinterest.com/nearzapp/" },
];

const RotatingIcons = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
      {/* Heading */}
      <h2 className="text-xl md:text-4xl font-semibold my-6 text-center">
        Drop a <strong className="text-[#F25435]">Follow</strong> and stay <strong className="text-[#F25435]">Updated</strong>  🚀
      </h2>

      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mx-auto">
        
        {/* Center Logo */}
        <div className="absolute w-20 h-20 md:w-28 md:h-28 flex items-center justify-center bg-white rounded-full shadow-lg">
          <img src="Group.png" alt="Company Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full" />
        </div>

        {/* Rotating Social Icons */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          {socialIcons.map((icon, index) => {
            const angle = (index / socialIcons.length) * 360;
            const x = Math.cos((angle * Math.PI) / 180) * 100;
            const y = Math.sin((angle * Math.PI) / 180) * 100;

            return (
              <motion.a
                key={index}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white rounded-full shadow-lg"
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img src={icon.src} alt={icon.alt} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default RotatingIcons;
