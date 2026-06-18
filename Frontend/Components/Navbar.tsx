'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-transparent sticky top-0 z-50 py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-bold">Henry Omino</Link>
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}