import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1758810742200-b5593d7d5a1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmxvd2VycyUyMGRlY29yYXRpb24lMjBlbGVnYW50JTIwZ29sZHxlbnwxfHx8fDE3NzM4MTIyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Wedding Flowers",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1769230387364-8b0c2b63e18b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjBlbGVnYW50JTIwbmlnaHQlMjBsaWdodHN8ZW58MXx8fHwxNzczODEyMjIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Wedding Venue",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1768341395921-93a8444e007e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBnb2xkJTIwY2xvc2UlMjB1cCUyMHNpbGt8ZW58MXx8fHwxNzczODEyMjIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Wedding Rings",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1764641405208-8f4116556901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwbWVobmRpJTIwaGVubmElMjBoYW5kcyUyMGJlYXV0aWZ1bHxlbnwxfHx8fDE3NzM4MTIyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Mehndi Art",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1769812343875-c40f9ec7f846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZSUyMGVsZWdhbnQlMjBsdXh1cnklMjBnb2xkJTIwd2hpdGV8ZW58MXx8fHwxNzczODEyMjIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Wedding Cake",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1773370812364-7d0e882e0b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdGFibGUlMjBzZXR0aW5nJTIwZWxlZ2FudCUyMGNhbmRsZXMlMjBmbG9yYWx8ZW58MXx8fHwxNzczODEyMjIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Table Setting",
    span: "col-span-2 row-span-1",
  },
];

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const prev = () =>
    setLightbox((c) => (c !== null ? (c - 1 + photos.length) % photos.length : null));
  const next = () =>
    setLightbox((c) => (c !== null ? (c + 1) % photos.length : null));

  return (
    <>
      <section
        ref={ref}
        className="py-28 px-6"
        style={{
          background: "linear-gradient(180deg, #fdf6f0 0%, #f8ede0 50%, #fdf6f0 100%)",
        }}
      >
        <motion.div
          className="max-w-4xl mx-auto"
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
              Moments to Cherish
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#3d2e1f",
                fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              }}
            >
              Gallery
            </h2>
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="h-px w-16 bg-[#c9a87c]/30" />
              <span style={{ color: "#c9a87c", fontSize: "14px" }}>✦</span>
              <div className="h-px w-16 bg-[#c9a87c]/30" />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 auto-rows-[180px] sm:auto-rows-[200px] gap-3 sm:gap-4">
            {photos.map((photo, i) => (
              <motion.div
                key={photo.alt}
                className={`${photo.span} relative rounded-xl overflow-hidden cursor-pointer group`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                onClick={() => openLightbox(i)}
              >
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4"
                  style={{
                    background: "linear-gradient(180deg, transparent 40%, rgba(26,20,16,0.7) 100%)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "#e8d5b0",
                      fontSize: "14px",
                      letterSpacing: "2px",
                    }}
                  >
                    {photo.alt}
                  </p>
                </div>
                {/* Gold border on hover */}
                <div
                  className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#c9a87c]/40 transition-all duration-500"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: "rgba(10,8,6,0.95)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl max-h-[85vh] mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <p
                className="text-center mt-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#c9a87c",
                  fontSize: "16px",
                  letterSpacing: "3px",
                }}
              >
                {photos[lightbox].alt}
              </p>
            </motion.div>

            {/* Controls */}
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ background: "rgba(201,168,124,0.2)", color: "#c9a87c" }}
            >
              <X size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ background: "rgba(201,168,124,0.2)", color: "#c9a87c" }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ background: "rgba(201,168,124,0.2)", color: "#c9a87c" }}
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
