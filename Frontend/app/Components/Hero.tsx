'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-20">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm uppercase text-slate-400">Hello, I&apos;m</p>
        <h1 className="text-5xl font-bold leading-tight mt-2">Henry Omino</h1>
        <p className="mt-4 text-lg text-slate-300 max-w-xl">Full Stack Developer & UI/UX Designer — I build fast, accessible web apps with delightful interfaces.</p>

        <div className="mt-6 flex gap-4">
          <a href="#projects" className="inline-block rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 shadow-lg font-medium">View My Work</a>
          <a href="#contact" className="inline-block rounded-2xl border border-slate-700 px-5 py-3 text-slate-300">Contact Me</a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center md:justify-end"
      >
        <div className="w-56 h-56 rounded-full bg-gradient-to-br from-indigo-700 to-purple-700 p-1 shadow-2xl">
          <div className="w-full h-full rounded-full bg-[#0b1220] overflow-hidden flex items-center justify-center">
            <Image src="/profile.jpeg" alt="Henry Omino" width={220} height={220} className="object-cover" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}