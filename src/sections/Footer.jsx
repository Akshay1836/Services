import React from "react";

const links = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Showcase", href: "#showcase" },
  { name: "Contact", href: "#" },
];

const socials = [
  { name: "Twitter", href: "#", icon: "T" },
  { name: "Instagram", href: "#", icon: "I" },
  { name: "LinkedIn", href: "#", icon: "L" },
];


import { motion } from "framer-motion";

const Footer = () => (
  <footer className="bg-black border-t border-white/10 py-14">
    {/* No background overlays */}
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-4"
      >
        <span className="font-black text-2xl tracking-widest text-red-600 font-mono drop-shadow-glow">CREATIVEPRO</span>
      </motion.div>
      <motion.nav
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex flex-wrap gap-4 md:gap-6 text-gray-300 text-sm font-mono tracking-widest uppercase justify-center md:justify-start"
      >
        {links.map((l) => (
          <a key={l.name} href={l.href} className="hover:text-red-600 transition-colors">{l.name}</a>
        ))}
      </motion.nav>
      <motion.div
        initial={{ opacity: 0, x: 32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex gap-2 md:gap-4"
      >
        {socials.map((s) => (
          <a key={s.name} href={s.href} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-600 hover:text-white transition-colors border border-white/10" aria-label={s.name}>
            {s.icon}
          </a>
        ))}
      </motion.div>
    </div>
    <div className="text-center text-gray-400 text-xs mt-6 relative z-10 font-mono tracking-widest">&copy; {new Date().getFullYear()} CreativePro. All rights reserved.</div>
    {/* No grid overlay */}
  </footer>
);

export default Footer;
