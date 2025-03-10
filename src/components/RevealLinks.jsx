import React from "react";
import { motion } from "framer-motion";

export const RevealLinks = () => {
  return (
    <div>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10 md:py-20 text-center ">Make sure to drop a follow for <strong className="text-[#F25435]">Updates</strong></h2>
    <section className="grid place-content-center gap-2 bg-[FF885B] px-8 text-[#F25420]">
      <FlipLink href="https://x.com/Nearzsalon">Twitter</FlipLink>
      <FlipLink href="https://www.linkedin.com/company/nearz-app/">Linkedin</FlipLink>
      <FlipLink href="https://www.facebook.com/people/Nearzapp/100063966076850/">Facebook</FlipLink>
      <FlipLink href="https://www.instagram.com/nearz.app?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</FlipLink>
    </section>
    </div>
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
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
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
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
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