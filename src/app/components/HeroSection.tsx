import { motion, useReducedMotion } from "motion/react";
import "./HeroSection.css";

export function HeroSection({ revealed = true }: { revealed?: boolean }) {
  const reduceMotion = useReducedMotion();
  return (
    <section className="invitation-hero relative overflow-hidden">
      {/* Decorative bg */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #fffaf0 0%, #fdf6f0 70%, #f5e6d8 100%)",
        }}
      />

      <div className="invitation-hero__content relative z-10 text-center max-w-2xl mx-auto">
        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="mb-6"
        >
          <motion.span
            style={{ color: "#c9a87c", fontSize: "36px" }}
            animate={reduceMotion ? {} : { rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            ✦
          </motion.span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#8b6d50",
            fontSize: "14px",
            letterSpacing: "0",
            textTransform: "uppercase",
          }}
          className="mb-8"
        >
          Walima Reception
        </motion.p>

        {/* Groom name in script */}
        <motion.h1
          tabIndex={-1}
          initial={{ opacity: 0, y: 30 }}
          animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: reduceMotion ? 0 : 1,
            delay: reduceMotion ? 0 : 0.3,
          }}
          style={{
            fontFamily: "'Great Vibes', cursive",
            color: "#3d2e1f",
            fontSize: "3.5rem",
            lineHeight: 1.2,
          }}
        >
          {"Waleed".split("").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 14 }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: reduceMotion ? 0 : 0.3 + index * 0.06,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 1 : 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            delay: reduceMotion ? 0 : 0.5,
          }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#8b6d50",
            fontSize: "1rem",
            letterSpacing: "0",
            textTransform: "uppercase",
          }}
          className="mt-1"
        >
          Bin Khalid
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 1 : 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            delay: reduceMotion ? 0 : 0.7,
          }}
          className="mt-6"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#8b6d50",
            fontSize: "1.2rem",
          }}
        >
          Son of Khalid Pervaiz
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 1 : 0 }}
          transition={{
            duration: reduceMotion ? 0 : 1,
            delay: reduceMotion ? 0 : 0.9,
          }}
          className="invitation-hero__details"
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#8b6d50",
              fontSize: "14px",
              letterSpacing: "0",
              textTransform: "uppercase",
            }}
          >
            Mrs. Khalid Pervaiz warmly invites you to celebrate her son's Walima
          </p>
          <motion.div
            className="invitation-hero__date inline-block rounded-full"
            style={{
              border: "1px solid rgba(201, 168, 124, 0.4)",
              background: "rgba(201, 168, 124, 0.08)",
            }}
            whileHover={{
              background: "rgba(201, 168, 124, 0.15)",
              boxShadow: "0 0 30px rgba(201, 168, 124, 0.15)",
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#3d2e1f",
                fontSize: "1.25rem",
                letterSpacing: "0",
              }}
            >
              Sunday, 15 November 2026
            </p>
          </motion.div>
        </motion.div>

        <motion.p
          className="mt-4"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          animate={{ opacity: revealed ? 1 : 0, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            delay: reduceMotion ? 0 : 1.1,
          }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#8b6d50",
            fontSize: "1.15rem",
          }}
        >
          Walima Reception · Mehfil Event Complex
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="invitation-hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 1 : 0 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.div
            animate={reduceMotion ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#a0845e",
                fontSize: "12px",
                letterSpacing: "0",
                textTransform: "uppercase",
              }}
            >
              Scroll Down
            </p>
            <div
              className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
              style={{ borderColor: "rgba(160, 132, 94, 0.4)" }}
            >
              <motion.div
                className="w-1 h-2 rounded-full"
                style={{ background: "#a0845e" }}
                animate={
                  reduceMotion ? {} : { y: [0, 8, 0], opacity: [1, 0.3, 1] }
                }
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
