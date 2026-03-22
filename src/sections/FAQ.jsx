import React from "react";
import Container from "../components/Container";

const faqs = [
  { q: "How do I access purchased assets?", a: "You can instantly download all purchased assets from your account dashboard." },
  { q: "Do you offer custom design services?", a: "Yes, we provide custom video editing and design services. Contact us for details." },
  { q: "Are your templates compatible with all platforms?", a: "Our templates are compatible with major platforms like Adobe, Canva, and PowerPoint." },
  { q: "How can I contact support?", a: "Reach out via our contact form or email for fast, professional support." },
];

const FAQ = () => (
  <section className="py-20 bg-black text-white border-t border-white/10">
    <Container>
      <h2 className="text-2xl font-bold mb-10 text-center tracking-widest uppercase text-red-600">FAQ</h2>
      <div className="max-w-2xl mx-auto space-y-8">
        {faqs.map((f, i) => (
          <div key={i} className="border-b border-white/10 pb-6">
            <div className="font-bold text-lg mb-2 text-white uppercase tracking-widest">{f.q}</div>
            <div className="text-gray-300 text-sm font-mono">{f.a}</div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default FAQ;
