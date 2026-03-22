import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Container from "../components/Container";

const testimonials = [
  {
    name: "Alex R.",
    text: "The quality and polish of these assets are unmatched. My workflow is faster and my projects look better than ever!",
  },
  {
    name: "Priya S.",
    text: "Instant downloads and professional support. I trust this platform for every creative project.",
  },
  {
    name: "Liam T.",
    text: "The video editing services saved me hours. Highly recommended for any creator or brand!",
  },
];



const Testimonials = () => {
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
    <section ref={ref} className="py-28 bg-black overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Parallax background orb */}
      <motion.div
        className="absolute right-[-100px] top-[-100px] w-[220px] h-[220px] rounded-full bg-gradient-to-br from-red-600/30 via-black/80 to-white/0 blur-3xl opacity-25 z-0"
        style={{
          transform: `translate3d(${parallax.x * -0.10}px, ${parallax.y * 0.08}px, 0)`
        }}
        animate={{ y: [0, 18, 0], x: [0, 12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <Container>
        <h2 className="text-4xl font-extrabold text-white mb-14 text-center tracking-widest font-sans uppercase drop-shadow-[0_2px_24px_rgba(220,38,38,0.15)]" style={{fontFamily:'Oswald,Arial Narrow,sans-serif',letterSpacing:'0.04em'}}>
          WHAT OUR <span className="text-red-600">CLIENTS SAY</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 relative z-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-glass-dark/90 backdrop-blur-2xl rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-inner shadow-glow border border-white/10 hover:border-red-600 hover:shadow-glow hover:scale-105 transition-all duration-300 min-h-[160px] sm:min-h-[180px] md:min-h-[200px] h-full flex flex-col justify-between"
            >
              <div className="text-gray-200 text-base mb-4 font-mono tracking-wide uppercase">“{t.text}”</div>
              <div className="font-bold text-red-600 drop-shadow-glow font-mono uppercase tracking-widest">{t.name}</div>
              <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow:'0 0 32px 4px #dc262633'}} />
            </motion.div>
          ))}
        </div>
        {/* No grid overlay */}
      </Container>
    </section>
  );
};

export default Testimonials;
