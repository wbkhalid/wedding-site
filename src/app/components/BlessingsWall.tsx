import { motion, useInView } from "motion/react";
import { useRef, useMemo } from "react";

const blessings = [
  { text: "May your love grow deeper with each passing day. Mashallah!", author: "Fatima Aunty" },
  { text: "Wishing you a lifetime of laughter, love, and endless chai together.", author: "Hassan Uncle" },
  { text: "Allah has blessed you both — may He continue to shower His blessings.", author: "Amina Baji" },
  { text: "Two beautiful hearts, one beautiful journey. So happy for you both!", author: "Zainab" },
  { text: "May your home be filled with warmth, peace, and biryani!", author: "Ahmed Bhai" },
  { text: "Your love story inspires us all. May it only grow more beautiful.", author: "Sana & Usman" },
  { text: "Baraka Allahu lakuma — may Allah bless you both abundantly.", author: "Imam Sahab" },
  { text: "From childhood friends to family — couldn't be happier! Much love.", author: "Rabia" },
  { text: "May every sunrise bring you closer and every sunset bring you peace.", author: "Tariq Uncle" },
];

function BlessingCard({ text, author, index }: { text: string; author: string; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-40px" });

  // Vary card heights subtly for organic feel
  const rotation = useMemo(() => -2 + Math.random() * 4, []);

  return (
    <motion.div
      ref={cardRef}
      className="break-inside-avoid mb-4"
      initial={{ opacity: 0, y: 30, rotate: rotation * 2 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: rotation } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{
        scale: 1.03,
        rotate: 0,
        boxShadow: "0 12px 40px rgba(201, 168, 124, 0.2)",
      }}
    >
      <div
        className="rounded-2xl p-6 transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.75)",
          border: "1px solid rgba(201, 168, 124, 0.15)",
          boxShadow: "0 4px 20px rgba(139, 109, 80, 0.05)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Quote mark */}
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#c9a87c",
            fontSize: "32px",
            lineHeight: 1,
            opacity: 0.4,
          }}
        >
          "
        </span>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#5a4a3a",
            fontSize: "0.95rem",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
          className="mt-1 mb-3"
        >
          {text}
        </p>
        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-[#c9a87c]/15" />
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#a0845e",
              fontSize: "13px",
              letterSpacing: "1px",
            }}
          >
            — {author}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function BlessingsWall() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-28 px-6"
      style={{
        background: "linear-gradient(180deg, #fdf6f0 0%, #fce4ec 30%, #fdf6f0 70%, #f5e6d8 100%)",
      }}
    >
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="text-center mb-16">
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
            Words of Love
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#3d2e1f",
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            }}
          >
            Blessings & Wishes
          </h2>
          <p
            className="mt-3"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#a0845e",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              fontStyle: "italic",
            }}
          >
            Heartfelt messages from loved ones
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-16 bg-[#c9a87c]/30" />
            <span style={{ color: "#c9a87c", fontSize: "14px" }}>♥</span>
            <div className="h-px w-16 bg-[#c9a87c]/30" />
          </div>
        </div>

        {/* Masonry-style columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {blessings.map((b, i) => (
            <BlessingCard key={b.author} text={b.text} author={b.author} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
