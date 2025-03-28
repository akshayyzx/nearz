import React from "react";
import { FaXTwitter, FaLinkedin, FaFacebook, FaInstagram, FaPinterest ,FaWhatsapp } from "react-icons/fa6";

const socialLinks = [
  { href: "https://x.com/Nearzsalon", icon: <FaXTwitter className="text-black hover:text-opacity-80" />, label: "X (formerly Twitter)" },
  { href: "https://www.linkedin.com/in/nearz-app-468120202/", icon: <FaLinkedin className="text-blue-700 hover:text-opacity-80" />, label: "LinkedIn" },
  { href: "https://www.instagram.com/nearz.app", icon: <FaInstagram className="text-pink-500 hover:text-opacity-80" />, label: "Instagram" },
  { href: "https://www.facebook.com/profile.php?id=100063966076850", icon: <FaFacebook className="text-blue-600 hover:text-opacity-80" />, label: "Facebook" },
  { href: "https://in.pinterest.com/nearzapp/", icon: <FaPinterest className="text-red-600 hover:text-opacity-80" />, label: "Pinterest" },
  {
    href: "https://medium.com/@nearz.app",
    icon: (
      <span className="w-8 h-8 flex items-center justify-center md:w-9 h-9">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqhNE7XJebS3KQUuqmmU88klzvL-p3Abu9yA&s"
          alt="Medium"
          className="w-full h-full object-contain hover:opacity-80"
        />
      </span>
    ),
    label: "Medium",
  },
  {
    href: "https://wa.me/919220794223", // Replace with your WhatsApp number
    icon: <FaWhatsapp className="text-green-500 hover:text-opacity-80" />,
    label: "WhatsApp",
  },
];

const SocialLinks = () => {
  return (
    <section className="flex justify-center md:justify-start space-x-4 md:space-x-6 p-4">
      {socialLinks.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl md:text-4xl transition-transform transform hover:scale-[1.2] duration-300"
        >
          {icon}
        </a>
      ))}
    </section>
  );
};



export default SocialLinks;
