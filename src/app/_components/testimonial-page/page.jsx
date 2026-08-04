"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    Star,
    Users,
    MessageCircle,
    Play,
    ArrowRight,
    Heart,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import TestimonialApi from "../../../apis/testimonial/testimonial.api";

const stats = [
    {
        icon: Star,
        value: "4.8",
        suffix: "/5",
        title: "Average Rating",
        subtitle: "Based on 1,200+ reviews",
        color: "bg-purple-100 text-purple-600",
    },
    {
        icon: Users,
        value: "12K+",
        title: "Happy Users",
        subtitle: "Creators & Viewers",
        color: "bg-violet-100 text-violet-600",
    },
    {
        icon: MessageCircle,
        value: "2.3K+",
        title: "Reviews",
        subtitle: "Across All Platforms",
        color: "bg-orange-100 text-orange-500",
    },
];

const testimonials = [
    {
        id: 1,
        name: "Aman Verma",
        role: "Creator",
        image: "https://placehold.co/80x80/E9D5FF/7C3AED?text=A",
        rating: 5,
        time: "5 days ago",
        review:
            "Finally a platform that rewards creators from day one. I uploaded my first video and earned!",
    },
    {
        id: 2,
        name: "Neha Singh",
        role: "Viewer",
        image: "https://placehold.co/80x80/FCE7F3/DB2777?text=N",
        rating: 5,
        time: "1 week ago",
        review:
            "I love how I learn while watching quality content. Clipverse is different!",
    },
    {
        id: 3,
        name: "Rohit Fitness",
        role: "Creator",
        image: "https://placehold.co/80x80/FDE68A/B45309?text=R",
        rating: 5,
        time: "2 weeks ago",
        review:
            "The best part is the support team and smooth withdrawals. Highly recommended!",
    },
    {
        id: 4,
        name: "Pooja Mehta",
        role: "Viewer",
        image: "https://placehold.co/80x80/FBCFE8/BE185D?text=P",
        rating: 5,
        time: "3 weeks ago",
        review:
            "Educational content + rewards = perfect combo. I spend more time here now.",
    },
];

