import React from "react";
import Container from "../components/Container";

const partners = [
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Adobe_Corporate_Logo.png" },
  { name: "Envato", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Envato_logo.png" },
  { name: "Canva", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_Logo.png" },
  { name: "Unsplash", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Unsplash_logo.png" },
];

const Partners = () => (
  <section className="py-20 bg-black text-white border-t border-white/10">
    <Container>
      <h2 className="text-2xl font-bold mb-10 text-center tracking-widest uppercase text-red-600">Partners</h2>
      <div className="flex flex-wrap justify-center items-center gap-10">
        {partners.map((p) => (
          <div key={p.name} className="flex flex-col items-center">
            <img src={p.logo} alt={p.name} className="h-12 mb-2 grayscale opacity-80" />
            <span className="text-xs font-mono uppercase tracking-widest text-gray-400">{p.name}</span>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Partners;
