"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-black w-full relative z-30">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex text-base gap-6">
          <Link href="/" className="text-white hover:text-white/80 transition-colors px-2">
            Home
          </Link>
          <Link href="/introduction" className="text-white hover:text-white/80 transition-colors px-2">
            Introduction
          </Link>
          <Link href="/practice" className="text-white hover:text-white/80 transition-colors px-2">
            Neutron Stars
          </Link>
          <Link href="/Discovery" className="text-white hover:text-white/80 transition-colors px-2">
            Discoveries
          </Link>
          <Link href="/conclusion" className="text-white hover:text-white/80 transition-colors px-2">
            Conclusion
          </Link>
        </div>
      </div>
    </nav>
  );
}