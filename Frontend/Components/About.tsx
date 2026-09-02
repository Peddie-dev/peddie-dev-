'use client';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'React Native',
  'Node.js',
  'Express',
  'PostgreSQL',
  'Redux',
  'Tailwind',
  'Figma',
  'AWS S3'
];

export default function About() {
  return (
    <section id="about" className="py-16 max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-3xl font-semibold text-white">About Me</h2>
        <p className="mt-2 text-slate-400 text-sm">A bit about my background and stack.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="md:flex md:gap-14"
      >
        <div className="md:w-2/3">
          <p className="text-slate-400 leading-relaxed">
            I&apos;m a full stack developer with a background in UI/UX and IT
            analysis. I co-founded Weight Cheque, and I work with teams that
            need a public product — wellness, research, or a studio site —
            designed in Figma and built in Next.js.
          </p>

          <div className="mt-6">
            
             <a href="/HENRY EDWIN OMINO RESUME.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 hover:border-slate-500 transition-colors px-5 py-[11px] text-sm font-medium text-slate-300 hover:text-white"
            >
              <Download size={15} />
              Download CV
            </a>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/3">
          <p className="text-xs uppercase tracking-[0.12em] text-slate-500 mb-3">
            Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="text-sm px-3 py-1.5 rounded-full border border-white/10 text-slate-300 hover:border-indigo-500/40 hover:text-white transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}