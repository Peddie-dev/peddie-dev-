'use client';
import { motion } from 'framer-motion';

const roles = [
  {
    company: 'Weight Cheque',
    title: 'Senior Software Engineer',
    dates: 'Jul 2025 — Present',
    location: 'Nairobi',
    points: [
      'Building the Weight Cheque wellness platform: diet plans, recipes, and lifestyle content.',
      'Own design and engineering across the web platform and the mobile app.'
    ]
  },
  {
    company: 'Globeflight Kenya',
    title: 'Digital Marketer & IT Specialist',
    dates: 'Apr 2024 — Dec 2024',
    location: 'Nairobi',
    points: [
      'Led digital and social strategy that lifted brand visibility.',
      'Integrated Lipa na M-Pesa on the Savabuy internal marketplace and trained staff on the app.'
    ]
  },
  {
    company: 'iSkyz Solutions',
    title: 'Web Developer & Content Manager',
    dates: 'Jan 2018 — Apr 2024',
    location: 'Nairobi',
    points: [
      'Designed, built, and supported SEO-focused sites, including a pet-care affiliate property.',
      'Shipped landing pages and post-launch UI support that improved adoption and conversion.'
    ]
  },
  {
    company: 'Standard Group PLC',
    title: 'IT Support Analyst Intern',
    dates: 'Feb 2022 — Mar 2024',
    location: 'Nairobi',
    points: [
      'Resolved cross-department technical issues and managed Active Directory accounts.',
      'Supported staff across counties on access, hardware, and service-desk operations.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-10 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-3xl font-semibold text-white">Experience</h2>
        <p className="mt-2 text-slate-400 text-sm">
          Product, web, and IT roles, from a newsroom service desk to engineering at Weight Cheque.
        </p>
      </motion.div>

      <ol className="relative space-y-0 border-l border-white/10 ml-3 md:ml-4">
        {roles.map((role, i) => (
          <motion.li
            key={role.company}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="relative pl-8 pb-10 last:pb-0"
          >
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-indigo-500 ring-4 ring-[#05060a]" />
            <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
              {role.dates} · {role.location}
            </p>
            <h3 className="mt-1 text-lg font-medium text-white">{role.title}</h3>
            <p className="text-sm text-indigo-300">{role.company}</p>
            <ul className="mt-3 space-y-1.5">
              {role.points.map((point) => (
                <li key={point} className="text-sm text-slate-400 leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
