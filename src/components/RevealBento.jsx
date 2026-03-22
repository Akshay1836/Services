import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiYoutube } from "react-icons/si";

const RevealBento = () => {
  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-16 text-zinc-50">
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.07 }}
        className="mx-auto grid max-w-5xl grid-flow-dense grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
      <Footer />
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: { scale: 0.5, y: 60, opacity: 0 },
        animate: { scale: 1, y: 0, opacity: 1 },
      }}
      transition={{ type: "spring", mass: 3, stiffness: 400, damping: 50 }}
      className={twMerge(
        "col-span-4 rounded-2xl border border-zinc-800 bg-zinc-900/90 p-8 shadow-lg backdrop-blur-md",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-4 sm:col-span-8 md:col-span-6 row-span-2">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=Creative"
      alt="avatar"
      className="mb-4 size-16 rounded-full border-2 border-white shadow-lg"
    />
    <h1 className="mb-10 text-4xl font-black leading-tight tracking-tight text-white">
      Welcome to <span className="text-white">Creative</span>.<br />
      <span className="text-zinc-400 font-medium text-2xl block mt-2">
        The platform for digital artists, designers, and visionaries.
      </span>
    </h1>
    <a
      href="#"
      className="flex items-center gap-1 text-white hover:underline font-bold text-lg"
    >
      Join Us <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{ rotate: "2.5deg", scale: 1.08 }}
      className="col-span-2 sm:col-span-4 md:col-span-3 bg-white/90"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-red-600"
      >
        <SiYoutube />
      </a>
    </Block>
    <Block
      whileHover={{ rotate: "-2.5deg", scale: 1.08 }}
      className="col-span-2 sm:col-span-4 md:col-span-3 bg-zinc-800"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{ rotate: "-2.5deg", scale: 1.08 }}
      className="col-span-2 sm:col-span-4 md:col-span-3 bg-zinc-900"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiTiktok />
      </a>
    </Block>
    <Block
      whileHover={{ rotate: "2.5deg", scale: 1.08 }}
      className="col-span-2 sm:col-span-4 md:col-span-3 bg-zinc-900/90"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-4 sm:col-span-8 md:col-span-12 text-base sm:text-lg md:text-2xl leading-snug font-semibold bg-zinc-900/80">
    <p>
      Unlock your creative potential.<br />
      <span className="text-zinc-400 font-normal">
        Discover premium assets, templates, and inspiration. Collaborate, share, and grow with a global community of creators. Powered by <span className="text-white font-bold">React</span>, <span className="text-white font-bold">Tailwind CSS</span>, and <span className="text-white font-bold">Framer Motion</span> for a world-class experience.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-4 sm:col-span-8 md:col-span-3 flex flex-col items-center gap-4 bg-zinc-900/80">
    <FiMapPin className="text-3xl text-white" />
    <p className="text-center text-lg text-zinc-400">Global Community</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-4 sm:col-span-8 md:col-span-9 bg-zinc-900/80">
    <p className="mb-3 text-lg font-semibold text-white">Stay in the Loop</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Your email address"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-white transition-colors focus:border-white focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-white px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Subscribe
      </button>
    </form>
  </Block>
);

const Logo = () => {
  return (
    <svg
      width="44"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-white drop-shadow-lg"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

const Footer = () => {
  return (
    <footer className="mt-16">
      <p className="text-center text-zinc-500">
        Made with <span className="text-white">❤️</span> by the Creative Platform Team
      </p>
    </footer>
  );
};

export default RevealBento;
