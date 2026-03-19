import { useState, useRef, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

import { Envelope } from "./components/Envelope";
import { MusicControl } from "./components/MusicControl";
import { HeroSection } from "./components/HeroSection";
import { CountdownTimer } from "./components/CountdownTimer";
import { InvitationMessage } from "./components/InvitationMessage";
import { LocationSection } from "./components/LocationSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingPetals } from "./components/FloatingPetals";
import { CoupleSection } from "./components/CoupleSection";
import { DuaSection } from "./components/DuaSection";
import { EventSchedule } from "./components/EventSchedule";
import { BlessingsWall } from "./components/BlessingsWall";

const MUSIC_URLS = ["/music/wedding.mp3"];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio
  const initAudio = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio(MUSIC_URLS[0]);
      audio.loop = true;
      audio.volume = 0.3;
      audio.preload = "auto";

      audio.onerror = () => {
        audio.src = MUSIC_URLS[1];
      };

      audioRef.current = audio;
    }
    return audioRef.current;
  }, []);

  // Play audio
  const playAudio = useCallback(async () => {
    const audio = initAudio();

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (err) {
      console.log("Autoplay blocked:", err);
    }
  }, [initAudio]);

  // Envelope open
  const handleOpen = () => {
    setIsOpen(true);

    // slight delay for better autoplay success
    setTimeout(() => {
      playAudio();
    }, 100);
  };

  // Toggle music
  const toggleMusic = useCallback(() => {
    const audio = initAudio();

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log(err));
    }
  }, [isPlaying, initAudio]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#fdf6f0" }}>
      <AnimatePresence mode="wait">
        {!isOpen && <Envelope key="envelope" onOpen={handleOpen} />}
      </AnimatePresence>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <FloatingPetals />

          {/* ✅ Music Control */}
          <MusicControl isPlaying={isPlaying} onToggle={toggleMusic} />

          <HeroSection />
          <DuaSection />
          <CountdownTimer />
          <CoupleSection />
          <EventSchedule />
          <InvitationMessage />
          <LocationSection />
          {/* <BlessingsWall /> */}
          <ContactSection />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
