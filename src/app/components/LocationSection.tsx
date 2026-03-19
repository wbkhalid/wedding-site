import { motion } from "motion/react";
import { MapPin, ExternalLink } from "lucide-react";

const MAP_URL = "https://maps.app.goo.gl/18VoqZZRUEVZPPGt8?g_st=aw";

export function LocationSection() {
  return (
    <section className="py-24 px-6" style={{ background: "linear-gradient(180deg, #f5e6d8, #fdf6f0)" }}>
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p style={{ fontFamily: "'Cormorant Garamond', serif", color: "#8b6d50", fontSize: "14px", letterSpacing: "5px", textTransform: "uppercase" }} className="mb-4">
          Join Us At
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#3d2e1f", fontSize: "clamp(1.5rem, 4vw, 2.2rem)" }} className="mb-10">
          Venue Location
        </h2>

        <div
          className="rounded-2xl p-8 sm:p-10 mx-auto"
          style={{
            background: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(201, 168, 124, 0.25)",
            boxShadow: "0 10px 40px rgba(139, 109, 80, 0.08)",
          }}
        >
          <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: "rgba(201, 168, 124, 0.15)" }}>
            <MapPin size={28} style={{ color: "#8b6d50" }} />
          </div>

          <p style={{ fontFamily: "'Cormorant Garamond', serif", color: "#5a4a3a", fontSize: "1.1rem", lineHeight: 1.8 }} className="mb-8">
            We can't wait to celebrate with you at our chosen venue. Click below for directions.
          </p>

          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #c9a87c, #a0845e)",
              color: "#fff",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "15px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
              boxShadow: "0 4px 15px rgba(160, 132, 94, 0.3)",
            }}
          >
            Open in Google Maps
            <ExternalLink size={16} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
