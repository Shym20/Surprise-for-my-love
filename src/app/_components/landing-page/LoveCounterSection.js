"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Heart, Sparkles, Calendar, Hourglass } from "lucide-react";

export default function LoveCounterSection() {
  // Relationship start date: May 2, 2023 00:00:00
  const startDate = new Date("2023-05-02T00:00:00");

  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0,
  });

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      const diffMs = now - startDate;

      if (diffMs < 0) return;

      const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const years = Math.floor(totalDays / 365);
      const remainingDaysAfterYears = totalDays % 365;

      const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
      const seconds = Math.floor((diffMs / 1000) % 60);

      setTimeElapsed({
        years,
        days: remainingDaysAfterYears,
        hours,
        minutes,
        seconds,
        totalDays,
      });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Years", value: timeElapsed.years, subtext: "Of Magic" },
    { label: "Days", value: timeElapsed.days, subtext: "Together" },
    { label: "Hours", value: timeElapsed.hours, subtext: "Of Smiles" },
    { label: "Minutes", value: timeElapsed.minutes, subtext: "Of Warmth" },
    { label: "Seconds", value: timeElapsed.seconds, subtext: "And Counting..." },
  ];

  return (
    <section className="bg-slate-900/60 backdrop-blur-xl border border-rose-500/25 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-8">
      {/* Glow Orbs */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center space-y-3 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs font-semibold uppercase tracking-widest">
          <Hourglass size={14} className="animate-spin text-rose-400" style={{ animationDuration: '4s' }} /> Our Journey Together
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-100 via-pink-200 to-amber-200 tracking-tight">
          Every Second with You A Gift ⏳❤️
        </h2>
        <p className="text-rose-200/80 text-xs sm:text-sm max-w-xl mx-auto">
          Since <span className="text-amber-300 font-semibold">2 May 2023</span>, every single moment has been filled with love, laughter, and endless memories.
        </p>
      </div>

      {/* Time Units Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 relative z-10">
        {timeUnits.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-slate-950/70 border border-rose-500/30 rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center justify-center shadow-lg relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <span className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-rose-100 via-rose-200 to-pink-400 tracking-tight font-mono">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="text-xs uppercase font-extrabold tracking-widest text-rose-300 mt-1">
              {item.label}
            </span>
            <span className="text-[10px] text-rose-300/60 italic mt-0.5">
              {item.subtext}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Total Days Milestone Badge */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-950/80 border border-rose-400/30 p-4 sm:p-5 rounded-2xl relative z-10">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="p-3 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl text-white shadow-md shadow-rose-500/30 shrink-0">
            <Heart fill="currentColor" size={22} />
          </div>
          <div>
            <div className="text-sm font-bold text-rose-100">
              Total Love Milestone: <span className="text-amber-300 font-mono text-base">{timeElapsed.totalDays} Days</span>
            </div>
            <div className="text-xs text-rose-200/70">
              And I would choose you over and over in every lifetime.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs font-semibold shrink-0">
          <Sparkles size={14} className="text-amber-300" /> Forever To Go
        </div>
      </div>
    </section>
  );
}
