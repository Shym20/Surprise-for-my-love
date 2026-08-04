"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Star,
    ArrowLeft,
    ChevronLeft,
    ChevronRight,
    Users,
    MessageCircle,
    Heart,
} from "lucide-react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import TestimonialApi from "../../../apis/testimonial/testimonial.api";

export default function AllTestimonialsPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [stats, setStats] = useState({
        averageRating: 4.8,
        totalReviews: 0,
        totalCreator: 0,
        totalUser: 0,
        totalAdvertiser: 0,
    });

    const fetchTestimonials = async (page) => {
        setLoading(true);
        try {
            const testimonialApi = new TestimonialApi();
            const res = await testimonialApi.getTestimonials({ page, limit: 12 });
            if (res && res.success && res.data) {
                setTestimonials(res.data.testimonials || []);
                if (res.data.state) {
                    setStats(res.data.state);
                    setTotalPages(res.data.state.totalPages || 1);
                }
            }
        } catch (error) {
            console.error("Error fetching testimonials:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTestimonials(currentPage);
    }, [currentPage]);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

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
                                priority
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
                        <a href="/#contact" className="hover:text-purple-600">
                            Contact
                        </a>
                        <a href="/#faq" className="hover:text-purple-600">
                            FAQs
                        </a>
                    </nav>
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

            <main className="bg-[#f7f4fd] min-h-screen pt-20">
                <div className="max-w-7xl mx-auto px-6 py-10">
                    {/* Back Link */}
                    <div className="mb-6">
                        <Link
                            href="/testimonials"
                            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition"
                        >
                            <ArrowLeft size={18} />
                            Back to Testimonials
                        </Link>
                    </div>

                    {/* Stats Summary */}
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-5">
                            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                <Star size={28} fill="currentColor" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold">
                                    {stats.averageRating || "4.8"}
                                    <span className="text-lg text-gray-500">/5</span>
                                </h2>
                                <p className="font-medium text-gray-700">Average Rating</p>
                                <p className="text-sm text-gray-500">
                                    Based on {stats.totalReviews || 0} reviews
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="w-16 h-16 rounded-full bg-violet-100 flex items-center justify-center text-violet-600">
                                <Users size={28} />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold">
                                    {((stats.totalUser || 0) + (stats.totalCreator || 0) + (stats.totalAdvertiser || 0)) || 0}+
                                </h2>
                                <p className="font-medium text-gray-700">Happy Users</p>
                                <p className="text-sm text-gray-500">Creators & Viewers</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                                <MessageCircle size={28} />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold">
                                    {stats.totalReviews || 0}
                                </h2>
                                <p className="font-medium text-gray-700">Total Reviews</p>
                                <p className="text-sm text-gray-500">Across All Platforms</p>
                            </div>
                        </div>
                    </div>

                    {/* Review Grid */}
                    <div className="mb-12">
                        <h1 className="text-3xl font-bold mb-8">All Community Reviews</h1>

                        {loading ? (
                            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                                {[...Array(8)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 animate-pulse"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-14 h-14 bg-gray-200 rounded-full" />
                                            <div className="flex-1 space-y-2">
                                                <div className="h-4 bg-gray-200 rounded w-2/3" />
                                                <div className="h-3 bg-gray-200 rounded w-1/3" />
                                            </div>
                                        </div>
                                        <div className="h-4 bg-gray-200 rounded mt-6 w-1/2" />
                                        <div className="space-y-2 mt-4">
                                            <div className="h-3 bg-gray-200 rounded" />
                                            <div className="h-3 bg-gray-200 rounded w-5/6" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : testimonials.length === 0 ? (
                            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
                                <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-600">
                                    No reviews found
                                </h3>
                                <p className="text-gray-400 mt-2">
                                    Be the first one to leave a review!
                                </p>
                            </div>
                        ) : (
                            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                                {testimonials.map((item) => (
                                    <motion.div
                                        key={item._id}
                                        whileHover={{ y: -8 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between"
                                    >
                                        <div>
                                            {/* User Info */}
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src={
                                                        item.user?.profilePic ||
                                                        `https://placehold.co/80x80/E9D5FF/7C3AED?text=${encodeURIComponent(
                                                            item.user?.name?.charAt(0).toUpperCase() || "U"
                                                        )}`
                                                    }
                                                    alt={item.user?.name || "User"}
                                                    width={56}
                                                    height={56}
                                                    className="rounded-full object-cover w-14 h-14"
                                                />
                                                <div>
                                                    <h3 className="font-semibold text-gray-800">
                                                        {item.user?.name || "Anonymous"}
                                                    </h3>
                                                    <p className="text-sm text-gray-500 capitalize">
                                                        {(
                                                            item.platform ||
                                                            item.user?.role ||
                                                            "USER"
                                                        ).toLowerCase()}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Rating */}
                                            <div className="flex items-center gap-1 mt-5">
                                                {[...Array(Math.round(item.rating || 5))].map(
                                                    (_, i) => (
                                                        <Star
                                                            key={i}
                                                            size={15}
                                                            fill="#facc15"
                                                            color="#facc15"
                                                        />
                                                    )
                                                )}
                                                <span className="text-xs text-gray-400 ml-2">
                                                    {item.createdAt
                                                        ? new Date(item.createdAt).toLocaleDateString()
                                                        : ""}
                                                </span>
                                            </div>

                                            {/* Review Body */}
                                            <p className="mt-4 text-gray-600 leading-7 text-sm">
                                                {item.review}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-4 mt-12">
                            <button
                                onClick={handlePrevPage}
                                disabled={currentPage === 1 || loading}
                                className="p-2.5 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <span className="text-sm font-semibold text-gray-700">
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages || loading}
                                className="p-2.5 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    )}
                </div>
            </main>

            {/* Footer */}
            <div className="bg-[#7638a5] text-white py-4">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    <div className="text-sm text-center md:text-left">
                        © 2025 ClipVerse. All rights reserved.
                    </div>
                    <div className="flex space-x-6 mt-2 md:mt-0">
                        <Link href="/privacy-policy" className="text-sm">
                            • &nbsp; Privacy Policy
                        </Link>
                        <Link href="/terms-conditions" className="text-sm">
                            • &nbsp; Terms & Conditions
                        </Link>
                        <Link href="/testimonials" className="text-sm">
                            • &nbsp; Testimonials
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
