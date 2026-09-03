'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { assets } from '@/lib/assets';
import { site } from '@/lib/site';

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 py-10 sm:py-12 md:py-16 px-4 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="order-2 md:order-1 text-center md:text-left"
      >
        <p className="text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-2">
          Hi, my name is
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mt-1 mb-3 bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-transparent">
          Henry Omino.
        </h1>

        <p className="text-lg sm:text-xl font-semibold text-slate-200 leading-snug max-w-md mx-auto md:mx-0 mb-4">
          Building products, systems, and companies that scale.
        </p>

        <p className="text-[15px] text-slate-400 leading-relaxed max-w-lg mx-auto md:mx-0 mb-8">
          I&apos;m an entrepreneur and technologist focused on scalable digital products,
          trusted platforms, and businesses built for long-term impact. My work spans
          product development, UI/UX, full-stack engineering, and venture building
          across institutional and studio platforms in technology-driven markets.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-7">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-colors px-5 py-[11px] text-sm font-medium text-white shadow-lg shadow-indigo-600/20"
          >
            View my work
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path
                d="M3 7.5h9M8.5 4l3.5 3.5L8.5 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 hover:border-slate-500 transition-colors px-5 py-[11px] text-sm font-medium text-slate-400 hover:text-slate-200"
          >
            Contact me
          </a>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 hover:text-slate-200 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 hover:text-slate-200 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          {site.email && (
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="text-slate-500 hover:text-slate-200 transition-colors"
            >
              <Mail size={18} />
            </a>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="order-1 md:order-2 flex justify-center md:justify-end"
      >
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          className="group relative w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] cursor-pointer"
        >
          <div
            className="absolute inset-0 rounded-full opacity-90 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-[1.06] group-hover:rotate-12 group-hover:shadow-[0_0_48px_rgba(99,102,241,0.55)]"
            style={{
              background:
                'conic-gradient(#4f46e5 0deg, #7c3aed 120deg, #0ea5e9 240deg, #4f46e5 360deg)'
            }}
          />
          <div className="absolute inset-[4px] rounded-full overflow-hidden bg-slate-800 ring-4 ring-[#0b1220] transition-all duration-500 group-hover:ring-indigo-500/40 group-hover:shadow-[inset_0_0_24px_rgba(99,102,241,0.15)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assets.hero}
              alt="Henry Omino"
              width={292}
              height={292}
              className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
          <span
            className="absolute bottom-4 right-4 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-[#0b1220] transition-transform duration-300 group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(34,197,94,0.8)]"
            aria-hidden="true"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
