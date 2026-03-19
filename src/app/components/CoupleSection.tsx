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
    []
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
  type: "groom" | "bride";
  direction: "left" | "right";
  isInView: boolean;
}

function GroomIllustration() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="groomSuit" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2c2c2c" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        <linearGradient id="groomSkin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8c4a0" />
          <stop offset="100%" stopColor="#d4a574" />
        </linearGradient>
        <radialGradient id="groomBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f5ebe0" />
          <stop offset="100%" stopColor="#e8d5c4" />
        </radialGradient>
      </defs>
      {/* Background */}
      <circle cx="100" cy="100" r="98" fill="url(#groomBg)" />
      {/* Body / Suit */}
      <path d="M60,200 Q60,155 75,140 L80,135 Q100,128 120,135 L125,140 Q140,155 140,200" fill="url(#groomSuit)" />
      {/* Shirt collar */}
      <path d="M85,138 L100,150 L115,138" fill="none" stroke="#f5f5f5" strokeWidth="2.5" />
      {/* Tie */}
      <path d="M100,142 L96,160 L100,175 L104,160 Z" fill="#c9a87c" />
      {/* Neck */}
      <rect x="92" y="118" width="16" height="22" rx="8" fill="url(#groomSkin)" />
      {/* Head */}
      <ellipse cx="100" cy="90" rx="32" ry="38" fill="url(#groomSkin)" />
      {/* Hair */}
      <path d="M68,82 Q68,48 100,48 Q132,48 132,82 Q130,65 100,62 Q70,65 68,82" fill="#1a1a1a" />
      <path d="M68,82 Q65,75 68,68 Q72,58 85,55" fill="#1a1a1a" />
      {/* Eyes */}
      <ellipse cx="86" cy="88" rx="4" ry="3" fill="#2c2c2c" />
      <ellipse cx="114" cy="88" rx="4" ry="3" fill="#2c2c2c" />
      <circle cx="87.5" cy="87" r="1" fill="#fff" />
      <circle cx="115.5" cy="87" r="1" fill="#fff" />
      {/* Eyebrows */}
      <path d="M79,82 Q86,78 92,81" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M108,81 Q114,78 121,82" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
      {/* Nose */}
      <path d="M100,90 Q97,98 100,100 Q103,98 100,90" fill="none" stroke="#c4956a" strokeWidth="1" />
      {/* Smile */}
      <path d="M90,106 Q100,114 110,106" fill="none" stroke="#b5845a" strokeWidth="1.5" strokeLinecap="round" />
      {/* Ears */}
      <ellipse cx="68" cy="90" rx="5" ry="7" fill="url(#groomSkin)" />
      <ellipse cx="132" cy="90" rx="5" ry="7" fill="url(#groomSkin)" />
      {/* Lapels */}
      <path d="M80,135 L88,160 L80,165" fill="#222" />
      <path d="M120,135 L112,160 L120,165" fill="#222" />
      {/* Pocket square */}
      <path d="M74,155 L78,148 L82,155" fill="#c9a87c" opacity="0.8" />
    </svg>
  );
}

