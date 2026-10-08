import { motion, useReducedMotion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";

interface MusicControlProps {
  isPlaying: boolean;
  onToggle: () => void;
  hasError?: boolean;
}

export function MusicControl({ isPlaying, onToggle, hasError = false }: MusicControlProps) {
  const reduceMotion = useReducedMotion();
  const label = isPlaying ? "Mute background music" : hasError ? "Retry background music" : "Play background music";
  return (
    <motion.button
      type="button"
      aria-label={label}
      aria-pressed={isPlaying}
      title={label}
      className="fixed top-5 right-5 z-[80] w-11 h-11 rounded-full flex items-center justify-center border border-[#c9a87c]/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a87c]"
      style={{ background: "#fdf6f0", color: "#8b6d50" }}
      onClick={onToggle}
      whileHover={reduceMotion ? undefined : { scale: 1.05 }}
      whileTap={reduceMotion ? undefined : { scale: 0.95 }}
    >
      {isPlaying ? <Volume2 size={19} aria-hidden="true" /> : <VolumeX size={19} aria-hidden="true" />}
    </motion.button>
  );
}