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
        background: "linear-gradient(90deg, #C97C3C 0%, #B5502E 50%, #D9A54E 100%)",
      }}
    />
  );
}
