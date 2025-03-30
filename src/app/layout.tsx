import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Geist } from 'next/font/google';
import Sidebar from '@/components/Sidebar';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Streamify Dashboard',
  description: 'Track and analyze your music streaming metrics',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistSans.variable} antialiased`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 max-w-screen md:pl-60 mt-16 md:mt-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