export default function TestimonialsPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [dynTestimonials, setDynTestimonials] = useState(testimonials);
    const [dynStats, setDynStats] = useState(stats);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const testimonialApi = new TestimonialApi();
                const res = await testimonialApi.getTestimonials({ page: 1, limit: 4 });
                if (res && res.success && res.data) {
                    setDynTestimonials(res.data.testimonials || []);
                    if (res.data.state) {
                        const s = res.data.state;
                        setDynStats([
                            {
                                icon: Star,
                                value: (s.averageRating || 4.8).toString(),
                                suffix: "/5",
                                title: "Average Rating",
                                subtitle: `Based on ${s.totalReviews || 0} reviews`,
                                color: "bg-purple-100 text-purple-600",
                            },
                            {
                                icon: Users,
                                value: `${(s.totalUser || 0) + (s.totalCreator || 0) + (s.totalAdvertiser || 0)}+`,
                                title: "Happy Users",
                                subtitle: "Creators & Viewers",
                                color: "bg-violet-100 text-violet-600",
                            },
                            {
                                icon: MessageCircle,
                                value: (s.totalReviews || 0).toString(),
                                title: "Reviews",
                                subtitle: "Across All Platforms",
                                color: "bg-orange-100 text-orange-500",
                            },
                        ]);
                    }
                }
            } catch (error) {
                console.error("Error fetching testimonials:", error);
            }
        };
        fetchTestimonials();
    }, []);

    return (
        <>
            {/* Navbar */}
            <header className="bg-white shadow-sm fixed top-0 w-full z-10 font-poppins">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/">
                            <Image
                                src="/images/logo.png"
                                alt="logo"
                                width={120}
                                height={40}
                            />
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-6 text-sm font-medium">
                        <a href="/#features" className="hover:text-purple-600">
                            Why Clipverse?
                        </a>
                        <a href="/#benefits" className="hover:text-purple-600">
                            Features
                        </a>
                        {/* <a href="/#team" className="hover:text-purple-600">
              Team
            </a> */}
                        <a href="/#contact" className="hover:text-purple-600">
                            Contact
                        </a>
                        <a href="/#faq" className="hover:text-purple-600">
                            FAQs
                        </a>
                    </nav>
                    {/* <div className="hidden md:flex border border-[#de4868] p-2 rounded-4xl sign-in-btn">
            <button className="flex justify-evenly text-[#7638A5] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>{" "} 
              &nbsp; Notify Me
            </button>
          </div> */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? (
                                <XMarkIcon className="w-6 h-6" />
                            ) : (
                                <Bars3Icon className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3">
                        <nav className="space-y-2">
                            <a href="/#features" className="block">
                                Why Clipverse?
                            </a>
                            <a href="/#benefits" className="block">
                                Features
                            </a>
                            {/* <a href="/#team" className="block">
                Team
              </a> */}
                            <a href="/#contact" className="block">
                                Contact
                            </a>
                            <a href="/#faq" className="block">
                                FAQs
                            </a>
                            <hr style={{ borderTop: "1px solid gray" }} />
                            <a href="#">Sign In</a>
                        </nav>
                    </div>
                )}
            </header>

            <main className="bg-[#f7f4fd] min-h-screen">

                {/* HERO */}

                <section className="relative mt-10 overflow-hidden">

                    <div className="absolute right-0 top-0 w-[420px] h-[420px] bg-purple-200 blur-[120px] opacity-40 rounded-full" />

                    <div className="max-w-7xl mx-auto px-6 py-20">

                        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                            <div className="max-w-xl">

                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border text-sm text-purple-600 mb-6 shadow-sm">

                                    <Heart className="w-4 h-4" />

                                    Loved by Our Community

                                </div>

                                <h1 className="text-5xl font-bold leading-tight">

                                    Ratings, Reviews &

                                    <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">

                                        Testimonials

                                    </span>

                                </h1>

                                <p className="mt-6 text-gray-600 text-lg leading-8">

                                    Real stories from real creators and viewers who are earning,
                                    learning and growing with Clipverse.

                                </p>

                            </div>



                            {/* Right Illustration */}

                            <motion.div
                                initial={{ opacity: 0, x: 60 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                className="hidden lg:flex justify-center flex-1"
                            >
                                <Image
                                    src="/images/testimonialImg.png"
                                    alt="Testimonials Illustration"
                                    width={650}
                                    height={600}
                                    priority
                                    className="w-full max-w-[620px] h-auto object-contain"
                                />
                            </motion.div>

                        </div>

                        {/* Stats */}

                        <div className="grid md:grid-cols-3 gap-6 mt-20">

                            {dynStats.map((item, index) => {

                                const Icon = item.icon;

                                return (

                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -6 }}
                                        className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm"
                                    >

                                        <div className="flex items-center gap-5">

                                            <div
                                                className={`w-16 h-16 rounded-full flex items-center justify-center ${item.color}`}
                                            >
                                                <Icon size={28} />
                                            </div>

                                            <div>

                                                <h2 className="text-3xl font-bold">

                                                    {item.value}

                                                    <span className="text-lg text-gray-500">

                                                        {item.suffix}

                                                    </span>

                                                </h2>

                                                <p className="font-medium mt-1">

                                                    {item.title}

                                                </p>

                                                <p className="text-sm text-gray-500">

                                                    {item.subtitle}

                                                </p>

                                            </div>

                                        </div>

                                    </motion.div>

                                );
                            })}

                        </div>

                    </div>

                </section>

                {/* COMMUNITY REVIEWS */}

                <section className="pb-20">

                    <div className="max-w-7xl mx-auto px-6">

                        <div className="flex items-center justify-between mb-8">

                            <h2 className="text-3xl font-bold">

                                What Our Community Says

                            </h2>

                            <Link href="/testimonials/all" className="text-purple-600 font-semibold flex items-center gap-2">

                                Read All Reviews

                                <ArrowRight size={18} />

                            </Link>

                        </div>

                        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

                            {dynTestimonials.map((item) => (
                                <motion.div
                                    key={item._id || item.id}
                                    whileHover={{ y: -8 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
                                >
                                    {/* User */}

                                    <div className="flex items-center gap-3">

                                        <Image
                                            src={item.user?.profilePic || item.image || `https://placehold.co/80x80/E9D5FF/7C3AED?text=${encodeURIComponent(item.user?.name?.charAt(0).toUpperCase() || "U")}`}
                                            alt={item.user?.name || item.name || "User"}
                                            width={56}
                                            height={56}
                                            className="rounded-full object-cover w-14 h-14"
                                        />

                                        <div>
                                            <h3 className="font-semibold">{item.user?.name || item.name}</h3>

                                            <p className="text-sm text-gray-500 capitalize">
                                                {(item.platform || item.role || "USER").toLowerCase()}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Rating */}

                                    <div className="flex items-center gap-1 mt-5">

                                        {[...Array(Math.round(item.rating || 5))].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={15}
                                                fill="#facc15"
                                                color="#facc15"
                                            />
                                        ))}

                                        <span className="text-xs text-gray-400 ml-2">
                                            {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : (item.time || "")}
                                        </span>
                                    </div>

                                    {/* Review */}

                                    <p className="mt-4 text-gray-600 leading-7 text-sm">
                                        {item.review}
                                    </p>
                                </motion.div>
                            ))}

                        </div>

                    </div>

                </section>

                {/* VIDEO TESTIMONIAL */}

                <section className="pb-24">

                    <div className="max-w-7xl mx-auto px-6">

                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

                            <div className="grid lg:grid-cols-2">

                                {/* LEFT */}

                                <div className="p-12 flex flex-col justify-center">

                                    <div className="inline-flex w-fit px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-sm mb-6">

                                        📹 User Stories

                                    </div>

                                    <h2 className="text-4xl font-bold leading-tight">

                                        Hear From Our Amazing

                                        <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">

                                            Community

                                        </span>

                                    </h2>

                                    <p className="mt-6 text-gray-600 leading-8">

                                        Real people. Real experiences.
                                        See why thousands choose Clipverse every day.

                                    </p>

                                    <Link href="/testimonials/all" className="mt-8 block text-center w-fit px-7 py-3 rounded-xl border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition">

                                        View All Testimonials

                                    </Link>

                                </div>

                                {/* RIGHT */}

                                <div className="relative p-8">

                                    <div className="relative overflow-hidden rounded-3xl">

                                        <Image
                                            src="https://placehold.co/900x550/e8d5ff/5b21b6?text=Creator+Story"
                                            alt="video"
                                            width={900}
                                            height={550}
                                            className="w-full rounded-3xl"
                                        />

                                        <button className="absolute inset-0 flex items-center justify-center">

                                            <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center">

                                                <Play
                                                    fill="#7c3aed"
                                                    className="text-purple-600 ml-1"
                                                    size={34}
                                                />

                                            </div>

                                        </button>

                                        <div className="absolute bottom-6 left-6 text-white">

                                            <h4 className="font-semibold text-xl">

                                                Creator Success Story

                                            </h4>

                                            <p className="text-sm opacity-90">

                                                How Clipverse helped me grow & earn

                                            </p>

                                        </div>

                                        <div className="absolute bottom-6 right-6 text-white font-medium">

                                            2:45

                                        </div>

                                    </div>

                                    {/* Indicators */}

                                    <div className="flex justify-center gap-3 mt-6">

                                        <div className="w-10 h-1 rounded-full bg-purple-600" />

                                        <div className="w-10 h-1 rounded-full bg-gray-300" />

                                        <div className="w-10 h-1 rounded-full bg-gray-300" />

                                        <div className="w-10 h-1 rounded-full bg-gray-300" />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* CTA */}

                <section className="pb-24">

                    <div className="max-w-7xl mx-auto px-6">

                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 flex flex-col lg:flex-row items-center justify-between gap-8">

                            <div className="flex items-center gap-5">

                                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">

                                    <Users
                                        className="text-purple-600"
                                        size={30}
                                    />

                                </div>

                                <div>

                                    <h3 className="text-2xl font-bold">

                                        Join thousands who are earning & growing with Clipverse.

                                    </h3>

                                    <p className="text-gray-500 mt-2">

                                        Start your creator journey today.

                                    </p>

                                </div>

                            </div>

                            <div className="flex gap-4">

                                <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow">

                                    Open in App

                                </button>

                                <button className="px-8 py-3 rounded-xl border border-gray-300 hover:border-purple-500 hover:text-purple-600 transition">

                                    Start Creating

                                </button>

                            </div>

                        </div>

                    </div>

                </section>

            </main>

            <div className="bg-[#7638a5] text-white py-4">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    {/* Left: Copyright */}
                    <div className="text-sm text-center md:text-left">
                        © 2025 ClipVerse. All rights reserved.
                    </div>

                    {/* Right: Links */}
                    <div className="flex space-x-6 mt-2 md:mt-0">
                        <Link href="/privacy-policy" className="text-sm hover:none">
                            • &nbsp; Privacy Policy
                        </Link>
                        <Link href="/terms-conditions" className="text-sm hover:none">
                            • &nbsp; Terms & Conditions
                        </Link>
                        <Link href="/testimonials" className="text-sm hover:none">
                            • &nbsp; Testimonials
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}