'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 'weight-cheque',
    title: 'Weight Cheque',
    desc: 'E-commerce & blog for diet eBooks with subscription library.',
    tech: ['React', 'Next.js', 'Stripe']
  },
  {
    id: 'mangata-galo',
    title: 'Mangata & Galo',
    desc: 'Jewelry store landing & product showcase.',
    tech: ['HTML', 'CSS']
  },
  {
    id: 'portfolio',
    title: 'This Portfolio',
    desc: 'Personal portfolio built with Next.js + Tailwind.',
    tech: ['Next.js', 'TypeScript']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-8">
      <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-semibold">Projects</motion.h2>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.id} className="rounded-2xl bg-[#071026] p-6 shadow-lg">
            <div className="h-40 rounded-lg bg-gradient-to-br from-indigo-800 to-purple-800 mb-4 flex items-center justify-center text-white">Preview</div>
            <h3 className="text-xl font-medium">{p.title}</h3>
            <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map(t => <span key={t} className="text-xs px-2 py-1 rounded bg-[#0b1626]">{t}</span>)}
            </div>
            <div className="mt-4 flex gap-3">
              <a href="#" className="text-sm rounded px-3 py-2 bg-gradient-to-r from-indigo-600 to-violet-600">Live Demo</a>
              <a href="#" className="text-sm rounded px-3 py-2 border">GitHub</a>
            </div>
          </article>
        ))}
      </motion.div>
    </section>
  );
}