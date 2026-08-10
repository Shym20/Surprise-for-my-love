"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquareHeart,
  Heart,
  Sparkles,
  Smile,
  Music,
  ShieldCheck,
  Baby,
  Quote,
  Star,
  Flame,
  Award,
  Crown
} from "lucide-react";
import confetti from "canvas-confetti";

export default function ThingsILoveSection() {
  const [activeTab, setActiveTab] = useState("words"); // "words" | "habits"
  const [flippedWord, setFlippedWord] = useState({});
  const [heartCount, setHeartCount] = useState({});

  const handleHeartClick = (id, e) => {
    if (e) e.stopPropagation();
    setHeartCount((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  const toggleFlip = (id) => {
    setFlippedWord((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Her signature words & catchphrases
  const signatureWords = [
    {
      id: "w1",
      phrase: '"Chl chl aveee..." 😂',
      tag: "The Playful Sass",
      emoji: "💅",
      note: "The cutest way you dismiss me with that adorable attitude! Nobody roasts me as sweetly as you do."
    },
    {
      id: "w2",
      phrase: '"Mamma dudu dam dam..." 🍼',
      tag: "Baby Talk Mode",
      emoji: "🍼",
      note: "Your adorable baby-talk mode that instantly turns my heart into complete puddles of love!"
    },
    {
      id: "w3",
      phrase: '"Kai kani kani coaching avaa vali hai athe to..." 🏫',
      tag: "Everyday Sweet Dialogue",
      emoji: "🗣️",
      note: "The way you talk in your sweet natural dialect — I could sit back and listen to your voice all day!"
    },
    {
      id: "w4",
      phrase: '"Abee gawar..." 😜',
      tag: "Playful Affection Roast",
      emoji: "🤪",
      note: "Your signature affection roast! Only you get the official VIP license to call me that."
    }
  ];

  // Adorable habits & qualities I love about her
  const loveHabits = [
    {
      id: "h1",
      title: "Your Pure Childish Nature 🧸",
      tag: "Pure Innocence",
      icon: Baby,
      desc: "Your pure, playful, childlike soul that brings untamed laughter, warmth, and brightness into my world every single day."
    },
    {
      id: "h2",
      title: "Dancing in Pure Joy 💃",
      tag: "Spontaneous Happiness",
      icon: Music,
      desc: "The way you break into spontaneous happy dances whenever you get excited. It's the prettiest sight in the universe!"
    },
    {
      id: "h3",
      title: "Love Over Money 💖",
      tag: "Pure Golden Heart",
      icon: Heart,
      desc: "How deeply you prioritize genuine love, care, and togetherness above any material wealth or money."
    },
    {
      id: "h4",
      title: "Always Trusting & Following My Guidance 🧭",
      tag: "Deep Trust & Respect",
      icon: ShieldCheck,
      desc: "The gentle way you listen to me, respect my advice, and follow my instructions with complete trust."
    },
    {
      id: "h5",
      title: "That Innocent Face When Making Mistakes 🥺",
      tag: "Irresistible Cuteness",
      icon: Smile,
      desc: "That adorable, innocent puppy-dog face you make whenever you do a little mistake — nobody in the world could ever stay mad at you!"
    },
    {
      id: "h6",
      title: "Unconditional Support in Everything I Do 🛡️",
      tag: "My Biggest Supporter",
      icon: Star,
      desc: "How you stand side-by-side with me, believing in me and supporting every single dream and ambition I pursue."
    },
    {
      id: "h7",
      title: "Changing Yourself Just For Me 🌹",
      tag: "The Greatest Gift of Love",
      icon: Crown,
      desc: "The most meaningful & touching gift of all — how deeply you loved me to transform yourself just for us. I am forever grateful to have you."
    }
  ];

  return (
    <section className="bg-slate-900/60 backdrop-blur-xl border border-rose-500/25 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-10">
      {/* Background Subtle Glowing Accents */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="text-center space-y-3 relative">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs font-semibold uppercase tracking-widest"
        >
          <MessageSquareHeart size={15} className="text-pink-400 animate-pulse" />
          <span>My Favorite Things About You</span>
        </motion.div>

        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-100 via-pink-200 to-amber-200 tracking-tight">
          Things & Words I Love About You 💕
        </h2>

        <p className="text-rose-200/80 text-xs sm:text-base max-w-xl mx-auto font-light">
          From your cute funny catchphrases to the heartwarming ways you love me — every little thing about you is priceless!
        </p>
      </div>

      {/* TAB SWITCHER */}
      <div className="flex justify-center">
        <div className="flex items-center gap-2 bg-slate-950/80 p-1.5 rounded-2xl border border-rose-500/30 shadow-inner">
          <button
            onClick={() => setActiveTab("words")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 ${
              activeTab === "words"
                ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30 scale-105"
                : "text-rose-300/70 hover:text-rose-100"
            }`}
          >
            🗣️ Her Cutest Catchphrases
          </button>

          <button
            onClick={() => setActiveTab("habits")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 ${
              activeTab === "habits"
                ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30 scale-105"
                : "text-rose-300/70 hover:text-rose-100"
            }`}
          >
            💖 Things You Do That I Adore
          </button>
        </div>
      </div>

      {/* TAB 1: HER SIGNATURE WORDS & CATCHPHRASES */}
      {activeTab === "words" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {signatureWords.map((item) => {
            const isFlipped = !!flippedWord[item.id];
            const likes = heartCount[item.id] || 0;

            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => toggleFlip(item.id)}
                className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-rose-500/30 hover:border-rose-400/60 p-6 rounded-3xl shadow-xl cursor-pointer relative group transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-extrabold px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/30 flex items-center gap-1.5">
                    <span>{item.emoji}</span> {item.tag}
                  </span>

                  <button
                    onClick={(e) => handleHeartClick(item.id, e)}
                    className="flex items-center gap-1 text-xs font-bold text-rose-400 hover:text-rose-300 bg-slate-900 border border-rose-500/30 px-2.5 py-1 rounded-full hover:scale-110 transition-all"
                  >
                    <Heart size={14} fill="currentColor" />
                    <span>{likes}</span>
                  </button>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-rose-100 font-serif italic tracking-wide">
                    {item.phrase}
                  </h3>
                  <p className="text-rose-200/80 text-xs sm:text-sm leading-relaxed pt-1">
                    "{item.note}"
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-rose-300/60 pt-2 border-t border-rose-500/10">
                  <span className="flex items-center gap-1 text-amber-300">
                    <Sparkles size={12} /> Always makes me smile
                  </span>
                  <span>Tap to send love ❤️</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* TAB 2: THINGS YOU DO THAT WIN MY HEART */}
      {activeTab === "habits" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {loveHabits.map((item, idx) => {
            const Icon = item.icon;
            const likes = heartCount[item.id] || 0;
            const isHighlight = item.id === "h7"; // Special highlight for changing yourself for me

            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-3xl border transition-all flex flex-col justify-between space-y-4 shadow-xl ${
                  isHighlight
                    ? "md:col-span-2 lg:col-span-3 bg-gradient-to-r from-rose-950/70 via-slate-900/90 to-pink-950/70 border-amber-400/60 shadow-amber-500/10"
                    : "bg-slate-950/70 border-rose-500/25 hover:border-rose-400/50"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 border border-rose-400/30 text-rose-300 shrink-0">
                      <Icon size={22} />
                    </div>

                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-rose-500/15 border border-rose-400/30 text-rose-300">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-rose-100">
                    {item.title}
                  </h3>

                  <p className="text-rose-200/80 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-rose-500/20 text-xs">
                  <span className="text-amber-300 font-mono text-[11px] flex items-center gap-1">
                    <Sparkles size={13} /> {isHighlight ? "Most Special ❤️" : "Adored Daily"}
                  </span>

                  <button
                    onClick={(e) => handleHeartClick(item.id, e)}
                    className="flex items-center gap-1 text-xs font-bold text-rose-400 hover:text-rose-300 bg-slate-900 border border-rose-500/30 px-3 py-1 rounded-full hover:scale-110 transition-all"
                  >
                    <Heart size={14} fill="currentColor" />
                    <span>{likes}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </section>
  );
}
