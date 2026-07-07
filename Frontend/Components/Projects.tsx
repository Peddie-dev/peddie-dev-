'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 'weight-cheque-web',
    title: 'Weight Cheque (Web)',
    desc: 'Personalised nutrition and meal planning web app.',
    tech: ['Next.js', 'TypeScript'],
    image: '/projects/weight-cheque-web.png',
    live: '#',
    github: '#'
  },
  {
    id: 'weight-cheque-mobile',
    title: 'Weight Cheque (Mobile)',
    desc: 'Cross-platform nutrition and meal planning app with a custom Express backend.',
    tech: ['React Native', 'TypeScript', 'Express.js'],
    image: '/projects/weight-cheque-mobile.png',
    live: '#',
    github: '#'
  },
  {
    id: 'online-polling-system',
    title: 'Online Polling System',
    desc: 'Web app for creating and voting on polls in real time, built during ALX.',
    tech: ['Next.js', 'TypeScript'],
    image: '/projects/online-polling-system.png',
    live: '#',
    github: '#'
  },
  {
    id: 'little-lemon',
    title: 'Little Lemon',
    desc: 'Table reservation web app, designed in Figma and built from scratch.',
    tech: ['React', 'JavaScript', 'Figma'],
    image: '/projects/little-lemon.png',
    live: '#',
    github: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-3xl font-semibold text-white">Projects</h2>
        <p className="mt-2 text-slate-400 text-sm">
          A selection of things I've built recently.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group rounded-xl border border-white/10 bg-[#0a1120] overflow-hidden transition-colors hover:border-indigo-500/40"
          >
            <div className="relative h-44 bg-[#0b1626] overflow-hidden">
              <Image
                src={p.image}
                alt={`${p.title} preview`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="p-6">
              <h3 className="text-lg font-medium text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-4 text-sm">
                
                <a  href={p.live}
                  className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
                
                 <a href={p.github}
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                >
                  <Github size={14} /> Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}