"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  Sparkles,
  Heart,
  Trophy,
  RotateCcw,
  CheckCircle2,
  Smile,
  Zap,
  Flame,
  Gift,
  ArrowRight,
  Home,
  Award,
  Crown
} from "lucide-react";
import confetti from "canvas-confetti";
import Navbar from "../_components/Navbar";
import Link from "next/link";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [activeReaction, setActiveReaction] = useState(null);

  const questions = [
    {
      id: 1,
      question: "Who is most likely to order extra food, say 'I'm not that hungry', and then eat 80% of your plate? 🍕",
      options: [
        { text: "A) Shyam (with a completely innocent face 😇)", note: "Guilty! But food tastes 10x better when it's from your plate! 🍕", points: 10 },
        { text: "B) Prii (the cute foodie queen 👑)", note: "A queen doesn't steal food, she performs a quality inspection! 💅", points: 15 },
        { text: "C) Both of us equally 🤝", note: "We literally order for two and eat like a party of four! 😂", points: 20 },
        { text: "D) Neither, we share everything peacefully 😇", note: "Lies! Peaceful food sharing does not exist when fries are involved! 😜", points: 5 }
      ]
    },
    {
      id: 2,
      question: "What is Prii's ultimate secret superpower? ✨",
      options: [
        { text: "A) Turning Shyam's bad mood into instant smiles within 3 seconds 🥰", note: "100% True! One look from you and all my stress instantly melts away! ✨", points: 20 },
        { text: "B) Finding the prettiest outfits for every occasion 👗", note: "Always looking like a 10/10 walking masterpiece! 💖", points: 15 },
        { text: "C) Remembering small details that Shyam completely forgot 🧠", note: "Your memory is like an FBI database! 🕵️‍♀️", points: 15 },
        { text: "D) All of the above plus being extremely adorable 💖", note: "BINGO! You are the complete, unbeatable package! 🏆", points: 25 }
      ]
    },
    {
      id: 3,
      question: "If we were stuck in a zombie apocalypse together, what would happen first? 🧟‍♂️",
      options: [
        { text: "A) Prii would pack 12 cute outfits and snacks before running 🎒", note: "Style & snacks > Zombies! Priorities are crystal clear! 💅", points: 15 },
        { text: "B) Shyam would try acting like a movie hero and trip over a small rock 🏃‍♂️", note: "Dramatic action hero entry completely ruined by a tiny pebble! 😂", points: 10 },
        { text: "C) We'd argue about which direction to run for 20 minutes 🗺️", note: "The zombies would literally get bored and walk away waiting for us! 🤣", points: 20 },
        { text: "D) We'd survive easily because we're the ultimate dream team 🛡️", note: "Unstoppable duo! Nobody messes with Prii & Shyam! 💪", points: 25 }
      ]
    },
    {
      id: 4,
      question: "What happens when Shyam starts singing your favorite song off-key? 🎤",
      options: [
        { text: "A) You cover your ears and laugh uncontrollably 😂", note: "Hey! It's sung with 100% passion and 0% pitch control! 🎤", points: 15 },
        { text: "B) You join in and turn it into a loud chaotic duet 🎶", note: "Best private concert ever! No audience required! 🌟", points: 20 },
        { text: "C) You give him a 10/10 rating for dedication 🌟", note: "Grammy award for Most Passionate Singer goes to Shyam! 🏆", points: 15 },
        { text: "D) You pretend you don't know him in public 🙈", note: "Ouch! But totally understandable! 😂", points: 10 }
      ]
    },
    {
      id: 5,
      question: "What is the guaranteed 100% secret code to make Prii happy? 💝",
      options: [
        { text: "A) Late night talks + endless cuddles + forehead kisses 💋", note: "Pure warmth, safety, and deep affection! ❤️", points: 20 },
        { text: "B) Delicious food + boba/coffee + sweet compliments 🍟", note: "Food is the shortest path to true happiness! 😋", points: 15 },
        { text: "C) Shyam being completely obsessed with her 24/7 💖", note: "Already active! Obsession level: 1,000,000%! 🔥", points: 20 },
        { text: "D) All of the above at the exact same time ✨", note: "JACKPOT! The ultimate royal treatment for the queen! 👑", points: 25 }
      ]
    },
    {
      id: 6,
      question: "Who fell in love first? 💘",
      options: [
        { text: "A) Shyam (From the very first moment 💘)", note: "100% Facts! My heart knew before my brain did! 💓", points: 20 },
        { text: "B) Prii (Secretly fell first 😉)", note: "A subtle romantic mastermind working behind the scenes! 🕵️‍♀️", points: 15 },
        { text: "C) It was mutual magic from day one ✨", note: "God's perfect timing and fate bringing us together! ✨", points: 20 },
        { text: "D) Doesn't matter because Shyam loves Prii the most forever 💖", note: "THE WINNER ANSWER! Forever & Always, no competition! 🏆", points: 25 }
      ]
    }
  ];

  const handleSelectOption = (questionId, optionObj) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionObj
    }));

    setActiveReaction(optionObj.note);

    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.7 }
    });
  };

  const handleNext = () => {
    setActiveReaction(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      triggerFinalCelebration();
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    setActiveReaction(null);
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const triggerFinalCelebration = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.5 }
    });
  };

  const calculateTotalScore = () => {
    return Object.values(selectedAnswers).reduce(
      (sum, opt) => sum + (opt?.points || 0),
      0
    );
  };

  const currentQ = questions[currentQuestion];
  const selectedOpt = selectedAnswers[currentQ.id];

  return (
    <div className="min-h-screen bg-slate-950 text-rose-50 flex flex-col items-center justify-start relative overflow-x-hidden font-sans pt-24 pb-16 px-4">
      {/* Navbar Integration */}
      <Navbar />

      {/* Dynamic Background Glow Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-rose-500/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-pink-500/15 rounded-full blur-[120px]" />
      </div>

      <div className="z-10 w-full max-w-3xl space-y-8">
        {/* HEADER TITLE BANNER */}
        <div className="text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs font-semibold uppercase tracking-widest"
          >
            <Sparkles size={14} className="text-amber-300" />
            <span>The Official Love Quiz 🧩</span>
          </motion.div>
          <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-200 to-amber-200 tracking-tight">
            How Well Do We Know Us? 💖
          </h1>
          <p className="text-rose-200/80 text-sm sm:text-base max-w-md mx-auto font-light">
            A fun, hilarious & romantic quiz crafted just for Prii & Shyam! Choose your answers below.
          </p>
        </div>

        {/* QUIZ MAIN CARD */}
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentQ.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/70 backdrop-blur-2xl border border-rose-500/30 p-6 sm:p-10 rounded-3xl shadow-2xl space-y-8 relative overflow-hidden"
            >
              {/* Progress Indicator Header */}
              <div className="flex items-center justify-between text-xs font-semibold text-rose-300/80 border-b border-rose-500/20 pb-4">
                <span>
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="bg-rose-500/20 px-3 py-1 rounded-full border border-rose-400/30 text-amber-200 font-mono">
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-rose-500/20">
                <motion.div
                  className="h-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400"
                  animate={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Question Text */}
              <h2 className="text-xl sm:text-2xl font-bold text-rose-100 leading-snug">
                {currentQ.question}
              </h2>

              {/* Options List */}
              <div className="space-y-3.5 pt-2">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedOpt?.text === opt.text;
                  return (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.01, x: 4 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => handleSelectOption(currentQ.id, opt)}
                      className={`w-full p-4 sm:p-5 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-3 ${
                        isSelected
                          ? "bg-gradient-to-r from-rose-950/80 via-slate-900 to-pink-950/80 border-rose-400 text-amber-200 shadow-lg shadow-rose-500/20 font-bold"
                          : "bg-slate-950/60 hover:bg-slate-900 border-rose-500/20 text-rose-100"
                      }`}
                    >
                      <span>{opt.text}</span>
                      {isSelected ? (
                        <CheckCircle2 size={20} className="text-amber-400 shrink-0" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border border-rose-500/40 shrink-0" />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Active Option Reaction Note Banner */}
              <AnimatePresence>
                {activeReaction && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-2xl bg-gradient-to-r from-rose-950/60 to-pink-950/60 border border-rose-400/40 text-amber-200 text-xs sm:text-sm italic font-serif shadow-inner flex items-center gap-3"
                  >
                    <Sparkles size={18} className="text-amber-300 shrink-0" />
                    <span>"{activeReaction}"</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-rose-500/20">
                <button
                  onClick={handlePrev}
                  disabled={currentQuestion === 0}
                  className={`px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all ${
                    currentQuestion === 0
                      ? "opacity-30 border-slate-800 text-slate-500 cursor-not-allowed"
                      : "bg-slate-950 hover:bg-slate-800 border-rose-500/30 text-rose-200"
                  }`}
                >
                  ← Previous
                </button>

                <button
                  onClick={handleNext}
                  disabled={!selectedOpt}
                  className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg transition-all ${
                    selectedOpt
                      ? "bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white shadow-rose-500/30 hover:scale-105"
                      : "bg-slate-800 text-slate-400 cursor-not-allowed border border-slate-700"
                  }`}
                >
                  <span>{currentQuestion === questions.length - 1 ? "See Final Results 🏆" : "Next Question →"}</span>
                </button>
              </div>
            </motion.div>
          ) : (
            /* FINAL CERTIFICATE & RESULTS SCREEN */
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-slate-900/80 backdrop-blur-2xl border-2 border-amber-400/50 p-8 sm:p-12 rounded-3xl shadow-2xl text-center space-y-8 relative overflow-hidden"
            >
              {/* Top Crown Icon */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="w-20 h-20 mx-auto p-4 bg-gradient-to-br from-amber-400 via-rose-500 to-pink-500 rounded-full text-white shadow-xl shadow-amber-500/30 flex items-center justify-center"
              >
                <Crown size={40} />
              </motion.div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-amber-300 font-extrabold px-3 py-1 bg-amber-500/20 rounded-full border border-amber-400/40">
                  Official Love Certification 📜
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-pink-200 to-rose-200 pt-2">
                  100% Soulmate Match! 💖
                </h2>
                <p className="text-rose-200/80 text-sm sm:text-base max-w-md mx-auto">
                  You scored <span className="text-amber-300 font-bold text-lg">{calculateTotalScore()} Love Points</span> out of 145!
                </p>
              </div>

              {/* Certificate Box */}
              <div className="bg-slate-950/80 border border-amber-500/30 p-6 sm:p-8 rounded-2xl space-y-4 shadow-inner text-left font-serif">
                <div className="flex items-center justify-between border-b border-rose-500/20 pb-3 font-sans text-xs text-rose-300/80">
                  <span>Awarded To: <strong className="text-rose-100 font-serif text-sm">Prii ❤️</strong></span>
                  <span>Certified By: <strong className="text-rose-100 font-serif text-sm">Shyam 💖</strong></span>
                </div>

                <p className="text-rose-100/90 text-sm sm:text-base leading-relaxed italic">
                  "This official certificate confirms that Prii and Shyam are 100% soulmates, certified for infinite laughter, endless food sharing, romantic late night talks, and everlasting love!"
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 pt-2 font-sans">
                  <span className="px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs font-semibold flex items-center gap-1">
                    <Trophy size={12} className="text-amber-400" /> Food Sharing Champion
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-pink-500/20 border border-pink-400/30 text-pink-300 text-xs font-semibold flex items-center gap-1">
                    <Award size={12} className="text-amber-400" /> Master of Mood Lifting
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold flex items-center gap-1">
                    <Heart size={12} fill="currentColor" className="text-rose-400" /> Forever Soulmates
                  </span>
                </div>
              </div>

              {/* Action Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => {
                    setSelectedAnswers({});
                    setCurrentQuestion(0);
                    setShowResult(false);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-rose-500/30 text-rose-200 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow"
                >
                  <RotateCcw size={16} /> Retake Quiz
                </button>

                <Link href="/" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-500/30 transition-all transform hover:scale-105">
                    <Home size={16} /> Back to Surprise Home
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
