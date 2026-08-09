"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Film,
  Sparkles,
  Heart,
  Info,
  Check,
  Video,
  Clapperboard,
  RotateCcw
} from "lucide-react";
import confetti from "canvas-confetti";

export default function VideoSection({
  videoSrc = "/pari-bday-video.mp4",
  posterSrc = "/couple1.png",
  title = "Our Special Moments in Motion 🎬",
  subtitle = "A movie edited with all my love, capturing our best memories together."
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [showControls, setShowControls] = useState(true);
  const [showInstructions, setShowInstructions] = useState(false);
  const [likes, setLikes] = useState(18);
  const [hasLiked, setHasLiked] = useState(false);
  const controlsTimeoutRef = useRef(null);

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    if (total > 0) {
      setProgress((current / total) * 100);
      setCurrentTime(formatTime(current));
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(formatTime(videoRef.current.duration));
    }
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const seekTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
    setProgress(e.target.value);
  };

  const handleFullscreen = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen().catch((err) => console.log(err));
    }
  };

  const handleLike = () => {
    setLikes((prev) => prev + 1);
    setHasLiked(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  // Handle mouse move to auto-hide controls after inactivity
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, []);

  return (
    <section className="space-y-8 my-16 relative">
      {/* Header Title */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
          <Clapperboard size={14} className="text-pink-400 animate-pulse" />
          <span>Cinematic Surprise</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-100 to-amber-200">
          {title}
        </h2>
        <p className="text-rose-200/80 text-sm sm:text-base max-w-xl mx-auto font-serif italic">
          {subtitle}
        </p>
      </div>

      {/* Main Video Box Container */}
      <div className="relative max-w-sm sm:max-w-md md:max-w-lg mx-auto">
        {/* Glow ambient layer behind player */}
        <div className="absolute -inset-2 bg-gradient-to-r from-rose-600 via-pink-500 to-amber-500 rounded-[2.5rem] opacity-30 blur-2xl animate-pulse -z-10" />

        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => isPlaying && setShowControls(false)}
          className="relative rounded-3xl overflow-hidden bg-slate-950 border border-rose-500/40 shadow-2xl group flex items-center justify-center min-h-[550px] sm:min-h-[700px]"
        >
          {/* Video Tag */}
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            onClick={togglePlay}
            className="w-full h-auto max-h-[85vh] object-contain cursor-pointer"
            playsInline
          />

          {/* Big Play Overlay (when paused or start) */}
          <AnimatePresence>
            {!isPlaying && (
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={togglePlay}
                className="absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-rose-500/90 to-pink-600/90 border-2 border-white/40 shadow-2xl flex items-center justify-center text-white backdrop-blur-md hover:scale-110 active:scale-95 transition-all z-20"
              >
                <Play size={40} className="ml-1 fill-white" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Floating Top Tag */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 pointer-events-none">
            <span className="bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-rose-400/30 text-xs font-semibold text-rose-200 flex items-center gap-1.5 shadow-lg">
              <Film size={14} className="text-rose-400" /> Our Movie Edit
            </span>
          </div>

          {/* Instruction Toggle Button (Top Right) */}
          <button
            onClick={() => setShowInstructions(!showInstructions)}
            className="absolute top-4 right-4 z-30 bg-slate-950/80 hover:bg-slate-900 backdrop-blur-md px-3 py-1.5 rounded-full border border-rose-400/30 text-xs font-medium text-amber-300 hover:text-amber-200 flex items-center gap-1.5 transition-all shadow-lg"
            title="How to upload your own video"
          >
            <Info size={14} />
            <span>{showInstructions ? "Hide Helper" : "Replace Video Info"}</span>
          </button>

          {/* Video Control Bar (Bottom Glassmorphism) */}
          <motion.div
            animate={{ opacity: showControls || !isPlaying ? 1 : 0, y: showControls || !isPlaying ? 0 : 20 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent p-4 sm:p-6 z-20 space-y-3"
          >
            {/* Progress Seek Bar */}
            <div className="relative flex items-center group/slider">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="w-full h-1.5 bg-rose-950/80 hover:h-2.5 rounded-lg appearance-none cursor-pointer accent-rose-500 transition-all"
              />
            </div>

            {/* Bottom Controls Row */}
            <div className="flex items-center justify-between text-rose-100 text-xs sm:text-sm">
              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/40 border border-rose-400/30 text-white transition-all"
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-rose-500/20 text-rose-200 transition-all"
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>

                <div className="text-xs font-mono text-rose-200/80">
                  <span>{currentTime}</span> / <span>{duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleLike}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    hasLiked
                      ? "bg-rose-500 border-rose-400 text-white shadow-lg shadow-rose-500/30"
                      : "bg-slate-900/70 hover:bg-slate-800 border-rose-500/30 text-rose-300"
                  }`}
                >
                  <Heart size={14} fill={hasLiked ? "currentColor" : "none"} />
                  <span>{likes}</span>
                </button>

                <button
                  onClick={handleFullscreen}
                  className="p-2 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-rose-500/20 text-rose-200 transition-all"
                  title="Fullscreen"
                >
                  <Maximize2 size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Helper Modal / Alert banner for updating the video */}
      <AnimatePresence>
        {showInstructions && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-lg mx-auto p-5 rounded-2xl bg-slate-900/90 border border-amber-500/40 backdrop-blur-xl text-rose-100 space-y-3 shadow-xl"
          >
            <div className="flex items-center justify-between text-amber-300 font-bold text-sm">
              <span className="flex items-center gap-2">
                <Video size={18} /> How to Add Your Edited Video
              </span>
              <button
                onClick={() => setShowInstructions(false)}
                className="text-xs text-rose-300 hover:text-white px-2 py-1 rounded bg-slate-800"
              >
                Close
              </button>
            </div>
            <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-rose-200/90 leading-relaxed font-sans">
              <li>
                Place your video file inside the <code className="bg-slate-950 px-1.5 py-0.5 rounded text-amber-300 font-mono">public/</code> folder (e.g. <code className="bg-slate-950 px-1.5 py-0.5 rounded text-amber-300 font-mono">public/my-special-video.mp4</code>).
              </li>
              <li>
                Open <code className="bg-slate-950 px-1.5 py-0.5 rounded text-amber-300 font-mono">src/app/_components/landing-page/page.js</code> (or pass the prop into <code className="bg-slate-950 px-1.5 py-0.5 rounded text-amber-300 font-mono">VideoSection</code>).
              </li>
              <li>
                Set <code className="bg-slate-950 px-1.5 py-0.5 rounded text-amber-300 font-mono">videoSrc="/my-special-video.mp4"</code>.
              </li>
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
