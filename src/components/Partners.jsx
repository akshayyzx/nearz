import React from "react";

const logos = [
  "https://images.seeklogo.com/logo-png/8/2/loreal-professionnel-logo-png_seeklogo-81124.png",
  "https://i0.wp.com/bwretailworld.com/wp-content/uploads/2024/06/Heading-34.png?resize=1280%2C700&ssl=1",
  "https://nearz.in/images/big_master.jpeg",
  "https://nearz.in/images/lyna.jpeg"
];

const Partners = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center py-10">
        Over <strong className="text-[#F25435]">100+</strong> salons onboarded last month and counting
      </h2>
      <section className="relative overflow-hidden py-10">
        <div className="relative w-full flex flex-col items-center space-y-12">
          {/* First Ribbon */}
          <div className="w-full -rotate-6 flex overflow-hidden border-4 border-white shadow-lg bg-gray-200 py-4">
          <div className="flex items-center space-x-20 animate-scroll">
  {[...logos, ...logos].map((logo, index) => (
    <div key={index} className="w-32 h-32 flex-shrink-0">
      <img src={logo} alt="partner logo" className="w-full h-full object-contain rounded-md" />
    </div>
  ))}
</div>
            {/* Duplicate for seamless looping */}
            <div className="flex items-center space-x-12 animate-scroll">
              {[...logos, ...logos].map((logo, index) => (
                <div key={`first-dup-${index}`} className="w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0">
                  <img src={logo} alt="partner logo" className="w-full h-full object-contain rounded-md" />
                </div>
              ))}
            </div>
          </div>

          {/* Second Ribbon */}
          <div className="w-full rotate-6 flex overflow-hidden border-4 border-white shadow-lg bg-gray-200 py-4">
            <div className="flex items-center space-x-12 animate-scroll-reverse">
              {[...logos, ...logos].map((logo, index) => (
                <div key={`second-${index}`} className="w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0">
                  <img src={logo} alt="partner logo" className="w-full h-full object-contain rounded-md" />
                </div>
              ))}
            </div>
            {/* Duplicate for seamless looping */}
            <div className="flex items-center space-x-12 animate-scroll-reverse">
              {[...logos, ...logos].map((logo, index) => (
                <div key={`second-dup-${index}`} className="w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0">
                  <img src={logo} alt="partner logo" className="w-full h-full object-contain rounded-md" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>
          {`
            @keyframes scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-100%); }
            }
            .animate-scroll {
              animation: scroll 15s linear infinite;
              display: flex;
              will-change: transform;
            }

            @keyframes scroll-reverse {
              from { transform: translateX(-100%); }
              to { transform: translateX(0); }
            }
            .animate-scroll-reverse {
              animation: scroll-reverse 15s linear infinite;
              display: flex;
              will-change: transform;
            }
          `}
        </style>
      </section>
    </div>
  );
};

export default Partners;
