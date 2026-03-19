import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function DuaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #1a1410 0%, #2a1f18 50%, #1a1410 100%)",
      }}
    >
      {/* Ambient stars */}
      {Array.from({ length: 30 }).map((_, i) => (
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
          animate={{ opacity: [0.1, 0.6, 0.1] }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Decorative golden arches */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] rounded-full border opacity-[0.06]"
          style={{ borderColor: "#c9a87c" }}
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] sm:w-[480px] sm:h-[480px] rounded-full border opacity-[0.04]"
          style={{ borderColor: "#c9a87c" }}
          animate={{ scale: [1.05, 1, 1.05], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Bismillah */}
        <motion.p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#c9a87c",
            fontSize: "14px",
            letterSpacing: "6px",
            textTransform: "uppercase",
          }}
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 1 }}
        >
          In the Name of Allah, the Most Beneficent, the Most Merciful
        </motion.p>

        {/* Arabic Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
          className="mb-8"
        >
          <p
            style={{
              fontFamily: "serif",
              color: "#e8d5b0",
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              lineHeight: 1.8,
              direction: "rtl",
            }}
          >
            بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div
            className="h-px w-20"
            style={{
              background: "linear-gradient(90deg, transparent, #c9a87c)",
            }}
          />
          <motion.span
            style={{ color: "#c9a87c", fontSize: "16px" }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            ✦
          </motion.span>
          <div
            className="h-px w-20"
            style={{
              background: "linear-gradient(90deg, #c9a87c, transparent)",
            }}
          />
        </motion.div>

        {/* Quranic verse */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 1 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#d4c4a8",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            lineHeight: 2,
            fontStyle: "italic",
          }}
          className="mb-6"
        >
          "And among His Signs is this, that He created for you mates from among
          yourselves, that you may dwell in tranquility with them, and He has
          put love and mercy between your hearts."
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.6, duration: 1 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#8b7a5e",
            fontSize: "14px",
            letterSpacing: "3px",
          }}
        >
          — Surah Ar-Rum (30:21)
        </motion.p>

        {/* Bottom ornament */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.4 } : {}}
          transition={{ delay: 2, duration: 1 }}
          style={{ color: "#c9a87c", fontSize: "24px", letterSpacing: "12px" }}
        >
          ❦ ❦ ❦
        </motion.div>
      </motion.div>
    </section>
  );
}
