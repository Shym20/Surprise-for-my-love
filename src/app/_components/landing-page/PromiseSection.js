"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Sun,
  Ear,
  Shield,
  Smile,
  CheckCircle2,
  Lock,
  Compass
} from "lucide-react";
import confetti from "canvas-confetti";

export default function PromiseSection() {
  const [promisedCount, setPromisedCount] = useState(0);

  const handlePromiseClick = () => {
    setPromisedCount((prev) => prev + 1);
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.75 },
      colors: ["#f43f5e", "#ec4899", "#fbbf24", "#a855f7"]
    });
  };

  const promisesList = [
    {
      id: 1,
      badge: "Beside You Always",
      title: "Facing Life Together",
      icon: HeartHandshake,
      gradient: "from-rose-500/20 via-pink-500/10 to-amber-500/10",
      borderColor: "border-rose-500/30",
      content:
        "I promise you that no matter what life brings our way, you will never have to face it alone. I will always be there beside you — in your happiest moments, in your quietest days, in your difficult times, and even on the days when you feel like the whole world is against you. There may always be people who misunderstand you, judge you, talk about you, hate you, or try to make you feel less than you are, but I promise I will never let their words define how you see yourself. I know the person you are, I know the heart you carry, and I know the beautiful soul behind everything that people may choose to misunderstand."
    },
   
    {
      id: 3,
      badge: "An Open Heart",
      title: "Listening & Hearing You",
      icon: Ear,
      gradient: "from-amber-500/20 via-rose-500/10 to-pink-500/10",
      borderColor: "border-amber-500/30",
      content:
        "I promise I will listen to you — really listen. I will listen to your stories, your complaints, your fears, your silly thoughts, your dreams, your endless conversations, and even the things you think are too small to tell anyone. I never want you to feel like you're “too much” or that your feelings don't matter. If something matters to you, it matters to me. I may not always have the perfect solution, but I promise I will always have an open heart and a place for you to feel heard."
    },
    
    {
      id: 5,
      badge: "Our Sacred World",
      title: "Rising Above Small-Minded Noise",
      icon: Sun,
      gradient: "from-rose-500/20 via-amber-500/10 to-pink-500/10",
      borderColor: "border-rose-400/30",
      content:
        "And when small-minded people have small-minded opinions, I promise we won't let them become bigger than our love. People will always talk. They will create their own stories, judge things they don't understand, and sometimes speak without knowing even a fraction of what we share. But that's their world, not ours. We don't have to answer every voice, prove ourselves to everyone, or allow someone else's limited thinking to disturb something beautiful between us. Let them talk. Let them think whatever they want. We will keep growing, laughing, loving, and creating our own memories."
    },
    {
      id: 6,
      badge: "Every Single Day",
      title: "Making You Feel Special Always",
      icon: Smile,
      gradient: "from-pink-500/20 via-purple-500/10 to-rose-500/10",
      borderColor: "border-pink-400/30",
      content:
        "I promise to keep making you feel special — not just on birthdays, anniversaries, or special occasions, but on ordinary days too. I want to be the person who notices the little things, remembers what makes you smile, surprises you when you least expect it, celebrates your achievements, holds you when you're tired, and reminds you how beautiful you are even when you don't feel beautiful yourself. I don't want you to ever wonder whether you are important to me. I want my actions to answer that question every single day."
    }
  ];

  return (
    <section id="promises" className="space-y-12 py-4">
      {/* SECTION HEADER */}
      <div className="text-center space-y-3 relative">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-semibold uppercase tracking-widest"
        >
          <ShieldCheck size={16} className="text-rose-400 animate-pulse" />
          <span>My Sacred Vows to You</span>
        </motion.div>

        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-100 via-pink-200 to-amber-200 tracking-tight">
          My Promise to You ❤️
        </h2>

        <p className="text-rose-200/80 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
          A promise of togetherness, unconditional support, peace, and eternal love — written straight from my heart.
        </p>
      </div>

      {/* PROMISES CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {promisesList.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className={`bg-slate-900/60 backdrop-blur-xl border ${item.borderColor} rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-rose-400/50 transition-all`}
            >
              {/* Background Ambient Glow */}
              <div
                className={`absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br ${item.gradient} rounded-full blur-2xl group-hover:scale-150 transition-all duration-700 pointer-events-none`}
              />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    {item.badge}
                  </span>
                  <div className="p-2.5 bg-rose-500/10 rounded-2xl text-rose-300 border border-rose-500/20 group-hover:scale-110 transition-transform">
                    <IconComp size={20} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-rose-100 group-hover:text-rose-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-rose-200/80 text-xs sm:text-sm leading-relaxed font-normal">
                  {item.content}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
  
     
    </section>
  );
}
