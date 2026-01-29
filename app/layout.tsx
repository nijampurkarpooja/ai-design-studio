import { AnimatedOrbsBackground } from "@/app/components/background/animated-orbs";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Internet's Design School | 10kdesigners",
  description:
    "An invite-only private community – by designers, for designers. We are a better design school than many colleges. We create opportunities for designers to earn more.",
  openGraph: {
    title: "The Internet's Design School | 10kdesigners",
    description:
      "An invite-only private community – by designers, for designers. We are a better design school than many colleges.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimatedOrbsBackground />
        {children}
      </body>
    </html>
  );
}
