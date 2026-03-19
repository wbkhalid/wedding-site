import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface EnvelopeProps {
  onOpen: () => void;
}

export function Envelope({ onOpen }: EnvelopeProps) {
  const [phase, setPhase] = useState<"idle" | "breaking" | "opening" | "done">("idle");

  const handleClick = () => {
    if (phase !== "idle") return;
    setPhase("breaking");
    // Wax seal breaks
    setTimeout(() => setPhase("opening"), 800);
    // Envelope opens and reveals
    setTimeout(() => setPhase("done"), 2200);
    // Fade out completely
    setTimeout(() => onOpen(), 3000);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background:
          "radial-gradient(ellipse at center, #fdf6f0 0%, #f0ddd0 40%, #e8ccb8 80%, #d4b494 100%)",
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated sparkle background */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: 4 + Math.random() * 8,
            color: "#c9a87c",
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        >
          ✦
        </motion.div>
      ))}

      {/* Falling petals */}
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.div
          key={`petal-${i}`}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: "-5%",
            fontSize: `${14 + Math.random() * 14}px`,
            opacity: 0.2 + Math.random() * 0.2,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(i) * 60],
            rotate: [0, 360],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          🌸
        </motion.div>
      ))}

      <div
        className="flex flex-col items-center gap-10 cursor-pointer"
        onClick={handleClick}
      >
        {/* Main envelope container */}
        <div
          className="relative"
          style={{ perspective: "1200px" }}
        >
          <motion.div
            className="relative w-[300px] h-[200px] sm:w-[380px] sm:h-[250px]"
            animate={
              phase === "opening" || phase === "done"
                ? { y: 30, scale: 0.95 }
                : {}
            }
            transition={{ duration: 0.6 }}
          >
            {/* Envelope shadow */}
            <motion.div
              className="absolute -bottom-4 left-4 right-4 h-8 rounded-[50%]"
              style={{
                background: "radial-gradient(ellipse, rgba(139,109,80,0.2), transparent)",
              }}
              animate={
                phase === "opening" || phase === "done"
                  ? { opacity: 0.6, scaleX: 1.1 }
                  : { opacity: 0.3 }
              }
            />

            {/* Envelope body */}
            <div
              className="absolute inset-0 rounded-lg overflow-hidden z-0"
              style={{
                background: "linear-gradient(145deg, #f5ebe0 0%, #e8d5c4 100%)",
                boxShadow:
                  "0 20px 60px rgba(139, 109, 80, 0.3), 0 8px 20px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5)",
              }}
            >
              {/* Inner texture lines */}
              <div
                className="absolute inset-4 rounded border opacity-20"
                style={{ borderColor: "#c9a87c" }}
              />
              <div
                className="absolute inset-6 rounded border opacity-10"
                style={{ borderColor: "#c9a87c" }}
              />
            </div>

            {/* Bottom flap triangles (the V shape) */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[55%] z-10"
              style={{
                clipPath: "polygon(0 100%, 50% 20%, 100% 100%)",
                background: "linear-gradient(180deg, #eddcc9, #e0c9b0)",
              }}
            />

            {/* Inner card peeking out */}
            <AnimatePresence>
              {(phase === "opening" || phase === "done") && (
                <motion.div
                  className="absolute left-[8%] right-[8%] rounded-lg flex items-center justify-center z-30"
                  style={{
                    height: "85%",
                    bottom: 0,
                    background: "linear-gradient(180deg, #fffcf8 0%, #fff5ee 100%)",
                    boxShadow: "0 4px 20px rgba(139, 109, 80, 0.15)",
                    border: "1px solid rgba(201, 168, 124, 0.2)",
                  }}
                  initial={{ y: 0 }}
                  animate={{ y: -160 }}
                  transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="text-center px-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <p
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          color: "#c9a87c",
                          fontSize: "10px",
                          letterSpacing: "4px",
                          textTransform: "uppercase",
                        }}
                        className="mb-2"
                      >
                        Wedding Invitation
                      </p>
                      <p
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "#3d2e1f",
                          fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
                          lineHeight: 1.4,
                        }}
                      >
                        Hamzah & Breeha
                      </p>
                      <div
                        className="flex items-center justify-center gap-2 mt-2"
                      >
                        <div className="h-px w-8 bg-[#c9a87c]/40" />
                        <span style={{ color: "#c9a87c", fontSize: "10px" }}>✦</span>
                        <div className="h-px w-8 bg-[#c9a87c]/40" />
                      </div>
                      <p
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          color: "#8b6d50",
                          fontSize: "11px",
                          letterSpacing: "2px",
                          marginTop: "6px",
                        }}
                      >
                        5th April 2026
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Top flap (opens upward in 3D) */}
            <motion.div
              className="absolute top-0 left-0 right-0 origin-top z-20"
              style={{
                height: "55%",
                clipPath: "polygon(0 0, 50% 80%, 100% 0)",
                background: "linear-gradient(180deg, #eddcc9 0%, #e0c9b0 100%)",
                transformStyle: "preserve-3d",
                boxShadow:
                  phase === "idle" || phase === "breaking"
                    ? "none"
                    : "0 10px 30px rgba(0,0,0,0.1)",
              }}
              animate={
                phase === "opening" || phase === "done"
                  ? { rotateX: -180 }
                  : { rotateX: 0 }
              }
              transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
            />

            {/* Wax seal */}
            <AnimatePresence>
              {(phase === "idle" || phase === "breaking") && (
                <motion.div
                  className="absolute z-20"
                  style={{
                    bottom: "30%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                  exit={{
                    scale: [1, 1.3, 0],
                    opacity: [1, 1, 0],
                    rotate: [0, 15, -15],
                  }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Seal glow */}
                  <motion.div
                    className="absolute -inset-4 rounded-full"
                    style={{
                      background: "radial-gradient(circle, rgba(201, 120, 124, 0.3), transparent)",
                    }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {/* Seal body */}
                  <motion.div
                    className="relative w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "radial-gradient(circle at 35% 35%, #d4787c, #b0525a 50%, #8d3a42)",
                      boxShadow:
                        "0 4px 15px rgba(160, 82, 90, 0.5), inset 0 2px 4px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(0,0,0,0.2)",
                    }}
                    animate={
                      phase === "idle"
                        ? { scale: [1, 1.05, 1] }
                        : { scale: [1, 1.4, 0], rotate: [0, 20, -10] }
                    }
                    transition={
                      phase === "idle"
                        ? { duration: 2, repeat: Infinity }
                        : { duration: 0.8 }
                    }
                  >
                    {/* Seal emblem */}
                    <span className="text-2xl" style={{ filter: "brightness(1.5)" }}>
                      💍
                    </span>
                    {/* Seal rim detail */}
                    <div
                      className="absolute inset-1 rounded-full border"
                      style={{ borderColor: "rgba(255,255,255,0.15)" }}
                    />
                    <div
                      className="absolute inset-2.5 rounded-full border"
                      style={{ borderColor: "rgba(255,255,255,0.08)" }}
                    />
                  </motion.div>

                  {/* Breaking particles */}
                  <AnimatePresence>
                    {phase === "breaking" &&
                      Array.from({ length: 12 }).map((_, i) => (
                        <motion.div
                          key={`particle-${i}`}
                          className="absolute top-1/2 left-1/2 rounded-full"
                          style={{
                            width: 3 + Math.random() * 5,
                            height: 3 + Math.random() * 5,
                            background: `hsl(${350 + Math.random() * 20}, 60%, ${40 + Math.random() * 20}%)`,
                          }}
                          initial={{ x: 0, y: 0, opacity: 1 }}
                          animate={{
                            x: (Math.random() - 0.5) * 200,
                            y: (Math.random() - 0.5) * 200,
                            opacity: 0,
                            scale: 0,
                          }}
                          transition={{
                            duration: 0.6 + Math.random() * 0.4,
                            ease: "easeOut",
                          }}
                        />
                      ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Text */}
        <motion.div
          className="text-center"
          animate={
            phase === "idle"
              ? { opacity: [0.4, 1, 0.4] }
              : phase === "done"
              ? { opacity: 0, y: 20 }
              : {}
          }
          transition={
            phase === "idle"
              ? { duration: 2.5, repeat: Infinity }
              : { duration: 0.5 }
          }
        >
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#3d2e1f",
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
              letterSpacing: "2px",
            }}
            className="mb-1"
          >
            {phase === "idle" ? "You're Invited" : ""}
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#8b6d50",
              fontSize: "14px",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            {phase === "idle" ? "Tap to Open" : ""}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}