import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import eventcapturepreview from './assets/event-capture.png';
import githubicon from './assets/github.png';
import greenvinylgraphicspreview from './assets/greenvinylgraphics.png';
import mygptpreview from './assets/my-gpt.png';
import subtrackedpreview from './assets/sub-tracked.png';
import profilephoto from './assets/profile-photo.jpg';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';

function App() {
  return (
    <main className='min-h-[calc(100dvh-40px)] max-w-3xl min-w-[375px] mx-auto px-2 py-20 space-y-16'>
      <section className='flex justify-between'>
        <div className='text-lg space-y-2'>
          <div>
            <h1 className='text-4xl font-bold tracking-tighter'>Jon Green</h1>
            <p className='mt-1 text-xl tracking-tight'>Full-Stack Developer</p>
            <a
              href='https://www.google.com/maps/place/Sheffield'
              target='_blank'
              className='flex text-muted-foreground w-fit hover:underline'
            >
              <MapPinIcon className='size-3 my-auto mr-1' />
              <p className='text-sm '>Sheffield, England</p>
            </a>
          </div>

          <div className='pt-2 space-x-2'>
            <Button variant='outline' size='icon' asChild>
              <a href='tel:+44 7769674943' target='_blank'>
                <PhoneIcon
                  className='text-muted-foreground'
                  size={20}
                  aria-label='phone'
                />
              </a>
            </Button>

            <Button variant='outline' size='icon' asChild>
              <a href='mailto: jongreen1996@gmail.com' target='_blank'>
                <MailIcon
                  className='text-muted-foreground'
                  size={20}
                  aria-label='email'
                />
              </a>
            </Button>

            <Button variant='outline' size='icon' asChild>
              <a href='https://github.com/jongreen96' target='_blank'>
                <img
                  src={githubicon}
                  className='size-4'
                  alt='logo'
                  aria-label='github'
                />
              </a>
            </Button>
          </div>
        </div>

        <div>
          <img
            src={profilephoto}
            alt='Jon Green'
            className='rounded-xl min-w-40 size-40'
          />
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-semibold tracking-tight pb-4'>
          Profile
        </h2>

        <p className='text-muted-foreground text-sm text-pretty'>
          I build full-stack web applications, from the interface and data model to
          authentication, file storage and deployment. My recent work combines React
          and TypeScript with Cloudflare Workers, D1 and R2 across finance tools, AI
          chat and event-media sharing. I focus on clear interfaces and the details
          that make a product dependable: access control, consistent data and useful
          recovery when something goes wrong.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold tracking-tight pb-4'>
          Technical Skills
        </h2>
        <div className='grid grid-cols-[65px_minmax(0,_1fr)] gap-x-4 gap-y-2 items-center'>
          <span>DevOps:</span>
          <div className='flex flex-wrap gap-1'>
            <Badge variant='secondary'>Docker</Badge>
            <Badge variant='secondary'>Linux</Badge>
            <Badge variant='secondary'>Cloudflare</Badge>
            <Badge variant='secondary'>Hetzner</Badge>
            <Badge variant='secondary'>Nginx</Badge>
            <Badge variant='secondary'>Cloudflare Workers</Badge>
            <Badge variant='secondary'>Git</Badge>
          </div>
          <span>Frontend:</span>
          <div className='flex flex-wrap gap-1'>
            <Badge variant='secondary'>React</Badge>
            <Badge variant='secondary'>Next.js</Badge>
            <Badge variant='secondary'>TypeScript</Badge>
            <Badge variant='secondary'>TanStack Router</Badge>
            <Badge variant='secondary'>TanStack Query</Badge>
            <Badge variant='secondary'>Tailwind</Badge>
          </div>
          <span>Backend:</span>
          <div className='flex flex-wrap gap-1'>
            <Badge variant='secondary'>Node.js</Badge>
            <Badge variant='secondary'>Bun</Badge>
            <Badge variant='secondary'>Hono</Badge>
            <Badge variant='secondary'>Drizzle</Badge>
            <Badge variant='secondary'>PostgreSQL</Badge>
            <Badge variant='secondary'>D1 / SQLite</Badge>
            <Badge variant='secondary'>R2</Badge>
            <Badge variant='secondary'>Durable Objects</Badge>
            <Badge variant='secondary'>Workers AI</Badge>
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-semibold tracking-tight pb-4'>Projects</h2>

        <div className='space-y-6'>
          <div className='space-y-2'>
            <div className='flex gap-4'>
              <a href='https://sub-tracked.com' target='_blank' className='shrink-0'>
                <img
                  src={subtrackedpreview}
                  alt='Sub-Tracked homepage preview'
                  width={1000}
                  height={1000}
                  loading='lazy'
                  className='rounded border w-40 aspect-square object-cover'
                />
              </a>
              <div className='ml-5 -mt-1 flex flex-col justify-between'>
                <div>
                  <div className='flex items-center gap-2'>
                    <div className='flex items-center'>
                      <a
                        href='https://sub-tracked.com'
                        target='_blank'
                        className='underline underline-offset-2 decoration-1 hover:text-blue-300'
                      >
                        <h3 className='text-xl tracking-tight'>Sub-Tracked</h3>
                      </a>
                      <span className='text-green-500 text-xl ml-2 select-none'>
                        •
                      </span>
                    </div>
                    <a href='https://github.com/jongreen96/sub-tracked' target='_blank'>
                      <img
                        src={githubicon}
                        alt='Sub-Tracked source on GitHub'
                        className='size-4'
                      />
                    </a>
                  </div>
                  <ul className='list-disc text-muted-foreground text-sm text-pretty'>
                  <li>
                    Built a personal finance app that brings accounts, income and
                    recurring expenses into one place.
                  </li>
                  <li>
                    Modelled payment schedules and account balances to help users
                    plan around upcoming bills.
                  </li>
                  <li>
                    Connected a React interface to authenticated server functions
                    and a D1 database with Drizzle.
                  </li>
                  </ul>
                </div>
                <div className='flex flex-wrap gap-1'>
                  <Badge variant='secondary'>React</Badge>
                  <Badge variant='secondary'>TypeScript</Badge>
                  <Badge variant='secondary'>TanStack Start</Badge>
                  <Badge variant='secondary'>Tailwind CSS</Badge>
                  <Badge variant='outline'>Cloudflare Workers</Badge>
                  <Badge variant='outline'>D1</Badge>
                  <Badge variant='outline'>Drizzle</Badge>
                  <Badge variant='outline'>Better Auth</Badge>
                  <Badge variant='outline'>TanStack Query</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className='space-y-2'>
            <div className='flex gap-4'>
              <a href='https://gvg.jongreen.dev' target='_blank' className='shrink-0'>
                <img
                  src={greenvinylgraphicspreview}
                  alt='Green Vinyl Graphics website preview'
                  width={1000}
                  height={1000}
                  loading='lazy'
                  className='rounded border w-40 aspect-square object-cover'
                />
              </a>
              <div className='ml-5 -mt-1 flex flex-col justify-between'>
                <div>
                  <div className='flex items-center gap-2'>
                    <div className='flex items-center'>
                      <a
                        href='https://gvg.jongreen.dev'
                        target='_blank'
                        className='underline underline-offset-2 decoration-1 hover:text-blue-300'
                      >
                        <h3 className='text-xl tracking-tight'>Green Vinyl Graphics</h3>
                      </a>
                      <span className='text-green-500 text-xl ml-2 select-none'>
                        •
                      </span>
                    </div>
                    <a href='https://github.com/jongreen96/GreenVinylGraphics' target='_blank'>
                      <img
                        src={githubicon}
                        alt='Green Vinyl Graphics source on GitHub'
                        className='size-4'
                      />
                    </a>
                  </div>
                  <ul className='list-disc text-muted-foreground text-sm text-pretty'>
                  <li>
                    Rebuilt my former digital-template store as a portfolio demo,
                    using its original catalogue of 52 products.
                  </li>
                  <li>
                    Created searchable collections, detailed product previews and a
                    persistent basket with a demo checkout.
                  </li>
                  <li>
                    Added responsive artwork, keyboard navigation and reduced-motion
                    support throughout the shopping experience.
                  </li>
                  </ul>
                </div>
                <div className='flex flex-wrap gap-1'>
                  <Badge variant='secondary'>React</Badge>
                  <Badge variant='secondary'>TypeScript</Badge>
                  <Badge variant='secondary'>TanStack Router</Badge>
                  <Badge variant='secondary'>Tailwind CSS</Badge>
                  <Badge variant='outline'>Vite</Badge>
                  <Badge variant='outline'>shadcn/ui</Badge>
                  <Badge variant='outline'>Cloudflare Workers</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className='space-y-2'>
            <div className='flex gap-4'>
              <a href='https://cf.my-gpt.app' target='_blank' className='shrink-0'>
                <img
                  src={mygptpreview}
                  alt='My-GPT website preview'
                  width={1000}
                  height={1000}
                  loading='lazy'
                  className='rounded border w-40 aspect-square object-cover'
                />
              </a>
              <div className='ml-5 -mt-1 flex flex-col justify-between'>
                <div>
                  <div className='flex items-center gap-2'>
                    <div className='flex items-center'>
                      <a
                        href='https://cf.my-gpt.app'
                        target='_blank'
                        className='underline underline-offset-2 decoration-1 hover:text-blue-300'
                      >
                        <h3 className='text-xl tracking-tight'>My-GPT</h3>
                      </a>
                      <span className='text-green-500 text-xl ml-2 select-none'>
                        •
                      </span>
                    </div>
                    <a href='https://github.com/jongreen96/my-gpt-cf' target='_blank'>
                      <img
                        src={githubicon}
                        alt='My-GPT source on GitHub'
                        className='size-4'
                      />
                    </a>
                  </div>
                  <ul className='list-disc text-muted-foreground text-sm text-pretty'>
                  <li>
                    Built a multi-model AI chat app with streaming replies, file
                    attachments and editable conversations.
                  </li>
                  <li>
                    Used a Durable Object per conversation to coordinate generation,
                    stream over WebSockets and persist messages.
                  </li>
                  <li>
                    Added guest access with usage limits and account linking that
                    preserves conversation history.
                  </li>
                  </ul>
                </div>
                <div className='flex flex-wrap gap-1'>
                  <Badge variant='secondary'>React</Badge>
                  <Badge variant='secondary'>TypeScript</Badge>
                  <Badge variant='secondary'>Hono</Badge>
                  <Badge variant='secondary'>Tailwind CSS</Badge>
                  <Badge variant='outline'>Workers AI</Badge>
                  <Badge variant='outline'>Durable Objects</Badge>
                  <Badge variant='outline'>D1</Badge>
                  <Badge variant='outline'>R2</Badge>
                  <Badge variant='outline'>Better Auth</Badge>
                  <Badge variant='outline'>Drizzle</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className='space-y-2'>
            <div className='flex gap-4'>
              <a href='https://ec.jongreen.dev/' target='_blank' className='shrink-0'>
                <img
                  src={eventcapturepreview}
                  alt='Event Capture website preview'
                  width={1000}
                  height={1000}
                  loading='lazy'
                  className='rounded border w-40 aspect-square object-cover'
                />
              </a>
              <div className='ml-5 -mt-1 flex flex-col justify-between'>
                <div>
                  <div className='flex items-center gap-2'>
                    <div className='flex items-center'>
                      <a
                        href='https://ec.jongreen.dev/'
                        target='_blank'
                        className='underline underline-offset-2 decoration-1 hover:text-blue-300'
                      >
                        <h3 className='text-xl tracking-tight'>Event Capture</h3>
                      </a>
                      <span className='text-amber-500 text-xl ml-2 select-none'>
                        •
                      </span>
                    </div>
                    <a href='https://github.com/jongreen96/EventCapture' target='_blank'>
                      <img
                        src={githubicon}
                        alt='Event Capture source on GitHub'
                        className='size-4'
                      />
                    </a>
                  </div>
                  <ul className='list-disc text-muted-foreground text-sm text-pretty'>
                  <li>
                    Built an event-media app where guests share original-quality
                    photos and videos through a link or QR code without signing up.
                  </li>
                  <li>
                    Implemented direct-to-R2 uploads with retries, access controls
                    and storage-quota tracking.
                  </li>
                  <li>
                    Created organiser tools for media management, downloadable
                    archives and scheduled file cleanup.
                  </li>
                  </ul>
                </div>
                <div className='flex flex-wrap gap-1'>
                  <Badge variant='secondary'>React</Badge>
                  <Badge variant='secondary'>TypeScript</Badge>
                  <Badge variant='secondary'>TanStack Start</Badge>
                  <Badge variant='secondary'>Tailwind CSS</Badge>
                  <Badge variant='outline'>Cloudflare Workers</Badge>
                  <Badge variant='outline'>D1</Badge>
                  <Badge variant='outline'>R2</Badge>
                  <Badge variant='outline'>Queues</Badge>
                  <Badge variant='outline'>Drizzle</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-semibold tracking-tight pb-4'>
          Education
        </h2>

        <div className='space-y-6'>
          <div>
            <span className='flex gap-4 items-baseline'>
              <a
                href='https://pll.harvard.edu/course/cs50-introduction-computer-science'
                target='_blank'
                className='underline underline-offset-2 decoration-1 hover:text-blue-300'
              >
                <h3 className='text-xl tracking-tight'>Harvard&apos;s CS50x</h3>
              </a>
              <p className='text-muted-foreground text-sm text-pretty'>2024</p>
            </span>

            <p className='text-muted-foreground text-sm text-pretty'>
              Completed CS50x, covering computer science fundamentals, algorithms
              and programming. Applied that foundation to problem-solving across my
              own web projects.
            </p>
          </div>

          <div>
            <span className='flex gap-4 items-baseline'>
              <a
                href='https://www.codecademy.com/learn/paths/full-stack-engineer-career-path'
                target='_blank'
                className='underline underline-offset-2 decoration-1 hover:text-blue-300'
              >
                <h3 className='text-xl tracking-tight'>Codecademy</h3>
              </a>
              <p className='text-muted-foreground text-sm text-pretty'>
                2023 - 2024
              </p>
            </span>

            <p className='text-muted-foreground text-sm text-pretty'>
              Completed the Full-Stack Engineer path, building practical experience
              with React, Node.js, SQL and the connections between browser, server
              and database.
            </p>
          </div>

          <div>
            <span className='flex gap-4 items-baseline'>
              <a
                href='https://www.dearne-coll.ac.uk/'
                target='_blank'
                className='underline underline-offset-2 decoration-1 hover:text-blue-300'
              >
                <h3 className='text-xl tracking-tight'>
                  Dearne Valley College
                </h3>
              </a>
              <p className='text-muted-foreground text-sm text-pretty'>
                2012 - 2013
              </p>
            </span>

            <p className='text-muted-foreground text-sm text-pretty'>
              Earned a Level 3 Diploma in IT, with a focus on web development and
              database design.
            </p>
          </div>

          <div>
            <span className='flex gap-4 items-baseline'>
              <a
                href='https://www.wingfieldacademy.org/'
                target='_blank'
                className='underline underline-offset-2 decoration-1 hover:text-blue-300'
              >
                <h3 className='text-xl tracking-tight'>Wingfield Academy</h3>
              </a>
              <p className='text-muted-foreground text-sm text-pretty'>
                2007 - 2012
              </p>
            </span>

            <p className='text-muted-foreground text-sm text-pretty'>
              Achieved more than five A*–C Level 2 certificates, including a
              distinction in webpage creation and computer graphics.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-semibold tracking-tight pb-4'>About Me</h2>

        <p className='text-muted-foreground text-sm text-pretty'>
          My background combines software development with running a small
          digital design business. Building and operating that store shaped how I approach
          software: understand the customer, make the core task straightforward and
          take responsibility for what happens after launch. Today I build
          applications across the frontend and backend, with a growing focus on
          Cloudflare and real-time systems. I also run Linux servers and a home lab,
          keeping hands-on with deployment, monitoring and backups. I enjoy turning a
          practical problem into a product I can build, maintain and improve.
        </p>
      </section>

      <footer className='pt-4'>
        <p className='text-muted-foreground text-center text-sm text-pretty'>
          Jon Green - {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}

export default App;
