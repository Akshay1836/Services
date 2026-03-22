import { useRef, useEffect, useState } from "react";

/**
 * usePremiumScrollAnimation
 * - Returns scroll progress (0-1) for a section
 * - Returns a ref to attach to the section
 * - Returns a boolean for inView (for one-time triggers)
 */
export function usePremiumScrollAnimation(threshold = 0.3) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    function onScroll() {
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      const sectionH = rect.height;
      // Calculate progress: 0 (below viewport) to 1 (fully in viewport)
      let prog = 0;
      if (rect.top < windowH && rect.bottom > 0) {
        const visible = Math.min(windowH, rect.bottom) - Math.max(0, rect.top);
        prog = Math.max(0, Math.min(1, visible / Math.min(windowH, sectionH)));
      }
      setProgress(prog);
      if (prog > threshold && !inView) setInView(true);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [threshold, inView]);

  return { ref, progress, inView };
}
