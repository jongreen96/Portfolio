import { Button } from '@/components/ui/button';
import H1 from '@/components/ui/h1';
import H2 from '@/components/ui/h2';
import P from '@/components/ui/p';
import profilePhoto from '@/lib/assets/profile-photo.jpg';
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

      <section>
        <H2>About</H2>
        <P>
          I am a full stack web engineer who is passionate about creating
          user-friendly and performant web applications. I have honed my skills
          primarily through self-learning on platforms like CodeCademy, and have
          delved deep into technologies such as Next.js, React, Postgres, and
          TailwindCSS. I thrive on continuously expanding my knowledge and
          exploring new frameworks and technologies and firmly believe that
          dedication to continuous learning and growth is the cornerstone of
          success in the ever-evolving field of web development.
        </P>
      </section>

      <section>
        <H2>Projects</H2>
        <P className='mt-4 text-center text-destructive'>
          Cool shadcn element showing projects here
        </P>
      </section>

      <section>
        <H2>Skills</H2>
        <P>
          Currently I work mostly with TypeScript, Next.js, React, Node.js and
          Prisma. I am always looking to learn new technologies and frameworks
          and in the past I have used:
        </P>

        <P className='mt-4 text-center text-destructive'>
          Cool shadcn element showing skills here
        </P>
      </section>

      <section>
        <H2>Education</H2>
        <P className='mt-4 text-center text-destructive'>
          Element showing education here
        </P>
      </section>
    </main>
  );
}
