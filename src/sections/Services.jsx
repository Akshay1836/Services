
import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Container from "../components/Container";
import { HiOutlineCamera, HiOutlineFilm, HiOutlineSpeakerphone, HiOutlineTemplate, HiOutlineDesktopComputer, HiOutlineDocumentText, HiOutlineMail, HiOutlineScissors } from "react-icons/hi";

const services = [
  {
    icon: <HiOutlineCamera className="text-red-600 text-4xl" />, title: "Lightroom Presets", desc: "Professional photo filters for every style."
  },
  {
    icon: <HiOutlineFilm className="text-red-600 text-4xl" />, title: "Video Editing Assets", desc: "Transitions, LUTs, and overlays for editors."
  },
  {
    icon: <HiOutlineSpeakerphone className="text-red-600 text-4xl" />, title: "Sound Effects", desc: "High-quality SFX for all media."
  },
  {
    icon: <HiOutlineTemplate className="text-red-600 text-4xl" />, title: "PowerPoint Templates", desc: "Elegant, ready-to-use presentation designs."
  },
  {
    icon: <HiOutlineDesktopComputer className="text-red-600 text-4xl" />, title: "Website Templates", desc: "Modern, responsive site templates."
  },
  {
    icon: <HiOutlineDocumentText className="text-red-600 text-4xl" />, title: "Landing Pages", desc: "Conversion-focused landing page kits."
  },
  {
    icon: <HiOutlineMail className="text-red-600 text-4xl" />, title: "Wedding Invitations", desc: "Beautiful digital invites for your big day."
  },
  {
    icon: <HiOutlineScissors className="text-red-600 text-4xl" />, title: "Video Editing Services", desc: "Expert editing for your video projects."
  },
];


const Services = () => {
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
        className="absolute left-[-100px] top-[-100px] w-[260px] h-[260px] rounded-full bg-gradient-to-br from-red-600/30 via-black/80 to-white/0 blur-3xl opacity-30 z-0"
        style={{
          transform: `translate3d(${parallax.x * 0.10}px, ${parallax.y * 0.08}px, 0)`
        }}
        animate={{ y: [0, 18, 0], x: [0, 12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
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
          OUR <span className="text-red-600">SERVICES</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              whileHover={{ y: -8, boxShadow: "0 0 32px 4px #dc262655" }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <div className="flex flex-col items-center text-center gap-4 bg-glass-dark/90 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-inner shadow-glow p-8 transition-all duration-300 hover:border-red-600 hover:shadow-glow group relative min-h-[260px] h-full">
                <div className="mb-2 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <div className="font-bold text-lg text-white tracking-widest uppercase font-mono mb-1">{s.title}</div>
                <div className="text-gray-300 text-xs font-mono tracking-wide uppercase">{s.desc}</div>
                <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{boxShadow:'0 0 32px 4px #dc262633'}} />
              </div>
            </motion.div>
          ))}
        </div>
        {/* No grid overlay */}
      </Container>
    </section>
  );
};

export default Services;
