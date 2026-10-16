import { useState, useRef, useCallback, useEffect } from "react";
import { Envelope } from "./components/Envelope";
import { MusicControl } from "./components/MusicControl";
import { HeroSection } from "./components/HeroSection";
import { BismillahSection } from "./components/BismillahSection";
import { CountdownTimer } from "./components/CountdownTimer";
import { InvitationMessage } from "./components/InvitationMessage";
import { LocationSection } from "./components/LocationSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingPetals } from "./components/FloatingPetals";
import { CoupleSection } from "./components/CoupleSection";
import { DuaSection } from "./components/DuaSection";
import { EventSchedule } from "./components/EventSchedule";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicError, setMusicError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pageRef = useRef<HTMLElement | null>(null);
  const audioPending = useRef(false);

  const toggleMusic = useCallback(async (startOnly = false) => {
    if (audioPending.current) return;
    if (!audioRef.current) {
      const audio = new Audio("/music/wedding.mp3");
      audio.loop = true;
      audio.preload = "auto";
      audio.muted = false;
      audio.volume = 0.3;
      audio.onplaying = () => {
        setIsPlaying(true);
        setMusicError(false);
      };
      audio.onpause = () => setIsPlaying(false);
      audio.onerror = () => {
        setIsPlaying(false);
        setMusicError(true);
      };
      audioRef.current = audio;
    }
    const audio = audioRef.current;
    if (!audio.paused) {
      if (!startOnly) audio.pause();
      return;
    }
    audioPending.current = true;
    try {
      await audio.play();
    } catch (error) {
      if (audioRef.current !== audio) return;
      setIsPlaying(false);
      setMusicError(
        !(error instanceof DOMException && error.name === "NotAllowedError"),
      );
    } finally {
      if (audioRef.current === audio) audioPending.current = false;
    }
  }, []);

  useEffect(() => {
    void toggleMusic(true);
    return () => {
      const audio = audioRef.current;
      if (audio) {
        audio.onplaying = null;
        audio.onpause = null;
        audio.onerror = null;
        audio.pause();
      }
      audioRef.current = null;
      audioPending.current = false;
    };
  }, [toggleMusic]);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    if (!introComplete) page.setAttribute("inert", "");
    else {
      page.removeAttribute("inert");
      page
        .querySelector<HTMLElement>("#bismillah-heading")
        ?.focus({ preventScroll: true });
    }
  }, [isOpen, introComplete]);

  return (
    <div className="min-h-screen" style={{ background: "#fdf6f0" }}>
      {!introComplete && (
        <Envelope
          onOpen={() => {
            void toggleMusic(true);
          }}
          onReveal={() => setIsOpen(true)}
          onComplete={() => setIntroComplete(true)}
        />
      )}
      <MusicControl
        isPlaying={isPlaying}
        onToggle={() => {
          void toggleMusic();
        }}
        hasError={musicError}
      />
      {isOpen && (
        <main ref={pageRef} aria-hidden={!introComplete}>
          <FloatingPetals />
          <BismillahSection revealed={introComplete} />
          <HeroSection revealed={isOpen} />
          {/* <DuaSection /> */}
          <CountdownTimer />
          <CoupleSection />
          <EventSchedule />
          <InvitationMessage />
          <LocationSection />
          <ContactSection />
          <Footer />
        </main>
      )}
    </div>
  );
}
