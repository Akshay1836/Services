import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ScreenFitText = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    resizeText();
    window.addEventListener("resize", resizeText);
    return () => {
      window.removeEventListener("resize", resizeText);
    };
    // eslint-disable-next-line
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;
    const containerWidth = container.offsetWidth;
    let min = 10;
    let max = 120;
    let lastGood = 32;
    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";
      if (text.offsetWidth <= containerWidth * 0.92) {
        lastGood = mid;
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }
    text.style.fontSize = lastGood + "px";
  };

  return (
    <div
      className="relative flex h-[22vh] min-h-[120px] w-full items-center justify-center overflow-hidden bg-black"
      ref={containerRef}
    >
      {/* Vignette overlay for depth */}
      <div className="pointer-events-none absolute inset-0 z-0" style={{
        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.7) 100%)'
      }} />
      <motion.span
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 block w-full text-center font-extrabold uppercase text-white select-none"
        ref={textRef}
        style={{
          lineHeight: 1.08,
          textShadow: '0 2px 16px rgba(255,255,255,0.10)',
          fontFamily: 'Montserrat, Inter, Arial, sans-serif',
          letterSpacing: 4,
          fontSize: 32,
        }}
      >
        FIT TEXT TO CONTAINER
      </motion.span>
    </div>
  );
};

export default ScreenFitText;
