import { useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const WEDDING_DATE = new Date("2026-04-05T17:00:00").getTime();

function FlipDigit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Card container */}
        <div
          className="w-[60px] h-[72px] sm:w-[80px] sm:h-[92px] rounded-xl overflow-hidden relative"
          style={{
            background: "linear-gradient(180deg, rgba(26,20,16,0.9) 0%, rgba(42,31,24,0.95) 49.9%, rgba(26,20,16,0.85) 50.1%, rgba(42,31,24,0.9) 100%)",
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(201,168,124,0.15), inset 0 -1px 0 rgba(201,168,124,0.1)",
            border: "1px solid rgba(201, 168, 124, 0.15)",
          }}
        >
          {/* Middle line */}
          <div
            className="absolute left-0 right-0 top-1/2 h-px z-10"
            style={{ background: "rgba(0,0,0,0.4)" }}
          />
          {/* Number */}
          <div className="flex items-center justify-center h-full">
            <motion.span
              key={display}
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#e8d5b0",
                fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                textShadow: "0 2px 10px rgba(201,168,124,0.3)",
              }}
            >
              {display}
            </motion.span>
          </div>
          {/* Shine effect */}
          <div
            className="absolute inset-0 rounded-xl"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 50%)",
            }}
          />
        </div>
        {/* Side notches */}
        <div className="absolute top-1/2 -left-1 w-2 h-3 rounded-r-full -translate-y-1/2" style={{ background: "#fdf6f0" }} />
        <div className="absolute top-1/2 -right-1 w-2 h-3 rounded-l-full -translate-y-1/2" style={{ background: "#fdf6f0" }} />
      </div>
      <span
        className="mt-3"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "#8b6d50",
          fontSize: "11px",
          letterSpacing: "3px",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  function getTimeLeft() {
    const diff = Math.max(0, WEDDING_DATE - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section
      ref={ref}
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #fdf6f0, #f5e6d8, #fdf6f0)",
      }}
    >
      {/* Decorative ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] rounded-full border opacity-[0.06]"
          style={{ borderColor: "#c9a87c" }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div
        className="max-w-2xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#8b6d50",
            fontSize: "14px",
            letterSpacing: "5px",
            textTransform: "uppercase",
          }}
          className="mb-3"
        >
          Counting Down To
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#3d2e1f",
            fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
          }}
          className="mb-3"
        >
          Our Special Day
        </h2>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#a0845e",
            fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
            fontStyle: "italic",
          }}
          className="mb-12"
        >
          Sunday, 5th April 2026 — 5:00 PM
        </p>

        <div className="flex justify-center gap-3 sm:gap-6">
          {units.map((u, i) => (
            <motion.div
              key={u.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
            >
              <FlipDigit value={u.value} label={u.label} />
            </motion.div>
          ))}
        </div>

        {/* Separator dots between cards (decorative) */}
        <div className="flex justify-center items-center gap-3 sm:gap-6 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`sep-${i}`}
              className="flex gap-1"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            >
              <div className="w-1 h-1 rounded-full" style={{ background: "#c9a87c" }} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
