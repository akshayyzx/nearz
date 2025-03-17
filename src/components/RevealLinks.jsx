import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const socialLinks = [
  { href: "https://x.com/Nearzsalon", icon: <FaTwitter className="text-blue-500" />, label: "Twitter" },
  { href: "https://www.linkedin.com/in/nearz-app-468120202/", icon: <FaLinkedin className="text-blue-700" />, label: "LinkedIn" },
  { href: "https://www.facebook.com/profile.php?id=100063966076850", icon: <FaFacebook className="text-blue-600" />, label: "Facebook" },
  { href: "https://www.instagram.com/nearz.app", icon: <FaInstagram className="text-pink-500" />, label: "Instagram" },
  { href: "https://in.pinterest.com/nearzapp/", icon: <FaPinterest className="text-red-600" />, label: "Pinterest" },
];

const SocialLinks = () => {
  return (
    <section className="flex justify-center md:justify-start space-x-6 md:space-x-8 p-4">
      {socialLinks.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl md:text-5xl transition-transform transform hover:scale-120"
        >
          {icon}
        </a>
      ))}
    </section>
  );
};

export default SocialLinks;
