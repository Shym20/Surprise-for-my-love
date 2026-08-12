"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Sparkles,
  Trophy,
  RotateCcw,
  Gamepad2,
  CheckCircle2,
  Flame,
  Award,
  Crown,
  Gift,
  Smile,
  ShieldCheck,
  Star,
  Lock
} from "lucide-react";
import confetti from "canvas-confetti";
import Navbar from "../_components/Navbar";
import Link from "next/link";

export default function SmallLoveGamePage() {
  const [unlocked, setUnlocked] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState(false);

  const [gameState, setGameState] = useState("start"); // "start" | "playing" | "won"
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [heartsToCollect, setHeartsToCollect] = useState(5);
  const [collectedInLevel, setCollectedInLevel] = useState(0);
  const [heartPos, setHeartPos] = useState({ top: "50%", left: "50%" });
  const [currentSecretNote, setCurrentSecretNote] = useState("");

  const SECRET_PASSCODE = "1820";

  const handleUnlock = (e) => {
    e.preventDefault();
    if (
      passcode === SECRET_PASSCODE ||
      passcode.toLowerCase() === "love" ||
      passcode.toLowerCase() === "birthday"
    ) {
      setUnlocked(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } else {
      setError(true);
      setTimeout(() => setError(false), 1500);
    }
  };

  const secretLoveNotes = [
    "Prii, you have the prettiest smile in the entire universe! ✨",
    "No matter how hard the day gets, one hug from you fixes everything! 🤗",
    "You're not just my love, you're my best friend and safe place forever! 💕",
    "Every single moment with you is my absolute favorite memory! 🌹",
    "Congratulations My Princess! You cleared all levels and won my heart forever! 👑"
  ];

  const startLevel = (lvl) => {
    setLevel(lvl);
    setCollectedInLevel(0);
    setHeartsToCollect(lvl * 4); // Lvl 1: 4, Lvl 2: 8, Lvl 3: 12
    setTimeLeft(15);
    setGameState("playing");
    moveHeart();
  };

  const moveHeart = () => {
    const top = Math.floor(Math.random() * 65 + 15) + "%";
    const left = Math.floor(Math.random() * 70 + 15) + "%";
    setHeartPos({ top, left });
  };

  const handleCatchHeart = () => {
    if (gameState !== "playing") return;

    setScore((prev) => prev + 10);
    const nextCollected = collectedInLevel + 1;
    setCollectedInLevel(nextCollected);

    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.5 }
    });

    const targetForLvl = level * 4;

    if (nextCollected >= targetForLvl) {
      // Level cleared
      if (level < 3) {
        setCurrentSecretNote(secretLoveNotes[level - 1]);
        setGameState("level_cleared");
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      } else {
        // Game Won Completely
        setCurrentSecretNote(secretLoveNotes[4]);
        setGameState("won");
        confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
      }
    } else {
      moveHeart();
    }
  };

  useEffect(() => {
    let timer;
    if (gameState === "playing" && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (gameState === "playing" && timeLeft === 0) {
      setGameState("game_over");
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-x-hidden selection:bg-rose-500 selection:text-white pb-20">
      {/* Background Subtle Glowing Orbs */}
      <div className="fixed top-1/4 -left-20 w-96 h-96 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 -right-20 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* NAVBAR */}
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 pt-24 space-y-8 text-center flex flex-col items-center min-h-[80vh] justify-center">
        <AnimatePresence mode="wait">
          {!unlocked ? (
            /* Locked Game Zone Entry Gate */
            <motion.div
              key="game-lockscreen"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="w-full flex items-center justify-center"
            >
              <div className="bg-slate-900/80 backdrop-blur-2xl border border-rose-500/30 p-8 sm:p-10 rounded-3xl shadow-2xl max-w-md w-full text-center flex flex-col items-center relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-rose-500/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl" />

                <motion.div
                  animate={{ scale: [1, 1.12, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="p-5 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-2xl mb-6 border border-rose-500/40 text-rose-300 shadow-lg shadow-rose-500/10"
                >
                  <Lock size={38} />
                </motion.div>

                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-300 to-amber-200 mb-2">
                  Game Zone Access Gate 🎮
                </h1>
                <p className="text-rose-200/80 text-sm mb-6 leading-relaxed">
                  This game zone is protected! Enter the secret code to access the Love Game.
                </p>

                <form onSubmit={handleUnlock} className="w-full space-y-4">
                  <div>
                    <input
                      type="password"
                      placeholder="Enter Passcode"
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border ${
                        error ? "border-red-500 animate-pulse" : "border-rose-500/30"
                      } text-center text-rose-100 placeholder-rose-400/40 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 transition-all`}
                    />
                    {error && (
                      <p className="text-red-400 text-xs mt-2 font-medium">
                        Incorrect code! Try Again
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-bold shadow-lg shadow-rose-500/30 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 tracking-wide"
                  >
                    <Sparkles size={20} /> Unlock Game Zone
                  </button>
                </form>

                <div className="mt-6 pt-4 border-t border-rose-500/20 w-full">
                  <Link
                    href="/"
                    className="text-xs text-rose-300/80 hover:text-rose-100 font-medium"
                  >
                    ← Back to Home Page
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="game-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full space-y-8"
            >
        {/* HEADER */}
        <div className="space-y-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-300 text-xs sm:text-sm font-semibold uppercase tracking-widest"
          >
            <Gamepad2 size={16} /> A Little Game For You <Heart size={16} fill="currentColor" />
          </motion.div>

          <h1 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-300 to-amber-200 tracking-tight">
            Catch Shyam's Hearts 💕
          </h1>

          <p className="text-rose-200/80 text-xs sm:text-sm max-w-md mx-auto font-light leading-relaxed">
            A simple, sweet mini-game just for Prii! Catch the popping hearts to unlock secret love notes and win!
          </p>
        </div>

        {/* MAIN GAME CONTAINER */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-rose-500/25 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden">
          {/* GAME START SCREEN */}
          {gameState === "start" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6 py-6"
            >
              <div className="p-5 bg-gradient-to-tr from-rose-500/20 to-pink-500/20 rounded-full w-24 h-24 mx-auto border border-rose-400/40 text-rose-300 flex items-center justify-center shadow-xl">
                <Heart size={44} fill="currentColor" className="animate-pulse" />
              </div>

              <div className="space-y-2 max-w-sm mx-auto">
                <h2 className="text-xl sm:text-2xl font-bold text-rose-100">Ready to Play, My Love?</h2>
                <p className="text-rose-200/70 text-xs sm:text-sm">
                  Complete 3 quick levels by catching hearts before the timer runs out!
                </p>
              </div>

              <button
                onClick={() => startLevel(1)}
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-extrabold shadow-xl shadow-rose-500/30 transition-all transform hover:scale-105 active:scale-95 text-sm sm:text-base inline-flex items-center gap-2"
              >
                <Sparkles size={18} /> Start Game Level 1 🚀
              </button>
            </motion.div>
          )}

          {/* PLAYING SCREEN */}
          {gameState === "playing" && (
            <div className="space-y-6">
              {/* TOP GAME BAR */}
              <div className="flex items-center justify-between bg-slate-950/80 px-4 py-2.5 rounded-2xl border border-rose-500/30 text-xs sm:text-sm font-bold">
                <div className="text-rose-300">
                  Level: <span className="text-amber-400 font-mono text-base">{level}/3</span>
                </div>
                <div className="text-rose-300">
                  Hearts: <span className="text-pink-400 font-mono text-base">{collectedInLevel}/{level * 4}</span>
                </div>
                <div className="text-rose-300">
                  Time: <span className="text-rose-400 font-mono text-base">{timeLeft}s</span>
                </div>
              </div>

              {/* GAME PLAY AREA */}
              <div className="relative w-full h-64 sm:h-80 bg-slate-950/90 rounded-2xl border border-rose-500/30 overflow-hidden flex items-center justify-center">
                <motion.button
                  style={{ top: heartPos.top, left: heartPos.left }}
                  whileTap={{ scale: 0.7 }}
                  onClick={handleCatchHeart}
                  className="absolute -translate-x-1/2 -translate-y-1/2 p-3.5 bg-gradient-to-tr from-rose-500 to-pink-500 rounded-full shadow-xl text-white border border-white/80 animate-bounce cursor-pointer hover:scale-110 transition-transform"
                >
                  <Heart fill="currentColor" size={32} />
                </motion.button>
              </div>
            </div>
          )}

          {/* LEVEL CLEARED INTERMISSION */}
          {gameState === "level_cleared" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6 py-4"
            >
              <span className="text-xs uppercase tracking-widest text-amber-300 font-bold bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
                🎉 Level {level} Cleared!
              </span>

              <div className="p-5 bg-gradient-to-br from-rose-500/20 to-pink-500/20 border border-rose-400/40 rounded-2xl space-y-2 max-w-md mx-auto shadow-2xl">
                <span className="text-xs uppercase tracking-widest text-pink-300 font-bold">
                  Secret Note Unlocked 💌
                </span>
                <p className="text-sm sm:text-base font-medium text-rose-100 italic">
                  "{currentSecretNote}"
                </p>
              </div>

              <button
                onClick={() => startLevel(level + 1)}
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-extrabold shadow-xl shadow-rose-500/30 hover:scale-105 transition-all text-sm sm:text-base inline-flex items-center gap-2"
              >
                Next Level ({level + 1}/3) 🚀
              </button>
            </motion.div>
          )}

          {/* GAME OVER (TIME OUT) */}
          {gameState === "game_over" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6 py-6"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-rose-200">Time Ran Out! ⏰</h3>
                <p className="text-xs sm:text-sm text-rose-200/70">
                  Don't worry my princess, you can try level {level} again!
                </p>
              </div>

              <button
                onClick={() => startLevel(level)}
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-extrabold shadow-xl shadow-rose-500/30 hover:scale-105 transition-all text-sm sm:text-base inline-flex items-center gap-2"
              >
                <RotateCcw size={18} /> Try Again! 💖
              </button>
            </motion.div>
          )}

          {/* GAME WON (COMPLETED ALL 3 LEVELS) */}
          {gameState === "won" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6 py-6"
            >
              <Trophy size={48} className="mx-auto text-amber-300 animate-bounce" />

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                  Grand Champion 🏆
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  YOU WON SHYAM'S ENTIRE HEART! 💕
                </h2>
              </div>

              <div className="p-6 bg-gradient-to-br from-rose-500/25 via-pink-500/20 to-amber-500/20 border border-rose-400/50 rounded-2xl space-y-3 max-w-md mx-auto shadow-2xl">
                <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">
                  Final Secret Note 💌
                </span>
                <p className="text-sm sm:text-base font-bold text-rose-100 italic leading-relaxed">
                  "{currentSecretNote}"
                </p>
              </div>

              <button
                onClick={() => startLevel(1)}
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-extrabold shadow-xl shadow-rose-500/30 hover:scale-105 transition-all text-sm sm:text-base inline-flex items-center gap-2"
              >
                <RotateCcw size={18} /> Play Game Again 🔄
              </button>
            </motion.div>
          )}
        </div>

        {/* BACK TO HOME */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-rose-300/80 hover:text-rose-100 text-sm font-semibold transition-colors"
          >
            ← Back to Surprise Home Page
          </Link>
        </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
