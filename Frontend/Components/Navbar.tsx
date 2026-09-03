'use client';
import { useEffect, useState, type MouseEvent } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, X } from 'lucide-react';
import { assets } from '@/lib/assets';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function handleHashClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    const hash = href.includes('#') ? href.slice(href.indexOf('#') + 1) : '';
    if (!hash || pathname !== '/') return;

    event.preventDefault();
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    window.history.replaceState(null, '', `#${hash}`);
    setOpen(false);
  }

  return (
    <header className="fixed top-4 inset-x-0 z-50 mx-auto w-full max-w-5xl px-4 sm:px-6 pointer-events-none">
      <nav
        className={`
          pointer-events-auto flex flex-col border border-white/10 bg-[#0b1220]/90 px-4 sm:px-5
          shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md
          md:flex-row md:items-center md:justify-between md:gap-6 md:rounded-full md:px-6 md:py-3
          ${open ? 'gap-6 rounded-3xl py-4' : 'h-[60px] justify-center rounded-full'}
        `}
      >
        <div className="flex h-10 w-full items-center justify-between md:h-auto md:w-auto md:shrink-0">
          <Link href="/" aria-label="Henry Omino home" className="shrink-0">
            <span className="relative block h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/15">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assets.navAvatar}
                alt=""
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex size-9 items-center justify-center text-slate-300 hover:text-white md:hidden"
          >
            {open ? (
              <X size={22} />
            ) : (
              <span className="flex flex-col gap-[6px]" aria-hidden="true">
                <span className="h-px w-5 bg-current" />
                <span className="h-px w-5 bg-current" />
                <span className="h-px w-5 bg-current" />
              </span>
            )}
          </button>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={(e) => handleHashClick(e, l.href)}
              className="text-slate-400 hover:text-white transition-colors py-2 whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#contact"
          onClick={(e) => handleHashClick(e, '/#contact')}
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-indigo-500/50 bg-indigo-600/20 hover:bg-indigo-600/40 transition-colors px-4 py-2 text-sm font-medium text-white shrink-0"
        >
          Let&apos;s talk
          <ArrowRight size={15} />
        </Link>

        {open && (
          <div className="flex flex-col gap-4 pb-2 md:hidden">
            {links.map((l, i) => (
              <div key={l.href}>
                <Link
                  href={l.href}
                  onClick={(e) => handleHashClick(e, l.href)}
                  className="block py-2 text-lg font-medium text-slate-300 hover:text-white"
                >
                  {l.label}
                </Link>
                {i < links.length - 1 && <div className="mt-2 h-px bg-white/5" />}
              </div>
            ))}
            <Link
              href="/#contact"
              onClick={(e) => handleHashClick(e, '/#contact')}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-indigo-500/50 bg-indigo-600 px-4 py-3 text-sm font-medium text-white"
            >
              Let&apos;s talk
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
