"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-black/30 backdrop-blur-sm w-full py-4 px-8 relative z-30">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-12 text-lg">
          <Link href="/" className="text-white/80 hover:text-white transition-colors px-4">
            Home
          </Link>
          <Link href="/introduction" className="text-white/80 hover:text-white transition-colors px-4">
            Introduction
          </Link>
          <Link href="/practice" className="text-white/80 hover:text-white transition-colors px-4">
            Practice
          </Link>
          <Link href="/discoveries" className="text-white/80 hover:text-white transition-colors px-4">
            Discoveries
          </Link>
          <Link href="/learn-more" className="text-white/80 hover:text-white transition-colors px-4">
            More
          </Link>
        </div>
      </div>
    </nav>
  );
}