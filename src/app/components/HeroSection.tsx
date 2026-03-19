import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
      {/* Decorative bg */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #fdf6f0 0%, #fce4ec 30%, #fdf6f0 60%, #f5e6d8 100%)",
        }}
      />

      {/* Animated decorative circles */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #d4a574, transparent)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #e8b4b8, transparent)" }}
        animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rotating ornamental ring */}
      <motion.div
        className="absolute w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] rounded-full border opacity-[0.04]"
        style={{ borderColor: "#c9a87c" }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="mb-6"
        >
          <motion.span
            style={{ color: "#c9a87c", fontSize: "36px" }}
            animate={{ rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            ✦
          </motion.span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#8b6d50",
            fontSize: "14px",
            letterSpacing: "6px",
            textTransform: "uppercase",
          }}
          className="mb-8"
        >
          Together with their families
        </motion.p>

        {/* Groom name in script */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            fontFamily: "'Great Vibes', cursive",
            color: "#3d2e1f",
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
            lineHeight: 1.2,
          }}
        >
          Hamzah
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#8b6d50",
            fontSize: "clamp(0.8rem, 2vw, 1rem)",
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
          className="mt-1"
        >
          Hassan Bodla
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="my-5 flex items-center justify-center gap-4"
        >
          <motion.div
            className="h-px w-16"
            style={{ background: "linear-gradient(90deg, transparent, #c9a87c)" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          />
          <motion.span
            style={{
              fontFamily: "'Great Vibes', cursive",
              color: "#c9a87c",
              fontSize: "36px",
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            &
          </motion.span>
          <motion.div
            className="h-px w-16"
            style={{ background: "linear-gradient(90deg, #c9a87c, transparent)" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          />
        </motion.div>

        {/* Bride name in script */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            fontFamily: "'Great Vibes', cursive",
            color: "#3d2e1f",
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
            lineHeight: 1.2,
          }}
        >
          Breeha
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#8b6d50",
            fontSize: "clamp(0.8rem, 2vw, 1rem)",
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
          className="mt-1"
        >
          Ali
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-12"
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#8b6d50",
              fontSize: "14px",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Request the pleasure of your company
          </p>
          <motion.div
            className="mt-6 inline-block px-8 py-3 rounded-full"
            style={{
              border: "1px solid rgba(201, 168, 124, 0.4)",
              background: "rgba(201, 168, 124, 0.08)",
            }}
            whileHover={{
              background: "rgba(201, 168, 124, 0.15)",
              boxShadow: "0 0 30px rgba(201, 168, 124, 0.15)",
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#3d2e1f",
                fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
                letterSpacing: "2px",
              }}
            >
              Sunday, 5th April 2026
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#a0845e",
                fontSize: "12px",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Scroll Down
            </p>
            <div
              className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
              style={{ borderColor: "rgba(160, 132, 94, 0.4)" }}
            >
              <motion.div
                className="w-1 h-2 rounded-full"
                style={{ background: "#a0845e" }}
                animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
