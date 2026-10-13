import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import "./WalimaOpening.css";

type IntroStage = "idle" | "envelope-opening" | "invitation-reveal" | "curtains-opening" | "completed";
interface EnvelopeProps {
  onOpen: () => void;
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
    <motion.div
      className="royal-seal"
      initial={false}
      animate={{
        opacity: opening ? [1, 1, 0] : 1,
        scale: opening ? [1, 1.08, 0.88] : 1,
        y: opening ? -18 : 0,
        rotate: opening ? -8 : 0,
      }}
      transition={{ duration: 0.55, ease: "easeInOut" }}
    >
      {(["left", "right"] as const).map((side) => (
        <div key={side} className={`royal-seal__half royal-seal__half--${side}`}>
          <span>W</span>
        </div>
      ))}
    </motion.div>
  );
}
function LuxuryEnvelope({ stage, onOpen, disabled }: { stage: IntroStage; onOpen: () => void; disabled: boolean }) {
  const flapRef = useRef<HTMLDivElement>(null);
  const opening = stage !== "idle";
  const reveal = stage === "invitation-reveal" || stage === "curtains-opening";
  return (
    <motion.div
      className="royal-envelope-camera"
      animate={{ opacity: stage === "curtains-opening" ? 0 : 1, y: reveal ? 48 : opening ? 8 : 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <button
        className="royal-envelope"
        type="button"
        onClick={onOpen}
        disabled={disabled}
        aria-label="Open the Walima invitation envelope"
      >
        <div className="royal-envelope__back" />
        <motion.div
          className="royal-card"
          initial={false}
          animate={{ y: reveal ? "-106%" : "0%", scale: reveal ? 1.025 : 1 }}
          transition={{ y: { duration: 1.65, ease: [0.33, 0, 0.2, 1] }, scale: { duration: 0.8, delay: reveal ? 0.8 : 0, ease } }}
        >
          <div className="royal-card__border">
            <FloralOrnament className="royal-card__floral" />
            <p className="royal-card__eyebrow">You're Cordially Invited</p>
            <p className="royal-card__title">Walima Reception</p>
            <p className="royal-card__name">Waleed Bin Khalid</p>
            <div className="royal-card__rule" />
          </div>
        </motion.div>
        <div className="royal-envelope__front">
          <FloralOrnament className="royal-envelope__floral royal-envelope__floral--left" />
          <FloralOrnament className="royal-envelope__floral royal-envelope__floral--right" />
        </div>
        <motion.div
          ref={flapRef}
          className="royal-envelope__flap"
          initial={false}
          animate={{ rotateX: opening ? 174 : 0 }}
          transition={{ duration: 1.25, delay: opening ? 0.4 : 0, ease: [0.45, 0, 0.2, 1] }}
          onUpdate={(latest) => {
            if (flapRef.current) {
              flapRef.current.style.zIndex = Number(latest.rotateX) > 90 ? "1" : "5";
            }
          }}
        >
          <div className="royal-envelope__flap-face" />
          <div className="royal-envelope__flap-reverse" />
        </motion.div>
        <WaxSeal opening={opening} />
      </button>
    </motion.div>
  );
}

export function Envelope({ onOpen, onReveal, onComplete }: EnvelopeProps) {
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
      window.setTimeout(() => setStage("invitation-reveal"), 1750),
      window.setTimeout(() => {
        callbacks.current.onReveal();
        setStage("curtains-opening");
      }, 4100),
      window.setTimeout(() => {
        if (completedRef.current) return;
        completedRef.current = true;
        setStage("completed");
        callbacks.current.onComplete();
      }, 5000),
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
    onOpen();
    if (reduceMotion) { completeImmediately(); return; }
    setStage("envelope-opening");
    setStarted(true);
  };

  return (
    <section className="royal-intro" data-stage={stage} aria-label="Royal Walima invitation opening">
      <motion.div className="royal-scene" animate={{ opacity: stage === "curtains-opening" ? 0 : 1 }} transition={{ duration: 0.8, ease }}>
        {!reduceMotion && <GoldenParticles />}
        <div className="royal-scene__frame" aria-hidden="true" />
        <LuxuryEnvelope stage={stage} onOpen={start} disabled={started} />
        <motion.p className="royal-intro__hint" animate={{ opacity: started ? 0 : 1, y: started ? 12 : 0 }} transition={{ duration: 0.4 }}>
          Click the envelope to open your invitation
        </motion.p>
      </motion.div>
      <span role="status" className="sr-only">{started ? "Opening your Walima invitation" : ""}</span>
    </section>
  );
}
