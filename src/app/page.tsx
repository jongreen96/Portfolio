import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='min-h-dvh max-w-3xl min-w-[375px] mx-auto px-2 py-20 space-y-16'>
      <section className='flex justify-between'>
        <div className='text-lg space-y-2'>
          <div>
            <h1 className='text-4xl font-bold tracking-tighter'>Jon Green</h1>
            <p className='mt-1 text-xl tracking-tight'>
              Full Stack Web Engineer
            </p>
            <Link
              href='https://www.google.com/maps/place/Sheffield'
              target='_blank'
              className='flex text-muted-foreground w-fit hover:underline'
            >
              <MapPin className='size-3 my-auto mr-1' />
              <p className='text-sm '>Sheffield, England</p>
            </Link>
          </div>

          <div className='pt-2 space-x-2'>
            <Button variant='outline' size='icon' asChild>
              <Link href='tel:+44 7769674943' target='_blank'>
                <Phone
                  className='text-muted-foreground'
                  size={20}
                  aria-label='phone'
                />
              </Link>
            </Button>

            <Button variant='outline' size='icon' asChild>
              <Link href='mailto: jongreen1996@gmail.com' target='_blank'>
                <Mail
                  className='text-muted-foreground'
                  size={20}
                  aria-label='email'
                />
              </Link>
            </Button>

            <Button variant='outline' size='icon' asChild>
              <Link href='https://github.com/jongreen96' target='_blank'>
                <Image
                  src='/github.png'
                  alt='logo'
                  width={19}
                  height={19}
                  aria-label='github'
                />
              </Link>
            </Button>

            <Button variant='outline' size='icon' asChild>
              <Link href='https://twitter.com/JonGreenDotDev' target='_blank'>
                <Image
                  src='/x.png'
                  alt='logo'
                  width={19}
                  height={19}
                  aria-label='twitter'
                />
              </Link>
            </Button>
          </div>
        </div>

        <div>
          <Image
            src='/profile-photo.jpg'
            alt='me'
            width={160}
            height={160}
            priority
            className='rounded-xl min-w-40'
          />
        </div>
      </section>

      <section className='space-y-3'>
        <h2 className='text-2xl font-semibold tracking-tight'>About</h2>

        <p className='text-muted-foreground text-sm text-pretty'>
          Full Stack Web Engineer dedicated to crafting user-friendly and
          high-performing web applications. Proficient in technologies such as
          Next.js, React, Postgres, and TailwindCSS, with a strong foundation
          built through self-learning on platforms like Codecademy and
          Harvard&apos;s CS50x. Passionate about building efficient and scalable
          solutions.
        </p>
      </section>

      <section className='space-y-3'>
        <h2 className='text-2xl font-semibold tracking-tight'>Projects</h2>

        <div className='space-y-2'>
          <div className='flex gap-4'>
            <Link
              href='https://my-gpt.app'
              target='_blank'
              className='shrink-0'
            >
              <Image
                src='/my-gpt.png'
                alt='My-GPT website preview'
                width={160}
                height={160}
                className='rounded'
              />
            </Link>
            <div>
              <Link href='https://my-gpt.app' target='_blank'>
                <h3 className='text-xl tracking-tight'>My-GPT</h3>
              </Link>
              <p className='text-muted-foreground text-sm text-pretty'>
                My-GPT is a Next.js web application that provides users with
                on-demand access to OpenAI&apos;s Chat and Image Generation
                models. Users can engage in powerful text generation, coding
                assistance, and deep AI analysis, as well as create stunning
                AI-generated images, all on a pay-as-you-go basis. The platform
                ensures seamless synchronization across devices, allowing users
                to continue their work anywhere.
              </p>
            </div>
          </div>
          <div className='flex flex-wrap gap-1'>
            <Badge variant='secondary'>Next.js</Badge>
            <Badge variant='secondary'>React</Badge>
            <Badge variant='secondary'>JavaScript</Badge>
            <Badge variant='secondary'>Tailwind CSS</Badge>
            <Badge variant='outline'>Prisma</Badge>
            <Badge variant='outline'>Stripe</Badge>
            <Badge variant='outline'>AuthJS</Badge>
            <Badge variant='outline'>Shadcn/ui</Badge>
            <Badge variant='outline'>OpenAI API</Badge>
            <Badge variant='outline'>Postgres DB</Badge>
          </div>
        </div>

        <div className='space-y-2'>
          <div className='flex gap-4'>
            <Link
              href='https://greenvinylgraphics.com'
              target='_blank'
              className='shrink-0'
            >
              <Image
                src='/greenvinylgraphics.png'
                alt='Green Vinyl Graphics website preview'
                width={160}
                height={160}
                className='rounded'
              />
            </Link>
            <div>
              <Link href='https://greenvinylgraphics.com' target='_blank'>
                <h3 className='text-xl tracking-tight'>Green Vinyl Graphics</h3>
              </Link>
              <p className='text-muted-foreground text-sm text-pretty'>
                Green Vinyl Graphics is a digital marketplace offering
                precision-designed vector templates for wrapping mobile devices.
                The platform was redeveloped using Next.js with server-side
                rendering (SSR) to enhance performance and user experience over
                the original site.
              </p>
            </div>
          </div>
          <div className='flex flex-wrap gap-1'>
            <Badge variant='secondary'>Next.js</Badge>
            <Badge variant='secondary'>React</Badge>
            <Badge variant='secondary'>JavaScript</Badge>
            <Badge variant='secondary'>Tailwind CSS</Badge>
            <Badge variant='outline'>Drizzle</Badge>
            <Badge variant='outline'>Stripe</Badge>
            <Badge variant='outline'>Shadcn/ui</Badge>
            <Badge variant='outline'>Supabase</Badge>
            <Badge variant='outline'>Resend</Badge>
          </div>
        </div>

        <div className='space-y-2'>
          <div className='flex gap-4'>
            <Link
              href='https://recapit-reddit.netlify.app/'
              target='_blank'
              className='shrink-0'
            >
              <Image
                src='/recapit.png'
                alt='Recapit Website preview'
                width={160}
                height={160}
                className='rounded'
              />
            </Link>
            <div>
              <Link href='https://recapit-reddit.netlify.ap/' target='_blank'>
                <h3 className='text-xl tracking-tight'>Recapit</h3>
              </Link>
              <p className='text-muted-foreground text-sm text-pretty'>
                Recapit is a straightforward Reddit clone that retrieves the top
                posts from specified subreddits over a chosen time frame.
                Developed early in my coding journey, it served as my inaugural
                web development project. Notably, Recapit was developed before
                the recent changes to the Reddit API, which means some features
                might not work as intended.
              </p>
            </div>
          </div>
          <div className='flex flex-wrap gap-1'>
            <Badge variant='secondary'>React</Badge>
            <Badge variant='secondary'>JavaScript</Badge>
            <Badge variant='outline'>Redux</Badge>
            <Badge variant='outline'>Stripe</Badge>
            <Badge variant='outline'>Netlify</Badge>
            <Badge variant='outline'>Reddit API</Badge>
          </div>
        </div>
      </section>

      <section className='space-y-3'>
        <h2 className='text-2xl font-semibold tracking-tight'>Skills</h2>
        <div className='space-y-2'>
          <p className='text-muted-foreground text-sm text-pretty'>
            I specialize in high-performance web applications using Next.js,
            React, Node.js, and PostgreSQL. I deploy projects on VPS
            environments with Coolify for seamless database and service
            management. Always eager to learn, I&apos;m continually integrating
            new technologies to enhance both functionality and workflows.
          </p>

          <div className='flex flex-wrap gap-1'>
            <Badge variant='secondary'>HTML</Badge>
            <Badge variant='secondary'>CSS</Badge>
            <Badge variant='secondary'>C</Badge>
            <Badge variant='secondary'>Python</Badge>
            <Badge variant='secondary'>Next.js</Badge>
            <Badge variant='secondary'>Node.js</Badge>
            <Badge variant='secondary'>Express.js</Badge>
            <Badge variant='secondary'>React</Badge>
            <Badge variant='secondary'>JavaScript</Badge>
            <Badge variant='secondary'>TypeScript</Badge>
            <Badge variant='secondary'>Tailwind CSS</Badge>
            <Badge variant='secondary'>SQL</Badge>
            <Badge variant='secondary'>PostgreSQL</Badge>
            <Badge variant='outline'>Git</Badge>
            <Badge variant='outline'>GitHub</Badge>
            <Badge variant='outline'>Drizzle</Badge>
            <Badge variant='outline'>Prisma</Badge>
            <Badge variant='outline'>Redux</Badge>
            <Badge variant='outline'>Stripe</Badge>
            <Badge variant='outline'>Clerk</Badge>
            <Badge variant='outline'>Vite</Badge>
            <Badge variant='outline'>Axios</Badge>
            <Badge variant='outline'>Netlify</Badge>
            <Badge variant='outline'>Bcrypt</Badge>
            <Badge variant='outline'>Data Structures & Algorithms</Badge>
            <Badge variant='outline'>YAML</Badge>
            <Badge variant='outline'>Swagger</Badge>
          </div>
        </div>
      </section>

      <section className='space-y-3'>
        <h2 className='text-2xl font-semibold tracking-tight'>Education</h2>

        <div>
          <span className='flex gap-4 items-baseline'>
            <a
              href='https://pll.harvard.edu/course/cs50-introduction-computer-science'
              target='_blank'
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

        <div className='space-y-3'>
          <div>
            <span className='flex gap-4 items-baseline'>
              <a
                href='https://www.codecademy.com/learn/paths/full-stack-engineer-career-path'
                target='_blank'
              >
                <h3 className='text-xl tracking-tight'>CodeCademy</h3>
              </a>
              <p className='text-muted-foreground text-sm text-pretty'>
                2023 - 2024
              </p>
            </span>

            <p className='text-muted-foreground text-sm text-pretty'>
              I completed the Full Stack Web Developer Bootcamp, mastering
              essential web development fundamentals with hands-on experience in
              React, Node.js, and SQL. This immersive program provided a strong
              foundation for building modern, scalable applications.
            </p>
          </div>

          <div>
            <span className='flex gap-4 items-baseline'>
              <a href='https://www.dearne-coll.ac.uk/' target='_blank'>
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
              <a href='https://www.wingfieldacademy.org/' target='_blank'>
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
    </main>
  );
}
