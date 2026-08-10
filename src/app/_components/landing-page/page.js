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
  PartyPopper,
  X,
  Maximize2,
  Eye,
  RotateCw,
  Filter,
  ChevronLeft,
  Send
} from "lucide-react";
import confetti from "canvas-confetti";
import VideoSection from "./VideoSection";
import SongLyricsSection from "./SongLyricsSection";
import ThingsILoveSection from "./ThingsILoveSection";
import Navbar from "../Navbar";

export default function SurpriseBase() {
  const [unlocked, setUnlocked] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState(false);

  // Gallery Interaction States
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [flippedCards, setFlippedCards] = useState({});
  const [likesCount, setLikesCount] = useState({});
  const [activeModalItem, setActiveModalItem] = useState(null);

  const toggleFlip = (id, e) => {
    if (e) e.stopPropagation();
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleLike = (id, e) => {
    if (e) e.stopPropagation();
    setLikesCount((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
    triggerConfetti();
  };

  // Background Slideshow state
  const [bgIndex, setBgIndex] = useState(0);
  const bgImages = ["/prii1.png", "/prii2.png", "/prii3.png", "/prii4.png"];

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
      date: "2 May 2023",
      title: "The Day We Met",
      description:
        "From the very first conversation, I knew you were someone extraordinarily special. You brought an unforgettable warmth into my life.",
      icon: Sparkles,
      tag: "Beginning",
    },
    {
      date: "22 Jan 2023",
      title: "The Day Fate Brought You Back",
      description:
        "After two years apart, your message appeared and somehow made everything feel right again. I don't know if it was fate, a second chance, or simply us finding our way back — I just know I was ready to choose you again.",
      icon: Calendar,
      tag: "God's Plan",
    },
    {
      date: "20 Jun 2025",
      title: "Our First Journey Together",
      description:
        "20 June 2025 — the day we began our first journey beyond Madhya Pradesh. Vrindavan, Barsana, Gokul and Mathura became more than just places on a map; they became beautiful chapters of our story, filled with laughter, memories, and moments I wish I could relive forever.",
      icon: Heart,
      tag: "A Journey to Remember",
    },
    {
      date: "Today",
      title: "Happy Birthday My Girl! 🎂",
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

  // Couple Memories Gallery Data
  const coupleMemories = [
    {
      id: 1,
      image: "/couple9.png",
      title: "My 22nd Birthday in Vrindavan",
      category: "Special Memories",
      tag: "Birthday Bliss",
      date: "June 20",
      note: "Celebrating my 22nd birthday in the beautiful streets of Vrindavan made the day even more special. Sharing those moments with you turned my birthday into a memory I’ll always hold close to my heart.",
      location: "Vrindavan",
      hearts: 262
    },
    {
      id: 2,
      image: "/couple2.png",
      title: "The Night Before My Birthday 🎂❤️",
      category: "Sweet Memories",
      tag: "Birthday Eve",
      date: "June 19, 2026",
      note: "The perfect night before my birthday — Us at our private villa, dancing without a care, singing at the top of our voices, playing around, laughing endlessly, and making memories before the birthday even began. A night I wish I could relive again and again.",
      location: "Stella Villa",
      hearts: 222
    },
    {
      id: 3,
      image: "/couple3.png",
      title: "Birthday Midnight Madness 🏊‍♂️🎂❤️",
      category: "Birthday Memories",
      tag: "Midnight Magic",
      date: "June 20, 2026",
      note: "Somewhere between 1 and 3 AM, while the whole world was asleep, we were busy making our own little celebration at Stella Villa. Swimming, playing, dancing, singing, laughing, and enjoying every crazy little moment together — the kind of birthday night I’ll never forget.",
      location: "Stella Villa",
      hearts: 222
    },
    {
      id: 4,
      image: "/couple4.png",
      title: "The Birthday Midnight Moment 🎂❤️",
      category: "Birthday Memories",
      tag: "12 AM Magic",
      date: "June 20, 2026",
      note: "The clock struck 12 at Stella Villa, and suddenly it was my birthday. Cutting the cake together, sharing those quiet romantic moments, smiling at each other, and creating memories that made the beginning of my special day absolutely unforgettable.",
      location: "Stella Villa",
      hearts: 222
    },
    {
      id: 5,
      image: "/couple5.png",
      title: "Candlelight Dinner Date 🕯️❤️",
      category: "Romantic Nights",
      tag: "Dinner & Love",
      date: "November 7, 2025",
      note: "A beautiful candlelight dinner at GK Hotel — soft lights, delicious food, quiet conversations, and you sitting across from me. It was one of those simple evenings that felt incredibly romantic and became a memory worth keeping forever.",
      location: "GK Hotel",
      hearts: 1
    },
    {
      id: 6,
      image: "/couple6.png",
      title: "Winter Days at the Farm 🌾❤️",
      category: "Sweet Memories",
      tag: "Cozy Winter",
      date: "December 7, 2025",
      note: "A perfect winter day at the farm — enjoying the chilly weather, cooking something delicious together, sharing laughs, and simply soaking in the warmth of each other's company. Nothing fancy, just us making the simplest day feel special.",
      location: "The Farm",
      hearts: 102
    },
    {
      id: 7,
      image: "/couple7.png",
      title: "Her Favorite Kashmiri Chudiya ❤️✨",
      category: "Special Memories",
      tag: "Little Things, Big Love",
      date: "February 15, 2026",
      note: "A day made special by the little things — buying you your favorite Kashmiri chudiya and then spending a beautiful day together at Rajwada Gopal Mandir. Seeing your happiness in those bangles made the whole moment worth remembering.",
      location: "Rajwada Gopal Mandir",
      hearts: 107
    },
    {
      id: 8,
      image: "/couple8.png",
      title: "Our First Dandiya Night 💃❤️",
      category: "Special Memories",
      tag: "Dholi Tara 4.0",
      date: "September 24, 2025",
      note: "Our first Navratri Dandiya night together — dressed up, dancing to the beats, and making memories at Dholi Tara 4.0. Sharing the colors, music, and festive energy with you at Essentia Luxury Hotel made that night truly unforgettable.",
      location: "Essentia Luxury Hotel",
      hearts: 225
    },
    {
      id: 9,
      image: "/couple10.png",
      title: "Our Monsoon Moment 🌧️💖",
      category: "Sweet Dates",
      tag: "Rainy Romance",
      date: "July 13, 2025",
      note: "A beautiful monsoon day at High Garden Cafe, wrapped in cozy moments, half-drenched clothes, endless smiles, and the kind of closeness that made the rain feel even more romantic.",
      location: "High Garden Cafe",
      hearts: 85
    },
    {
      id: 10,
      image: "/couple11.png",
      title: "Our First Holi Together 🌈💖",
      category: "Special Memories",
      tag: "Rangon Wala Pyaar",
      date: "March 14",
      note: "Our very first Holi together — covered in colors, laughter, and countless little moments that made the day unforgettable. Celebrating the festival of colors with you made every shade feel a little more beautiful.",
      location: "Colors Carnival 1.0",
      hearts: 225
    },
    {
      id: 11,
      image: "/couple12.png",
      title: "Your 21st Birthday 💖🎂",
      category: "Birthday Memories",
      tag: "Lakeside Magic",
      date: "August 18, 2025",
      note: "Celebrating your 21st birthday by the lakeside made the day feel even more special. Watching you smile, enjoying the peaceful view, and being there beside you made your birthday a memory I’ll always cherish.",
      location: "Bilawali Lake",
      hearts: 60
    },
    {
  id: 11,
  image: "/couple1.png",
  title: "Our Love, Their Conversations ❤️‍🔥",
  category: "Unforgettable Moments",
  tag: "Let Them Talk",
  date: "June 20, 2026",
  note: "You wore what made I feel beautiful, and somehow that became everyone else's business. While some people chose to talk about the clothes, we were busy creating a memory — you surprising me and booking a private theatre for my birthday. 11 shares on our post, conversations all around the village, and everyone talking about our moment… maybe that's just another way of saying people couldn't stop noticing us. Let them talk — we were too busy living our story. ❤️",
  location: "Private Theatre",
  hearts: 222
}

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
                      placeholder="Passcode"
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border ${error ? "border-red-500 animate-pulse" : "border-rose-500/30"
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
              className="w-full space-y-16 py-6 pt-16"
            >
              {/* NAVIGATION BAR */}
              <Navbar />

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
                    <Sparkles size={16} /> Click Me to Shower Birthday Confetti 🎉
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
                      Happy Birthday Priiiiiiiiiii ! Having you in my life is the greatest blessing I could ever ask for. Your kindness, your gentle laughter, and the way you bring light into every room make me fall in love with you more every single day.
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
                          HAPPY 22nd 🥂
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

              {/* VIDEO SECTION: SPECIAL MOVIE EDIT */}
              <VideoSection videoSrc="/pari-bday-video-hd.mp4" />

              {/* SONG LYRICS SECTION: SPECIAL SONG FOR HER */}
              <SongLyricsSection />

              {/* THINGS & WORDS I LOVE ABOUT HER SECTION */}
              <ThingsILoveSection />

              {/* NEW SECTION: OUR ROMANTIC GALLERY & MEMORY WALL */}
              <section className="space-y-10">
                <div className="text-center space-y-3">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs font-semibold uppercase tracking-widest"
                  >
                    <Camera size={15} /> Treasured Moments Wall <Camera size={15} />
                  </motion.div>
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-100 via-pink-200 to-amber-200">
                    Our Romantic Memory Gallery
                  </h2>
                  <p className="text-rose-200/75 text-sm sm:text-base max-w-xl mx-auto font-light">
                    Every picture tells a story of our love. Tap any photo to flip and read secret notes, or click to enlarge our special memories! 💖
                  </p>

                  {/* Category Filter Tabs */}
                  <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
                    {["All", "Sweet Dates", "Adventures", "Romantic Nights", "Forever Love"].map((cat) => {
                      const isActive = selectedCategory === cat;
                      return (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 ${isActive
                            ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30 scale-105"
                            : "bg-slate-900/60 hover:bg-slate-800 text-rose-200/80 border border-rose-500/20"
                            }`}
                        >
                          {cat === "All" && <Sparkles size={14} />}
                          {cat === "Sweet Dates" && <Smile size={14} />}
                          {cat === "Adventures" && <Star size={14} />}
                          {cat === "Romantic Nights" && <Heart size={14} />}
                          {cat === "Forever Love" && <Gift size={14} />}
                          {cat}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Polaroid Photo Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
                  {coupleMemories
                    .filter((item) => selectedCategory === "All" || item.category === selectedCategory)
                    .map((item, index) => {
                      const isFlipped = !!flippedCards[item.id];
                      const totalLikes = item.hearts + (likesCount[item.id] || 0);

                      // Alternating rotational tilts for realistic polaroid wall feel
                      const tiltClasses = [
                        "hover:rotate-0 sm:rotate-1",
                        "hover:rotate-0 sm:-rotate-2",
                        "hover:rotate-0 sm:rotate-2",
                        "hover:rotate-0 sm:-rotate-1",
                      ];
                      const tiltClass = tiltClasses[index % tiltClasses.length];

                      return (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, scale: 0.9, y: 20 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
                          className={`relative group perspective-1000 ${tiltClass} transition-all duration-300`}
                        >
                          <div
                            className={`relative w-full h-[380px] rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""
                              }`}
                          >
                            {/* FRONT OF POLAROID CARD */}
                            <div className="absolute inset-0 w-full h-full bg-slate-900/70 backdrop-blur-xl border border-rose-500/30 rounded-3xl p-3.5 flex flex-col justify-between shadow-2xl [backface-visibility:hidden] hover:border-rose-400/60 transition-all">
                              {/* Photo Image Frame */}
                              <div
                                onClick={() => setActiveModalItem(item)}
                                className="relative w-full h-56 rounded-2xl overflow-hidden cursor-pointer group/img border border-rose-500/20 bg-slate-950"
                              >
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity" />

                                {/* Category Tag */}
                                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-rose-400/30 text-rose-200 text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                                  {item.tag}
                                </span>

                                {/* Zoom Hint Icon */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-xs">
                                  <span className="p-3 bg-rose-500/80 rounded-full text-white shadow-lg">
                                    <Maximize2 size={18} />
                                  </span>
                                </div>

                                {/* Like Heart Button (Top Right) */}
                                <button
                                  onClick={(e) => handleLike(item.id, e)}
                                  className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/70 backdrop-blur-md border border-rose-400/30 text-rose-400 hover:text-rose-300 hover:scale-125 transition-all flex items-center gap-1 text-xs"
                                >
                                  <Heart fill="currentColor" size={14} />
                                  <span className="font-bold text-[11px] text-rose-100">
                                    {totalLikes}
                                  </span>
                                </button>
                              </div>

                              {/* Card Info & Caption */}
                              <div className="pt-2 px-1 flex flex-col justify-between flex-grow">
                                <div className="flex items-center justify-between gap-1">
                                  <h3 className="font-bold text-base text-rose-100 truncate">
                                    {item.title}
                                  </h3>
                                  <span className="text-[11px] text-rose-300/60 font-mono">
                                    {item.date}
                                  </span>
                                </div>

                                <div className="flex items-center justify-between text-xs text-rose-200/70 pt-1">
                                  <span className="flex items-center gap-1 text-rose-300/80">
                                    <Clock size={12} /> {item.location}
                                  </span>
                                </div>

                                {/* Flip Action Button */}
                                <div className="pt-2 flex items-center gap-2">
                                  <button
                                    onClick={(e) => toggleFlip(item.id, e)}
                                    className="w-full py-2 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-400/30 text-rose-200 text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
                                  >
                                    <RotateCw size={13} /> Secret Love Note
                                  </button>
                                  <button
                                    onClick={() => setActiveModalItem(item)}
                                    className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-rose-500/20 text-rose-300 transition-all"
                                    title="View Full Picture"
                                  >
                                    <Eye size={15} />
                                  </button>
                                </div>
                              </div>
                            </div>

                            {/* BACK OF POLAROID CARD (REVEALS SECRET LOVE NOTE) */}
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-rose-950/80 to-slate-950 backdrop-blur-2xl border border-rose-400/50 rounded-3xl p-5 flex flex-col justify-between shadow-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                              <div className="space-y-3">
                                <div className="flex items-center justify-between border-b border-rose-500/20 pb-2">
                                  <span className="text-xs uppercase tracking-widest text-pink-300 font-bold flex items-center gap-1">
                                    <Quote size={14} /> Secret Note
                                  </span>
                                  <span className="text-[10px] text-rose-300/60 bg-rose-500/20 px-2 py-0.5 rounded-full border border-rose-400/30">
                                    {item.date}
                                  </span>
                                </div>

                                <p className="text-rose-100/90 italic font-serif text-sm leading-relaxed pt-2">
                                  "{item.note}"
                                </p>
                              </div>

                              <div className="space-y-3 pt-4 border-t border-rose-500/20">
                                <div className="flex items-center justify-between text-xs text-rose-300/80">
                                  <span>📍 {item.location}</span>
                                  <span className="text-rose-400 font-semibold flex items-center gap-1">
                                    <Heart size={12} fill="currentColor" /> {totalLikes} Loves
                                  </span>
                                </div>

                                <button
                                  onClick={(e) => toggleFlip(item.id, e)}
                                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-rose-500/20 hover:scale-[1.02] transition-all"
                                >
                                  <RotateCw size={14} /> Flip Back To Photo
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                </div>
              </section>

              {/* LIGHTBOX MODAL FOR FULL SCREEN PHOTO MEMORY */}
              <AnimatePresence>
                {activeModalItem && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setActiveModalItem(null)}
                    className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center overflow-y-auto"
                  >
                    <motion.div
                      initial={{ scale: 0.9, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0.9, y: 20 }}
                      onClick={(e) => e.stopPropagation()}
                      className="bg-slate-900/90 border border-rose-500/40 rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl grid grid-cols-1 md:grid-cols-12 relative"
                    >
                      {/* Close Button */}
                      <button
                        onClick={() => setActiveModalItem(null)}
                        className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/70 border border-rose-400/40 text-rose-200 hover:text-white hover:bg-rose-500 transition-all"
                      >
                        <X size={20} />
                      </button>

                      {/* Modal Image View */}
                      <div className="md:col-span-7 bg-slate-950 relative min-h-[320px] sm:min-h-[420px] flex items-center justify-center overflow-hidden">
                        <img
                          src={activeModalItem.image}
                          alt={activeModalItem.title}
                          className="w-full h-full object-cover max-h-[500px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-rose-200/90">
                          <span className="bg-slate-900/80 px-3 py-1 rounded-full border border-rose-400/30">
                            📍 {activeModalItem.location}
                          </span>
                          <span className="bg-rose-500/20 px-3 py-1 rounded-full border border-rose-400/30 text-rose-300">
                            {activeModalItem.tag}
                          </span>
                        </div>
                      </div>

                      {/* Modal Content Info */}
                      <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                        <div className="space-y-4">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs font-semibold">
                            <Calendar size={13} /> {activeModalItem.date}
                          </div>

                          <h2 className="text-2xl sm:text-3xl font-extrabold text-rose-100">
                            {activeModalItem.title}
                          </h2>

                          <div className="p-4 rounded-2xl bg-slate-950/60 border border-rose-500/20 space-y-2">
                            <span className="text-xs font-semibold text-rose-300 flex items-center gap-1">
                              <Quote size={14} /> Personal Note:
                            </span>
                            <p className="text-rose-200/90 italic font-serif text-sm leading-relaxed">
                              "{activeModalItem.note}"
                            </p>
                          </div>
                        </div>

                        {/* Modal Action Controls */}
                        <div className="space-y-4 pt-2">
                          <div className="flex items-center justify-between text-sm text-rose-200">
                            <span>Total Love Reactions</span>
                            <span className="font-bold text-rose-400 flex items-center gap-1 text-base">
                              <Heart fill="currentColor" size={18} />{" "}
                              {activeModalItem.hearts + (likesCount[activeModalItem.id] || 0)}
                            </span>
                          </div>

                          <button
                            onClick={() => handleLike(activeModalItem.id)}
                            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-bold shadow-lg shadow-rose-500/30 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <Heart fill="currentColor" size={20} /> Send Love & Confetti 🎉
                          </button>

                          {/* Navigation between Modal items */}
                          <div className="flex items-center justify-between pt-2">
                            <button
                              onClick={() => {
                                const currentIndex = coupleMemories.findIndex(
                                  (m) => m.id === activeModalItem.id
                                );
                                const prevIndex =
                                  (currentIndex - 1 + coupleMemories.length) % coupleMemories.length;
                                setActiveModalItem(coupleMemories[prevIndex]);
                              }}
                              className="text-xs text-rose-300/70 hover:text-rose-200 flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-slate-800"
                            >
                              <ChevronLeft size={14} /> Previous Memory
                            </button>

                            <button
                              onClick={() => {
                                const currentIndex = coupleMemories.findIndex(
                                  (m) => m.id === activeModalItem.id
                                );
                                const nextIndex = (currentIndex + 1) % coupleMemories.length;
                                setActiveModalItem(coupleMemories[nextIndex]);
                              }}
                              className="text-xs text-rose-300/70 hover:text-rose-200 flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-slate-800"
                            >
                              Next Memory <ChevronRight size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

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
                  CREATED, Coded & Crafted by SHYAM PADIYAR ❤️
                </div>
              </footer>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
