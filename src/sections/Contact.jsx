import React from "react";
import Container from "../components/Container";

const Contact = () => (
  <section className="py-20 bg-black text-white border-t border-white/10">
    <Container>
      <h2 className="text-2xl font-bold mb-10 text-center tracking-widest uppercase text-red-600">Contact</h2>
      <form className="max-w-md w-full mx-auto space-y-4 px-2 sm:px-4 md:px-0">
        <div>
          <label className="block text-xs font-bold uppercase mb-2 tracking-widest">Name</label>
          <input type="text" className="w-full bg-[#181a20] border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-red-600" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase mb-2 tracking-widest">Email</label>
          <input type="email" className="w-full bg-[#181a20] border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-red-600" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase mb-2 tracking-widest">Message</label>
          <textarea className="w-full bg-[#181a20] border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-red-600" rows="4"></textarea>
        </div>
        <button type="submit" className="bg-black text-red-600 font-bold px-0 py-0 rounded-none border-none shadow-none uppercase tracking-widest hover:text-white hover:bg-black transition-colors duration-200">SEND MESSAGE</button>
      </form>
    </Container>
  </section>
);

export default Contact;
