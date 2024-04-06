import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jon Green Portfolio',
  description: 'Full Stack Web Developer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn('bg-background text-foreground', inter.className)}>
        <main className='min-h-dvh max-w-5xl mx-auto px-2 py-10'>
          {children}
        </main>
      </body>
    </html>
  );
}
