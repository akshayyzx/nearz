import React from "react";

const BorderDivider = ({ hideOnMobile = false, margin = "my-4" }) => {
  return (
    <div className={`w-full flex justify-center ${margin}`}>
      <div 
        className={`w-[90%] sm:w-3/4 lg:w-2/3 h-[2px] bg-gradient-to-r from-gray-300 to-gray-300 ${hideOnMobile ? 'hidden sm:block' : ''}`}
      ></div>
    </div>
  );
};

export default BorderDivider;
