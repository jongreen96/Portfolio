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
              <Link href='tel: +44 7769674943' target='_blank'>
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

      <section className='space-y-10'>
        <h2 className='text-2xl font-semibold tracking-tight -mb-6'>About</h2>

        <p className='text-muted-foreground text-sm text-pretty'>
          Full Stack Web Engineer dedicated to crafting user-friendly and
          high-performing web aplications. proficient in technologies such as
          Next.js, React, postgres, and TailwindCSS, with a strong foundation
          built through self-learning on platforms like Codecademy and
          Harvard&apos;s CS50. passionate about building efficient and scalable
          solutions.
        </p>
      </section>

      <section className='space-y-10'>
        <h2 className='text-2xl font-semibold tracking-tight -mb-6'>
          projects
        </h2>

        <div className='space-y-2'>
          <div className='flex gap-4'>
            <Link
              href='https://greenvinylgraphics.com'
              target='_blank'
              className='shrink-0'
            >
              <Image
                src='/greenvinylgraphicsnew.png'
                alt='Green Vinyl Graphics website preview'
                width={160}
                height={160}
                className='rounded h-full object-cover'
              />
            </Link>
            <div>
              <Link href='https://greenvinylgraphics.com' target='_blank'>
                <h3 className='text-xl tracking-tight'>Green Vinyl Graphics</h3>
              </Link>
              <p className='text-muted-foreground text-sm text-pretty'>
                Green Vinyl Graphics is a digital marketplace that sells vector
                templates used to wrap mobile devices. Built to imporove
                performace and UX over the origional site by utilising Next.js
                SSR.
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
            <Link href='https://my-gpt.ap' target='_blank' className='shrink-0'>
              <Image
                src='/my-gpt.png'
                alt='My-GpT website preview'
                width={160}
                height={160}
                className='rounded h-full object-cover'
              />
            </Link>
            <div>
              <Link href='https://my-gpt.ap' target='_blank'>
                <h3 className='text-xl tracking-tight'>My-GpT</h3>
              </Link>
              <p className='text-muted-foreground text-sm text-pretty'>
                My-GpT is a Next.js web aplication that allows users to access
                all OpenAI Chat and Image Generation models without the need for
                a monthly subscription.
              </p>
            </div>
          </div>
          <div className='flex flex-wrap gap-1'>
            <Badge variant='secondary'>Next.js</Badge>
            <Badge variant='secondary'>React</Badge>
            <Badge variant='secondary'>JavaScript</Badge>
            <Badge variant='secondary'>Tailwind CSS</Badge>
            <Badge variant='outline'>prisma</Badge>
            <Badge variant='outline'>Stripe</Badge>
            <Badge variant='outline'>Clerk</Badge>
            <Badge variant='outline'>Shadcn/ui</Badge>
            <Badge variant='outline'>OpenAI ApI</Badge>
            <Badge variant='outline'>Supabase</Badge>
            <Badge variant='outline'>OpenAI ApI</Badge>
          </div>
        </div>

        <div className='space-y-2'>
          <div className='flex gap-4'>
            <Link
              href='https://gvg.netlify.ap/'
              target='_blank'
              className='shrink-0'
            >
              <Image
                src='/greenvinylgraphics.png'
                alt='Green Vinyl Graphics website preview'
                width={160}
                height={160}
                className='rounded h-full object-cover'
              />
            </Link>
            <div>
              <Link href='https://gvg.netlify.ap/' target='_blank'>
                <h3 className='text-xl tracking-tight'>
                  Green Vinyl Graphics{' '}
                  <span className='text-sm text-muted-foreground'>
                    (depricated)
                  </span>
                </h3>
              </Link>
              <p className='text-muted-foreground text-sm text-pretty'>
                Green Vinyl Graphics is a store that sells vector templates used
                to wrap mobile devices. Built to reduce overheads from selling
                on another online marketplace. This website was a final project
                for my Web Development course.
              </p>
            </div>
          </div>
          <div className='flex flex-wrap gap-1'>
            <Badge variant='secondary'>React</Badge>
            <Badge variant='secondary'>Express.js</Badge>
            <Badge variant='secondary'>JavaScript</Badge>
            <Badge variant='secondary'>postgreSQL</Badge>
            <Badge variant='outline'>Redux</Badge>
            <Badge variant='outline'>Axios</Badge>
            <Badge variant='outline'>Stripe</Badge>
            <Badge variant='outline'>Vite</Badge>
            <Badge variant='outline'>Netlify</Badge>
            <Badge variant='outline'>Bcrypt</Badge>
          </div>
        </div>

        <div className='space-y-2'>
          <div className='flex gap-4'>
            <Link
              href='https://recapit-reddit.netlify.ap/'
              target='_blank'
              className='shrink-0'
            >
              <Image
                src='/recapit.png'
                alt='Recapit Website preview'
                width={160}
                height={160}
                className='rounded h-full object-cover'
              />
            </Link>
            <div>
              <Link href='https://recapit-reddit.netlify.ap/' target='_blank'>
                <h3 className='text-xl tracking-tight'>Recapit</h3>
              </Link>
              <p className='text-muted-foreground text-sm text-pretty'>
                Recapit is a simple Reddit clone that pulls the top posts from a
                given subreddit for a set time period. This was the first
                website I created on my coding journey. (Built before the Reddit
                ApI changes)
              </p>
            </div>
          </div>
          <div className='flex flex-wrap gap-1'>
            <Badge variant='secondary'>React</Badge>
            <Badge variant='secondary'>JavaScript</Badge>
            <Badge variant='outline'>Redux</Badge>
            <Badge variant='outline'>Stripe</Badge>
            <Badge variant='outline'>Netlify</Badge>
            <Badge variant='outline'>Reddit ApI</Badge>
          </div>
        </div>
      </section>

      <section className='space-y-10'>
        <h2 className='text-2xl font-semibold tracking-tight -mb-6'>Skills</h2>
        <div className='space-y-2'>
          <p className='text-muted-foreground text-sm text-pretty'>
            Currently I work mostly with Next.js, React, Node.js and postgreSQL.
            I am always looking to learn new technologies and frameworks and in
            the past I have used:
          </p>

          <div className='flex flex-wrap gap-1'>
            <Badge variant='secondary'>HTML</Badge>
            <Badge variant='secondary'>CSS</Badge>
            <Badge variant='secondary'>C</Badge>
            <Badge variant='secondary'>python</Badge>
            <Badge variant='secondary'>Next.js</Badge>
            <Badge variant='secondary'>Node.js</Badge>
            <Badge variant='secondary'>Express.js</Badge>
            <Badge variant='secondary'>React</Badge>
            <Badge variant='secondary'>JavaScript</Badge>
            <Badge variant='secondary'>TypeScript</Badge>
            <Badge variant='secondary'>Tailwind CSS</Badge>
            <Badge variant='secondary'>SQL</Badge>
            <Badge variant='secondary'>postgreSQL</Badge>
            <Badge variant='outline'>Git</Badge>
            <Badge variant='outline'>GitHub</Badge>
            <Badge variant='outline'>Drizzle</Badge>
            <Badge variant='outline'>prisma</Badge>
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

      <section className='space-y-10'>
        <h2 className='text-2xl font-semibold tracking-tight -mb-6'>
          Education
        </h2>

        <div className='space-y-10'>
          <div>
            <span className='flex gap-4 items-baseline'>
              <h3 className='text-xl tracking-tight'>CodeCademy</h3>
              <p>2023 - 2024</p>
            </span>

            <p className='text-muted-foreground text-sm text-pretty'>
              I completed the CodeCademy Full Stack Web Developer Bootcamp. I
              learned the fundamentals of web development and gained experience
              working with React, Node.js, and SQL.
            </p>
          </div>

          <div>
            <span className='flex gap-4 items-baseline'>
              <h3 className='text-xl tracking-tight'>Dearne Valley College</h3>
              <p className='text-muted-foreground text-sm text-pretty'>
                2012 - 2013
              </p>
            </span>

            <p className='text-muted-foreground text-sm text-pretty'>
              I attended Dearne Valley College where I completed a level 3
              Diploma in IT, with a focus on Web Development and database
              design.
            </p>
          </div>

          <div>
            <span className='flex gap-4 items-baseline'>
              <h3 className='text-xl tracking-tight'>Wingfield Academy</h3>
              <p className='text-muted-foreground text-sm text-pretty'>
                2007 - 2012
              </p>
            </span>

            <p className='text-muted-foreground text-sm text-pretty'>
              I attended Wingfield Academy where I received over 5 A*-C level 2
              certificates including a distinction in webpage creation and
              computer graphics.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
