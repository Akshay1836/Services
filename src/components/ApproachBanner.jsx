import React from "react";

const ApproachBanner = () => (
  <section className="w-full bg-zinc-950 py-16 px-4 md:px-12 lg:px-24 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
    <div className="flex-1">
      <h3 className="text-sm md:text-base font-semibold tracking-widest text-zinc-200 mb-2 uppercase">
        Our Photography Approach
      </h3>
    </div>
    <div className="flex-[3]">
      <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
        We capture every moment with care,<br className="hidden md:block" />
        creativity, and attention to detail.
      </h2>
    </div>
  </section>
);

export default ApproachBanner;
