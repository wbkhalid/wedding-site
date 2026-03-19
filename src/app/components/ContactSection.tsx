import { motion } from "motion/react";
import { Phone, User } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-24 px-6" style={{ background: "#fdf6f0" }}>
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p style={{ fontFamily: "'Cormorant Garamond', serif", color: "#8b6d50", fontSize: "14px", letterSpacing: "5px", textTransform: "uppercase" }} className="mb-4">
          Get In Touch
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#3d2e1f", fontSize: "clamp(1.5rem, 4vw, 2.2rem)" }} className="mb-10">
          Contact
        </h2>

        <div
          className="rounded-2xl p-8 mx-auto inline-block"
          style={{
            background: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(201, 168, 124, 0.25)",
            boxShadow: "0 10px 40px rgba(139, 109, 80, 0.08)",
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(201, 168, 124, 0.15)" }}>
              <User size={20} style={{ color: "#8b6d50" }} />
            </div>
            <div className="text-left">
              <p style={{ fontFamily: "'Playfair Display', serif", color: "#3d2e1f", fontSize: "1.1rem" }}>
                Mr. Ali Hassan Bodla
              </p>
            </div>
          </div>

          <a
            href="tel:03464429571"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 mt-2"
            style={{
              background: "linear-gradient(135deg, #c9a87c, #a0845e)",
              color: "#fff",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "15px",
              letterSpacing: "2px",
              textDecoration: "none",
              boxShadow: "0 4px 15px rgba(160, 132, 94, 0.3)",
            }}
          >
            <Phone size={16} />
            0346-4429571
          </a>
        </div>
      </motion.div>
    </section>
  );
}
