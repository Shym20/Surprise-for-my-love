// "use client";
import { Geist, Geist_Mono, Poppins, Noto_Serif } from "next/font/google";
import "./globals.css"; // Your global Tailwind CSS file
import "./globals.css"; // Global styles

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configure your fonts
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"], // Specify the weights you need for Poppins
  variable: "--font-poppins",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"], // Specify the weights you need for Noto Serif
  variable: "--font-noto-serif",
});

export const metadata = {
  title: "A Special Surprise For You ❤️",
  description: "A little gift made with love, memories, and appreciation just for you.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${notoSerif.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
