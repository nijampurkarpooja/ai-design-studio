import { AnimatedOrbsBackground } from "@/app/components/background/animated-orbs";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Lumen | AI-first design studio",
  description:
    "Lumen is an AI-first design studio. We combine human creativity with AI-native workflows to deliver exceptional product and brand design—faster and built for teams that move fast.",
  openGraph: {
    title: "Lumen | AI-first design studio",
    description:
      "Design, amplified. We combine human creativity with AI-native workflows to deliver exceptional product and brand design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} antialiased`}
      >
        <AnimatedOrbsBackground />
        {children}
      </body>
    </html>
  );
}
