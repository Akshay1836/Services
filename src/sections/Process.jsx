import React from "react";
import Container from "../components/Container";

const steps = [
  { label: "Browse", },
  { label: "Select", },
  { label: "Download", },
  { label: "Create", },
];


import { motion } from "framer-motion";

const Process = () => (
  <section className="py-28 bg-black">
    {/* No background overlays */}
    <Container>
      <h2 className="text-4xl font-extrabold text-white mb-14 text-center tracking-widest font-sans uppercase drop-shadow-[0_2px_24px_rgba(220,38,38,0.15)]" style={{fontFamily:'Oswald,Arial Narrow,sans-serif',letterSpacing:'0.04em'}}>
        HOW IT <span className="text-red-600">WORKS</span>
      </h2>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-0">
          {steps.map((step, i) => (
            <React.Fragment key={step.label}>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-600/80 text-white font-bold text-lg shadow-lg mb-2 border-2 border-white/20 backdrop-blur-xl">
                  {i + 1}
                </div>
                <div className="text-white font-bold text-base mb-2 drop-shadow-glow font-mono uppercase tracking-widest">{step.label}</div>
              </motion.div>
              {i < steps.length - 1 && (
                <div className="w-16 h-1 bg-white/20 mx-2 rounded-full" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* No grid overlay */}
    </Container>
  </section>
);

export default Process;
