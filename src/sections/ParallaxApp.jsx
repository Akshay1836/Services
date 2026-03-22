import { ReactLenis } from "lenis/react";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Showcase from "./Showcase";
import WhyChooseUs from "./WhyChooseUs";
import Process from "./Process";
import Testimonials from "./Testimonials";
import Partners from "./Partners";
import Roadmap from "./Roadmap";
import FAQ from "./FAQ";
import Blog from "./Blog";
import Contact from "./Contact";
import CTA from "./CTA";
import Footer from "./Footer";

export default function ParallaxApp() {
  return (
    <div className="dark bg-surface-dark text-white min-h-screen flex flex-col">
      <ReactLenis
        root
        options={{
          lerp: 0.07,
        }}
      >
        <Navbar />
        <div className="pt-16">
          <Hero />
          <Services />
          <Showcase />
          <WhyChooseUs />
          <Process />
          <Testimonials />
          <Partners />
          <Roadmap />
          <FAQ />
          <Blog />
          <Contact />
          <CTA />
          <Footer />
        </div>
      </ReactLenis>
    </div>
  );
}
