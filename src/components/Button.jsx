import React from "react";
import clsx from "clsx"; // Utility for class merging (optional but recommended)

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={clsx(
        "px-6 py-2 font-medium w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]",
        className // Ensuring custom styles override defaults
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
