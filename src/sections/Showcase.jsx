import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Container from "../components/Container";

const showcaseItems = [
  {
    title: "Modern Portfolio Template",
    img: "https://source.unsplash.com/600x400/?website,design",
  },
  {
    title: "Wedding Invitation Set",
    img: "https://source.unsplash.com/600x400/?wedding,invitation",
  },
  {
    title: "Cinematic LUTs Pack",
    img: "https://source.unsplash.com/600x400/?video,editing",
  },
  {
    title: "Minimal PowerPoint Theme",
    img: "https://source.unsplash.com/600x400/?presentation,template",
  },
];




const Showcase = () => {
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
        className="absolute left-[-120px] top-[-120px] w-[320px] h-[320px] rounded-full bg-gradient-to-br from-red-600/40 via-black/80 to-white/0 blur-3xl opacity-40 z-0"
        style={{
          transform: `translate3d(${parallax.x * 0.10}px, ${parallax.y * 0.08}px, 0)`
        }}
        animate={{ y: [0, 24, 0], x: [0, 18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-white mb-14 text-center tracking-widest font-sans uppercase drop-shadow-[0_2px_24px_rgba(220,38,38,0.15)]"
          style={{fontFamily:'Oswald,Arial Narrow,sans-serif',letterSpacing:'0.04em'}}
        >
          FEATURED <span className="text-red-600">WORK</span>
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-10 relative z-10">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={item.title}
              className="min-w-[340px] max-w-xs bg-glass-dark/90 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-inner shadow-glow flex-shrink-0 relative group overflow-hidden transition-all duration-300 min-h-[340px] h-full flex flex-col"
              whileHover={{ scale: 1.04, boxShadow: "0 0 32px 4px #dc262655" }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-t-2xl object-cover w-full h-52 brightness-75 group-hover:brightness-90 transition duration-300"
                  style={{
                    transform: `translate3d(${parallax.x * 0.04}px, ${parallax.y * 0.03}px, 0)`
                  }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100"
                  style={{
                    transform: `translate3d(${parallax.x * -0.03}px, ${parallax.y * -0.02}px, 0)`
                  }}
                >
                  <div className="text-lg font-bold text-red-600 drop-shadow font-mono uppercase tracking-widest">{item.title}</div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* No grid overlay */}
      </Container>
    </section>
  );
};

export default Showcase;
