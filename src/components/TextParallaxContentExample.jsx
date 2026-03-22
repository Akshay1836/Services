import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const IMG_PADDING = 24;

const TextParallaxContentExample = () => {
  return (
    <div className="bg-zinc-950 mt-0 lg:mt-60 xl:mt-80">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        subheading={
          <span className="text-white font-semibold tracking-widest">
            Collaborate
          </span>
        }
        heading={<span className="text-white">Create Together</span>}
      >
        <ContentBlock
          title="A Platform for Creators"
          text="Collaborate, share, and grow with a global community of digital artists, designers, and visionaries. Unlock premium assets, templates, and inspiration to elevate your work."
          buttonText="Get Started"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c"
        subheading={
          <span className="text-white font-semibold tracking-widest">
            Quality
          </span>
        }
        heading={<span className="text-white">Never Compromise</span>}
      >
        <ContentBlock
          title="Premium Resources"
          text="Access curated, high-quality assets and templates. Our platform ensures you always have the best tools to bring your creative vision to life."
          buttonText="Explore Assets"
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3"
        subheading={
          <span className="text-white font-semibold tracking-widest">
            Modern
          </span>
        }
        heading={<span className="text-white">Design for the Future</span>}
      >
        <ContentBlock
          title="Cutting-Edge Inspiration"
          text="Stay ahead with modern, minimal, and impactful design. Discover inspiration and resources that set new standards for digital creativity."
          buttonText="See Inspiration"
        />
      </TextParallaxContent>
    </div>
  );
};

const ContentBlock = ({ title, text, buttonText }) => (
  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 pb-16 pt-6 md:grid-cols-12">
    <h2 className="col-span-1 md:col-span-4 text-3xl md:text-5xl font-bold text-white leading-tight">
      {title}
    </h2>

    <div className="col-span-1 md:col-span-8">
      <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
        {text}
      </p>

      <a
        href="#"
        className="inline-flex items-center gap-2 mt-6 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black uppercase tracking-wider transition-all hover:bg-zinc-200 hover:scale-[1.03]"
      >
        {buttonText} <FiArrowUpRight />
      </a>
    </div>
  </div>
);

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div className="px-4 sm:px-6">
      <div className="relative h-[120vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy subheading={subheading} heading={heading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: `url(${imgUrl})`,
        scale,
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
      }}
      className="sticky z-0 overflow-hidden rounded-3xl bg-cover bg-center"
    >
      <motion.div
        className="absolute inset-0 bg-black/60"
        style={{ opacity }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const opacity = useTransform(
    scrollYProgress,
    [0.2, 0.5, 0.8],
    [0, 1, 0]
  );

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
    >
      <p className="text-sm md:text-lg tracking-widest text-zinc-300 mb-3">
        {subheading}
      </p>

      <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
        {heading}
      </h1>
    </motion.div>
  );
};

export default TextParallaxContentExample;