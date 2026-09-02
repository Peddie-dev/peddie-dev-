export type ProjectScreen = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  id: string;
  title: string;
  desc: string;
  role: string;
  year: string;
  tech: string[];
  image?: string;
  live?: string;
  github?: string;
  design?: string;
  accent: string;
  problem: string;
  process: string;
  outcome: string;
  screens: ProjectScreen[];
};

export const projects: Project[] = [
  {
    id: 'fusion-x',
    title: 'Fusion-X',
    desc: 'Studio website for a digital product practice — UX research, product design, and design systems for brands that need experiences that convert.',
    role: 'Product design & front-end',
    year: '2026',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/fusion-x.png',
    live: 'https://fusion-x-snowy.vercel.app/',
    github: 'https://github.com/Peddie-dev/fusion-x',
    accent: 'from-violet-600/80 to-indigo-900',
    problem:
      'The studio needed a site that felt like a product system, not a generic agency template — something that could sell research, interface design, and design systems in one narrative.',
    process:
      'I started from positioning (digital product systems that connect and convert), then designed a dark, high-contrast layout: floating pill nav, gradient CTAs, a capabilities grid, selected work, and a four-stage approach. The front-end is Next.js with section-level composition so the marketing story and the case-study work can grow independently.',
    outcome:
      'A live studio site that walks visitors from capability to process to contact, with room to attach deeper case studies as the work library expands.',
    screens: [
      {
        src: '/projects/fusion-x.png',
        alt: 'Fusion-X homepage hero',
        caption: 'Hero — positioning, dual CTAs, and the product orb.'
      },
      {
        src: '/projects/fusion-x-hero.png',
        alt: 'Fusion-X trusted-by strip and capabilities',
        caption: 'Social proof strip and the start of Capabilities.'
      },
      {
        src: '/projects/fusion-x-work.png',
        alt: 'Fusion-X selected work',
        caption: 'Selected work — agritech, community, and fintech platforms.'
      },
      {
        src: '/projects/fusion-x-process.png',
        alt: 'Fusion-X process and research',
        caption: 'Process — research artifacts feeding product decisions.'
      },
      {
        src: '/projects/fusion-x-mobile.png',
        alt: 'Fusion-X mobile homepage',
        caption: 'Mobile homepage — same story, tighter hierarchy.'
      }
    ]
  },
  {
    id: 'acridic',
    title: 'ACRIDC-Africa',
    desc: 'Institutional website for an African research and innovation centre, designed in Figma and built with a glassmorphic nav, impact-focused hero, and programme sections.',
    role: 'UI/UX & front-end',
    year: '2026',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Figma'],
    image: '/projects/acridic.png',
    live: 'https://acridic.vercel.app/',
    github: 'https://github.com/Peddie-dev/acridic',
    accent: 'from-emerald-600/80 to-sky-900',
    problem:
      'A pan-African research centre needed a public face that could hold mission, programmes, partnerships, and publications without feeling like a brochure CMS theme.',
    process:
      'The Figma file set a glassmorphic pill nav, full-bleed photography, and emerald/navy brand language. I built the homepage as stacked institutional sections — hero with floating pillars, about, what we do, impact metrics, featured projects, partners, and news — matching hug dimensions and interaction states from the design.',
    outcome:
      'A live site that reads as a research institution: evidence-led copy, programme cards, and partner ecosystems, implemented as a Next.js App Router front-end.',
    screens: [
      {
        src: '/projects/acridic.png',
        alt: 'ACRIDC-Africa homepage hero',
        caption: 'Hero — mission line, partner CTAs, and pillar cards.'
      },
      {
        src: '/projects/acridic-hero.png',
        alt: 'ACRIDC-Africa live homepage',
        caption: 'Live homepage capture — glass nav over field research photography.'
      },
      {
        src: '/projects/acridic-about.png',
        alt: 'ACRIDC about section',
        caption: 'About — blended photography with mission, vision, and values.'
      },
      {
        src: '/projects/acridic-programmes.png',
        alt: 'ACRIDC programme areas',
        caption: 'Programmes — climate, agriculture, health, and governance.'
      },
      {
        src: '/projects/acridic-impact.png',
        alt: 'ACRIDC impact work',
        caption: 'Impact work — climate and environment project storytelling.'
      }
    ]
  },
  {
    id: 'weight-cheque-web',
    title: 'Weight Cheque (Web)',
    desc: 'Wellness platform I co-founded: weekly diet plans, keto and Mediterranean recipes, and practical guidance for lasting lifestyle change.',
    role: 'Co-founder · design & engineering',
    year: '2025 — present',
    tech: ['Next.js', 'TypeScript', 'Strapi', 'Paystack'],
    image: '/projects/weight-cheque-web.png',
    live: 'https://weightcheque.com',
    accent: 'from-lime-600/70 to-emerald-950',
    problem:
      'People looking for sustainable eating advice in Kenya were bouncing between generic blogs and expensive consultancies. We needed a product that sold plans, taught recipes, and still felt trustworthy.',
    process:
      'I designed a bright, food-first UI (orange identity, recipe search, plan CTAs) and shipped the web platform with a CMS-backed content model, payments, and SEO-focused article templates so diet plans and recipes can be published without a deploy.',
    outcome:
      'weightcheque.com is live as the public product: weekly diets, keto/Mediterranean guides, and a path to paid plans.',
    screens: [
      {
        src: '/projects/weight-cheque-web.png',
        alt: 'Weight Cheque homepage',
        caption: 'Homepage — lifestyle headline, Get Started, and food imagery.'
      },
      {
        src: '/projects/weight-cheque-hero.png',
        alt: 'Weight Cheque live homepage',
        caption: 'Live capture of the marketing homepage.'
      }
    ]
  },
  {
    id: 'weight-cheque-mobile',
    title: 'Weight Cheque (Mobile)',
    desc: 'Cross-platform nutrition and meal planning app with a custom Express backend — plans, recipes, and tracking in one place.',
    role: 'Co-founder · mobile & API',
    year: '2025 — present',
    tech: ['React Native', 'TypeScript', 'Express.js'],
    accent: 'from-teal-600/80 to-slate-900',
    problem:
      'The web product works for browsing; daily meal planning needs a pocket-sized flow for plans, recipes, and tracking.',
    process:
      'I am building a React Native client against a custom Express API so the same nutrition content can be planned and tracked on device. App Store / Play shots will land here once the build is ready to screenshot.',
    outcome:
      'Mobile companion to Weight Cheque, in active development. Screenshots coming next.',
    screens: []
  },
  {
    id: 'online-polling-system',
    title: 'Online Polling System',
    desc: 'ALX Project Nexus: create polls, vote, and watch results update live with Redux, charts, and Socket.io.',
    role: 'Full-stack (ALX Nexus)',
    year: '2025',
    tech: ['Next.js', 'TypeScript', 'Redux', 'Prisma', 'Chart.js'],
    github: 'https://github.com/Peddie-dev/online-poll-system',
    accent: 'from-indigo-500/80 to-slate-900',
    problem:
      'The Nexus brief asked for a real-time polling product: create a question, collect votes, and visualise results without a page refresh.',
    process:
      'I modelled polls, options, and votes in Prisma, exposed REST routes, and drove the UI through Redux thunks. Results render as charts; the current deploy work is moving the SQLite local database onto hosted Postgres so Vercel can stay up.',
    outcome:
      'A working create / vote / results loop locally. Live URL will be added here once the new Vercel deploy is healthy.',
    screens: []
  },
  {
    id: 'little-lemon',
    title: 'Little Lemon',
    desc: 'Mediterranean restaurant web app with table reservations and online ordering. Figma design is complete; the React build is still in progress.',
    role: 'UI/UX & front-end',
    year: '2025 — 2026',
    tech: ['React', 'JavaScript', 'Figma'],
    github: 'https://github.com/Peddie-dev/Little-Lemon',
    design:
      'https://www.figma.com/design/Q45RP6cgpHCE03p68sm6CP/Little-Lemon-Website--Copy-',
    accent: 'from-yellow-600/70 to-amber-950',
    problem:
      'Little Lemon needed a guest-facing site for browsing the menu, reserving a table, and ordering online — designed first, then built.',
    process:
      'I produced wireframes and high-fidelity screens in Figma (web and mobile, reserve-a-table and order flows). The React implementation is underway against that file; this page will gain production screens as those views ship.',
    outcome:
      'A complete Figma source of truth for the restaurant experience, with the coded app still in progress.',
    screens: []
  }
];

export function getProject(id: string) {
  return projects.find((p) => p.id === id);
}
