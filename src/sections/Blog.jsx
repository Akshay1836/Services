import React from "react";
import Container from "../components/Container";

const posts = [
  { title: "5 Tips for Stunning Video Edits", date: "Mar 2026", excerpt: "Level up your video projects with these expert editing tips." },
  { title: "Choosing the Right Template", date: "Feb 2026", excerpt: "How to select the perfect template for your brand or event." },
  { title: "Creative Trends 2026", date: "Jan 2026", excerpt: "Stay ahead with the latest trends in digital design and media." },
];

const Blog = () => (
  <section className="py-20 bg-black text-white border-t border-white/10">
    <Container>
      <h2 className="text-2xl font-bold mb-10 text-center tracking-widest uppercase text-red-600">Blog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        {posts.map((p) => (
          <div key={p.title} className="bg-[#181a20] border border-white/10 rounded-xl p-4 sm:p-6 flex flex-col min-h-[140px] sm:min-h-[180px] md:min-h-[200px] h-full">
            <div className="font-bold text-lg mb-2 text-white uppercase tracking-widest">{p.title}</div>
            <div className="text-xs text-gray-400 mb-4 font-mono">{p.date}</div>
            <div className="text-gray-300 text-sm flex-1">{p.excerpt}</div>
            <a href="#" className="mt-4 text-red-600 font-bold text-xs uppercase tracking-widest hover:underline self-start">Read More</a>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Blog;
