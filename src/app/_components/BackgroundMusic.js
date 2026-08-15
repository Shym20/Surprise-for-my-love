"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Music, Play, Pause, Heart, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleStartSurprise = () => {
    setShowWelcomeModal(false);

    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Audio play error:", err);
        });
    }

    // Trigger romantic confetti on start
    try {
      const heart = confetti.shapeFromText({ text: "❤️", scalar: 2 });
      const rose = confetti.shapeFromText({ text: "🌹", scalar: 2 });
      const pinkHeart = confetti.shapeFromText({ text: "💖", scalar: 2 });

      confetti({
        particleCount: 70,
        spread: 80,
        shapes: [heart, rose, pinkHeart],
        scalar: 2,
        origin: { y: 0.6 },
      });
    } catch (e) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Play error:", err));
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="/Thousand-Years.mp3"
        loop
        preload="auto"
        playsInline
      />

      {/* WELCOME POPUP MODAL WITH BACKGROUND BLUR */}
      <AnimatePresence>
        {showWelcomeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 select-none"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-slate-900/90 border border-rose-500/40 rounded-3xl p-6 sm:p-8 max-w-md w-full text-center shadow-2xl shadow-rose-500/20 relative overflow-hidden backdrop-blur-xl"
            >
              {/* Background ambient glowing spheres */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-rose-500/25 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-pink-500/25 rounded-full blur-2xl pointer-events-none" />

              {/* Animated Heart Icon Header */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-tr from-rose-500 to-pink-500 p-0.5 shadow-xl shadow-rose-500/30 flex items-center justify-center"
              >
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-rose-400">
                  <Heart size={36} fill="currentColor" />
                </div>
              </motion.div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-200 to-amber-200 mb-2 leading-tight">
               A Little Something, Made With Love ❤️
              </h2>

              <p className="text-rose-200/80 text-xs sm:text-sm mb-6 leading-relaxed">
               This little corner of the internet was thoughtfully designed and crafted by Me(Shyam) as a special birthday surprise for Priii — a collection of memories, moments, and emotions that deserve to be remembered. While this website is made especially for her, everyone is welcome to step inside and experience a small piece of our story. 💖
              </p>

              {/* Start Button */}
              <button
                onClick={handleStartSurprise}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-rose-500/30 transition-all transform hover:scale-[1.03] active:scale-[0.97] flex items-center justify-center gap-2 tracking-wide cursor-pointer"
              >
                <Sparkles size={18} /> Let's Start 💖
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Audio Control Bar (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 select-none">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-slate-900/85 backdrop-blur-xl border border-rose-500/40 rounded-full px-3 py-2 shadow-2xl flex items-center gap-2.5 text-white"
        >
          {/* Animated Equalizer / Music Icon */}
          <button
            onClick={togglePlay}
            className="flex items-center gap-2 text-rose-200 hover:text-white transition-colors focus:outline-none"
            title={isPlaying ? "Pause Music" : "Play Music"}
          >
            <div className="relative p-2 bg-gradient-to-tr from-rose-500 to-pink-500 rounded-full text-white shadow-md shadow-rose-500/30">
              {isPlaying ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                >
                  <Music size={16} />
                </motion.div>
              ) : (
                <Play size={16} fill="currentColor" className="ml-0.5" />
              )}
            </div>

            <span className="text-xs font-semibold hidden md:inline tracking-wide">
              {isPlaying ? "A Thousand Years" : "Play Music"}
            </span>
          </button>

          {/* Play/Pause toggle button */}
          <button
            onClick={togglePlay}
            className="p-1.5 text-rose-300 hover:text-white rounded-full hover:bg-slate-800/80 transition-colors focus:outline-none"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>

          {/* Mute Toggle button */}
          <button
            onClick={toggleMute}
            className="p-1.5 text-rose-300 hover:text-white rounded-full hover:bg-slate-800/80 transition-colors focus:outline-none"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={16} className="text-rose-400" /> : <Volume2 size={16} />}
          </button>
        </motion.div>
      </div>
    </>
  );
}
