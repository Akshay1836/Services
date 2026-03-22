


import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { usePremiumScrollAnimation } from "../utils/usePremiumScrollAnimation";
import { fadeInUp, staggerContainer } from "../utils/motionVariants";
import Button from "../components/Button";
import Container from "../components/Container";
import HeroHorizontalBG from "../components/HeroHorizontalBG";


// Animated glowing orb background component with scroll-linked parallax
const AnimatedOrbs = ({ scrollParallax }) => (
  <>
    <motion.div
      className="absolute top-[-16vw] left-[-16vw] w-[60vw] max-w-[340px] h-[60vw] max-h-[340px] rounded-full bg-gradient-to-br from-red-600/60 via-black/80 to-white/0 blur-3xl opacity-70 z-0"
      animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      style={{
        transform: `translate3d(0, ${scrollParallax * 60}px, 0)`
      }}
    />
    <motion.div
      className="absolute bottom-[-10vw] right-[-10vw] w-[40vw] max-w-[260px] h-[40vw] max-h-[260px] rounded-full bg-gradient-to-tr from-white/10 via-red-600/40 to-black/0 blur-2xl opacity-60 z-0"
      animate={{ y: [0, -24, 0], x: [0, -18, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      style={{
        transform: `translate3d(0, ${scrollParallax * 40}px, 0)`
      }}
    />
    <motion.div
      className="absolute top-1/2 left-1/2 w-[28vw] max-w-[180px] h-[28vw] max-h-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tl from-red-600/30 via-white/10 to-black/0 blur-2xl opacity-40 z-0"
      animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      style={{
        transform: `translate3d(0, ${scrollParallax * 30}px, 0)`
      }}
    />
  </>
);

const noiseOverlay = {
  backgroundImage: 'url(https://www.transparenttextures.com/patterns/noise.png)',
  opacity: 0.13,
  pointerEvents: 'none',
  position: 'absolute',
  inset: 0,
  zIndex: 1,
};


const Hero = () => {

  // Premium scroll animation hook
  const { ref, progress, inView } = usePremiumScrollAnimation(0.25);

  // Scroll-linked parallax for orbs and content
  // Foreground content moves slower, background orbs move faster
  const contentY = progress * 24; // Foreground moves less
  const orbParallax = progress * 60; // Background orbs move more
  const contentOpacity = 0.7 + 0.3 * progress;

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] flex items-center justify-center bg-dark-800 overflow-hidden select-none"
    >
      {/* Animated Orbs with scroll-linked parallax */}
      <AnimatedOrbs scrollParallax={orbParallax} />
      {/* Subtle noise overlay */}
      <div style={noiseOverlay} />
      <Container className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full py-16 md:py-32">
        <motion.div
          className="flex-1 text-center md:text-left"
          style={{ y: contentY, opacity: contentOpacity }}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Masked/clip-path text reveal */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-8 text-white tracking-tight font-sans uppercase drop-shadow-[0_2px_24px_rgba(59,130,246,0.18)]"
            style={{ fontFamily: 'Oswald,Arial Narrow,sans-serif', letterSpacing: '0.04em' }}
            variants={fadeInUp}
          >
            <span className="inline-block relative">
              <span className="text-white">
                Create Without Limits
              </span>
              <span className="absolute left-0 top-0 w-full h-full rounded-lg pointer-events-none" style={{ opacity:0.18 }} />
            </span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-2xl text-gray-200 mb-8 md:mb-12 max-w-2xl mx-auto md:mx-0 font-mono tracking-wide leading-relaxed"
            variants={fadeInUp}
          >
            The premium platform for digital creators: presets, templates, and editing assets to elevate your work. Minimal, modern, and endlessly creative.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center md:justify-start"
            variants={fadeInUp}
          >
            <Button
              variant="primary"
              className="px-8 py-4 text-lg font-bold bg-black text-white hover:text-zinc-300 hover:bg-zinc-900 border-none rounded-full shadow-lg font-mono tracking-widest uppercase transition-all duration-200 focus:ring-2 focus:ring-zinc-700/40 focus:ring-offset-2 focus:ring-offset-dark-900"
            >
              Explore Assets
            </Button>
            <Button
              variant="secondary"
              className="px-8 py-4 text-lg font-bold bg-dark-900 text-white hover:text-zinc-300 hover:bg-black border-none rounded-full shadow-lg font-mono tracking-widest uppercase transition-all duration-200 focus:ring-2 focus:ring-zinc-700/40 focus:ring-offset-2 focus:ring-offset-dark-900"
            >
              View Services
            </Button>
          </motion.div>
        </motion.div>
        {/* Visual side: subtle orb for split layout */}
        <div className="flex-1 flex items-center justify-center relative min-h-[120px] sm:min-h-[180px] md:min-h-[220px]">
          <motion.div
            className="w-[120px] sm:w-[180px] md:w-[220px] h-[120px] sm:h-[180px] md:h-[220px] rounded-full bg-gradient-to-br from-white/10 via-dark-900/80 to-white/0 blur-2xl opacity-70 shadow-2xl"
            animate={{ y: [0, 18, 0], x: [0, -12, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: `blur(${8 + 8 * (1 - progress)}px)` }}
          />
        </div>
      </Container>
      {/* Animated scroll indicator */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-10 z-10 flex flex-col items-center text-xs font-mono text-gray-400 select-none"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 1.2, ease: "easeOut" }}
      >
        <span>SCROLL</span>
        <motion.div
          className="w-0.5 h-8 bg-white mt-1 mb-1 rounded-full"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-white">++</span>
      </motion.div>
    </section>
  );
};

export default Hero;
