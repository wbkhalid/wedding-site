import { motion } from "motion/react";

export function InvitationMessage() {
  return (
    <section className="py-24 px-6" style={{ background: "#fdf6f0" }}>
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-12 bg-[#c9a87c]/40" />
          <span style={{ color: "#c9a87c", fontSize: "20px" }}>✿</span>
          <div className="h-px w-12 bg-[#c9a87c]/40" />
        </div>

        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#5a4a3a",
            fontSize: "clamp(1.05rem, 2.5vw, 1.3rem)",
            lineHeight: 2,
            fontStyle: "italic",
          }}
        >
          On 5th April 2026, Mrs. Mian Nizam Tariq Bodla and her beloved ones will be celebrating the wedding of her beloved son and would be delighted to have you join us in celebrating this special day. We eagerly await your presence!
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="h-px w-12 bg-[#c9a87c]/40" />
          <span style={{ color: "#c9a87c", fontSize: "20px" }}>✿</span>
          <div className="h-px w-12 bg-[#c9a87c]/40" />
        </div>
      </motion.div>
    </section>
  );
}
