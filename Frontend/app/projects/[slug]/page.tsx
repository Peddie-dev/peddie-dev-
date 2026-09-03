import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Figma, Github } from 'lucide-react';
import { getProject, projects } from '@/lib/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Project' };
  return {
    title: `${project.title} — Henry Omino`,
    description: project.desc
  };
}

export default async function ProjectCaseStudy({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="max-w-3xl mx-auto py-12 sm:py-16 px-1 sm:px-0">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={14} />
        All projects
      </Link>

      <p className="mt-8 text-xs uppercase tracking-[0.12em] text-slate-500">
        {project.role} · {project.year}
      </p>
      <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-white tracking-tight">
        {project.title}
      </h1>
      <p className="mt-4 text-slate-400 leading-relaxed">{project.desc}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300"
          >
            Live site <ExternalLink size={14} />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white"
          >
            <Github size={14} /> Code
          </a>
        )}
        {project.design && (
          <a
            href={project.design}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white"
          >
            <Figma size={14} /> Design
          </a>
        )}
      </div>

      {project.image && (
        <div className="mt-10 overflow-hidden rounded-xl border border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.image} alt={`${project.title} cover`} className="w-full" />
        </div>
      )}

      <div className="mt-12 grid gap-10">
        <section>
          <h2 className="text-sm uppercase tracking-[0.12em] text-slate-500">Problem</h2>
          <p className="mt-3 text-slate-300 leading-relaxed">{project.problem}</p>
        </section>
        <section>
          <h2 className="text-sm uppercase tracking-[0.12em] text-slate-500">Process</h2>
          <p className="mt-3 text-slate-300 leading-relaxed">{project.process}</p>
        </section>
        <section>
          <h2 className="text-sm uppercase tracking-[0.12em] text-slate-500">Outcome</h2>
          <p className="mt-3 text-slate-300 leading-relaxed">{project.outcome}</p>
        </section>
      </div>

      {project.screens.length > 0 && (
        <section className="mt-14">
          <h2 className="text-sm uppercase tracking-[0.12em] text-slate-500 mb-6">
            Screens
          </h2>
          <div className="space-y-10">
            {project.screens.map((screen) => (
              <figure key={screen.src}>
                <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a1120]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={screen.src} alt={screen.alt} className="w-full" />
                </div>
                <figcaption className="mt-3 text-sm text-slate-500">
                  {screen.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
