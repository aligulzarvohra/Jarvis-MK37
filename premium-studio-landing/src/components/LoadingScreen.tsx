import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["Design", "Build", "Elevate"];
const DURATION = 2500;

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / DURATION, 1);
      setCount(Math.round(progress * 100));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        window.setTimeout(onComplete, 400);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 850);
    return () => window.clearInterval(id);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="relative h-full w-full px-6 py-6 md:px-10 md:py-10">
        {/* Top-left studio label */}
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-6 top-6 text-xs uppercase tracking-[0.3em] text-muted md:left-10 md:top-10"
        >
          Aureal Studio
        </motion.span>

        {/* Center rotating words */}
        <div className="flex h-full items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={wordIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="font-display text-4xl italic text-text-primary/80 md:text-6xl lg:text-7xl"
            >
              {WORDS[wordIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Bottom-right counter */}
        <div className="absolute bottom-10 right-6 md:bottom-14 md:right-10">
          <span className="font-display text-6xl tabular-nums text-text-primary md:text-8xl lg:text-9xl">
            {String(count).padStart(3, "0")}
          </span>
        </div>

        {/* Bottom progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-stroke/50">
          <div
            className="accent-gradient h-full origin-left"
            style={{
              transform: `scaleX(${count / 100})`,
              boxShadow: "0 0 8px rgba(196, 162, 101, 0.4)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
