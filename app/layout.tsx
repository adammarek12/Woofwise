import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WoofWise",
  description: "Structured, multi-week dog training program for everyday dog owners",
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
        <header className="bg-white shadow">
          <nav className="max-w-4xl mx-auto flex justify-between items-center p-4">
            <Link href="/" className="text-xl font-bold">WoofWise</Link>
            <div className="flex space-x-4">
              <Link href="/dashboard" className="hover:underline">Dashboard</Link>
              <Link href="/program" className="hover:underline">Program</Link>
              <Link href="/library" className="hover:underline">Library</Link>
              <Link href="/login" className="hover:underline">Login</Link>
            </div>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
