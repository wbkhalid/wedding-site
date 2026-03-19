import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";

interface MusicControlProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export function MusicControl({ isPlaying, onToggle }: MusicControlProps) {
  return (
    <motion.button
      className="fixed top-5 right-5 z-50 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20"
      style={{
        background: isPlaying
          ? "rgba(201, 168, 124, 0.3)"
          : "rgba(139, 109, 80, 0.15)",
        color: "#8b6d50",
        boxShadow: isPlaying ? "0 0 15px rgba(201, 168, 124, 0.4)" : "none",
      }}
      onClick={onToggle}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}

      {/* Glow animation when playing */}
      {isPlaying && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#c9a87c]/40"
          animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
}
