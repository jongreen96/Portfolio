import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import H1 from '@/components/ui/h1';
import H2 from '@/components/ui/h2';
import H3 from '@/components/ui/h3';
import P from '@/components/ui/p';
import gvg from '@/lib/assets/greenvinylgraphics.png';
import mygpt from '@/lib/assets/my-gpt.png';
import profilePhoto from '@/lib/assets/profile-photo.jpg';
import recapit from '@/lib/assets/recapit.png';
import { Github, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='min-h-dvh max-w-3xl min-w-[375px] mx-auto px-2 py-20 space-y-16'>
      <section className='flex justify-between'>
        <div className='text-lg space-y-2'>
          <div>
            <H1>Jon Green</H1>
            <p className='mt-1 tracking-tight'>Full Stack Web Engineer</p>
            <Link
              href='https://www.google.com/maps/place/Sheffield'
              target='_blank'
              className='flex text-muted-foreground w-fit hover:underline'
            >
              <MapPin className='size-3 my-auto mr-1' />
              <p className='text-xs '>Sheffield, England</p>
            </Link>
          </div>

          <div className='pt-2 space-x-2'>
            <Button variant='secondary' size='icon' asChild>
              <Link href='tel: +44 7769674943' target='_blank'>
                <Phone className='text-muted-foreground' size={20} />
              </Link>
            </Button>

            <Button variant='secondary' size='icon' asChild>
              <Link href='mailto: jongreen1996@gmail.com' target='_blank'>
                <Mail className='text-muted-foreground' size={20} />
              </Link>
            </Button>

            <Button variant='secondary' size='icon' asChild>
              <Link href='https://github.com/jongreen96' target='_blank'>
                <Github className='text-muted-foreground' size={20} />
              </Link>
            </Button>

            <Button variant='secondary' size='icon' asChild>
              <Link href='https://twitter.com/JonGreenDotDev' target='_blank'>
                <Twitter className='text-muted-foreground' size={20} />
              </Link>
            </Button>
          </div>
        </div>

        <div>
          <Image
            src={profilePhoto}
            alt='me'
            width={160}
            height={160}
            priority
            className='rounded-xl min-w-40'
          />
        </div>
      </section>

      <section className='space-y-10'>
        <H2>About</H2>

        <P>
          I am a full stack web engineer who is passionate about creating
          user-friendly and performant web applications. I have honed my skills
          primarily through self-learning on platforms like CodeCademy, and have
          focused on technologies such as Next.js, React, Postgres, and
          TailwindCSS. I enjoy continuously expanding my knowledge and exploring
          new technologies, and I am always looking for opportunities to learn
          and grow.
        </P>
      </section>

      <section className='space-y-10'>
        <H2>Projects</H2>

        <div className='space-y-2'>
          <div className='flex gap-4'>
            <Link
              href='https://my-gpt.app'
              target='_blank'
              className='shrink-0'
            >
              <Image
                src={mygpt}
                alt='My-GPT website preview'
                width={160}
                height={160}
                className='rounded h-full object-cover'
              />
            </Link>
            <div>
              <Link href='https://my-gpt.app' target='_blank'>
                <H3>My-GPT</H3>
              </Link>
              <P>
                My-GPT is a Next.js web application that allows users to access
                all OpenAI Chat and Image Generation models without the need for
                a montly subscription.
              </P>
            </div>
          </div>
          <div className='flex flex-wrap gap-1'>
            <Badge variant='secondary'>Next.js</Badge>
            <Badge variant='secondary'>React</Badge>
            <Badge variant='secondary'>JavaScript</Badge>
            <Badge variant='secondary'>Tailwind CSS</Badge>
            <Badge variant='outline'>Prisma</Badge>
            <Badge variant='outline'>Stripe</Badge>
            <Badge variant='outline'>Clerk</Badge>
            <Badge variant='outline'>Shadcn/ui</Badge>
            <Badge variant='outline'>OpenAI API</Badge>
            <Badge variant='outline'>Supabase</Badge>
            <Badge variant='outline'>OpenAI API</Badge>
          </div>
        </div>

        <div className='space-y-2'>
          <div className='flex gap-4'>
            <Link
              href='https://greenvinylgraphics.com/'
              target='_blank'
              className='shrink-0'
            >
              <Image
                src={gvg}
                alt='Green Vinyl Graphics website preview'
                width={160}
                height={160}
                className='rounded h-full object-cover'
              />
            </Link>
            <div>
              <Link href='https://greenvinylgraphics.com/' target='_blank'>
                <H3>Green Vinyl Graphics</H3>
              </Link>
              <P>
                Green Vinyl Graphics is a store that sells vector templates used
                to wrap mobile devices, all products sold are created by me.
                This website was a final project for my Web Development course.
              </P>
            </div>
          </div>
          <div className='flex flex-wrap gap-1'>
            <Badge variant='secondary'>React</Badge>
            <Badge variant='secondary'>Express.js</Badge>
            <Badge variant='secondary'>JavaScript</Badge>
            <Badge variant='secondary'>PostgreSQL</Badge>
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
              href='https://recapit-reddit.netlify.app/'
              target='_blank'
              className='shrink-0'
            >
              <Image
                src={recapit}
                alt='Recapit Website Preview'
                width={160}
                height={160}
                className='rounded h-full object-cover'
              />
            </Link>
            <div>
              <Link href='https://recapit-reddit.netlify.app/' target='_blank'>
                <H3>Recapit</H3>
              </Link>
              <P>
                Recapit is a simple Reddit clone that pulls the top posts from a
                given subreddit for a set time period. This was the first
                website I created on my coding journey. (Built before the Reddit
                API changes)
              </P>
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

      <section className='space-y-10'>
        <H2>Skills</H2>
        <div className='space-y-2'>
          <P>
            Currently I work mostly with Next.js, React, Node.js and PostgreSQL.
            I am always looking to learn new technologies and frameworks and in
            the past I have used:
          </P>

          <div className='flex flex-wrap gap-1'>
            <Badge variant='secondary'>HTML</Badge>
            <Badge variant='secondary'>CSS</Badge>
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

      <section className='space-y-10'>
        <H2>Education</H2>

        <div className='space-y-10'>
          <div>
            <span className='flex gap-4 items-baseline'>
              <H3>CodeCademy</H3>
              <P>2022 - 2023</P>
            </span>

            <P>
              I completed the CodeCademy Full Stack Web Developer Bootcamp. I
              learned the fundamentals of web development and gained experience
              working with React, Node.js, and SQL.
            </P>
          </div>

          <div>
            <span className='flex gap-4 items-baseline'>
              <H3>Dearne Valley College</H3>
              <P>2012 - 2013</P>
            </span>

            <P>
              I attended Dearne Valley College where I completed a level 3
              Diploma in IT, with a focus on Web Development and database
              design.
            </P>
          </div>

          <div>
            <span className='flex gap-4 items-baseline'>
              <H3>Wingfield Academy</H3>
              <P>2007 - 2012</P>
            </span>

            <P>
              I attended Wingfield Academy where I received over 5 A*-C level 2
              certificates including a distinction in webpage creation and
              computer graphics.
            </P>
          </div>
        </div>
      </section>
    </main>
  );
}
