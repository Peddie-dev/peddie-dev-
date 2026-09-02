'use client';
import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { site } from '@/lib/site';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);

    if (site.email) {
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    } else {
      window.open(site.linkedin, '_blank', 'noopener,noreferrer');
    }
    setSent(true);
  }

  return (
    <section id="contact" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-3xl font-semibold text-white">Contact</h2>
        <p className="mt-2 text-slate-400 text-sm">
          Have a project in mind? Let&apos;s talk.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 leading-relaxed">
            I&apos;m open to freelance work, product design, and full-stack
            builds. Email me directly or send a short note with the form —
            it opens a draft to {site.email}.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
              linkedin.com/in/henryomino
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
            >
              <Github size={18} />
              github.com/Peddie-dev
            </a>
            {site.email && (
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <Mail size={18} />
                {site.email}
              </a>
            )}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          onSubmit={handleSubmit}
          className="rounded-xl border border-white/10 bg-[#0a1120] p-6 space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-xs text-slate-500 mb-1.5">
              Name
            </label>
            <input
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg bg-[#05060a] border border-white/10 px-3 py-2.5 text-sm text-white outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs text-slate-500 mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg bg-[#05060a] border border-white/10 px-3 py-2.5 text-sm text-white outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs text-slate-500 mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg bg-[#05060a] border border-white/10 px-3 py-2.5 text-sm text-white outline-none focus:border-indigo-500 resize-y"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-colors px-5 py-[11px] text-sm font-medium text-white"
          >
            <Send size={15} />
            {site.email ? 'Send message' : 'Continue on LinkedIn'}
          </button>
          {sent && (
            <p className="text-xs text-slate-500">
              {site.email
                ? 'Your mail client should open with the message drafted.'
                : 'Opening LinkedIn — send me a note there and mention this form.'}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
