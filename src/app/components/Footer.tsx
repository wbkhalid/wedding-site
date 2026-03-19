import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer
      ref={ref}
      className="relative py-24 px-6 text-center overflow-hidden"
      style={{ background: "#1a1410" }}
    >
      {/* Stars */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 1 + Math.random() * 2,
            height: 1 + Math.random() * 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: "#c9a87c",
          }}
          animate={{ opacity: [0.1, 0.7, 0.1] }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        {/* Script names */}
        <motion.p
          style={{
            fontFamily: "'Great Vibes', cursive",
            color: "#e8d5b0",
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
          }}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          Hamzah & Breeha
        </motion.p>

        <div className="flex items-center justify-center gap-4 mt-4 mb-6">
          <div className="h-px w-12" style={{ background: "#c9a87c" }} />
          <span style={{ color: "#c9a87c", fontSize: "10px" }}>✦</span>
          <div className="h-px w-12" style={{ background: "#c9a87c" }} />
        </div>

        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#e8d5b0",
            fontSize: "16px",
            letterSpacing: "6px",
          }}
        >
          5 · APRIL · 2026
        </p>

        <motion.div
          className="mt-10"
          style={{ color: "#e8d5b0", fontSize: "20px", letterSpacing: "8px" }}
        >
          ❦ ❦ ❦
        </motion.div>

        <p
          className="mt-8"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#e8d5b0",
            fontSize: "13px",
            letterSpacing: "3px",
            fontStyle: "italic",
          }}
        >
          "And they lived happily ever after..."
        </p>

        <p
          className="mt-6"
          style={{
            fontFamily: "'Lato', sans-serif",
            color: "#e8d5b0",
            fontSize: "11px",
            letterSpacing: "2px",
          }}
        >
          MADE WITH ♥
        </p>
      </motion.div>
    </footer>
  );
}
