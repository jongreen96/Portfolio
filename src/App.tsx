import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Mail,
  MapPin,
} from 'lucide-react';
import eventCapturePreview from './assets/event-capture.png';
import greenVinylGraphicsPreview from './assets/greenvinylgraphics.png';
import myGptPreview from './assets/my-gpt.png';
import profilePhoto from './assets/profile-photo.jpg';

type Project = {
  name: string;
  eyebrow: string;
  summary: string;
  outcome: string;
  details: string[];
  stack: string[];
  image: string;
  imageAlt: string;
  liveUrl: string;
  repoUrl: string;
};

const projects: Project[] = [
  {
    name: 'MyGPT',
    eyebrow: 'Production AI platform',
    summary:
      'A full-stack AI chat and image-generation product with authentication and pay-as-you-go billing.',
    outcome: 'Used by 4,000+ people',
    details: [
      'Built the product end to end, from conversation UX and image generation to accounts, payments, and usage tracking.',
      'Runs in production on Hetzner with automated deployments, monitoring, and backups through Coolify.',
      'Integrated Stripe, Auth.js, PostgreSQL, Sentry, and the OpenAI API into one reliable user journey.',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Stripe',
      'Auth.js',
      'OpenAI API',
      'Sentry',
    ],
    image: myGptPreview,
    imageAlt: 'MyGPT application interface',
    liveUrl: 'https://my-gpt.app',
    repoUrl: 'https://github.com/jongreen96/MyGPT',
  },
  {
    name: 'Green Vinyl Graphics',
    eyebrow: 'E-commerce platform',
    summary:
      'A responsive storefront built around a real digital-design business, with a complete purchasing and fulfilment flow.',
    outcome: '£60k+ in business sales',
    details: [
      'Rebuilt the platform in Next.js with server rendering and a mobile-first purchase experience.',
      'Connected payments, validated forms, file uploads, transactional email, and persistent order data.',
      'Applied first-hand commercial experience to the product decisions instead of treating it as a demo shop.',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Drizzle',
      'Stripe',
      'Supabase',
      'Zod',
      'Resend',
    ],
    image: greenVinylGraphicsPreview,
    imageAlt: 'Green Vinyl Graphics storefront',
    liveUrl: 'https://gvg.jongreen.dev',
    repoUrl: 'https://github.com/jongreen96/GreenVinylGraphics',
  },
  {
    name: 'Event Capture',
    eyebrow: 'Full-stack media app',
    summary:
      'An event-focused application for collecting and managing uploaded media through a fast, type-safe interface.',
    outcome: 'Designed for real event workflows',
    details: [
      'Built client-side routing, server-state management, uploads, and responsive media processing as one cohesive system.',
      'Integrated Cloudflare R2 through its S3-compatible API for durable, cost-effective object storage.',
      'Deployed the application and PostgreSQL database on Hetzner using containerised Coolify services.',
    ],
    stack: [
      'React',
      'TypeScript',
      'TanStack',
      'PostgreSQL',
      'Cloudflare R2',
      'Sharp',
    ],
    image: eventCapturePreview,
    imageAlt: 'Event Capture application interface',
    liveUrl: 'https://ec.jongreen.dev',
    repoUrl: 'https://github.com/jongreen96/Event-Capture',
  },
];

const skillGroups = [
  {
    label: 'Core',
    skills: ['TypeScript', 'JavaScript', 'React', 'HTML', 'CSS', 'SQL'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Hono', 'Express', 'Next.js', 'REST APIs', 'Auth'],
  },
  {
    label: 'Data & services',
    skills: ['PostgreSQL', 'SQLite / D1', 'Drizzle', 'Stripe', 'R2', 'Email'],
  },
  {
    label: 'Delivery',
    skills: ['Docker', 'Linux', 'Cloudflare', 'Hetzner', 'Coolify', 'Git'],
  },
];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='inline-flex items-center gap-1.5 text-sm font-medium text-zinc-200 transition-colors hover:text-emerald-300'
    >
      {children}
      <ArrowUpRight aria-hidden='true' className='size-4' />
    </a>
  );
}

