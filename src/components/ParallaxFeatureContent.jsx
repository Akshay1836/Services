import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ParallaxFeatureContent = ({ title, children }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-white">
      {title}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <div className="mb-4 text-xl text-zinc-300 md:text-2xl">
        {children}
      </div>
      <a href="#" className="inline-flex items-center gap-2 rounded bg-white px-9 py-4 text-xl text-black transition-colors hover:bg-zinc-300 md:w-fit font-bold mt-4 shadow-lg">
        Learn more <FiArrowUpRight className="inline" />
      </a>
    </div>
  </div>
);

export default ParallaxFeatureContent;
