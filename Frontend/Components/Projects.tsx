'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink, Figma, Github } from 'lucide-react';
import { projects } from '@/lib/projects';

function ProjectCover({
  src,
  title,
  accent
}: {
  src?: string;
  title: string;
  accent: string;
}) {
  return (
    <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${accent}`}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`${title} preview`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-end p-5">
          <p className="text-white/90 text-sm font-medium tracking-wide">{title}</p>
        </div>
      )}
    </div>
  );
}

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
          Client work, products, and selected builds — open a case study for process and screens.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group rounded-xl border border-white/10 bg-[#0a1120] overflow-hidden transition-colors hover:border-indigo-500/40"
          >
            <Link href={`/projects/${p.id}`}>
              <ProjectCover src={p.image} title={p.title} accent={p.accent} />
            </Link>

            <div className="p-6">
              <h3 className="text-lg font-medium text-white">
                <Link href={`/projects/${p.id}`} className="hover:text-indigo-300 transition-colors">
                  {p.title}
                </Link>
              </h3>
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

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
                <Link
                  href={`/projects/${p.id}`}
                  className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Case study <ArrowUpRight size={14} />
                </Link>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                  >
                    Live site <ExternalLink size={14} />
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                  >
                    <Github size={14} /> Code
                  </a>
                )}
                {p.design && (
                  <a
                    href={p.design}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                  >
                    <Figma size={14} /> Design
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
