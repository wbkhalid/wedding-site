import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Clock, Utensils, CalendarDays, MapPin } from "lucide-react";
import "./EventSchedule.css";

const events = [
  {
    time: "Sunday",
    title: "15 November 2026",
    description: "Walima celebration",
    icon: CalendarDays,
  },
  {
    time: "Lunch",
    title: "Walima Lunch",
    description: "Join Waleed Bin Khalid and family for a celebratory lunch",
    icon: Utensils,
  },
  {
    time: "Venue",
    title: "Mehfil Event Complex",
    description: "We look forward to celebrating with you",
    icon: MapPin,
  },
];
export function EventSchedule() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="walima-details py-28 px-6"
      aria-labelledby="walima-details-heading"
      style={{
        background:
          "linear-gradient(180deg, #fdf6f0 0%, #f5e6d8 50%, #fdf6f0 100%)",
      }}
    >
      <motion.div
        className="max-w-xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Section header */}
        <div className="walima-details-header text-center mb-16">
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
            Walima Day
          </p>
          <h2
            id="walima-details-heading"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#3d2e1f",
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            }}
          >
            Walima Details
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-16 bg-[#c9a87c]/30" />
            <Clock size={14} style={{ color: "#c9a87c" }} />
            <div className="h-px w-16 bg-[#c9a87c]/30" />
          </div>
        </div>

        {/* Timeline */}
        <div className="walima-details-timeline relative">
          {/* Vertical line */}
          <motion.div
            className="walima-details-line absolute left-8 sm:left-10 top-0 bottom-0 w-px"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            // transform origin top
            {...{
              style: {
                background:
                  "linear-gradient(180deg, transparent, #c9a87c, transparent)",
                transformOrigin: "top",
              },
            }}
          />

          {events.map((event, i) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.title}
                className="walima-details-row relative flex items-start gap-6 mb-10 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="walima-details-icon relative z-10 flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center"
                  aria-hidden="true"
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    border: "2px solid rgba(201, 168, 124, 0.4)",
                    boxShadow: "0 4px 20px rgba(139, 109, 80, 0.1)",
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 30px rgba(201, 168, 124, 0.3)",
                  }}
                >
                  <Icon size={20} style={{ color: "#8b6d50" }} />
                </motion.div>

                {/* Content card */}
                <div
                  className="walima-details-content min-w-0 flex-1 rounded-2xl p-5 sm:p-6"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(201, 168, 124, 0.15)",
                    boxShadow: "0 4px 20px rgba(139, 109, 80, 0.06)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "#c9a87c",
                      fontSize: "13px",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                    }}
                    className="mb-1"
                  >
                    {event.time}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#3d2e1f",
                      fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)",
                    }}
                    className="mb-1"
                  >
                    {event.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "#8b6d50",
                      fontSize: "0.95rem",
                    }}
                  >
                    {event.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
