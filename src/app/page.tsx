import { Button } from '@/components/ui/button';
import profilePhoto from '@/lib/assets/profile-photo.jpg';
import { Github, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='min-h-dvh max-w-3xl mx-auto px-2 py-20'>
      <section className='flex justify-between'>
        <div className='text-lg space-y-2'>
          <div>
            <h1 className='text-4xl font-bold tracking-tighter'>Jon Green</h1>
            <p className='mt-1'>Full Stack Web Developer</p>
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
                <Phone className='text-muted-foreground' />
              </Link>
            </Button>

            <Button variant='outline' size='icon' asChild>
              <Link href='mailto: jongreen1996@gmail.com' target='_blank'>
                <Mail className='text-muted-foreground' />
              </Link>
            </Button>

            <Button variant='outline' size='icon' asChild>
              <Link href='https://github.com/jongreen96' target='_blank'>
                <Github className='text-muted-foreground' />
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
    </main>
  );
}
