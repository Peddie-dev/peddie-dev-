'use client';
import { motion } from 'framer-motion';

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind', 'AWS S3'];

export default function About() {
  return (
    <section id="about" className="py-8">
      <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-semibold">About Me</motion.h2>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-6 md:flex md:gap-10">
        <div className="md:w-2/3 text-slate-300">
          <p>I&apos;m a full stack developer with a background in UI/UX and IT analysis. I enjoy building performant web applications and crafting interfaces that solve real user problems.</p>

          <div className="mt-4">
            <a href="/HENRY EDWIN OMINO RESUME.pdf" className="inline-block rounded-xl border px-4 py-2">Download CV</a>
          </div>
        </div>

        <div className="mt-6 md:mt-0 md:w-1/3">
          <div className="grid grid-cols-2 gap-3">
            {skills.map((s) => (
              <div key={s} className="rounded-lg bg-[#071023] px-3 py-2 text-sm text-slate-200">{s}</div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}