"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Music,
  Heart,
  Sparkles,
  Check,
  Copy,
  Mic2,
  ExternalLink,
  Instagram,
  Eye
} from "lucide-react";
import confetti from "canvas-confetti";

export default function SongLyricsSection({
  instagramUrl = "https://www.instagram.com/reel/DW4SGLNxa9T/?igsh=bzF4YTRrY2ppNWRu"
}) {
  const [activeTab, setActiveTab] = useState("full"); // "full" | "carousel"
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [viewCount, setViewCount] = useState(1180);

  // Exact lyrics transcribed from the handwritten note image
  const lyricsData = [
    {
      section: "Verse 1",
      lines: [
        "Kese kahu me , tumse ki kya ho , tum mere liye ,",
        "Tum aaye ho zindagi me yuu mere , rang naye bhar diye ,",
        "Hai paas bhi tu , or raaz bhi tu , har lamha tujhme jiye",
        "ye jo hua hai, kese hua hai , mujhko khabar na lage ki....."
      ]
    },
    {
      section: "Verse 2",
      lines: [
        "Tune aake dil me jo mere ,",
        "khushiyo se aankhon ko bhar diya ve ,",
        "Teri pyaari si aankhon ne mujhpe ,",
        "Jaane kesa ye jaadu kiya hai ,",
        "O Raanjheya Ve...., O Raanjheya Ve.....,",
        "O Raanjheya......, O Raanjheya......,"
      ]
    },
    {
      section: "Chorus 1",
      lines: [
        "O Raanjheya Ve , Saanso me tu hi Samave ,",
        "O Raanjheya Ve , Noor tera mujhpe chhave ,",
        "O Raanjheya Ve , Dil ye tenu takda jaave ,",
        "O Raanjheya......, O Raanjheya......"
      ]
    },
    {
      section: "Chorus 2",
      lines: [
        "O Raanjheya Ve , Rooh teri hona chahve ,",
        "O Raanjheya Ve , Husn tera Kyu Satave ,",
        "O Raanjheya Ve , Khwabo me bhi tu hi aave ,",
        "O Raanjheya......, O Raanjheya......"
      ]
    }
  ];

  // Format lyrics to text for copy
  const getFormattedLyricsText = () => {
    return lyricsData
      .map((sec) => `[${sec.section}]\n` + sec.lines.join("\n"))
      .join("\n\n");
  };

  const handleViewIncrement = () => {
    setViewCount((prev) => prev + 1);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  const handleCopy = () => {
    const fullLyrics = getFormattedLyricsText();
    navigator.clipboard.writeText(fullLyrics);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-slate-900/60 backdrop-blur-xl border border-rose-500/25 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-8">
      {/* Background Subtle Glowing Accents */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-rose-500/20 pb-6">
        <div className="space-y-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs font-semibold uppercase tracking-widest">
            <Music size={14} /> Written From The Heart <Mic2 size={14} />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-100 via-pink-200 to-amber-200 tracking-tight">
            O RAANJHEYA VE 🎵
          </h2>
          <p className="text-rose-200/75 text-xs sm:text-sm">
            A song written specially for you with all my love ❤️
          </p>
        </div>

        {/* Action Controls (Copy Lyrics) */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="px-4 py-2.5 rounded-xl bg-slate-950/70 hover:bg-slate-800 border border-rose-500/30 text-rose-200 text-xs font-medium flex items-center gap-2 transition-all shadow"
            title="Copy Full Lyrics"
          >
            {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
            {copied ? "Copied!" : "Copy Lyrics"}
          </button>
        </div>
      </div>

      {/* LISTEN ON INSTAGRAM BANNER */}
      <div className="bg-gradient-to-r from-slate-950 via-rose-950/40 to-slate-950 border border-rose-500/30 p-4 sm:p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-xl relative overflow-hidden text-center md:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full md:w-auto">
          <div className="p-3.5 sm:p-4 bg-gradient-to-br from-pink-500 via-rose-500 to-amber-500 rounded-2xl text-white shadow-lg shadow-pink-500/30 flex items-center justify-center shrink-0">
            <Instagram size={28} className="sm:w-8 sm:h-8" />
          </div>

          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-rose-100 flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span>"O Raanjheya Ve"</span>
              <span className="text-[10px] sm:text-xs bg-rose-500/20 border border-rose-400/30 text-rose-300 px-2.5 py-0.5 rounded-full font-mono whitespace-nowrap">
                Original Track
              </span>
            </h3>
            <p className="text-xs text-rose-200/80">
              Listen to the song on my Instagram page 🎧
            </p>
          </div>
        </div>

        {/* Listen Song Button (Redirects to Instagram link) */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:from-pink-600 hover:to-amber-600 text-white font-extrabold text-xs sm:text-base flex items-center justify-center gap-2 sm:gap-2.5 shadow-xl shadow-pink-500/30 transition-all transform hover:scale-105 active:scale-95 shrink-0"
        >
          <Instagram size={18} className="sm:w-5 sm:h-5 shrink-0" />
          <span className="truncate">Listen Song on My Music Page</span>
          <ExternalLink size={16} className="sm:w-4 sm:h-4 shrink-0" />
        </a>
      </div>

      {/* VIEW TABS & SWITCHER */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 bg-slate-950/60 p-1 rounded-xl border border-rose-500/20 w-full sm:w-auto justify-center">
          <button
            onClick={() => setActiveTab("full")}
            className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "full"
                ? "bg-rose-500/30 text-rose-100 border border-rose-400/40 shadow"
                : "text-rose-300/60 hover:text-rose-200"
            }`}
          >
            📜 Full View
          </button>
          <button
            onClick={() => setActiveTab("carousel")}
            className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "carousel"
                ? "bg-rose-500/30 text-rose-100 border border-rose-400/40 shadow"
                : "text-rose-300/60 hover:text-rose-200"
            }`}
          >
            🎤 Stanza View
          </button>
        </div>

        {/* Views Count Badge with Eye Icon */}
        <button
          onClick={handleViewIncrement}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-500/15 hover:bg-rose-500/25 border border-rose-400/30 text-rose-300 text-xs font-bold transition-all cursor-pointer mx-auto sm:mx-0"
          title="Click to celebrate views"
        >
          <Eye size={15} className="text-rose-400" />
          <span>{viewCount} Views</span>
        </button>
      </div>

      {/* DISPLAY MODE 1: FULL LYRICS VIEW */}
      {activeTab === "full" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {lyricsData.map((sec, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.01, y: -2 }}
              className={`p-6 rounded-2xl border transition-all ${
                sec.section.toLowerCase().includes("chorus")
                  ? "bg-gradient-to-br from-rose-950/40 via-slate-900/80 to-pink-950/40 border-rose-400/50 shadow-lg shadow-rose-500/10"
                  : "bg-slate-950/60 border-rose-500/20 hover:border-rose-400/40"
              }`}
            >
              <div className="flex items-center justify-between border-b border-rose-500/20 pb-2 mb-4">
                <span
                  className={`text-xs uppercase font-extrabold tracking-widest px-2.5 py-0.5 rounded-full ${
                    sec.section.toLowerCase().includes("chorus")
                      ? "bg-rose-500/30 text-amber-200 border border-rose-400/40"
                      : "bg-slate-800 text-rose-300 border border-rose-500/20"
                  }`}
                >
                  {sec.section}
                </span>
                <Sparkles size={14} className="text-rose-400/60" />
              </div>

              <div className="space-y-2.5 font-serif text-sm sm:text-base text-rose-100/90 leading-relaxed italic">
                {sec.lines.map((line, lIdx) => (
                  <p
                    key={lIdx}
                    className="hover:text-amber-200 transition-colors cursor-default"
                  >
                    "{line}"
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* DISPLAY MODE 2: STANZA CAROUSEL MODE */}
      {activeTab === "carousel" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-6"
        >
          {/* Active Verse Card */}
          <div className="bg-gradient-to-b from-slate-950 via-rose-950/30 to-slate-950 border-2 border-rose-400/40 p-8 sm:p-12 rounded-3xl text-center shadow-2xl relative">
            <div className="absolute top-4 left-4 text-xs font-mono text-rose-300/60">
              Stanza {currentVerseIndex + 1} of {lyricsData.length}
            </div>

            <div className="inline-block px-4 py-1 rounded-full bg-rose-500/20 border border-rose-400/40 text-amber-200 text-xs font-bold uppercase tracking-widest mb-6">
              {lyricsData[currentVerseIndex]?.section || "Stanza"}
            </div>

            <div className="space-y-4 font-serif text-lg sm:text-2xl text-rose-50 leading-relaxed italic max-w-xl mx-auto">
              {lyricsData[currentVerseIndex]?.lines.map((line, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="hover:text-amber-200 transition-colors"
                >
                  "{line}"
                </motion.p>
              ))}
            </div>

            {/* Floating Heart Icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-8 text-rose-400 flex justify-center"
            >
              <Heart fill="currentColor" size={24} />
            </motion.div>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() =>
                setCurrentVerseIndex((prev) =>
                  prev === 0 ? lyricsData.length - 1 : prev - 1
                )
              }
              className="px-4 sm:px-5 py-2 rounded-xl bg-slate-950 border border-rose-500/30 hover:border-rose-400 text-rose-200 text-xs font-semibold transition-all flex-1 sm:flex-initial text-center"
            >
              ← Previous
            </button>

            <div className="flex gap-1.5 order-first sm:order-none w-full sm:w-auto justify-center">
              {lyricsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentVerseIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentVerseIndex
                      ? "bg-rose-400 w-6"
                      : "bg-slate-800 border border-rose-500/30 hover:bg-rose-500/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentVerseIndex((prev) =>
                  prev === lyricsData.length - 1 ? 0 : prev + 1
                )
              }
              className="px-4 sm:px-5 py-2 rounded-xl bg-slate-950 border border-rose-500/30 hover:border-rose-400 text-rose-200 text-xs font-semibold transition-all flex-1 sm:flex-initial text-center"
            >
              Next →
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}
