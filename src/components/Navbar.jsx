// Add a black bar at the very top for pure black background
const TopBlackBar = () => (
  <div style={{position:'fixed',top:0,left:0,width:'100vw',height:'2.5rem',background:'#000',zIndex:40}} />
);
import React from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Our Designation", href: "#designation" },
  { name: "Our Goal", href: "#goal" },
  { name: "Store", href: "#store" },
  { name: "Join Us", href: "#join", highlight: true },
];


const Navbar = () => {
  return (
    <>
      <TopBlackBar />
      <header className="w-full absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 z-50 bg-black/70 backdrop-blur-md border border-white/10 shadow-lg shadow-black/30 rounded-xl max-w-full sm:max-w-5xl mx-auto">
        <nav className="max-w-7xl mx-auto px-2 sm:px-6 flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center gap-3">
            <span className="font-black text-2xl tracking-widest text-red-600 font-mono uppercase">DARKNODE</span>
          </div>
          <ul className="flex flex-wrap gap-4 sm:gap-8 text-xs font-mono tracking-widest uppercase text-white justify-center sm:justify-end">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`transition-colors px-1 pb-0.5 border-b-2 border-transparent hover:border-red-600 hover:text-red-600 ${link.highlight ? "text-red-600 border-red-600 hover:text-white hover:border-white" : ""}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-xs text-gray-500 font-mono">EN</span>
            <span className="text-xs text-gray-500 font-mono">UA</span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
