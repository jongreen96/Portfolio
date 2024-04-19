import Background from '@/components/background';
import P from '@/components/ui/p';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jon Green Portfolio',
  description: 'Full Stack Web Engineer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn('bg-background text-foreground', inter.className)}>
        <Background />
        {children}
        <P className='text-center pb-5'>
          Jon Green - {new Date().getFullYear()}
        </P>
      </body>
    </html>
  );
}
