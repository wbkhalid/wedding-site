import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Send, CheckCircle, Heart } from "lucide-react";
import confetti from "canvas-confetti";

export function RSVPSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Golden confetti celebration!
    const colors = ["#c9a87c", "#e8d5b0", "#f5e6d8", "#d4a574", "#e8b4b8"];
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors,
    });
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors,
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors,
      });
    }, 300);
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "'Cormorant Garamond', serif",
    color: "#3d2e1f",
    fontSize: "16px",
    background: "rgba(255,255,255,0.6)",
    border: "1px solid rgba(201, 168, 124, 0.3)",
    borderRadius: "12px",
    padding: "14px 18px",
    width: "100%",
    outline: "none",
    transition: "all 0.3s",
  };

  return (
    <section
      ref={ref}
      className="py-28 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #fdf6f0 0%, #fce4ec 50%, #fdf6f0 100%)",
      }}
    >
      {/* Ambient hearts */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            color: "rgba(201, 135, 140, 0.08)",
            fontSize: 20 + Math.random() * 40,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          ♥
        </motion.div>
      ))}

      <motion.div
        className="max-w-md mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
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
            We'd Love to Have You
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#3d2e1f",
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            }}
          >
            RSVP
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-16 bg-[#c9a87c]/30" />
            <Heart size={14} style={{ color: "#c9a87c" }} />
            <div className="h-px w-16 bg-[#c9a87c]/30" />
          </div>
        </div>

        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            className="rounded-3xl p-8 sm:p-10"
            style={{
              background: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(201, 168, 124, 0.2)",
              boxShadow: "0 20px 60px rgba(139, 109, 80, 0.08)",
              backdropFilter: "blur(20px)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Name */}
            <div className="mb-5">
              <label
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#8b6d50",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
                className="block mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "rgba(201, 168, 124, 0.6)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(201, 168, 124, 0.3)")}
              />
            </div>

            {/* Attending */}
            <div className="mb-5">
              <label
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#8b6d50",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
                className="block mb-3"
              >
                Will You Attend?
              </label>
              <div className="flex gap-3">
                {(["yes", "no"] as const).map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setAttending(val)}
                    className="flex-1 py-3 rounded-xl transition-all duration-300"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "15px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      background:
                        attending === val
                          ? "linear-gradient(135deg, #c9a87c, #a0845e)"
                          : "rgba(255,255,255,0.6)",
                      color: attending === val ? "#fff" : "#8b6d50",
                      border:
                        attending === val
                          ? "1px solid transparent"
                          : "1px solid rgba(201, 168, 124, 0.3)",
                      boxShadow:
                        attending === val
                          ? "0 4px 15px rgba(160, 132, 94, 0.3)"
                          : "none",
                    }}
                  >
                    {val === "yes" ? "Joyfully Accept" : "Regretfully Decline"}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#8b6d50",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
                className="block mb-2"
              >
                A Wish for the Couple
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your heartfelt wishes..."
                rows={3}
                style={{
                  ...inputStyle,
                  resize: "none" as const,
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(201, 168, 124, 0.6)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(201, 168, 124, 0.3)")}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              className="w-full py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #c9a87c, #a0845e)",
                color: "#fff",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "15px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                boxShadow: "0 6px 25px rgba(160, 132, 94, 0.3)",
              }}
              whileHover={{ scale: 1.02, boxShadow: "0 8px 35px rgba(160, 132, 94, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={16} />
              Send Your Response
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            className="text-center rounded-3xl p-12"
            style={{
              background: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(201, 168, 124, 0.2)",
              boxShadow: "0 20px 60px rgba(139, 109, 80, 0.08)",
              backdropFilter: "blur(20px)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              <CheckCircle size={56} style={{ color: "#c9a87c", margin: "0 auto 16px" }} />
            </motion.div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#3d2e1f",
                fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
              }}
              className="mb-3"
            >
              Thank You, {name}!
            </h3>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#8b6d50",
                fontSize: "1.05rem",
                lineHeight: 1.8,
              }}
            >
              {attending === "yes"
                ? "We are overjoyed that you will be joining us on our special day! Your presence will make it truly unforgettable."
                : "We understand, and we appreciate you letting us know. You will be dearly missed, and you'll be in our hearts."}
            </p>
            <motion.div
              className="mt-6"
              style={{ color: "#c9a87c", fontSize: "24px" }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ♥
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
