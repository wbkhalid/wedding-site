import { motion, useReducedMotion } from "motion/react";
import "./BismillahSection.css";

function Ornament() {
  return (
    <div className="bismillah-section__ornament" aria-hidden="true">
      <span />
      <svg viewBox="0 0 88 32" fill="none">
        <path d="M4 16c12 0 12-12 24-12 9 0 11 12 16 12S51 4 60 4c12 0 12 12 24 12M4 16c12 0 12 12 24 12 9 0 11-12 16-12s7 12 16 12c12 0 12-12 24-12" />
        <path d="m44 7 5 9-5 9-5-9Z" />
      </svg>
      <span />
    </div>
  );
}

export function BismillahSection({ revealed }: { revealed: boolean }) {
  const reduceMotion = useReducedMotion();

  const continueToInvitation = () => {
    const heading = document.querySelector<HTMLElement>(
      ".invitation-hero__name",
    );
    heading?.focus({ preventScroll: true });
    heading?.closest("section")?.scrollIntoView({
      behavior: reduceMotion ? "instant" : "smooth",
      block: "start",
    });
  };

  return (
    <section className="bismillah-section" aria-labelledby="bismillah-heading">
      <div className="bismillah-section__frame" aria-hidden="true" />
      <div className="bismillah-section__halo" aria-hidden="true" />
      <motion.div
        className="bismillah-section__content"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 18 }}
        transition={{ duration: reduceMotion ? 0 : 1.1 }}
      >
        <span className="bismillah-section__star" aria-hidden="true">
          ✦
        </span>
        <h2 id="bismillah-heading" tabIndex={-1}>
          Let’s begin everything with
        </h2>
        <Ornament />
        <p className="bismillah-section__arabic" lang="ar" dir="rtl">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
        {/* <p className="bismillah-section__transliteration" lang="en">
          Bismillah-ir-Rahman-ir-Raheem
        </p> */}
        <Ornament />
        <p className="bismillah-section__translation" lang="en">
          In the name of Allah, the Most Gracious, the Most Merciful.
        </p>
        {/* <button
          className="bismillah-section__continue"
          type="button"
          onClick={continueToInvitation}
        >
          <span>Continue to the invitation</span>
          <span aria-hidden="true">↓</span>
        </button> */}
        <motion.button
          animate={reduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bismillah-section__scroll-prompt flex flex-col items-center gap-2"
          type="button"
          onClick={continueToInvitation}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#a0845e",
              fontSize: "12px",
              letterSpacing: "0",
              textTransform: "uppercase",
            }}
          >
            Scroll down or tap to view the invitation
          </span>
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
        </motion.button>
      </motion.div>
    </section>
  );
}
