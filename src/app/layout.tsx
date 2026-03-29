import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import './globals.css';
import SmoothScrolling from '@/components/SmoothScrolling';

import BootLoader from '@/components/BootLoader';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

export const metadata: Metadata = {
  title: 'AI Hustle Hub',
  description: 'Build. Automate. Earn. Turn Ideas into Income with AI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} antialiased`}>
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-black text-white selection:bg-cyan-500/30">
        <BootLoader />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
