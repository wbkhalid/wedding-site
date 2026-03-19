import { motion } from "motion/react";
import { useMemo } from "react";

export function FloatingPetals() {
  const petals = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 12 + Math.random() * 16,
        duration: 8 + Math.random() * 8,
        delay: Math.random() * 10,
        xDrift: (Math.random() - 0.5) * 120,
        emoji: ["🌸", "✿", "❀", "🌷"][Math.floor(Math.random() * 4)],
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute opacity-20"
          style={{ left: `${p.left}%`, top: -30, fontSize: p.size }}
          animate={{
            y: ["0vh", "105vh"],
            x: [0, p.xDrift],
            rotate: [0, 360],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        >
          {p.emoji}
        </motion.div>
      ))}
    </div>
  );
}
