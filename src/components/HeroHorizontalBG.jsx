import React from "react";
import { motion } from "framer-motion";

// Props: headline, highlight, description, bgWords (array of words), cta (button text)
const HeroHorizontalBG = ({
  headline = "The Pros Train with ",
  highlight = "Plates",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto optio quam voluptates accusantium unde labore maiores delectus tempora velit cum.",
  bgWords = [
    "DRIVE", "YOUR", "PASSION", "BUILD", "MOTIVATE"
  ],
  cta = "Get Started"
}) => {
  return (
    <section className="relative flex flex-col justify-center min-h-[80vh] bg-[#10121a] overflow-hidden px-6 py-20">
      {/* Animated horizontal background words */}
      <div className="absolute inset-0 flex flex-col justify-center z-0 select-none pointer-events-none">
        <div className="w-full whitespace-nowrap overflow-hidden">
          <motion.div
            className="flex gap-8 opacity-20"
            animate={{ x: [0, -400, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            {bgWords.map((word, i) => (
              <span
                key={i}
                className="text-[8vw] font-extrabold uppercase tracking-tighter text-white/70"
                style={{
                  color: "#e5e7eb",
                  WebkitTextStroke: "1px #22223b"
                }}
              >
                {word}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Foreground content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          {headline}
          <span className="text-white"> {highlight}</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-10 font-medium">
          {description}
        </p>
        <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-lg font-bold shadow-lg hover:bg-zinc-300 transition-colors">
          {cta}
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </section>
  );
};

export default HeroHorizontalBG;
