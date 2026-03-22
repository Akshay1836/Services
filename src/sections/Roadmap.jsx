import React from "react";
import { motion } from "framer-motion";
import Container from "../components/Container";

const roadmap = [
  { quarter: "Q2 2026", items: ["Launch new asset packs", "Expand video editing services"] },
  { quarter: "Q3 2026", items: ["Release mobile app", "Integrate AI-powered tools"] },
  { quarter: "Q4 2026", items: ["Partnerships with top brands", "Host online creative summit"] },
];


const roadmapVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Roadmap = () => (
  <section className="py-32 bg-zinc-950 text-white border-t border-zinc-800/60">
    <Container>
      <motion.h2
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-16 text-4xl font-black uppercase text-white text-center tracking-widest"
      >
        Roadmap
      </motion.h2>
      <motion.div
        className="flex flex-col md:flex-row justify-center gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={roadmapVariants}
      >
        {roadmap.map((r) => (
          <motion.div
            key={r.quarter}
            variants={cardVariants}
            className="rounded-2xl overflow-hidden bg-zinc-900/80 border border-zinc-800 shadow-lg flex flex-col min-w-[220px] flex-1 px-8 py-10"
            whileHover={{ scale: 1.03, boxShadow: "0 4px 32px 0 rgba(59,130,246,0.10)" }}
          >
            <motion.div
              className="font-bold text-white mb-4 text-lg uppercase tracking-widest"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {r.quarter}
            </motion.div>
            <motion.ul
              className="list-disc list-inside text-zinc-300 text-base space-y-2"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {r.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  </section>
);

export default Roadmap;
