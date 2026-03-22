import React from "react";

const Button = ({ children, variant = "primary", ...props }) => {
  const base =
    "inline-flex items-center justify-center px-0 py-0 font-bold transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none uppercase tracking-widest font-mono border-none rounded-none shadow-none bg-black";
  const variants = {
    primary:
      "text-white hover:text-red-600 hover:bg-black",
    secondary:
      "text-red-600 hover:text-white hover:bg-black",
    subtle:
      "text-gray-300 hover:text-red-600 hover:bg-black",
  };
  return (
    <button className={`${base} ${variants[variant]} ${props.className || ''}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
