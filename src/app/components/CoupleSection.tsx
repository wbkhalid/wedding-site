import { motion, useInView } from "motion/react";
import { useRef, useMemo } from "react";

function FloatingHearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        x: -30 + Math.random() * 60,
        size: 10 + Math.random() * 10,
        duration: 4 + Math.random() * 4,
        delay: Math.random() * 5,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute left-1/2 bottom-1/4"
          style={{ fontSize: h.size, color: "rgba(201, 135, 140, 0.35)" }}
          animate={{
            y: [0, -200],
            x: [0, h.x],
            opacity: [0, 0.7, 0],
            scale: [0.5, 1, 0.7],
          }}
          transition={{
            duration: h.duration,
            repeat: Infinity,
            delay: h.delay,
            ease: "easeOut",
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
}

interface PersonCardProps {
  name: string;
  role: string;

  direction: "left" | "right";
  isInView: boolean;
}

function PersonCard({ name, role, direction, isInView }: PersonCardProps) {
  const xOffset = direction === "left" ? -80 : 80;

  return (
    <motion.div
      className="flex flex-col items-center group"
      initial={{ opacity: 0, x: xOffset, filter: "blur(10px)" }}
      animate={
        isInView
          ? { opacity: 1, x: 0, filter: "blur(0px)" }
          : { opacity: 0, x: xOffset, filter: "blur(10px)" }
      }
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Floating idle animation wrapper */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        {/* Image frame */}
        <motion.div
          className="relative mb-6 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {/* Glow ring */}
          <motion.div
            className="absolute -inset-3 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(201,168,124,0.15), rgba(232,180,184,0.2), rgba(201,168,124,0.15), rgba(232,180,184,0.2))",
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          {/* Shimmer on hover */}
          <motion.div
            className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(circle, rgba(201,168,124,0.25) 0%, transparent 70%)",
              boxShadow: "0 0 30px rgba(201,168,124,0.3)",
            }}
          />
          {/* Portrait container */}
          <div
            className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden"
            style={{
              border: "3px solid rgba(201,168,124,0.4)",
              boxShadow:
                "0 10px 40px rgba(139,109,80,0.15), inset 0 0 20px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src="/images/pic1.png"
              alt="Waleed Bin Khalid"
              width={1122}
              height={1402}
              loading="lazy"
              className="w-full h-full object-cover"
              style={{ objectPosition: "50% 20%" }}
            />
            {/* Glass overlay on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(180deg, transparent 50%, rgba(201,168,124,0.15) 100%)",
              }}
            />
          </div>
        </motion.div>

        {/* Name & role */}
        <motion.div className="text-center">
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#3d2e1f",
              fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
              lineHeight: 1.4,
            }}
          >
            {name}
          </h3>
          <p
            className="mt-1"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#8b6d50",
              fontSize: "14px",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            {role}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function CoupleSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #fdf6f0 0%, #fce4ec 35%, #fce4ec 65%, #fdf6f0 100%)",
      }}
    >
      {/* Decorative corner ornaments */}
      <div
        className="absolute top-8 left-8 opacity-15"
        style={{
          fontSize: "40px",
          color: "#c9a87c",
          transform: "rotate(0deg)",
        }}
      >
        ❦
      </div>
      <div
        className="absolute top-8 right-8 opacity-15"
        style={{
          fontSize: "40px",
          color: "#c9a87c",
          transform: "scaleX(-1)",
        }}
      >
        ❦
      </div>
      <div
        className="absolute bottom-8 left-8 opacity-15"
        style={{
          fontSize: "40px",
          color: "#c9a87c",
          transform: "scaleY(-1)",
        }}
      >
        ❦
      </div>
      <div
        className="absolute bottom-8 right-8 opacity-15"
        style={{
          fontSize: "40px",
          color: "#c9a87c",
          transform: "scale(-1)",
        }}
      >
        ❦
      </div>

      <FloatingHearts />

      {/* Section title */}
      <motion.div
        className="text-center mb-16 relative z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* <p
          className="mb-3"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#8b6d50",
            fontSize: "14px",
            letterSpacing: "6px",
            textTransform: "uppercase",
          }}
        >
          Introducing
        </p> */}
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#3d2e1f",
            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
          }}
        >
          Waleed Bin Khalid
        </h2>
        <p
          className="mt-3"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#a0845e",
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            fontStyle: "italic",
          }}
        >
          Son of Khalid Pervaiz
        </p>
        <div className="flex items-center justify-center gap-3 mt-5">
          <div className="h-px w-16 bg-[#c9a87c]/30" />
          <span style={{ color: "#c9a87c", fontSize: "14px" }}>✦</span>
          <div className="h-px w-16 bg-[#c9a87c]/30" />
        </div>
      </motion.div>

      {/* Groom */}
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16 lg:gap-24">
        {/* Groom */}
        <PersonCard
          name="Waleed Bin Khalid"
          role="The Groom"
          direction="left"
          isInView={isInView}
        />
      </div>

      {/* Bottom quote */}
      <motion.p
        className="text-center mt-16 relative z-20"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.4 }}
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "#a0845e",
          fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
          fontStyle: "italic",
          letterSpacing: "1px",
        }}
      >
        Your presence and prayers will make this celebration special.
      </motion.p>
    </section>
  );
}