function App() {
  return (
    <div className='min-h-screen overflow-hidden bg-zinc-950 text-zinc-100'>
      <div className='pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(16,185,129,0.10),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(59,130,246,0.08),transparent_28%)]' />

      <header className='relative mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8'>
        <a href='#top' className='text-sm font-semibold tracking-wide text-white'>
          JG<span className='text-emerald-400'>.</span>
        </a>
        <nav aria-label='Main navigation' className='flex items-center gap-5 text-sm text-zinc-400 sm:gap-7'>
          <a className='transition-colors hover:text-white' href='#work'>
            Work
          </a>
          <a className='transition-colors hover:text-white' href='#skills'>
            Skills
          </a>
          <a className='hidden transition-colors hover:text-white sm:block' href='#about'>
            About
          </a>
          <a
            className='rounded-full border border-zinc-700 px-4 py-2 font-medium text-zinc-100 transition-colors hover:border-emerald-400/60 hover:bg-emerald-400/10'
            href='mailto:jongreen1996@gmail.com'
          >
            Get in touch
          </a>
        </nav>
      </header>

      <main id='top' className='relative mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28'>
        <section className='grid min-h-[76vh] items-center gap-12 py-16 lg:grid-cols-[1fr_360px] lg:py-24'>
          <div>
            <div className='mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 text-sm text-emerald-200'>
              <span className='size-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]' />
              Open to software developer roles
            </div>
            <p className='mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500'>
              Jon Green · Full-stack developer
            </p>
            <h1 className='max-w-4xl text-balance text-5xl font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl'>
              I build and ship products people actually use.
            </h1>
            <p className='mt-7 max-w-2xl text-pretty text-lg leading-8 text-zinc-400 sm:text-xl'>
              I&apos;m a Sheffield-based software developer focused on React and TypeScript. Over the past five years I&apos;ve taken full-stack products from rough ideas to production—handling the interface, APIs, data, payments, and deployment.
            </p>
            <div className='mt-9 flex flex-wrap gap-3'>
              <a
                href='#work'
                className='inline-flex items-center gap-2 rounded-full bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-950 transition-transform hover:-translate-y-0.5'
              >
                View selected work
                <ArrowDown aria-hidden='true' className='size-4' />
              </a>
              <a
                href='https://github.com/jongreen96'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-5 py-3 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500'
              >
                <Github aria-hidden='true' className='size-4' />
                GitHub
              </a>
            </div>
          </div>

          <aside className='relative mx-auto w-full max-w-sm lg:mx-0' aria-label='Profile summary'>
            <div className='absolute -inset-6 rounded-[2.5rem] bg-emerald-400/5 blur-3xl' />
            <div className='relative rounded-[2rem] border border-white/10 bg-zinc-900/70 p-4 shadow-2xl shadow-black/30 backdrop-blur'>
              <img
                src={profilePhoto}
                alt='Jon Green'
                className='aspect-square w-full rounded-3xl object-cover grayscale-[15%]'
              />
              <div className='grid grid-cols-2 gap-3 pt-4'>
                <div className='rounded-2xl bg-zinc-950/70 p-4'>
                  <strong className='block text-2xl text-white'>4,000+</strong>
                  <span className='mt-1 block text-xs leading-5 text-zinc-500'>MyGPT users</span>
                </div>
                <div className='rounded-2xl bg-zinc-950/70 p-4'>
                  <strong className='block text-2xl text-white'>£60k+</strong>
                  <span className='mt-1 block text-xs leading-5 text-zinc-500'>business sales</span>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id='work' className='scroll-mt-20 border-t border-white/10 py-20 sm:py-28'>
          <div className='mb-12 grid gap-4 sm:grid-cols-[220px_1fr]'>
            <p className='section-label'>Selected work</p>
            <div>
              <h2 className='max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
                More than tutorial projects.
              </h2>
              <p className='mt-4 max-w-2xl leading-7 text-zinc-400'>
                These products solve real problems and include the unglamorous parts too: authentication, payments, storage, monitoring, and keeping production running.
              </p>
            </div>
          </div>

          <div className='space-y-6'>
            {projects.map((project, index) => (
              <article
                key={project.name}
                className='group grid overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/45 transition-colors hover:border-white/20 lg:grid-cols-[0.92fr_1.08fr]'
              >
                <a
                  href={project.liveUrl}
                  target='_blank'
                  rel='noreferrer'
                  className={`relative min-h-72 overflow-hidden bg-zinc-900 p-5 sm:min-h-96 sm:p-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  aria-label={`Open ${project.name}`}
                >
                  <div className='absolute inset-0 bg-linear-to-br from-emerald-400/10 via-transparent to-blue-400/10' />
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className='relative h-full w-full rounded-xl border border-white/10 object-cover object-top shadow-2xl shadow-black/50 transition-transform duration-500 group-hover:scale-[1.02]'
                  />
                </a>
                <div className='flex flex-col justify-between p-7 sm:p-10'>
                  <div>
                    <div className='flex flex-wrap items-center justify-between gap-3'>
                      <p className='section-label'>{project.eyebrow}</p>
                      <span className='rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1 text-xs font-medium text-emerald-200'>
                        {project.outcome}
                      </span>
                    </div>
                    <h3 className='mt-5 text-3xl font-semibold tracking-tight text-white'>
                      {project.name}
                    </h3>
                    <p className='mt-3 text-pretty leading-7 text-zinc-400'>{project.summary}</p>
                    <ul className='mt-6 space-y-3 text-sm leading-6 text-zinc-300'>
                      {project.details.map((detail) => (
                        <li key={detail} className='flex gap-3'>
                          <span aria-hidden='true' className='mt-2 size-1.5 shrink-0 rounded-full bg-emerald-400' />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='mt-8'>
                    <div className='mb-6 flex flex-wrap gap-2'>
                      {project.stack.map((technology) => (
                        <span key={technology} className='rounded-md bg-white/[0.06] px-2.5 py-1 text-xs text-zinc-400'>
                          {technology}
                        </span>
                      ))}
                    </div>
                    <div className='flex gap-5'>
                      <ExternalLink href={project.liveUrl}>Live product</ExternalLink>
                      <ExternalLink href={project.repoUrl}>Source code</ExternalLink>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id='skills' className='scroll-mt-20 border-t border-white/10 py-20 sm:py-28'>
          <div className='grid gap-10 sm:grid-cols-[220px_1fr]'>
            <p className='section-label'>Technical toolkit</p>
            <div>
              <h2 className='max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
                Full-stack by practice, not just by label.
              </h2>
              <p className='mt-4 max-w-2xl leading-7 text-zinc-400'>
                My strongest work is in TypeScript and React, backed by the server, database, and delivery skills needed to own a feature all the way to production.
              </p>
              <div className='mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2'>
                {skillGroups.map((group) => (
                  <div key={group.label} className='bg-zinc-950 p-6 sm:p-8'>
                    <h3 className='font-semibold text-zinc-100'>{group.label}</h3>
                    <div className='mt-4 flex flex-wrap gap-2'>
                      {group.skills.map((skill) => (
                        <span key={skill} className='rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-400'>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id='about' className='scroll-mt-20 border-t border-white/10 py-20 sm:py-28'>
          <div className='grid gap-10 sm:grid-cols-[220px_1fr]'>
            <p className='section-label'>About</p>
            <div className='grid gap-10 lg:grid-cols-[1fr_260px]'>
              <div>
                <h2 className='max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
                  I care about the whole product.
                </h2>
                <div className='mt-6 max-w-2xl space-y-5 text-pretty leading-7 text-zinc-400'>
                  <p>
                    I&apos;ve spent five years learning by building: turning business ideas into working software, putting that software in front of users, and improving it when reality exposes the rough edges.
                  </p>
                  <p>
                    Running a digital-design business gave me a practical view of software. Good engineering is not only clean code—it is understanding the user, making sensible trade-offs, and delivering something dependable enough to support real activity.
                  </p>
                  <p>
                    I&apos;m now looking to bring that ownership, curiosity, and hands-on full-stack experience into a professional development team.
                  </p>
                </div>
              </div>
              <div>
                <h3 className='text-sm font-semibold text-zinc-200'>Education</h3>
                <dl className='mt-5 space-y-6 text-sm'>
                  <div>
                    <dt className='font-medium text-zinc-200'>Harvard CS50x</dt>
                    <dd className='mt-1 leading-6 text-zinc-500'>Computer science fundamentals · 2024</dd>
                  </div>
                  <div>
                    <dt className='font-medium text-zinc-200'>Codecademy</dt>
                    <dd className='mt-1 leading-6 text-zinc-500'>Full-Stack Engineer path · 2023–24</dd>
                  </div>
                  <div>
                    <dt className='font-medium text-zinc-200'>Level 3 Diploma in IT</dt>
                    <dd className='mt-1 leading-6 text-zinc-500'>Web development and database design</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section className='rounded-3xl border border-emerald-300/15 bg-emerald-300/[0.06] px-6 py-12 text-center sm:px-12 sm:py-16'>
          <div className='mx-auto flex size-11 items-center justify-center rounded-full bg-emerald-300/10 text-emerald-300'>
            <Mail aria-hidden='true' className='size-5' />
          </div>
          <h2 className='mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
            Let&apos;s build something useful.
          </h2>
          <p className='mx-auto mt-4 max-w-xl leading-7 text-zinc-400'>
            I&apos;m open to software developer opportunities where I can contribute, keep learning, and help ship products people value.
          </p>
          <a
            href='mailto:jongreen1996@gmail.com'
            className='mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-emerald-950 transition-transform hover:-translate-y-0.5'
          >
            Email me
            <ArrowUpRight aria-hidden='true' className='size-4' />
          </a>
        </section>
      </main>

      <footer className='relative mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8'>
        <p>© {new Date().getFullYear()} Jon Green</p>
        <div className='flex flex-wrap items-center gap-5'>
          <span className='inline-flex items-center gap-1.5'>
            <MapPin aria-hidden='true' className='size-3.5' /> Sheffield, England
          </span>
          <a className='transition-colors hover:text-white' href='mailto:jongreen1996@gmail.com'>
            Email
          </a>
          <a className='transition-colors hover:text-white' href='https://github.com/jongreen96' target='_blank' rel='noreferrer'>
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
