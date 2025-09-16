import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import eventcapturepreview from './assets/event-capture.png';
import githubicon from './assets/github.png';
import greenvinylgraphicspreview from './assets/greenvinylgraphics.png';
import mygptpreview from './assets/my-gpt.png';
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
            <p className='mt-1 text-xl tracking-tight'>Software Engineer</p>
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
            alt='me'
            className='rounded-xl min-w-40 size-40'
          />
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-semibold tracking-tight pb-4'>
          Objective
        </h2>

        <p className='text-muted-foreground text-sm text-pretty'>
          Software engineer with experience in building, deploying, automating,
          and monitoring applications across VPS and home-lab environments.
          Skilled with Docker, Linux, Cloudflare, nginx, and Hetzner
          infrastructure, with a strong foundation in full-stack development
          (React, Next.js, PostgreSQL). Confident in building and managing
          reliable systems, while continuously expanding expertise in modern
          DevOps practices.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold tracking-tight pb-4'>
          Technical Skills
        </h2>
        <ul className='space-y-2'>
          <li className='flex items-center gap-2'>
            DevOps:
            <div className='space-x-1'>
              <Badge variant='secondary'>Docker</Badge>
              <Badge variant='secondary'>Linux</Badge>
              <Badge variant='secondary'>Cloudflare</Badge>
              <Badge variant='secondary'>Hetzner</Badge>
              <Badge variant='secondary'>Nginx</Badge>
              <Badge variant='secondary'>UFW</Badge>
              <Badge variant='secondary'>Git</Badge>
            </div>
          </li>
          <li className='flex items-center gap-2'>
            Frontend:
            <div className='flex flex-wrap gap-1'>
              <Badge variant='secondary'>React</Badge>
              <Badge variant='secondary'>Next.js</Badge>
              <Badge variant='secondary'>TypeScript</Badge>
              <Badge variant='secondary'>JavaScript</Badge>
              <Badge variant='secondary'>Tailwind</Badge>
            </div>
          </li>
          <li className='flex items-center gap-2'>
            Backend:
            <div className='flex flex-wrap gap-1'>
              <Badge variant='secondary'>Node.js</Badge>
              <Badge variant='secondary'>Bun</Badge>
              <Badge variant='secondary'>Express.js</Badge>
              <Badge variant='secondary'>PostgreSQL</Badge>
              <Badge variant='secondary'>SQL</Badge>
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-semibold tracking-tight pb-4'>Projects</h2>

        <div className='space-y-6'>
          <div className='space-y-2'>
            <div className='flex gap-4'>
              <a href='https://my-gpt.app' target='_blank' className='shrink-0'>
                <img
                  src={mygptpreview}
                  alt='My-GPT website preview'
                  className='rounded border-1 size-40'
                />
              </a>
              <div>
                <div className='flex items-center gap-2'>
                  <div className='flex items-center'>
                    <a
                      href='https://my-gpt.app'
                      target='_blank'
                      className='underline underline-offset-2 decoration-1 hover:text-blue-300'
                    >
                      <h3 className='text-xl tracking-tight'>My-GPT</h3>
                    </a>
                    <span className='text-green-500 text-xl ml-2 select-none'>
                      •
                    </span>
                  </div>

                  <a href='https://github.com/jongreen96/MyGPT' target='_blank'>
                    <img
                      src={githubicon}
                      alt='logo'
                      className='size-4'
                      aria-label='github'
                    />
                  </a>
                </div>

                <p className='text-muted-foreground text-sm text-pretty'>
                  My-GPT is a Next.js web application that provides users with
                  on-demand access to OpenAI&apos;s Chat and Image Generation
                  models. Users can engage in powerful text generation, coding
                  assistance, and deep AI analysis, as well as create stunning
                  AI-generated images, all on a pay-as-you-go basis. The
                  platform ensures seamless synchronization across devices,
                  allowing users to continue their work anywhere.
                </p>
              </div>
            </div>
            <div className='flex flex-wrap gap-1'>
              <Badge variant='secondary'>Next.js</Badge>
              <Badge variant='secondary'>React</Badge>
              <Badge variant='secondary'>TypeScript</Badge>
              <Badge variant='secondary'>Tailwind CSS</Badge>
              <Badge variant='outline'>Prisma</Badge>
              <Badge variant='outline'>Stripe</Badge>
              <Badge variant='outline'>PostgreSQL</Badge>
              <Badge variant='outline'>AuthJS</Badge>
              <Badge variant='outline'>Sentry</Badge>
              <Badge variant='outline'>Shadcn/ui</Badge>
              <Badge variant='outline'>OpenAI API</Badge>
            </div>
          </div>

          <div className='space-y-2'>
            <div className='flex gap-4'>
              <a
                href='https://ec.jongreen.dev/'
                target='_blank'
                className='shrink-0'
              >
                <img
                  src={eventcapturepreview}
                  alt='Event Capture website preview'
                  className='rounded border-1 size-40'
                />
              </a>
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

                  <a
                    href='https://github.com/jongreen96/Event-Capture'
                    target='_blank'
                  >
                    <img
                      src={githubicon}
                      alt='logo'
                      className='size-4'
                      aria-label='github'
                    />
                  </a>
                </div>

                <p className='text-muted-foreground text-sm text-pretty'>
                  Event Capture lets users capture lossless images of their
                  event from multiple perspectives. With easy QR code sharing,
                  guests can upload photos, which are organized in an intuitive
                  dashboard. Designed for simplicity and security, it ensures
                  memories are preserved and accessible for any event size.
                </p>
              </div>
            </div>
            <div className='flex flex-wrap gap-1'>
              <Badge variant='secondary'>Vite</Badge>
              <Badge variant='secondary'>React</Badge>
              <Badge variant='secondary'>TypeScript</Badge>
              <Badge variant='secondary'>Tailwind CSS</Badge>
              <Badge variant='outline'>Tanstack Router</Badge>
              <Badge variant='outline'>Tanstack Query</Badge>
              <Badge variant='outline'>Cloudflare R2</Badge>
              <Badge variant='outline'>PostgreSQL</Badge>
              <Badge variant='outline'>Shadcn/ui</Badge>
              <Badge variant='outline'>Sharp</Badge>
            </div>
          </div>

          <div className='space-y-2'>
            <div className='flex gap-4'>
              <a
                href='https://greenvinylgraphics.com'
                target='_blank'
                className='shrink-0'
              >
                <img
                  src={greenvinylgraphicspreview}
                  alt='Green Vinyl Graphics website preview'
                  className='rounded border-1 size-40'
                />
              </a>
              <div>
                <div className='flex items-center gap-2'>
                  <div className='flex items-center'>
                    <a
                      href='https://greenvinylgraphics.com'
                      target='_blank'
                      className='underline underline-offset-2 decoration-1 hover:text-blue-300'
                    >
                      <h3 className='text-xl tracking-tight'>
                        Green Vinyl Graphics
                      </h3>
                    </a>
                    <span className='text-green-500 text-xl ml-2 select-none'>
                      •
                    </span>
                  </div>

                  <a
                    href='https://github.com/jongreen96/GreenVinylGraphics'
                    target='_blank'
                  >
                    <img
                      src={githubicon}
                      alt='logo'
                      className='size-4'
                      aria-label='github'
                    />
                  </a>
                </div>

                <p className='text-muted-foreground text-sm text-pretty'>
                  Green Vinyl Graphics is a digital marketplace offering
                  precision-designed vector templates for wrapping mobile
                  devices. The platform was redeveloped using Next.js with
                  server-side rendering (SSR) to enhance performance and user
                  experience over the original site.
                </p>
              </div>
            </div>
            <div className='flex flex-wrap gap-1'>
              <Badge variant='secondary'>Next.js</Badge>
              <Badge variant='secondary'>React</Badge>
              <Badge variant='secondary'>TypeScript</Badge>
              <Badge variant='secondary'>Tailwind CSS</Badge>
              <Badge variant='outline'>Drizzle</Badge>
              <Badge variant='outline'>Stripe</Badge>
              <Badge variant='outline'>Shadcn/ui</Badge>
              <Badge variant='outline'>UploadThing</Badge>
              <Badge variant='outline'>Supabase</Badge>
              <Badge variant='outline'>Zod</Badge>
              <Badge variant='outline'>Resend</Badge>
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
              Completed Harvard&apos;s renowned CS50x course, gaining a deep
              understanding of computer science fundamentals, algorithms, and
              programming. This rigorous learning experience further refined my
              problem-solving skills and broadened my technical proficiency.
            </p>
          </div>

          <div>
            <span className='flex gap-4 items-baseline'>
              <a
                href='https://www.codecademy.com/learn/paths/full-stack-engineer-career-path'
                target='_blank'
                className='underline underline-offset-2 decoration-1 hover:text-blue-300'
              >
                <h3 className='text-xl tracking-tight'>CodeCademy</h3>
              </a>
              <p className='text-muted-foreground text-sm text-pretty'>
                2023 - 2024
              </p>
            </span>

            <p className='text-muted-foreground text-sm text-pretty'>
              Completed the Full Stack Web Developer Bootcamp, mastering
              essential web development fundamentals with hands-on experience in
              React, Node.js, and SQL. This immersive program provided a strong
              foundation for building modern, scalable applications.
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
              Earned a Level 3 Diploma in IT with a focus on Web Development and
              database design. This program honed my technical skills and
              deepened my understanding of digital technologies.
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
              Achieved over 5 A*-C Level 2 certificates, including a distinction
              in webpage creation and computer graphics. This formative
              education sparked my passion for technology and laid the
              groundwork for my future studies in IT and web development.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-semibold tracking-tight pb-4'>About Me</h2>

        <p className='text-muted-foreground text-sm text-pretty'>
          I've always been passionate about technology, from early IT studies to
          running a small business in digital design. In recent years Ive
          focused on web development, building modern applications with React,
          Next.js, and PostgreSQL while completing projects that solve
          real-world problems. Alongside this, I've expanded into DevOps to
          support and scale my work, managing deployments on Hetzner VPS and in
          a home-lab environment with Docker and Raspberry Pi. By configuring
          nginx, Cloudflare, and Coolify, I've gained hands-on experience with
          automation, SSL, firewalls, monitoring, and backups. I'm eager to
          continue developing both my web development and DevOps expertise as
          part of a professional team.
        </p>
      </section>
    </main>
  );
}

export default App;
