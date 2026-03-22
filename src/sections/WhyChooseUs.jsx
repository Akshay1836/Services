import React, { useRef, useState, useCallback } from "react";
import { HiOutlineBadgeCheck, HiOutlineLightningBolt, HiOutlineSupport } from "react-icons/hi";
import { HiWrench } from "react-icons/hi2";
import Container from "../components/Container";

const points = [
  {
    icon: <HiOutlineBadgeCheck className="text-red-600 text-2xl" />,
    title: "Premium Quality",
    desc: "Every asset is crafted to the highest standards."
  },
  {
    icon: <HiOutlineLightningBolt className="text-red-600 text-2xl" />,
    title: "Instant Access",
    desc: "Download and use assets immediately after purchase."
  },
  {
    icon: <HiWrench className="text-red-600 text-2xl" />,
    title: "Professional Tools",
    desc: "Curated for creators, designers, and brands."
  },
  {
    icon: <HiOutlineSupport className="text-red-600 text-2xl" />,
    title: "Reliable Support",
    desc: "Our team is here to help, whenever you need."
  },
];


import { motion } from "framer-motion";


const WhyChooseUs = () => {
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
    <section ref={ref} className="relative py-28 bg-[#181a20] overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Noise overlay for texture with parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          style={{
            backgroundImage: 'url(https://www.transparenttextures.com/patterns/asfalt-dark.png)',
            opacity: 0.13,
            position: 'absolute',
            inset: 0,
            transform: `translate3d(${parallax.x * 0.08}px, ${parallax.y * 0.06}px, 0)`
          }}
          className="absolute inset-0"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#181a20]/90 to-[#23243a]/80"
          style={{
            transform: `translate3d(${parallax.x * -0.06}px, ${parallax.y * -0.04}px, 0)`
          }}
        />
      </div>
      <Container>
        <h2 className="text-4xl font-extrabold text-white mb-14 text-center tracking-widest font-sans uppercase drop-shadow-[0_2px_24px_rgba(220,38,38,0.15)]" style={{fontFamily:'Oswald,Arial Narrow,sans-serif',letterSpacing:'0.04em'}}>
          WHY <span className="text-red-600">CHOOSE US</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 relative z-10">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-4 bg-transparent border-none rounded-none shadow-none p-0 group relative min-h-[180px] h-full"
            >
              <div className="mb-2 group-hover:scale-110 transition-transform">{p.icon}</div>
              <div className="font-bold text-lg text-white tracking-widest uppercase font-mono mb-1">{p.title}</div>
              <div className="text-gray-300 text-xs font-mono tracking-wide uppercase">{p.desc}</div>
              {/* No overlay border or shadow */}
            </motion.div>
          ))}
        </div>
        {/* No grid overlay */}
      </Container>
    </section>
  );
};

export default WhyChooseUs;
