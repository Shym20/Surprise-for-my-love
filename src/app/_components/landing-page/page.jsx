"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import FaqSection from "./faq-section/page";
import ContactSection from "./contact-us/page";
import Link from "next/link";
import { motion } from "framer-motion";
import defaultImg from "../../../../public/images/landing-page/modal-default.jpg";
import { Star, Users, MessageCircle, ArrowRight, Heart } from "lucide-react";
import TestimonialApi from "../../../apis/testimonial/testimonial.api";


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const teamVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

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

export default function LandingPage() {
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

  const BenefitCardsR1 = [
    {
      title: "Quick Uploads",
      description:
        "Publish videos instantly with blazing speed and zero technical hassle.",
      image: "/images/landing-page/benefit-1.png",
      bgColor: "#fde8f8",
    },
    {
      title: "Global Audience",
      description:
        "Connect with viewers across the world and grow your global fanbase.",
      image: "/images/landing-page/benefit-2.png",
      bgColor: "#e9e6f9",
    },
    {
      title: "Real-Time Analytics",
      description:
        "Monitor your content performance and earnings as they happen.",
      image: "/images/landing-page/benefit-3.png",
      bgColor: "#e8f8e8",
    },
  ];
  const teamMembers = [
    {
      name: "Ankita Sharma",
      role: "Founder & CEO",
      src: "/images/landing-page/bnf-21.png",
      // rounded: "rounded-tl-xl",
    },
    {
      name: "Arjun Mehta",
      role: "Head of Product",
      src: "/images/landing-page/bnf-22.png",
      // rounded: "",
    },
    {
      name: "Isha Malhotra",
      role: "Product Designer",
      src: "/images/landing-page/bnf-23.png",
      // rounded: "",
    },
    {
      name: "Ravi Jain",
      role: "Community Lead",
      src: "/images/landing-page/bnf-24.png",
      // rounded: "rounded-br-xl",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [showNotifyForm, setShowNotifyForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showRoleModal, setShowRoleModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      contact: formData.get("contact"),
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyqgH_Zdi2rhNNoenYxOwJOi0wa7zP1jZQtBCTjZWlN31UWsc-Of52PzEGp5F8QHVa7/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify(data),
        }
      );
      setMessage("Thanks! We got your response.");
    } catch (error) {
      setMessage("Oops. Something went wrong.");
    } finally {
      setLoading(false);
      e.target.reset();
    }
  };

  const features = [
    {
      flogo: "/images/landing-page/wc-1.png",
      title: "No Shadowbans",
      desc: "Your content, your rules. No hidden algorithms or silent throttling.",
    },
    {
      flogo: "/images/landing-page/wc-2.png",
      title: "Transparent Monetization",
      desc: "Get paid fairly—for every view, every time. No guesswork.",
    },
    {
      flogo: "/images/landing-page/wc-3.png",
      title: "Creative Freedom",
      desc: "Explore any genre, any niche. No restrictions, no censorship.",
    },
    {
      flogo: "/images/landing-page/wc-4.png",
      title: "Ownership & Portability",
      desc: "You own your content and audience. Take it with you—anytime, anywhere.",
    },
  ];

  return (
    <div
      className="font-poppins text-gray-900"
      style={{
        backgroundImage: "url('/images/landing-page/landing-vector.png')",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Sticky Notify Form Overlay - GLOBAL */}
      {showNotifyForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 pointer-events-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            {/* ... other code */}
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                name="name" // Add name attribute
                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="email"
                placeholder="Email"
                name="email" // Add name attribute
                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                name="contact" // Add name attribute
                className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button
                type="submit"
                disabled={loading} // Add loading state
                className="bg-purple-600 text-white px-6 py-2 rounded-[20px] hover:bg-purple-700 mt-2"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
            {message && (
              <p className="text-sm text-green-600 mt-2 text-center">
                {message}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Role Selection Modal */}
      {showRoleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-[700px] md:h-[52vh] max-w-[95%] bg-white rounded-2xl shadow-2xl overflow-hidden flex">

            {/* LEFT SIDE IMAGE */}
            <div className="w-1/2 hidden md:block relative">
              <Image
                src={defaultImg}
                alt="Get Started"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-lg font-semibold">
                  Welcome to Clipverse
                </h3>
              </div>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="w-full md:w-1/2 p-8 relative flex flex-col justify-center">

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setShowRoleModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
              >
                ✕
              </button>

              {/* TITLE */}
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                Get Started
              </h2>
              <p className="text-gray-500 mb-6 text-sm">
                Choose how you want to continue
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col gap-4">
                <button
                  onClick={() =>
                    (window.location.href = "https://app.clipverse.in/login")
                  }
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 cursor-pointer rounded-lg font-medium shadow-md hover:scale-[1.02] transition-transform duration-200"
                >
                  Continue as User
                </button>

                <button
                  onClick={() =>
                    (window.location.href = "https://creator.clipverse.in")
                  }
                  className="border border-purple-600 text-purple-600 py-3 cursor-pointer rounded-lg font-medium hover:bg-purple-50 transition"
                >
                  Continue as Creator
                </button>
              </div>

              {/* FOOTER TEXT */}
              <p className="text-xs text-gray-400 mt-6 text-center">
                By continuing, you agree to our Terms & Privacy Policy
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <header className="bg-white shadow-sm fixed top-0 w-full z-10">
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
            <a href="#features" className="hover:text-purple-600">
              Why Clipverse?
            </a>
            <a href="#benefits" className="hover:text-purple-600">
              Features
            </a>
            {/* <a href="#team" className="hover:text-purple-600">
              Team
            </a> */}
            <a href="#testimonials" className="hover:text-purple-600">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-purple-600">
              Contact
            </a>
            <a href="#faq" className="hover:text-purple-600">
              FAQs
            </a>
          </nav>
          <div className="hidden md:flex border border-[#de4868] p-2 rounded-4xl sign-in-btn">
            <button
              className="flex justify-evenly text-[#7638A5] px-1 cursor-pointer"
              onClick={() => setShowRoleModal(true)}
            >
              {/* <svg
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
              </svg>{" "} */}
              Login
            </button>
          </div>
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
              <a href="#features" className="block">
                Why Clipverse?
              </a>
              <a href="#benefits" className="block">
                Features
              </a>
              {/* <a href="#team" className="block">
                Team
              </a> */}
              <a href="#testimonials" className="block">
                Testimonials
              </a>
              <a href="#contact" className="block">
                Contact
              </a>
              <a href="#faq" className="block">
                FAQs
              </a>
              <hr style={{ borderTop: "1px solid gray" }} />
              <button
                onClick={() => {
                  setShowRoleModal(true);
                  setIsOpen(false); // closes mobile menu
                }}
                className="block text-left w-full"
              >
                Login
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      {/* bg-gradient-to-br from-pink-100 via-purple-100 to-white  */}
      <section
        className="min-h-screen pt-24 pb-12 text-center px-6 
             bg-gradient-to-br from-pink-100 via-purple-100 to-white
             md:bg-[url('/images/landing-page/hero-section-img.png')] 
             md:bg-no-repeat 
             md:bg-cover"
      >
        {/* Your awesome hero content here */}

        <h1 className="mt-8 text-3xl lg:text-4xl md:text-5xl font-[600] leading-tight">
          Create Videos & Watch, <br></br>Upload & Earn
        </h1>
        <p className="mt-4 px-4 md:px-8 text-gray-600 max-w-md sm:max-w-full lg:max-w-2xl mx-auto">
          Build your audience faster than ever. Clipverse gives creators the
          freedom to grow and earn revenue all in one place.
        </p>
        {/* Buttons with animation */}
        <div className="mt-6 flex justify-center gap-4">
          {/* <motion.button
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-purple-700 bg-white px-6 py-2 rounded-[20px] hover:bg-purple-100"
          >
            Upload Video
          </motion.button> */}
          {/* 
          <motion.button
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-purple-600 text-white px-6 py-2 rounded-[20px] hover:bg-purple-700"
          >
            Get Started
          </motion.button> */}
          <motion.button
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setShowRoleModal(true)}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-purple-600 text-white px-6 py-2 rounded-[20px] hover:bg-purple-700 cursor-pointer"
          >
            Get Started
          </motion.button>
        </div>

        {/* Hero Image with fade-up */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
          className="mt-4 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto"
        >
          <Image
            src="/images/landing-page/landing-page-banner.png"
            alt="preview"
            width={900}
            height={500}
            className="rounded-xl"
          />
        </motion.div>

        {/* Coming Soon Section */}
        {/* <div className="py-4 md:py-8 lg:py-16 max-w-7xl mx-auto px-12 xl:px-4 grid md:grid-cols-2 md:gap-8 xl:gap-12 place-items-center text-left">
         
          <motion.div
            className="mb-8 md:mb-0 w-full flex flex-col items-center md:items-start"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#E04A6A] via-[#772C6A] to-[#713AA9] font-semibold text-2xl md:text-3xl text-center">
              Clipverse Launching Soon!
            </h2>
            <p className="mt-4 text-black text-md md:text-lg max-w-3xl leading-relaxed text-center md:text-start">
              We're building a revolutionary platform for creators like you to
              upload, earn, and grow your audience — without the limits of
              traditional platforms.
              <br /> No algorithms. No gatekeepers. Just pure creative freedom.
            </p>

            <div className="mt-8 flex text-center justify-center md:justify-start">
              <button
                className="bg-purple-600 text-white  px-6 py-2 rounded-[20px] hover:bg-purple-700 text-sm"
                onClick={() => setShowNotifyForm(true)}
              >
                Notify Me On Launch
              </button>
            </div>
          </motion.div>

         
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <Image
              src="/images/landing-page/coming-soon.png"
              alt="coming-soon"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </motion.div>
        </div> */}
      </section>

      {/* <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#E04A6A] via-[#772C6A] to-[#713AA9] font-medium text-3xl">
              Clipverse Web App – Launching Soon!
            </h2>
            <p className="mt-4 text-black text-lg leading-relaxed">
              We're building a revolutionary platform for creators like you to
              upload, earn, and grow your audience — without the limits of
              traditional platforms.
              <br /> No algorithms. No gatekeepers. Just pure creative freedom.
            </p>
            <button className="mt-8 bg-purple-600 text-white px-6 py-2 rounded-[20px] hover:bg-purple-700 text-sm">
              Notify Me On Launch{" "}
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/landing-page/coming-soon.png"
              alt="coming-soon"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section> */}

      {/* Features */}
      <section
        className="bg-white py-4 md:py-8 lg:py-16 px-12 xl:px-4 scroll-mt-12"
        id="features"
      >
        <div className="max-w-7xl mx-auto px-0 md:px-4 text-left">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#E04A6A] via-[#772C6A] to-[#713AA9] font-semibold text-2xl md:text-3xl mb-6 mt-6 md:mt-0 md:mb-8">
            Why Clipverse?
          </h3>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-md md:max-w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-xl shadow-lg"
                variants={cardVariants}
              >
                <div className="mb-4 text-left">
                  <Image
                    src={feature.flogo}
                    width={45}
                    height={45}
                    alt="why-clipV-image"
                  />
                </div>
                <h4 className="text-2xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm md:text-md text-gray-900">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="bg-white py-6 md:py-8 lg:py-16 scroll-mt-12"
        id="benefits"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center px-6">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#E04A6A] via-[#772C6A] to-[#713AA9] font-semibold text-2xl md:text-3xl pb-3">
              What You’ll Love in Clipverse
            </h2>
            <p className="mt-4 text-black text-md md:text-lg leading-relaxed max-w-sm sm:max-w-3xl md:max-w-2xl lg:max-w-3xl">
              Discover features designed to empower every creator. <br />
              Whether you're just starting or scaling your audience, Clipverse
              gives you the tools to grow, connect, and thrive.
            </p>
          </div>
          <motion.div
            className="mt-4 md:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-12 p-6 place-items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            {BenefitCardsR1.map((card, index) => (
              <motion.div
                key={index}
                className="flex flex-col rounded-xl py-10 px-6 lg:px-8 space-y-4 w-full max-w-md lg:w-auto"
                style={{ backgroundColor: card.bgColor }}
                variants={cardVariants}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-left">
                  {card.title}
                </h3>
                <p className="text-gray-900 text-sm md:text-md font-thin text-left">
                  {card.description}
                </p>
                <div className="self-center mt-4 rounded-xl">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={300}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex flex-col items-center lg:flex-row gap-12 p-6">
            {/* Left Card (1/4 width approx) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full max-w-md lg:max-w-full lg:w-[40%] bg-gradient-to-tr from-[#feeae8] via-[#eaf1f1] to-[#e0f3f8] rounded-xl py-10 px-8 shadow-md"
            >
              <div className="grid grid-rows-3 gap-4 h-full">
                {/* Title + Description (row-span-1) */}
                <div className="row-span-1 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-left">
                    Unlimited Storage
                  </h3>
                  <p className="mt-4 text-gray-900 text-sm md:text-md xl:text-lg font-thin text-left md:w-[75%]">
                    Upload as many videos as you want—no caps, no limits, ever.
                  </p>
                </div>

                {/* Wavy Image Trio (row-span-2) */}
                <div className="row-span-2 flex justify-center items-center gap-2 md:gap-3 xl:gap-5 flex-nowrap lg:mt-3">
                  <img
                    src="/images/landing-page/benefit-4-1.png"
                    alt="1"
                    className="h-40 w-auto sm:h-44 md:h-48 xl:h-56 object-cover"
                  />
                  <img
                    src="/images/landing-page/benefit-4-2.png"
                    alt="2"
                    className="h-52 w-auto sm:h-60 md:h-72 xl:h-84 object-cover"
                  />
                  <img
                    src="/images/landing-page/benefit-4-3.png"
                    alt="3"
                    className="h-40 w-auto sm:h-44 md:h-48 xl:h-56 object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Card (2/3 width approx) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full max-w-md lg:max-w-full lg:w-[60%] bg-gradient-to-tr from-[#e0f3f8] via-[#eaf1f1] to-[#feeae8] rounded-xl py-10 px-8 shadow-md"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-3 gap-4">
                {/* Text Content - top left */}
                <div className="row-span-1 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-left">
                    Multilingual Support
                  </h3>
                  <p className="text-gray-900 text-sm md:text-md xl:text-lg font-thin text-left mt-4">
                    Create and interact in your preferred language with ease.
                  </p>
                </div>

                {/* Right top image (row-span-2) */}
                <div className="bg-white p-[15px] rounded-xl overflow-hidden row-span-2">
                  <img
                    src="/images/landing-page/benefit-5-2.png"
                    alt="Group Grid"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Left bottom image (row-span-2) */}
                <div className="bg-white p-[15px] rounded-xl overflow-hidden row-span-2">
                  <img
                    src="/images/landing-page/benefit-5-1.png"
                    alt="Group Circle"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Right bottom image (row-span-1) */}
                <div className="bg-white  rounded-xl overflow-hidden row-span-1">
                  <img
                    src="/images/landing-page/benefit-5-3.png"
                    alt="Single Person"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Know Us */}
      {/* <section className="bg-white py-4 md:py-8 lg:py-16" id="team">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center px-6">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#E04A6A] via-[#772C6A] to-[#713AA9] font-semibold text-2xl md:text-3xl">
              What You’ll Love in Clipverse
            </h2>
            <p className="mt-4 text-black text-md md:text-lg leading-relaxed max-w-3xl">
              Passionate about fair video platforms, we’re building Clipverse
              for a world where creativity thrives without limits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6 py-8 mt-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={teamVariants}
                className="relative group overflow-hidden"
              >
                Image Container
                <div className="w-full h-84 relative">
                  <Image
                    src={member.src}
                    alt={member.name}
                    width={250}
                    height={250}
                    className="object-cover mx-auto"
                    sizes="(min-width: 768px) 25vw, 50vw"
                  />
                </div>

                Name + Role overlay
                <div className="absolute bottom-4 left-6 bg-black/15 px-3 py-1 rounded-md text-white text-left backdrop-blur-xs">
                  <p className="text-sm sm:text-base font-semibold">
                    {member.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-200">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section id="testimonials" className="relative overflow-hidden bg-[#f7f4fd] py-16 scroll-mt-12">
        <div className="absolute right-0 top-0 w-[420px] h-[420px] bg-purple-200 blur-[120px] opacity-40 rounded-full" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border text-sm text-purple-600 mb-6 shadow-sm">
                <Heart className="w-4 h-4" />
                Loved by Our Community
              </div>
              <h2 className="text-5xl font-bold leading-tight">
                Ratings, Reviews &
                <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Testimonials
                </span>
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-8">
                Real stories from real creators and viewers who are earning,
                learning and growing with Clipverse.
              </p>
            </div>

            {/* Right Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
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
      <section className="bg-[#f7f4fd] pb-20">
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

      {/* Faq */}
      <section className="bg-white lg:py-16 scroll-mt-12" id="faq">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-16 text-center md:text-left px-12 xl:px-4">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#E04A6A] via-[#772C6A] to-[#713AA9] font-semibold text-2xl md:text-3xl md:max-w-[30%] ">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-black text-md md:text-lg leading-relaxed max-w-3xl">
              Whether you're a new creator or just curious, here’s everything
              you need to know about using Clipverse.
            </p>
          </div>

          <FaqSection />
        </div>
      </section>

      {/* contact-us */}
      <section className="bg-white lg:py-8 scroll-mt-6" id="contact">
        <div className="max-w-7xl mx-auto px-4 xl:px-0 text-center">
          <ContactSection />
        </div>
      </section>

      <div className="w-full bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Left: Logo */}
          <Link href={"/"}>
            <div className="flex items-center">
              <Image
                src="/images/landing-page/logo.png" // Replace this with your actual logo
                alt="Vetta Knight Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Right: Social Icons */}
          <div className="flex items-center space-x-6">
            {/* <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/landing-page/facebook.svg"
                alt="Facebook"
                width={25}
                height={25}
                className="hover:scale-110 transition-transform"
              />
            </a> */}
            <a
              href="https://www.instagram.com/join_clipverse/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/landing-page/instagram.svg"
                alt="Instagram"
                width={25}
                height={25}
                className="hover:scale-110 transition-transform"
              />
            </a>
            {/* <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/landing-page/whatsapp.svg"
                alt="WhatsApp"
                width={25}
                height={25}
                className="hover:scale-110 transition-transform"
              />
            </a> */}
            <a href="mailto:your-email@example.com">
              <Image
                src="/images/landing-page/mail-icon.svg"
                alt="Email"
                width={25}
                height={25}
                className="hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>

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
    </div>
  );
}