function BrideIllustration() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <linearGradient id="brideDress" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff5f5" />
          <stop offset="100%" stopColor="#f0e0e0" />
        </linearGradient>
        <linearGradient id="brideSkin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5d5b8" />
          <stop offset="100%" stopColor="#e8c4a0" />
        </linearGradient>
        <radialGradient id="brideBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fce4ec" />
          <stop offset="100%" stopColor="#f3d1d8" />
        </radialGradient>
        <linearGradient id="brideHair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </linearGradient>
      </defs>
      {/* Background */}
      <circle cx="100" cy="100" r="98" fill="url(#brideBg)" />
      {/* Dress */}
      <path d="M55,200 Q58,155 72,140 Q80,133 100,130 Q120,133 128,140 Q142,155 145,200" fill="url(#brideDress)" />
      {/* Dress lace detail */}
      <path d="M72,145 Q86,138 100,142 Q114,138 128,145" fill="none" stroke="#e8d5c4" strokeWidth="1" opacity="0.6" />
      <path d="M68,160 Q84,153 100,157 Q116,153 132,160" fill="none" stroke="#e8d5c4" strokeWidth="1" opacity="0.5" />
      {/* Necklace */}
      <path d="M83,128 Q100,136 117,128" fill="none" stroke="#c9a87c" strokeWidth="1.5" />
      <circle cx="100" cy="135" r="2.5" fill="#c9a87c" />
      {/* Neck */}
      <rect x="92" y="115" width="16" height="20" rx="8" fill="url(#brideSkin)" />
      {/* Head */}
      <ellipse cx="100" cy="85" rx="30" ry="36" fill="url(#brideSkin)" />
      {/* Hair - long flowing */}
      <path d="M70,78 Q70,45 100,42 Q130,45 130,78 Q128,60 100,56 Q72,60 70,78" fill="url(#brideHair)" />
      {/* Side hair flowing down */}
      <path d="M70,78 Q64,90 62,115 Q60,130 65,145" fill="url(#brideHair)" stroke="url(#brideHair)" strokeWidth="8" strokeLinecap="round" />
      <path d="M130,78 Q136,90 138,115 Q140,130 135,145" fill="url(#brideHair)" stroke="url(#brideHair)" strokeWidth="8" strokeLinecap="round" />
      {/* Dupatta / veil hint */}
      <path d="M66,72 Q50,60 45,80 Q42,100 50,130" fill="none" stroke="#f5e6e8" strokeWidth="3" opacity="0.5" />
      <path d="M134,72 Q150,60 155,80 Q158,100 150,130" fill="none" stroke="#f5e6e8" strokeWidth="3" opacity="0.5" />
      {/* Eyes */}
      <ellipse cx="88" cy="84" rx="3.5" ry="3" fill="#2c2c2c" />
      <ellipse cx="112" cy="84" rx="3.5" ry="3" fill="#2c2c2c" />
      <circle cx="89" cy="83" r="1" fill="#fff" />
      <circle cx="113" cy="83" r="1" fill="#fff" />
      {/* Eyelashes */}
      <path d="M83,81 Q85,78 88,80" fill="none" stroke="#1a1a1a" strokeWidth="0.8" />
      <path d="M112,80 Q115,78 117,81" fill="none" stroke="#1a1a1a" strokeWidth="0.8" />
      {/* Eyebrows */}
      <path d="M82,78 Q88,74 93,77" fill="none" stroke="#1a1a1a" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M107,77 Q112,74 118,78" fill="none" stroke="#1a1a1a" strokeWidth="1.2" strokeLinecap="round" />
      {/* Nose */}
      <path d="M100,86 Q98,93 100,95 Q102,93 100,86" fill="none" stroke="#d4a574" strokeWidth="0.8" />
      {/* Lips */}
      <path d="M93,101 Q100,107 107,101" fill="#d4756a" opacity="0.5" />
      <path d="M93,101 Q100,98 107,101" fill="#e08080" opacity="0.4" />
      {/* Blush */}
      <circle cx="80" cy="94" r="6" fill="#f0a0a0" opacity="0.15" />
      <circle cx="120" cy="94" r="6" fill="#f0a0a0" opacity="0.15" />
      {/* Hair accessory / Tikka */}
      <circle cx="100" cy="52" r="3" fill="#c9a87c" />
      <path d="M100,55 L100,62" stroke="#c9a87c" strokeWidth="1" />
      <circle cx="100" cy="64" r="2" fill="#c9a87c" />
      {/* Earrings */}
      <circle cx="67" cy="92" r="2" fill="#c9a87c" />
      <line x1="67" y1="94" x2="67" y2="100" stroke="#c9a87c" strokeWidth="1" />
      <circle cx="67" cy="101" r="1.5" fill="#c9a87c" />
      <circle cx="133" cy="92" r="2" fill="#c9a87c" />
      <line x1="133" y1="94" x2="133" y2="100" stroke="#c9a87c" strokeWidth="1" />
      <circle cx="133" cy="101" r="1.5" fill="#c9a87c" />
    </svg>
  );
}

function PersonCard({ name, role, type, direction, isInView }: PersonCardProps) {
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
          {/* Illustration container */}
          <div
            className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden"
            style={{
              border: "3px solid rgba(201,168,124,0.4)",
              boxShadow:
                "0 10px 40px rgba(139,109,80,0.15), inset 0 0 20px rgba(0,0,0,0.05)",
            }}
          >
            {type === "groom" ? <GroomIllustration /> : <BrideIllustration />}
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
        <p
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
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#3d2e1f",
            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
          }}
        >
          The Couple
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
          A beautiful journey begins here
        </p>
        <div className="flex items-center justify-center gap-3 mt-5">
          <div className="h-px w-16 bg-[#c9a87c]/30" />
          <span style={{ color: "#c9a87c", fontSize: "14px" }}>✦</span>
          <div className="h-px w-16 bg-[#c9a87c]/30" />
        </div>
      </motion.div>

      {/* Couple cards */}
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16 lg:gap-24">
        {/* Groom */}
        <PersonCard
          name="Hamzah Hassan Bodla"
          role="The Groom"
          type="groom"
          direction="left"
          isInView={isInView}
        />

        {/* Center connector */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Connecting line (vertical on mobile, horizontal on desktop) */}
          <motion.div
            className="hidden sm:block w-px h-32"
            style={{
              background:
                "linear-gradient(180deg, transparent, #c9a87c, transparent)",
            }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Sparkle center */}
          <motion.div
            className="relative"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span
              style={{
                fontSize: "28px",
                color: "#c9a87c",
                textShadow: "0 0 20px rgba(201,168,124,0.5)",
              }}
            >
              ✦
            </span>
          </motion.div>

          {/* Connecting line bottom */}
          <motion.div
            className="hidden sm:block w-px h-32"
            style={{
              background:
                "linear-gradient(180deg, transparent, #c9a87c, transparent)",
            }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          />
        </motion.div>

        {/* Bride */}
        <PersonCard
          name="Breeha Ali"
          role="The Bride"
          type="bride"
          direction="right"
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
        "Two souls, one heart, one journey forever."
      </motion.p>
    </section>
  );
}