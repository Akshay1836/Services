import React from "react";

const Card = ({ children, className = "", ...props }) => (
  <div
    className={`p-0 m-0 bg-transparent border-none rounded-none shadow-none transition-none ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default Card;
