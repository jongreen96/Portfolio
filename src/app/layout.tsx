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
      <body className={inter.className}>
        <main className='bg-background text-foreground h-dvh flex justify-center flex-col items-center'>
          {children}
        </main>
      </body>
    </html>
  );
}
