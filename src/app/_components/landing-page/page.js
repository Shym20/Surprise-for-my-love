"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Sparkles,
  Lock,
  Gift,
  Calendar,
  MessageCircleHeart,
  Music,
  Camera,
  Star,
  ChevronRight,
  Smile,
  Volume2,
  VolumeX,
  Cake,
  Quote,
  Clock,
  PartyPopper
} from "lucide-react";
import confetti from "canvas-confetti";

export default function SurpriseBase() {
  const [unlocked, setUnlocked] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState(false);

  // Background Slideshow state
  const [bgIndex, setBgIndex] = useState(0);
  const bgImages = ["/images/bg1.jpg", "/images/bg2.jpg", "/images/bg3.jpg"];

  // Passcode default
  const SECRET_PASSCODE = "1820"

  // Confetti trigger
  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  // Background Slideshow Interval (changes every 6 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleUnlock = (e) => {
    e.preventDefault();
    if (
      passcode === SECRET_PASSCODE ||
      passcode.toLowerCase() === "love" ||
      passcode.toLowerCase() === "birthday"
    ) {
      setUnlocked(true);
      triggerConfetti();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1500);
    }
  };

  // Timeline Data
  const timelineEvents = [
    {
      date: "The Day We Met",
      title: "Where Magic Started ✨",
      description:
        "From the very first conversation, I knew you were someone extraordinarily special. You brought an unforgettable warmth into my life.",
      icon: Sparkles,
      tag: "Beginning",
    },
    {
      date: "Our First Memory",
      title: "Laughter & Late Night Talks 🌙",
      description:
        "Hours felt like minutes whenever we spoke. Your smile instantly became my favorite view in the world.",
      icon: Calendar,
      tag: "Special Moment",
    },
    {
      date: "Everyday Magic",
      title: "Growing Stronger Together 💖",
      description:
        "Through every little moment, small adventures, and warm hugs, loving you has been the easiest and most beautiful choice.",
      icon: Heart,
      tag: "Forever Growing",
    },
    {
      date: "Today",
      title: "Happy Birthday My Love! 🎂",
      description:
        "Today is entirely dedicated to celebrating YOU—your beautiful soul, your warmth, and the joy you give everyone around you.",
      icon: Cake,
      tag: "Celebration",
    },
  ];

  // Love Reasons Data
  const loveReasons = [
    {
      title: "Your Kind Heart",
      desc: "You care so deeply for everyone around you and make the world a gentler, brighter place.",
      icon: Heart,
    },
    {
      title: "Your Precious Smile",
      desc: "No matter how tough any day gets, seeing your smile instantly lights up my whole world.",
      icon: Smile,
    },
    {
      title: "Our Comfort",
      desc: "With you, I can completely be myself without fear. You are my home and safe space.",
      icon: Star,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-rose-50 flex flex-col items-center justify-start relative overflow-x-hidden font-sans">
      {/* Dynamic Background Image Carousel with Dark Romantic Gradient Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImages[bgIndex]})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
      </div>

      {/* Floating Animated Heart Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-400/80"
            initial={{
              x: `${(i * 6) % 100}vw`,
              y: "105vh",
              scale: 0.4 + (i % 3) * 0.3,
            }}
            animate={{
              y: "-10vh",
              rotate: 360,
            }}
            transition={{
              duration: 12 + (i % 4) * 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          >
            <Heart fill="currentColor" size={20 + (i % 4) * 8} />
          </motion.div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="z-10 w-full max-w-5xl px-4 py-8 flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!unlocked ? (
            /* Locked Birthday Entry Gate */
            <motion.div
              key="lockscreen"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="my-auto min-h-[75vh] flex items-center justify-center w-full"
            >
              <div className="bg-slate-900/70 backdrop-blur-2xl border border-rose-500/30 p-8 sm:p-10 rounded-3xl shadow-2xl max-w-md w-full text-center flex flex-col items-center relative overflow-hidden">
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
                  Birthday Surprise Gate 🎂
                </h1>
                <p className="text-rose-200/80 text-sm mb-6 leading-relaxed">
                  A special place made with love, memories, and birthday wishes just for you. Enter the secret code to step inside!
                </p>

                <form onSubmit={handleUnlock} className="w-full space-y-4">
                  <div>
                    <input
                      type="password"
                      placeholder="Passcode (Default: 1234 or 'love')"
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border ${
                        error ? "border-red-500 animate-pulse" : "border-rose-500/30"
                      } text-center text-rose-100 placeholder-rose-400/40 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 transition-all`}
                    />
                    {error && (
                      <p className="text-red-400 text-xs mt-2 font-medium">
                        Hint: Use code "1234" or "love" ✨
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-bold shadow-lg shadow-rose-500/30 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 tracking-wide"
                  >
                    <Sparkles size={20} /> Open Birthday Surprise
                  </button>
                </form>
              </div>
            </motion.div>
          ) : (
            /* Unlocked Birthday Website Dedicated Sections */
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full space-y-16 py-6"
            >
              {/* HERO BIRTHDAY HEADER */}
              <div className="text-center space-y-4 relative py-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-300 text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-inner"
                >
                  <PartyPopper size={16} /> Happy Birthday To My Favorite Person <PartyPopper size={16} />
                </motion.div>

                <h1 className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-300 to-amber-200 tracking-tight leading-tight">
                  Happy Birthday, My Love! 💕
                </h1>

                <p className="text-rose-200/80 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
                  Today is your day, and this website is my dedicated gift to celebrate every smile, every memory, and every moment we share.
                </p>

                {/* Confetti Trigger Button */}
                <div className="pt-2">
                  <button
                    onClick={triggerConfetti}
                    className="px-6 py-2.5 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-200 hover:bg-rose-500/30 text-xs sm:text-sm font-medium transition-all inline-flex items-center gap-2"
                  >
                    <Sparkles size={16} /> Shower Birthday Confetti 🎉
                  </button>
                </div>
              </div>

              {/* SECTION 1: HEARTFELT DEDICATION PARAGRAPHS WITH PHOTO OVERLAY */}
              <section className="bg-slate-900/60 backdrop-blur-xl border border-rose-500/25 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 text-rose-400 font-semibold text-xs uppercase tracking-widest">
                      <Quote size={18} /> Dedicated To You
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-bold text-rose-100">
                      "You are my sun, my moon, and all my stars."
                    </h2>
                    <p className="text-rose-200/90 text-sm sm:text-base leading-relaxed">
                      Happy Birthday! Having you in my life is the greatest blessing I could ever ask for. Your kindness, your gentle laughter, and the way you bring light into every room make me fall in love with you more every single day.
                    </p>
                    <p className="text-rose-200/80 text-sm sm:text-base leading-relaxed">
                      I built this personal website just for you to remind you how deeply loved, appreciated, and cherished you truly are—not just today on your birthday, but forever.
                    </p>
                  </div>

                  {/* Photo Showcase Frame */}
                  <div className="lg:col-span-5 relative">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="rounded-2xl overflow-hidden border-2 border-rose-400/40 shadow-2xl relative aspect-[4/5]"
                    >
                      <img
                        src={bgImages[bgIndex]}
                        alt="Our Birthday Memory"
                        className="w-full h-full object-cover transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-4 left-4 right-4 text-center">
                        <span className="text-xs text-rose-200/90 bg-slate-900/80 px-3 py-1 rounded-full backdrop-blur-md border border-rose-400/30">
                          ✨ Changing Memories automatically...
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* SECTION 2: OUR CORE MEMORIES TIMELINE */}
              <section className="space-y-8">
                <div className="text-center space-y-2">
                  <span className="text-xs uppercase tracking-widest text-pink-400 font-bold">
                    Our Story
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-200 to-amber-100">
                    Our Core Memories & Timeline
                  </h2>
                  <p className="text-rose-200/70 text-sm max-w-md mx-auto">
                    A look back at the special milestones that brought us to where we are today.
                  </p>
                </div>

                <div className="relative border-l-2 border-rose-500/30 ml-4 sm:ml-32 pl-6 sm:pl-10 space-y-10">
                  {timelineEvents.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="relative group"
                      >
                        {/* Timeline Marker Dot */}
                        <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 p-2 rounded-full bg-slate-950 border-2 border-rose-400 text-rose-300 shadow-md group-hover:scale-125 transition-all">
                          <IconComponent size={18} />
                        </div>

                        {/* Event Content Card */}
                        <div className="bg-slate-900/60 backdrop-blur-md border border-rose-500/20 p-6 sm:p-8 rounded-2xl shadow-xl hover:border-rose-400/40 transition-all space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                              {item.date}
                            </span>
                            <span className="text-xs text-rose-300/60 font-mono">
                              {item.tag}
                            </span>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-bold text-rose-100">
                            {item.title}
                          </h3>

                          <p className="text-rose-200/80 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </section>

              {/* SECTION 3: REASONS WHY I LOVE YOU (Interactive Cards) */}
              <section className="space-y-8">
                <div className="text-center space-y-2">
                  <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                    From My Heart
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-rose-100">
                    Why You Are So Special To Me
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {loveReasons.map((reason, index) => {
                    const ReasonIcon = reason.icon;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ y: -6 }}
                        className="bg-slate-900/50 backdrop-blur-md border border-rose-500/20 p-6 rounded-2xl shadow-lg text-center space-y-4 hover:border-rose-400/40 transition-all flex flex-col items-center justify-between"
                      >
                        <div className="p-4 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-full text-rose-300 border border-rose-500/30">
                          <ReasonIcon size={28} />
                        </div>
                        <h3 className="font-bold text-xl text-rose-100">
                          {reason.title}
                        </h3>
                        <p className="text-rose-200/80 text-xs sm:text-sm leading-relaxed">
                          {reason.desc}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </section>

              {/* FOOTER BIRTHDAY LOVE NOTE */}
              <footer className="text-center py-10 border-t border-rose-500/20 space-y-4">
                <Heart
                  className="mx-auto text-rose-400 animate-pulse"
                  size={36}
                  fill="currentColor"
                />
                <p className="text-rose-200 font-serif italic text-lg sm:text-xl">
                  "Happy Birthday! May your day be as wonderful and bright as you make my life every single day."
                </p>
                <div className="text-xs text-rose-300/50 uppercase tracking-widest">
                  Crafted specially for your birthday ❤️
                </div>
              </footer>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
