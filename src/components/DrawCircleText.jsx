import React from "react";
import { motion } from "framer-motion";

const DrawCircleText = () => {
  return (
    <div className="grid place-content-center bg-zinc-950 px-2 sm:px-4 py-16 sm:py-32 text-white">
      <h1 className="max-w-2xl sm:max-w-3xl text-center text-3xl sm:text-5xl md:text-7xl font-black leading-snug text-white relative">
        Scale your{' '}
        <span className="relative inline-block">
          <span className="relative z-10 text-white">Marketing</span>
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute left-0 right-0 -top-4 bottom-0 w-full h-20 pointer-events-none z-0"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="#38bdf8"
              strokeWidth="3"
            />
          </svg>
        </span>{' '}
        with Simple AI Tools
      </h1>
    </div>
  );
};

export default DrawCircleText;
