import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import './globals.css';
import SmoothScrolling from '@/components/SmoothScrolling';

import BootLoader from '@/components/BootLoader';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

export const metadata: Metadata = {
  title: 'AI Hustle Hub | Master AI Tools & Build Passive Income',
  description: 'The ultimate platform for students and beginners to learn AI tools, discover side hustles, and automate workflows for passive online income. Start your AI journey today.',
  keywords: 'AI Hustle, Passive Income, AI Tools, Side Hustles, Automation, ChatGPT, Midjourney, Learn AI earning',
  openGraph: {
    title: 'AI Hustle Hub | Master AI Tools & Build Passive Income',
    description: 'Learn to use AI tools for earning money online. Discover side hustles and automation strategies.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Hustle Hub | AI Side Hustles',
    description: 'Master the future of earning with AI tools and automation.',
  }
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
