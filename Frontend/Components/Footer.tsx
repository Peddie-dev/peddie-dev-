'use client';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <Linkedin size={18} />
          </a>
          {site.email && (
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Mail size={18} />
            </a>
          )}
          <a
            href="/#hero"
            aria-label="Back to top"
            className="text-slate-500 hover:text-white transition-colors border-l border-white/10 pl-5"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
