import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import HeroHorizontalBG from "../components/HeroHorizontalBG";
import Services from "./Services";
import Roadmap from "./Roadmap";
import TextParallaxContentExample from "../components/TextParallaxContentExample";
import ApproachBanner from "../components/ApproachBanner";
import RevealBento from "../components/RevealBento";
import DrawCircleText from "../components/DrawCircleText";
import ScreenFitText from "../components/ScreenFitText";
export const SmoothScrollHero = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          lerp: 0.07,
        }}
      >

        <Nav />
        <Hero />
        {/* ScreenFitText section: premium fit-to-container text */}
        {/* All parallax content sections as a single example block */}
        <TextParallaxContentExample />
        {/* RevealBento section */}
   
        <DrawCircleText />
        <Roadmap />

        <ApproachBanner />
        <RevealBento />
      </ReactLenis>
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-2 sm:px-6 py-2 sm:py-3 text-white backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800">
      <span className="text-2xl font-black tracking-widest text-white">CREATIVE</span>
      <button
        onClick={() => {
          document.getElementById("showcase")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
      >
        SHOWCASE <FiArrowRight />
      </button>
    </nav>
  );
};

const SECTION_HEIGHT = 900;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full mb-4 sm:mb-12"
    >
      <CenterImage />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-2 sm:px-0">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6 sm:mb-8 text-white tracking-tight font-sans uppercase drop-shadow-[0_2px_24px_rgba(59,130,246,0.18)]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          Create Without Limits
        </motion.h1>
        <motion.p
          className="text-base sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-2xl mx-auto font-mono tracking-wide leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.2, ease: 'easeOut' }}
        >
          The creative platform for digital artists, designers, and visionaries. Discover assets, templates, and inspiration to elevate your work.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
        >
          <a href="#showcase" className="px-8 py-4 text-lg font-bold bg-white text-black rounded-full shadow-lg font-mono tracking-widest uppercase transition-all duration-200 hover:bg-zinc-300 focus:ring-2 focus:ring-zinc-700/40 focus:ring-offset-2 focus:ring-offset-zinc-950">Explore Showcase</a>
          <a href="#cta" className="px-8 py-4 text-lg font-bold bg-zinc-900 text-white rounded-full shadow-lg font-mono tracking-widest uppercase transition-all duration-200 hover:bg-black hover:text-zinc-300 focus:ring-2 focus:ring-zinc-700/40 focus:ring-offset-2 focus:ring-offset-zinc-950">Get Started</a>
        </motion.div>
      </div>
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};
// Creative Showcase Section
const CreativeShowcase = () => {
  return (
    <section id="showcase" className="mx-auto max-w-5xl px-4 py-32 text-white">
      <motion.h2
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-16 text-4xl font-black uppercase text-white"
      >
        Creative Showcase
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
      >
        <ShowcaseCard
          title="Premium Presets"
          desc="Curated presets for photo, video, and design. Instantly elevate your creative projects."
          img="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ShowcaseCard
          title="Modern Templates"
          desc="Minimal, modern templates for web, social, and print. Designed for impact."
          img="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ShowcaseCard
          title="Creative Assets"
          desc="Unique assets, icons, and illustrations to power your next project."
          img="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ShowcaseCard
          title="Inspiration Gallery"
          desc="A curated gallery of creative work from our community. Get inspired."
          img="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </motion.div>
    </section>
  );
};

const ShowcaseCard = ({ title, desc, img }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 48 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    }}
    className="rounded-2xl overflow-hidden bg-zinc-900/80 border border-zinc-800 shadow-lg flex flex-col min-w-0"
    whileHover={{ scale: 1.03, boxShadow: "0 4px 32px 0 rgba(59,130,246,0.10)" }}
  >
    <motion.img
      src={img}
      alt={title}
      className="w-full h-40 sm:h-56 object-cover"
      initial={{ scale: 1.08, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
    />
    <div className="p-6 flex-1 flex flex-col">
      <motion.h3
        className="text-2xl font-bold mb-2 text-white"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-zinc-300 mb-4 flex-1"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {desc}
      </motion.p>
      <motion.a
        href="#cta"
        className="inline-block mt-auto text-white hover:underline font-semibold"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Learn More
      </motion.a>
    </div>
  </motion.div>
);

// Creative CTA Section
const CreativeCTA = () => (
  <section id="cta" className="mx-auto max-w-3xl px-4 py-32 text-center text-white">
    <motion.h2
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-8 text-4xl font-black uppercase text-white"
    >
      Ready to Create?
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      className="mb-10 text-lg text-zinc-300"
    >
      Join our creative community and unlock premium assets, templates, and inspiration. Start your journey today.
    </motion.p>
    <motion.a
      href="#"
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
      className="inline-block px-10 py-4 text-lg font-bold bg-white text-black rounded-full shadow-lg font-mono tracking-widest uppercase transition-all duration-200 hover:bg-zinc-300 focus:ring-2 focus:ring-zinc-700/40 focus:ring-offset-2 focus:ring-offset-zinc-950"
    >
      Get Started
    </motion.a>
  </section>
);

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-2 sm:px-4 pt-24 sm:pt-[200px]">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="And example of a space launch"
        start={-200}
        end={200}
        className="w-1/2 sm:w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="An example of a space launch"
        start={200}
        end={-250}
        className="mx-auto w-4/5 sm:w-2/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Orbiting satellite"
        start={-200}
        end={200}
        className="ml-auto w-1/2 sm:w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-8 sm:ml-24 w-2/3 sm:w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Launch Schedule
      </motion.h1>
      <ScheduleItem title="NG-21" date="Dec 9th" location="Florida" />
      <ScheduleItem title="Starlink" date="Dec 20th" location="Texas" />
      <ScheduleItem title="Starlink" date="Jan 13th" location="Florida" />
      <ScheduleItem title="Turksat 6A" date="Feb 22nd" location="Florida" />
      <ScheduleItem title="NROL-186" date="Mar 1st" location="California" />
      <ScheduleItem title="GOES-U" date="Mar 8th" location="California" />
      <ScheduleItem title="ASTRA 1P" date="Apr 8th" location="Texas" />
    </section>
  );
};

const ScheduleItem = ({ title, date, location }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};
