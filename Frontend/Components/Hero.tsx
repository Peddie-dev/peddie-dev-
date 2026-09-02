'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { site } from '@/lib/site';

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-24 px-4 max-w-6xl mx-auto"
    >
      {/* Text column */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <p className="text-[11px] uppercase tracking-[0.15em] text-slate-500 mb-2">
          Hello, I&apos;m
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mt-1 mb-4 bg-gradient-to-br from-slate-100 to-slate-400 bg-clip-text text-transparent">
          Henry
          <br />
          Omino
        </h1>

        <p className="text-[15px] text-slate-400 leading-relaxed max-w-md mb-8">
          Full Stack Developer &amp;{' '}
          <span className="text-slate-300 font-medium">UI/UX Designer</span> in
          Nairobi. I design and ship wellness products, research-org websites, and
          product-studio sites — from Weight Cheque to ACRIDC and Fusion-X.
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-7">
          
            <a href="/#projects"
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
          
           <a href="/#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 hover:border-slate-500 transition-colors px-5 py-[11px] text-sm font-medium text-slate-400 hover:text-slate-200"
          >
            Contact me
          </a>
        </div>

        <div className="flex items-center gap-4">
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

      {/* Avatar column */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="flex justify-center md:justify-end"
      >
        <div className="relative" style={{ width: 220, height: 220 }}>
          <div
            className="absolute inset-0 rounded-full opacity-90"
            style={{
              background:
                'conic-gradient(#4f46e5 0deg, #7c3aed 120deg, #0ea5e9 240deg, #4f46e5 360deg)'
            }}
          />
          <div className="absolute inset-[3px] rounded-full overflow-hidden bg-slate-800 ring-4 ring-[#0b1220]">
            {photoFailed ? (
              <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-300 text-4xl font-semibold">
                HO
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/profile.jpeg"
                alt="Henry Omino"
                width={214}
                height={214}
                className="object-cover w-full h-full"
                onError={() => setPhotoFailed(true)}
              />
            )}
          </div>
          <span
            className="absolute bottom-3 right-3 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-[#0b1220]"
            aria-hidden="true"
          />
        </div>
      </motion.div>
    </section>
  );
}