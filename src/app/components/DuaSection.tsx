import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function DuaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #1a1410 0%, #2a1f18 50%, #1a1410 100%)",
      }}
    >
      {/* Ambient stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 1 + Math.random() * 2,
            height: 1 + Math.random() * 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: "#c9a87c",
          }}
          animate={{ opacity: [0.1, 0.6, 0.1] }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Decorative golden arches */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] rounded-full border opacity-[0.06]"
          style={{ borderColor: "#c9a87c" }}
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] sm:w-[480px] sm:h-[480px] rounded-full border opacity-[0.04]"
          style={{ borderColor: "#c9a87c" }}
          animate={{ scale: [1.05, 1, 1.05], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Arabic Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-8"
        >
          <p
            lang="ar"
            dir="rtl"
            style={{
              fontFamily: "serif",
              color: "#e8d5b0",
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              lineHeight: 1.8,
              direction: "rtl",
            }}
          >
            بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
          </p>
        </motion.div>

        <motion.p
          lang="ur"
          dir="rtl"
          style={{
            fontFamily: "'Traditional Arabic', 'Noto Naskh Arabic', serif",
            color: "#c9a87c",
            fontSize: "20px",
            letterSpacing: 0,
            lineHeight: 2,
          }}
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
        >
          اللہ کے نام سے جو نہایت مہربان، بے حد رحم فرمانے والا ہے
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div
            className="h-px w-20"
            style={{
              background: "linear-gradient(90deg, transparent, #c9a87c)",
            }}
          />
          <motion.span
            style={{ color: "#c9a87c", fontSize: "16px" }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            ✦
          </motion.span>
          <div
            className="h-px w-20"
            style={{
              background: "linear-gradient(90deg, #c9a87c, transparent)",
            }}
          />
        </motion.div>

        {/* Quranic verse */}
        <motion.p
          lang="ar"
          dir="rtl"
          className="mb-8 text-2xl sm:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1, duration: 1 }}
          style={{
            fontFamily: "'Traditional Arabic', 'Noto Naskh Arabic', serif",
            color: "#e8d5b0",
            lineHeight: 2.2,
            letterSpacing: 0,
          }}
        >
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
          لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ
          إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ
        </motion.p>

        <motion.blockquote
          lang="ur"
          dir="rtl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 1 }}
          style={{
            fontFamily: "'Traditional Arabic', 'Noto Naskh Arabic', serif",
            color: "#d4c4a8",
            fontSize: "22px",
            lineHeight: 2.2,
          }}
          className="mb-6"
        >
          اور اس کی نشانیوں میں سے یہ ہے کہ اس نے تمہارے لیے تم ہی میں سے
          شریکِ حیات پیدا کیے تاکہ تم ان کے پاس سکون پاؤ، اور اس نے تمہارے
          درمیان محبت اور رحمت رکھ دی۔ بے شک اس میں غور و فکر کرنے والوں
          کے لیے نشانیاں ہیں۔
        </motion.blockquote>

        <motion.p
          lang="ur"
          dir="rtl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.6, duration: 1 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#8b7a5e",
            fontSize: "14px",
            letterSpacing: 0,
          }}
        >
          سورۃ الروم، آیت ۲۱
        </motion.p>

        {/* Bottom ornament */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.4 } : {}}
          transition={{ delay: 2, duration: 1 }}
          style={{ color: "#c9a87c", fontSize: "24px", letterSpacing: "12px" }}
        >
          ❦ ❦ ❦
        </motion.div>
      </motion.div>
    </section>
  );
}
