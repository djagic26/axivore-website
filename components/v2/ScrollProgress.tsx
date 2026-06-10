"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] pointer-events-none origin-left"
      style={{
        height: "2px",
        scaleX: scrollYProgress,
        background: "linear-gradient(90deg, #7C5CFF 0%, #FF3DC5 50%, #5B8AFF 100%)",
      }}
    />
  );
}
