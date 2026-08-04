"use client";
import { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const PrivacyPage = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      {/**Hero Section */}
      <section
        className="mt-16 relative  min-h-[20vh] xl:min-h-[40vh] w-full font-poppins 
            
             bg-gradient-to-br from-pink-100 via-purple-100 to-white
             lg:bg-[url('/images/privacy/privacy-bg.png')]
             lg:bg-no-repeat 
            lg:bg-cover xl:bg-contain
             "
      >
        <div className="absolute  flex flex-col justify-center items-center min-h-[20vh] xl:min-h-[40vh] left-1/2 transform -translate-x-1/2 text-center px-4 bottom-0 xl:bottom-4">
          <h1 className="text-black text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold xl:mb-12">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/**Main Paragraphs Section */}
      <section className="section flex flex-col items-center text-justify px-8 lg:px-0">
        <div className="max-w-3xl mb-16">
          <p className="text-[#7638A5] my-5 italic text-[18px] font-[600] ">
            Last Update: June 10, 2026
          </p>

          <h1 className="text-[22px] mt-10 font-[400] ">
            Your Privacy Matters to Us
          </h1>

          <p className="text-[16px] mt-5 font-[400] ">
            At <span className="text-primary-600 font-[600]">Clipverse</span>,
            we are committed to protecting your personal information and
            providing a transparent view of how we collect, use, share, and
            protect your data. This Privacy Policy applies when you interact
            with our mobile application, website, or any of our services,
            especially those involving user-generated content and revenue
            sharing.
          </p>

          <h1 className="text-[22px] mt-10 font-[400] mb-5 ">
            Table of Contents
          </h1>

          <ul className="list-decimal list-outside pl-5 text-[16px] font-[400] space-y-2">
            <li
              className="[&::marker]:text-black text-[#7638A5] cursor-pointer"
              onClick={() =>
                document.getElementById("introduction")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Introduction
            </li>

            <li
              className="[&::marker]:text-black text-[#7638A5] cursor-pointer"
              onClick={() =>
                document.getElementById("information-we-collect")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Information We Collect
            </li>

            <li
              className="[&::marker]:text-black text-[#7638A5] cursor-pointer"
              onClick={() =>
                document.getElementById("how-we-use-information")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              How We Use Information
            </li>

            <li
              className="[&::marker]:text-black text-[#7638A5] cursor-pointer"
              onClick={() =>
                document.getElementById("sharing-of-information")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Sharing of Information
            </li>

            <li
              className="[&::marker]:text-black text-[#7638A5] cursor-pointer"
              onClick={() =>
                document.getElementById("advertising-and-analytics")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Advertising and Analytics
            </li>

            <li
              className="[&::marker]:text-black text-[#7638A5] cursor-pointer"
              onClick={() =>
                document.getElementById("data-retention")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Data Retention
            </li>

            <li
              className="[&::marker]:text-black text-[#7638A5] cursor-pointer"
              onClick={() =>
                document.getElementById("data-security")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Data Security
            </li>

            <li
              className="[&::marker]:text-black text-[#7638A5] cursor-pointer"
              onClick={() =>
                document
                  .getElementById("international-data-transfers")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              International Data Transfers
            </li>

            <li
              className="[&::marker]:text-black text-[#7638A5] cursor-pointer"
              onClick={() =>
                document.getElementById("user-rights")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              User Rights
            </li>

            <li
              className="[&::marker]:text-black text-[#7638A5] cursor-pointer"
              onClick={() =>
                document.getElementById("childrens-privacy")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Children's Privacy
            </li>

            <li
              className="[&::marker]:text-black text-[#7638A5] cursor-pointer"
              onClick={() =>
                document.getElementById("account-deletion")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Account Deletion
            </li>

            <li
              className="[&::marker]:text-black text-[#7638A5] cursor-pointer"
              onClick={() =>
                document.getElementById("contact-information")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Contact Information
            </li>

            <li
              className="[&::marker]:text-black text-[#7638A5] cursor-pointer"
              onClick={() =>
                document
                  .getElementById("changes-to-privacy-policy")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Changes to Privacy Policy
            </li>
          </ul>

          <h1
            id="introduction"
            className="text-[22px] mt-10 font-[400] scroll-mt-24"
          >
            1. Introduction
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Clipverse respects your privacy and is committed to protecting personal
            information.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            This Privacy Policy explains how information is collected, used, stored,
            disclosed, and protected when users access Clipverse services.
          </p>

          <h1
            id="information-we-collect"
            className="text-[22px] mt-10 font-[400] scroll-mt-24"
          >
            2. Information We Collect
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            We may collect:
          </p>

          <h2 className="text-[18px] mt-6 font-[500]">Account Information</h2>
          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>Name</li>
            <li>Username</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Profile information</li>
          </ul>

          <h2 className="text-[18px] mt-6 font-[500]">Device Information</h2>
          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>Device identifiers</li>
            <li>Operating system</li>
            <li>Device model</li>
            <li>Browser information</li>
            <li>IP address</li>
            <li>Language settings</li>
          </ul>

          <h2 className="text-[18px] mt-6 font-[500]">Usage Information</h2>
          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>Watch history</li>
            <li>Search activity</li>
            <li>Likes</li>
            <li>Shares</li>
            <li>Comments</li>
            <li>Creator engagement</li>
            <li>Session activity</li>
          </ul>

          <h2 className="text-[18px] mt-6 font-[500]">Monetization Information</h2>
          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>KYC information</li>
            <li>Government identification information</li>
            <li>Tax-related information</li>
            <li>Bank account details</li>
            <li>Payment records</li>
          </ul>

          <h2 className="text-[18px] mt-6 font-[500]">Advertising Information</h2>
          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>Advertising identifiers</li>
            <li>Campaign interactions</li>
            <li>Ad engagement metrics</li>
          </ul>

          <h1
            id="how-we-use-information"
            className="text-[22px] mt-10 font-[400] scroll-mt-24"
          >
            3. How We Use Information
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Information may be used to:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>Provide services;</li>
            <li>Authenticate users;</li>
            <li>Process withdrawals;</li>
            <li>Verify identity;</li>
            <li>Detect fraud;</li>
            <li>Improve recommendations;</li>
            <li>Personalize content;</li>
            <li>Deliver advertisements;</li>
            <li>Improve Platform performance;</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h1
            id="sharing-of-information"
            className="text-[22px] mt-10 font-[400] scroll-mt-24"
          >
            4. Sharing of Information
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Clipverse may share information with:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>Payment processors;</li>
            <li>Identity verification providers;</li>
            <li>Analytics providers;</li>
            <li>Advertising partners;</li>
            <li>Cloud hosting providers;</li>
            <li>Security vendors;</li>
            <li>Government authorities where legally required.</li>
          </ul>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Clipverse does not sell personal information to third parties.
          </p>

          <h1 id="advertising-and-analytics" className="text-[22px] mt-10 font-[400] scroll-mt-24">
            5. Advertising and Analytics
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Clipverse may use advertising technologies, analytics tools, software
            development kits (SDKs), cookies, device identifiers, and similar
            technologies to:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>Measure engagement;</li>
            <li>Improve user experience;</li>
            <li>Deliver relevant advertisements;</li>
            <li>Prevent fraud.</li>
          </ul>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Users may manage certain advertising preferences through device settings.
          </p>

          <h1 id="data-retention" className="text-[22px] mt-10 font-[400] scroll-mt-24">
            6. Data Retention
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Personal information is retained only for as long as reasonably necessary
            to:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>Provide services;</li>
            <li>Comply with legal obligations;</li>
            <li>Resolve disputes;</li>
            <li>Prevent fraud;</li>
            <li>Enforce agreements.</li>
          </ul>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Retention periods may vary depending on the type of information involved.
          </p>

          <h1 id="data-security" className="text-[22px] mt-10 font-[400] scroll-mt-24">
            7. Data Security
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Clipverse implements commercially reasonable safeguards including:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>Encryption;</li>
            <li>Secure infrastructure;</li>
            <li>Access controls;</li>
            <li>Monitoring systems;</li>
            <li>Security reviews.</li>
          </ul>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            No method of transmission or storage can be guaranteed to be completely
            secure.
          </p>

          <h1 id="international-data-transfers" className="text-[22px] mt-10 font-[400] scroll-mt-24">
            8. International Data Transfers
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Information may be processed and stored in countries different from the
            user's country of residence.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Clipverse takes reasonable measures to protect information transferred
            internationally.
          </p>

          <h1 id="user-rights" className="text-[22px] mt-10 font-[400] scroll-mt-24">
            9. User Rights
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Subject to applicable law, users may have the right to:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>Access personal information;</li>
            <li>Correct inaccurate information;</li>
            <li>Request deletion;</li>
            <li>Restrict processing;</li>
            <li>Withdraw consent;</li>
            <li>Request data portability;</li>
            <li>Object to certain processing activities.</li>
          </ul>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Requests may be submitted through designated support channels.
          </p>

          <h1 id="childrens-privacy" className="text-[22px] mt-10 font-[400] scroll-mt-24">
            10. Children's Privacy
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Clipverse is not directed toward children below the minimum age required
            by applicable law.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Users who do not meet age requirements may not participate in
            monetization programs.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            If Clipverse becomes aware of unauthorized collection of children's data,
            reasonable steps will be taken to delete such information.
          </p>

          <h1 id="account-deletion" className="text-[22px] mt-10 font-[400] scroll-mt-24">
            11. Account Deletion
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Users may request account deletion through the Platform or designated
            support channels.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Certain information may be retained where required for:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>Legal compliance;</li>
            <li>Fraud prevention;</li>
            <li>Security investigations;</li>
            <li>Financial recordkeeping.</li>
          </ul>

          <h1 id="contact-information" className="text-[22px] mt-10 font-[400] scroll-mt-24">
            12. Contact Information
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            For privacy-related inquiries, data requests, or complaints, users may
            contact:
          </p>

          <ul className="text-[16px] font-[400] mt-4 flex flex-col gap-2 list-disc list-inside">
            <li>
              <span className="text-[#383F45]">
                <strong>Email ID:</strong> 05.clipverse@gmail.com
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                <strong>Address:</strong> 6/79 Jharera, Delhi Cantt -110010 New Delhi
              </span>
            </li>
          </ul>

          <h1 id="changes-to-privacy-policy" className="text-[22px] mt-10 font-[400] scroll-mt-24">
            13. Changes to Privacy Policy
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Clipverse may update this Privacy Policy from time to time.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Updated versions become effective upon publication unless otherwise
            stated.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Continued use of Clipverse following updates constitutes acceptance of
            the revised Privacy Policy.
          </p>


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
            <a href="mailto:05.clipverse@gmail.com">
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
    </>
  );
};

export default PrivacyPage;
