import React from "react";
import { motion } from "framer-motion";

export const RevealLinks = () => {
  return (
    <section className="flex flex-col items-start pl-2 sm:pl-5 text-[#F96E2A] space-y-1 sm:space-y-1">
      <FlipLink href="https://x.com/Nearzsalon">Twitter</FlipLink>
      <FlipLink href="https://www.linkedin.com/in/nearz-app-468120202/">LinkedIn</FlipLink>
      <FlipLink href="https://www.facebook.com/profile.php?id=100063966076850">Facebook</FlipLink>
      <FlipLink href="https://www.instagram.com/nearz.app?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D">Instagram</FlipLink>
      <FlipLink href="https://in.pinterest.com/nearzapp/">Pinterest</FlipLink>
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block overflow-hidden font-black uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl text-left w-fit whitespace-nowrap"
      style={{ lineHeight: 1 }}
    >
      {/* First Layer */}
      <div className="flex flex-nowrap gap-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>

      {/* Second Layer */}
      <div className="absolute inset-0 flex flex-nowrap gap-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};


export default RevealLinks;
