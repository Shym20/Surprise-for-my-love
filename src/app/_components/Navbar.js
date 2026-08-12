"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Heart, Sparkles, Home, HelpCircle, Music, Camera } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Surprise Home", href: "/", icon: Home },
    { label: "Love Game", href: "/quiz", icon: Heart },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-2xl bg-slate-900/80 backdrop-blur-xl border border-rose-500/30 rounded-full px-4 py-2.5 shadow-2xl flex items-center justify-between">
      {/* Brand / Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="p-1.5 bg-gradient-to-tr from-rose-500 to-pink-500 rounded-full text-white shadow-md shadow-rose-500/30"
        >
          <Heart size={16} fill="currentColor" />
        </motion.div>
        <span className="font-extrabold text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-200 to-amber-200 tracking-tight">
          Prii & Shym ❤️
        </span>
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-1 sm:gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md shadow-rose-500/30"
                    : "text-rose-200/80 hover:text-rose-100 hover:bg-slate-800/80 border border-transparent hover:border-rose-500/20"
                }`}
              >
                <Icon size={14} />
                <span>{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
