import React, { useRef, useState, useCallback } from "react";
import Button from "../components/Button";
import Container from "../components/Container";


import { motion } from "framer-motion";


const CTA = () => {
  const ref = useRef(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const handleMouseMove = useCallback((e) => {
    const section = ref.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setParallax({ x, y });
  }, []);

  return (
    <section ref={ref} className="relative py-24 bg-black overflow-hidden text-white text-center border-t border-white/10" onMouseMove={handleMouseMove}>
      {/* Parallax background orb */}
      <motion.div
        className="absolute left-[-10vw] bottom-[-10vw] w-[30vw] max-w-[180px] h-[30vw] max-h-[180px] rounded-full bg-gradient-to-br from-red-600/30 via-black/80 to-white/0 blur-3xl opacity-25 z-0"
        style={{
          transform: `translate3d(${parallax.x * 0.10}px, ${parallax.y * 0.08}px, 0)`
        }}
        animate={{ y: [0, 12, 0], x: [0, 8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <Container>
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold text-white mb-14 text-center tracking-widest font-sans uppercase drop-shadow-[0_2px_24px_rgba(220,38,38,0.15)]"
          style={{fontFamily:'Oswald,Arial Narrow,sans-serif',letterSpacing:'0.04em'}}
        >
          READY TO <span className="text-red-600">ELEVATE</span> YOUR CREATIVE PROJECTS?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg mb-10 text-gray-300 font-mono tracking-widest uppercase"
        >
          JOIN THOUSANDS OF PROFESSIONALS USING OUR PREMIUM ASSETS AND SERVICES.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Button
            variant="secondary"
            className="px-0 py-0 text-base font-bold bg-black text-red-600 hover:text-white hover:bg-black border-none rounded-none shadow-none font-mono tracking-widest uppercase transition-colors duration-200"
          >
            GET STARTED
          </Button>
        </motion.div>
        {/* No grid overlay */}
      </Container>
    </section>
  );
};

export default CTA;
