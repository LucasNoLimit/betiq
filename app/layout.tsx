import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BetIQ - Advanced AI Sports Predictions",
  description: "AI-powered predictions for football, tennis, and basketball. Bet smarter with BetIQ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-slate-200 min-h-screen flex flex-col`}
      >
        <Header />
        <main className="max-w-5xl mx-auto px-4 pt-8 pb-16 flex-grow w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
