"use client";
import { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const TermsPage = () => {
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
             lg:bg-cover xl:bg-contain"
      >
        <div className="absolute  flex flex-col justify-center items-center min-h-[20vh] xl:min-h-[40vh] left-1/2 transform -translate-x-1/2 text-center px-4 xl:bottom-4">
          <h1 className="text-black text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold xl:mb-12">
            Terms & Conditions
          </h1>
        </div>
      </section>

      {/**Main Paragraphs Section */}
      <section className="section flex flex-col items-center text-justify px-8 lg:px-0">
        <div className="max-w-3xl mb-16">
          <p className="text-[#7638A5] my-5 italic text-[18px] font-[600] ">
            Last Update: June 10, 2026
          </p>

          <p className="text-[16px] mt-10 font-[400] ">
            Welcome to Clipverse, a video-sharing platform where creators and
            viewers both earn from the value they bring. By using our platform,
            website, or mobile applications, you agree to comply with the
            following Terms and Conditions. Please read them carefully.
          </p>

          <h1 className="text-[22px] mt-10 font-[400] mb-5 ">
            Table of Contents
          </h1>

          <ul className="list-decimal list-inside pl-5 text-[16px] font-[400] my-5 space-y-2">
            <li className="[&::marker]:text-black text-[#7638A5] cursor-pointer" onClick={() => document.getElementById('acceptance-of-terms')?.scrollIntoView({ behavior: 'smooth' })}>
              Acceptance of Terms
            </li>
            <li className="[&::marker]:text-black text-[#7638A5] cursor-pointer" onClick={() => document.getElementById('eligibility')?.scrollIntoView({ behavior: 'smooth' })}>
              Eligibility
            </li>
            <li className="[&::marker]:text-black text-[#7638A5] cursor-pointer" onClick={() => document.getElementById('user-accounts')?.scrollIntoView({ behavior: 'smooth' })}>
              User Accounts
            </li>
            <li className="[&::marker]:text-black text-[#7638A5] cursor-pointer" onClick={() => document.getElementById('one-human-one-earning-identity')?.scrollIntoView({ behavior: 'smooth' })}>
              One Human – One Earning Identity Rule
            </li>
            <li className="[&::marker]:text-black text-[#7638A5] cursor-pointer" onClick={() => document.getElementById('clipverse-monetization-program')?.scrollIntoView({ behavior: 'smooth' })}>
              Clipverse Monetization Program
            </li>
            <li className="[&::marker]:text-black text-[#7638A5] cursor-pointer" onClick={() => document.getElementById('viewer-earning-policy')?.scrollIntoView({ behavior: 'smooth' })}>
              Viewer Earning Policy
            </li>
            <li className="[&::marker]:text-black text-[#7638A5] cursor-pointer" onClick={() => document.getElementById('creator-earning-policy')?.scrollIntoView({ behavior: 'smooth' })}>
              Creator Earning Policy
            </li>
            <li className="[&::marker]:text-black text-[#7638A5] cursor-pointer" onClick={() => document.getElementById('content-ownership-and-licensing')?.scrollIntoView({ behavior: 'smooth' })}>
              Content Ownership and Licensing
            </li>
            <li className="[&::marker]:text-black text-[#7638A5] cursor-pointer" onClick={() => document.getElementById('originality-requirements')?.scrollIntoView({ behavior: 'smooth' })}>
              Originality Requirements
            </li>
            <li className="[&::marker]:text-black text-[#7638A5] cursor-pointer" onClick={() => document.getElementById('community-standards')?.scrollIntoView({ behavior: 'smooth' })}>
              Community Standards
            </li>
            <li className="[&::marker]:text-black text-[#7638A5] cursor-pointer" onClick={() => document.getElementById('anti-fraud-platform-integrity')?.scrollIntoView({ behavior: 'smooth' })}>
              Anti-Fraud and Platform Integrity
            </li>
            <li className="[&::marker]:text-black text-[#7638A5] cursor-pointer" onClick={() => document.getElementById('withdrawal-policy')?.scrollIntoView({ behavior: 'smooth' })}>
              Withdrawal Policy
            </li>
            <li className="[&::marker]:text-black text-[#7638A5] cursor-pointer" onClick={() => document.getElementById('subscription-services')?.scrollIntoView({ behavior: 'smooth' })}>
              Subscription Services
            </li>
            <li className="[&::marker]:text-black text-[#7638A5] cursor-pointer" onClick={() => document.getElementById('advertising-dependency')?.scrollIntoView({ behavior: 'smooth' })}>
              Advertising Dependency
            </li>
            <li className="[&::marker]:text-black text-[#7638A5] cursor-pointer" onClick={() => document.getElementById('suspension-and-termination')?.scrollIntoView({ behavior: 'smooth' })}>
              Suspension and Termination
            </li>
            <li className="[&::marker]:text-black text-[#7638A5] cursor-pointer" onClick={() => document.getElementById('disclaimer-of-earnings')?.scrollIntoView({ behavior: 'smooth' })}>
              Disclaimer of Earnings
            </li>
            <li className="[&::marker]:text-black text-[#7638A5] cursor-pointer" onClick={() => document.getElementById('limitation-of-liability')?.scrollIntoView({ behavior: 'smooth' })}>
              Limitation of Liability
            </li>
            <li className="[&::marker]:text-black text-[#7638A5] cursor-pointer" onClick={() => document.getElementById('changes-to-terms')?.scrollIntoView({ behavior: 'smooth' })}>
              Changes to Terms
            </li>
          </ul>

          <h1
            id="acceptance-of-terms"
            className="text-[22px] mt-10 font-[400] scroll-mt-24"
          >
            1. Acceptance of Terms
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Welcome to Clipverse ("Clipverse," "Platform," "we," "our," or "us").
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            These Terms & Conditions ("Terms") govern your access to and use of the
            Clipverse mobile application, website, creator tools, monetization
            programs, subscription services, and all related features and services.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            By creating an account, accessing, browsing, uploading content, watching
            content, participating in monetization programs, purchasing subscriptions,
            or otherwise using Clipverse, you agree to be legally bound by these Terms.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            If you do not agree with these Terms, you must discontinue use of the
            Platform immediately.
          </p>

          <h1
            id="eligibility"
            className="text-[22px] mt-10 font-[400] scroll-mt-24"
          >
            2. Eligibility
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            To use Clipverse, you must:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>
              <span className="text-[#383F45]">
                Be legally capable of entering into a binding agreement.
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Meet the minimum age requirement applicable in your jurisdiction.
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Provide accurate and complete registration information.
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Comply with all applicable laws and regulations.
              </span>
            </li>
          </ul>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Clipverse may refuse access, suspend accounts, or terminate services where
            eligibility requirements are not met.
          </p>

          <h1
            id="user-accounts"
            className="text-[22px] mt-10 font-[400] scroll-mt-24"
          >
            3. User Accounts
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Users may create and maintain an account to access Platform features.
          </p>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            You agree to:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>
              <span className="text-[#383F45]">
                Maintain accurate account information.
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Protect login credentials.
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Notify Clipverse of unauthorized account activity.
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Use the Platform solely for lawful purposes.
              </span>
            </li>
          </ul>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            You are responsible for all activity conducted through your account.
          </p>

          <h1
            id="one-human-one-earning-identity"
            className="text-[22px] mt-10 font-[400] scroll-mt-24"
          >
            4. One Human – One Earning Identity Rule
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            To preserve fairness and prevent abuse of the monetization system:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>
              <span className="text-[#383F45]">
                Each individual may maintain only one earning identity.
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Each earning identity may be associated with only one verified wallet.
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Multiple earning accounts controlled by the same individual are
                prohibited.
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Creating additional accounts to circumvent earning limitations, bans,
                verification requirements, or withdrawal restrictions is prohibited.
              </span>
            </li>
          </ul>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            The use of multiple identities, fabricated identities, shared identities,
            or fraudulent verification documents may result in:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>
              <span className="text-[#383F45]">Suspension of earnings;</span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Cancellation of pending withdrawals;
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">Account suspension;</span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Permanent removal from monetization programs; and
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Legal action where applicable.
              </span>
            </li>
          </ul>

          <h1
            id="clipverse-monetization-program"
            className="text-[22px] mt-10 font-[400] scroll-mt-24"
          >
            5. Clipverse Monetization Program
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Clipverse operates a reward-based monetization system intended to
            compensate genuine user attention, authentic engagement, and eligible
            content creation.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Participation in monetization programs is a privilege and not a
            guaranteed right.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Clipverse reserves the right to determine eligibility, payout methods,
            earning rates, reward structures, and monetization availability at its
            sole discretion.
          </p>

          <h1
            id="viewer-earning-policy"
            className="text-[22px] mt-10 font-[400] scroll-mt-24"
          >
            6. Viewer Earning Policy
          </h1>

          <h2 className="text-[18px] mt-6 font-[500]">
            6.1 Eligibility
          </h2>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            A viewer may become eligible to earn rewards where:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>
              <span className="text-[#383F45]">
                The viewed content is monetization eligible.
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Advertising inventory is available.
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                The viewer satisfies watch duration requirements.
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Viewing activity is determined to be authentic.
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                The viewer complies with all Platform policies.
              </span>
            </li>
          </ul>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Eligibility does not guarantee earnings.
          </p>

          <h2 className="text-[18px] mt-8 font-[500]">
            6.2 Earning Calculation
          </h2>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Viewer earnings may be determined using factors including:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li><span className="text-[#383F45]">Percentage of video watched;</span></li>
            <li><span className="text-[#383F45]">Watch duration;</span></li>
            <li><span className="text-[#383F45]">User badge level;</span></li>
            <li><span className="text-[#383F45]">Subscription status;</span></li>
            <li><span className="text-[#383F45]">Campaign participation;</span></li>
            <li><span className="text-[#383F45]">Advertising availability;</span></li>
            <li><span className="text-[#383F45]">Geographic availability;</span></li>
            <li>
              <span className="text-[#383F45]">
                Platform-specific promotional programs.
              </span>
            </li>
          </ul>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Clipverse reserves the right to modify earning formulas at any time.
          </p>

          <h2 className="text-[18px] mt-8 font-[500]">
            6.3 Daily Earning Limits
          </h2>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            To ensure fair reward distribution and platform sustainability:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>
              <span className="text-[#383F45]">
                Daily earning caps may apply.
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Monthly earning caps may apply.
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Promotional earning caps may apply.
              </span>
            </li>
          </ul>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Applicable limits may vary by user tier, campaign, subscription status,
            location, and advertiser demand.
          </p>

          <h1
            id="creator-earning-policy"
            className="text-[22px] mt-10 font-[400] scroll-mt-24"
          >
            7. Creator Earning Policy
          </h1>

          <h2 className="text-[18px] mt-6 font-[500]">
            7.1 Creator Eligibility
          </h2>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Creators may qualify for monetization where:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>
              <span className="text-[#383F45]">Content is original.</span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Content complies with Community Guidelines.
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Content complies with applicable laws.
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Content satisfies minimum monetization requirements.
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Creator verification requirements are fulfilled.
              </span>
            </li>
          </ul>

          <h2 className="text-[18px] mt-8 font-[500]">
            7.2 Sources of Earnings
          </h2>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Eligible creators may earn through:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>
              <span className="text-[#383F45]">Upload incentives;</span>
            </li>
            <li>
              <span className="text-[#383F45]">Promotional campaigns;</span>
            </li>
            <li>
              <span className="text-[#383F45]">Engagement bonuses;</span>
            </li>
            <li>
              <span className="text-[#383F45]">Revenue-sharing programs;</span>
            </li>
            <li>
              <span className="text-[#383F45]">Sponsored opportunities;</span>
            </li>
            <li>
              <span className="text-[#383F45]">Brand collaborations;</span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Future monetization products introduced by Clipverse.
              </span>
            </li>
          </ul>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Availability of earning opportunities may vary by region and program.
          </p>

          <h2 className="text-[18px] mt-8 font-[500]">
            7.3 Advertising Eligibility
          </h2>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Not all uploaded content qualifies for advertising or monetization.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Advertising eligibility may depend on:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>
              <span className="text-[#383F45]">Video duration;</span>
            </li>
            <li>
              <span className="text-[#383F45]">Content category;</span>
            </li>
            <li>
              <span className="text-[#383F45]">Brand safety requirements;</span>
            </li>
            <li>
              <span className="text-[#383F45]">Advertiser demand;</span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Community Guidelines compliance.
              </span>
            </li>
          </ul>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Clipverse reserves the right to approve, reject, limit, or remove
            monetization from any content.
          </p>

          <h1
            id="content-ownership-and-licensing"
            className="text-[22px] mt-10 font-[400] scroll-mt-24"
          >
            8. Content Ownership and Licensing
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Users retain ownership of content they create and upload.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            By uploading content to Clipverse, you grant Clipverse a worldwide,
            non-exclusive, royalty-free, transferable license to:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>
              <span className="text-[#383F45]">Host;</span>
            </li>
            <li>
              <span className="text-[#383F45]">Store;</span>
            </li>
            <li>
              <span className="text-[#383F45]">Display;</span>
            </li>
            <li>
              <span className="text-[#383F45]">Stream;</span>
            </li>
            <li>
              <span className="text-[#383F45]">Distribute;</span>
            </li>
            <li>
              <span className="text-[#383F45]">Reproduce;</span>
            </li>
            <li>
              <span className="text-[#383F45]">Promote; and</span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Operate the Platform using such content.
              </span>
            </li>
          </ul>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            This license remains effective for as long as content remains available
            on the Platform and as otherwise necessary for operational, legal,
            security, archival, and backup purposes.
          </p>

          <h1
            id="originality-requirements"
            className="text-[22px] mt-10 font-[400] scroll-mt-24"
          >
            9. Originality Requirements
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Only original content is eligible for monetization.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Content may become ineligible for monetization if it includes:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li><span className="text-[#383F45]">Unauthorized reuploads;</span></li>
            <li><span className="text-[#383F45]">Copyright violations;</span></li>
            <li><span className="text-[#383F45]">Impersonation;</span></li>
            <li><span className="text-[#383F45]">Misleading content;</span></li>
            <li><span className="text-[#383F45]">Fraudulent representations;</span></li>
            <li><span className="text-[#383F45]">Automated spam content.</span></li>
          </ul>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            AI-assisted content may be permitted where it complies with Platform
            rules and applicable laws; however, Clipverse reserves the right to
            determine whether such content qualifies for monetization.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Violations may result in:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li><span className="text-[#383F45]">Content removal;</span></li>
            <li><span className="text-[#383F45]">Earnings forfeiture;</span></li>
            <li><span className="text-[#383F45]">Suspension; or</span></li>
            <li>
              <span className="text-[#383F45]">
                Permanent account termination.
              </span>
            </li>
          </ul>

          <h1
            id="community-standards"
            className="text-[22px] mt-10 font-[400] scroll-mt-24"
          >
            10. Community Standards
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Users must not upload, distribute, promote, or engage with content
            involving:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li><span className="text-[#383F45]">Hate speech;</span></li>
            <li><span className="text-[#383F45]">Harassment;</span></li>
            <li><span className="text-[#383F45]">Bullying;</span></li>
            <li>
              <span className="text-[#383F45]">
                Terrorism or extremist activity;
              </span>
            </li>
            <li><span className="text-[#383F45]">Child exploitation;</span></li>
            <li><span className="text-[#383F45]">Graphic violence;</span></li>
            <li><span className="text-[#383F45]">Illegal activities;</span></li>
            <li><span className="text-[#383F45]">Fraudulent schemes;</span></li>
            <li><span className="text-[#383F45]">Copyright infringement;</span></li>
            <li>
              <span className="text-[#383F45]">
                Misinformation causing harm;
              </span>
            </li>
            <li><span className="text-[#383F45]">Malware or harmful code;</span></li>
            <li>
              <span className="text-[#383F45]">
                Spam or platform manipulation.
              </span>
            </li>
          </ul>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Clipverse reserves the right to remove content and restrict accounts
            violating these standards.
          </p>

          <h1
            id="anti-fraud-platform-integrity"
            className="text-[22px] mt-10 font-[400] scroll-mt-24"
          >
            11. Anti-Fraud and Platform Integrity
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Clipverse actively monitors for:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li><span className="text-[#383F45]">Artificial engagement;</span></li>
            <li><span className="text-[#383F45]">Bot activity;</span></li>
            <li><span className="text-[#383F45]">Automated viewing;</span></li>
            <li><span className="text-[#383F45]">Click farms;</span></li>
            <li><span className="text-[#383F45]">Device manipulation;</span></li>
            <li><span className="text-[#383F45]">Account farming;</span></li>
            <li><span className="text-[#383F45]">Reward exploitation;</span></li>
            <li><span className="text-[#383F45]">Payment fraud;</span></li>
            <li><span className="text-[#383F45]">Identity fraud.</span></li>
          </ul>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Investigations may involve automated systems, manual reviews,
            third-party verification providers, and security assessments.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Fraudulent activity may result in:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li><span className="text-[#383F45]">Earnings cancellation;</span></li>
            <li><span className="text-[#383F45]">Withdrawal restrictions;</span></li>
            <li><span className="text-[#383F45]">Permanent suspension;</span></li>
            <li><span className="text-[#383F45]">Legal action.</span></li>
          </ul>

          <h1
            id="withdrawal-policy"
            className="text-[22px] mt-10 font-[400] scroll-mt-24"
          >
            12. Withdrawal Policy
          </h1>

          <h2 className="text-[18px] mt-6 font-[500]">
            12.1 Eligibility
          </h2>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Withdrawals require:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>
              <span className="text-[#383F45]">
                Successful KYC verification;
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Verified payment information;
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Compliance with Platform policies;
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Compliance with applicable laws.
              </span>
            </li>
          </ul>

          <h2 className="text-[18px] mt-8 font-[500]">
            12.2 Minimum Withdrawal Thresholds
          </h2>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Minimum withdrawal requirements may apply and may be updated
            periodically.
          </p>

          <h2 className="text-[18px] mt-8 font-[500]">
            12.3 Security Holds
          </h2>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Clipverse may temporarily hold funds for:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li>
              <span className="text-[#383F45]">
                Fraud prevention;
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Compliance reviews;
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Payment verification;
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Chargeback investigations;
              </span>
            </li>
            <li>
              <span className="text-[#383F45]">
                Risk management.
              </span>
            </li>
          </ul>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Held funds may be released following successful verification.
          </p>


          <h1
            id="subscription-services"
            className="text-[22px] mt-10 font-[400] scroll-mt-24"
          >
            13. Subscription Services
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Certain earning features, rewards, benefits, or access levels may require
            an active subscription.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Subscriptions:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li><span className="text-[#383F45]">Are personal and non-transferable.</span></li>
            <li><span className="text-[#383F45]">Apply only to the associated earning identity.</span></li>
            <li><span className="text-[#383F45]">May automatically renew where permitted.</span></li>
          </ul>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            All subscription purchases made through app marketplaces are governed by
            the applicable marketplace billing terms.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Refund requests shall be handled according to the policies of the relevant
            payment processor, app marketplace, or platform provider.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Subscription purchase does not guarantee earnings.
          </p>

          <h1
            id="advertising-dependency"
            className="text-[22px] mt-10 font-[400] scroll-mt-24"
          >
            14. Advertising Dependency
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Viewer earnings and certain creator rewards may depend on:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li><span className="text-[#383F45]">Advertising demand;</span></li>
            <li><span className="text-[#383F45]">Campaign availability;</span></li>
            <li><span className="text-[#383F45]">Sponsorship participation;</span></li>
            <li><span className="text-[#383F45]">Brand partnerships.</span></li>
          </ul>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Where advertising inventory decreases, earnings may be reduced, paused,
            or adjusted.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Clipverse does not guarantee continuous monetization availability.
          </p>

          <h1
            id="suspension-and-termination"
            className="text-[22px] mt-10 font-[400] scroll-mt-24"
          >
            15. Suspension and Termination
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Clipverse may suspend or terminate accounts for:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li><span className="text-[#383F45]">Fraud;</span></li>
            <li><span className="text-[#383F45]">Policy violations;</span></li>
            <li><span className="text-[#383F45]">Security concerns;</span></li>
            <li><span className="text-[#383F45]">Abuse of monetization systems;</span></li>
            <li><span className="text-[#383F45]">Repeated guideline violations;</span></li>
            <li><span className="text-[#383F45]">Legal requirements.</span></li>
          </ul>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Users may appeal enforcement actions through designated support channels.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Clipverse reserves the final decision regarding account reinstatement.
          </p>

          <h1
            id="disclaimer-of-earnings"
            className="text-[22px] mt-10 font-[400] scroll-mt-24"
          >
            16. Disclaimer of Earnings
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Clipverse does not guarantee:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li><span className="text-[#383F45]">Income;</span></li>
            <li><span className="text-[#383F45]">Profitability;</span></li>
            <li><span className="text-[#383F45]">Future earnings;</span></li>
            <li><span className="text-[#383F45]">Advertiser participation;</span></li>
            <li><span className="text-[#383F45]">Revenue levels.</span></li>
          </ul>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Displayed earnings may be adjusted due to audits, fraud investigations,
            advertiser validations, technical corrections, compliance reviews, or
            platform updates.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Participation in monetization programs does not establish employment,
            partnership, agency, or contractor relationships.
          </p>

          <h1
            id="limitation-of-liability"
            className="text-[22px] mt-10 font-[400] scroll-mt-24"
          >
            17. Limitation of Liability
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            To the maximum extent permitted by law, Clipverse shall not be liable for:
          </p>

          <ul className="text-[16px] font-[400] my-5 flex flex-col gap-2 list-disc list-inside">
            <li><span className="text-[#383F45]">Loss of earnings;</span></li>
            <li><span className="text-[#383F45]">Business interruption;</span></li>
            <li><span className="text-[#383F45]">Data loss;</span></li>
            <li><span className="text-[#383F45]">Account suspension;</span></li>
            <li><span className="text-[#383F45]">Advertiser decisions;</span></li>
            <li><span className="text-[#383F45]">Third-party actions;</span></li>
            <li><span className="text-[#383F45]">Indirect or consequential damages.</span></li>
          </ul>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Total liability shall not exceed amounts paid by the user to Clipverse
            during the preceding twelve months.
          </p>

          <h1
            id="changes-to-terms"
            className="text-[22px] mt-10 font-[400] scroll-mt-24"
          >
            18. Changes to Terms
          </h1>

          <p className="text-[16px] mt-5 text-[#383F45] font-[400]">
            Clipverse may update these Terms periodically.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Updated Terms become effective upon publication unless otherwise stated.
          </p>

          <p className="text-[16px] mt-4 text-[#383F45] font-[400]">
            Continued use of the Platform constitutes acceptance of updated Terms.
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
            <a
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
            </a>
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
    </>
  );
};

export default TermsPage;
