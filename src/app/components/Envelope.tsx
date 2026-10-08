import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "./WalimaOpening.css";

type IntroStage = "idle" | "envelope-opening" | "invitation-reveal" | "curtains-opening" | "completed";
interface EnvelopeProps {
  onReveal: () => void;
  onComplete: () => void;
}

const ease = [0.22, 1, 0.36, 1] as const;

function FloralOrnament({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 100" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.2">
        <path d="M8 91 Q67 90 90 18 Q113 90 172 91 M90 18 Q86 3 90 2 Q94 3 90 18 M43 82 Q18 57 21 43 Q41 42 49 76 M58 68 Q35 40 44 29 Q64 37 66 55 M74 47 Q58 22 70 12 Q82 22 82 32 M137 82 Q162 57 159 43 Q139 42 131 76 M122 68 Q145 40 136 29 Q116 37 114 55 M106 47 Q122 22 110 12 Q98 22 98 32" />
        <path d="M31 88 Q18 74 7 80 Q15 94 31 88 M149 88 Q162 74 173 80 Q165 94 149 88 M81 78 Q70 64 78 56 Q92 64 90 78 Q88 64 102 56 Q110 64 99 78" />
        <circle cx="90" cy="84" r="4" />
      </g>
    </svg>
  );
}

function GoldenParticles() {
  return (
    <div className="royal-particles" aria-hidden="true">
      {Array.from({ length: 14 }, (_, i) => (
        <motion.i
          key={i}
          style={{ left: `${(i * 31 + 7) % 100}%`, top: `${(i * 17 + 13) % 100}%`, width: i % 3 === 0 ? 3 : 2, height: i % 3 === 0 ? 3 : 2 }}
          animate={{ y: [12, -25, 12], opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 7 + i % 5, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function WaxSeal({ opening }: { opening: boolean }) {
  return (
    <div className="royal-seal">
      {(["left", "right"] as const).map((side) => (
        <motion.div
          key={side}
          className={`royal-seal__half royal-seal__half--${side}`}
          animate={{
            opacity: opening ? 0 : 1,
            x: opening ? (side === "left" ? -8 : 8) : 0,
            y: opening ? 16 : 0,
            rotate: opening ? (side === "left" ? -12 : 12) : 0,
          }}
          transition={{ duration: 0.6, ease }}
        >
          <span>W</span>
        </motion.div>
      ))}
    </div>
  );
}
function LuxuryEnvelope({ stage }: { stage: IntroStage }) {
  const opening = stage !== "idle";
  const reveal = stage === "invitation-reveal" || stage === "curtains-opening";
  return (
    <motion.div
      className="royal-envelope-camera"
      animate={{ scale: reveal ? 3.7 : 1, opacity: stage === "curtains-opening" ? 0 : 1, y: reveal ? 70 : 0 }}
      transition={{ duration: reveal ? 1.65 : 0.6, delay: stage === "invitation-reveal" ? 0.6 : 0, ease }}
      aria-hidden="true"
    >
      <div className="royal-envelope">
        <div className="royal-envelope__back" />
        <motion.div
          className="royal-card"
          animate={{ y: reveal ? "-67%" : "0%", opacity: opening ? 1 : 0 }}
          transition={{ duration: 1.25, ease }}
        >
          <div className="royal-card__border">
            <FloralOrnament className="royal-card__floral" />
            <p className="royal-card__eyebrow">You're Cordially Invited</p>
            <p className="royal-card__title">Walima Reception</p>
            <p className="royal-card__name">Waleed Bin Khalid</p>
            <div className="royal-card__rule" />
            <p className="royal-card__date">15 November 2026</p>
          </div>
        </motion.div>
        <div className="royal-envelope__front">
          <FloralOrnament className="royal-envelope__floral royal-envelope__floral--left" />
          <FloralOrnament className="royal-envelope__floral royal-envelope__floral--right" />
          <div className="royal-envelope__monogram">W</div>
        </div>
        <motion.div
          className="royal-envelope__flap"
          animate={{ rotateX: opening ? -175 : 0 }}
          transition={{ duration: 1.05, delay: opening ? 0.38 : 0, ease }}
          style={{ zIndex: reveal ? 1 : 5 }}
        >
          <div className="royal-envelope__flap-face" />
          <div className="royal-envelope__flap-reverse" />
        </motion.div>
        <WaxSeal opening={opening} />
      </div>
    </motion.div>
  );
}

function RoyalCurtains({ open }: { open: boolean }) {
  return (
    <motion.div className="royal-curtains" aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55, delay: open ? 0 : 0.85 }}>
      {(["left", "right"] as const).map((side) => (
        <motion.div
          key={side}
          className={`royal-curtain royal-curtain--${side}`}
          initial={{ x: "0%", scaleX: 1 }}
          animate={{ x: open ? (side === "left" ? "-96%" : "96%") : "0%", scaleX: open ? 0.88 : 1 }}
          transition={{ duration: 2.15, ease: [0.65, 0, 0.2, 1] }}
        >
          <div className="royal-curtain__hem" />
        </motion.div>
      ))}
      <motion.div className="royal-curtains__valance" animate={{ y: open ? "-105%" : "0%" }} transition={{ duration: 1.8, ease }} />
    </motion.div>
  );
}

export function Envelope({ onReveal, onComplete }: EnvelopeProps) {
  const [stage, setStage] = useState<IntroStage>("idle");
  const [started, setStarted] = useState(false);
  const startedRef = useRef(false);
  const completedRef = useRef(false);
  const reduceMotion = useReducedMotion();
  const callbacks = useRef({ onReveal, onComplete });
  callbacks.current = { onReveal, onComplete };

  useEffect(() => {
    const oldBody = document.body.style.overflow;
    const oldHtml = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = oldBody;
      document.documentElement.style.overflow = oldHtml;
    };
  }, []);

  useEffect(() => {
    if (!started) return;
    const timers = [
      window.setTimeout(() => setStage("invitation-reveal"), 1300),
      window.setTimeout(() => {
        callbacks.current.onReveal();
        setStage("curtains-opening");
      }, 3000),
      window.setTimeout(() => {
        if (completedRef.current) return;
        completedRef.current = true;
        setStage("completed");
        callbacks.current.onComplete();
      }, 5400),
    ];
    return () => timers.forEach(window.clearTimeout);
  }, [started]);

  const completeImmediately = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    setStarted(false);
    setStage("completed");
    callbacks.current.onReveal();
    callbacks.current.onComplete();
  };

  const start = () => {
    if (startedRef.current || completedRef.current) return;
    startedRef.current = true;
    if (reduceMotion) { completeImmediately(); return; }
    setStage("envelope-opening");
    setStarted(true);
  };

  const curtainsVisible = stage === "invitation-reveal" || stage === "curtains-opening";
  return (
    <section className="royal-intro" data-stage={stage} aria-label="Royal Walima invitation opening">
      <motion.div className="royal-scene" animate={{ opacity: stage === "curtains-opening" ? 0 : 1 }} transition={{ duration: 0.5 }}>
        {!reduceMotion && <GoldenParticles />}
        <div className="royal-scene__frame" aria-hidden="true" />
        <motion.header className="royal-intro__heading" animate={{ opacity: started ? 0 : 1, y: started ? -16 : 0 }} transition={{ duration: 0.5 }}>
          <p className="royal-intro__eyebrow">Waleed Bin Khalid · Walima Reception</p>
          <h1>A Special Invitation<br />Awaits You</h1>
          <FloralOrnament className="royal-intro__ornament" />
        </motion.header>
        <LuxuryEnvelope stage={stage} />
        <motion.div className="royal-intro__actions" animate={{ opacity: started ? 0 : 1 }} transition={{ duration: 0.4 }}>
          <button className="royal-open-button" type="button" disabled={started} onClick={start}>
            <span>Tap to Open</span><ArrowRight size={18} aria-hidden="true" />
          </button>
          <p>Mrs. Khalid Pervaiz &amp; family</p>
          <span>Sunday, 15 November 2026 · Lunch</span>
        </motion.div>
      </motion.div>
      {curtainsVisible && <RoyalCurtains open={stage === "curtains-opening"} />}
      <span role="status" className="sr-only">{started ? "Opening your Walima invitation" : ""}</span>
    </section>
  );
}