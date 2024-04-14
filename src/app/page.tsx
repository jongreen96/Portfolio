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
            <Button variant='outline' size='icon' asChild>
              <Link href='tel: +44 7769674943' target='_blank'>
                <Phone className='text-muted-foreground' size={20} />
              </Link>
            </Button>

            <Button variant='outline' size='icon' asChild>
              <Link href='mailto: jongreen1996@gmail.com' target='_blank'>
                <Mail className='text-muted-foreground' size={20} />
              </Link>
            </Button>

            <Button variant='outline' size='icon' asChild>
              <Link href='https://github.com/jongreen96' target='_blank'>
                <Github className='text-muted-foreground' size={20} />
              </Link>
            </Button>

            <Button variant='outline' size='icon' asChild>
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

      <section className='space-y-4'>
        <H2>About</H2>
        <P>
          I am a full stack web engineer who is passionate about creating
          user-friendly and performant web applications. I have honed my skills
          primarily through self-learning on platforms like CodeCademy, and have
          delved deep into technologies such as Next.js, React, Postgres, and
          TailwindCSS. I thrive on continuously expanding my knowledge and
          exploring new frameworks and technologies, and I am always looking to
          learn more.
        </P>
      </section>

      <section className='space-y-6'>
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
                className='rounded w-40'
              />
            </Link>
            <div>
              <Link href='https://my-gpt.app' target='_blank'>
                <H3>My-GPT</H3>
              </Link>
              <P>
                My-GPT is a web application that allows users to access all
                OpenAI models such as gpt-4, dall-e-3 and gpt-4-vision without a
                monthly subscription.
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
                className='rounded w-40'
              />
            </Link>
            <div>
              <Link href='https://greenvinylgraphics.com/' target='_blank'>
                <H3>Green Vinyl Graphics</H3>
              </Link>
              <P>
                Green Vinyl Graphics is a store that sells vector templates used
                to wrap mobile devices and all products sold are producted by
                me. This website was a final project for my Web Development
                course.
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
                className='rounded w-40'
              />
            </Link>
            <div>
              <Link href='https://recapit-reddit.netlify.app/' target='_blank'>
                <H3>Recapit</H3>
              </Link>
              <P>
                Recapit is a simple Reddit clone that pulls the top posts from a
                given subreddit for a set time period. This was the first
                website I created on my coding journey. <br /> (Built before the
                Reddit API changes)
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

      <section className='space-y-6'>
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

      <section className='space-y-6'>
        <H2>Education</H2>
      </section>
    </main>
  );
}
