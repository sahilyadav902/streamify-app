'use client';

import { useState } from 'react';
import { Menu, X, ChartPie, Podcast, Play, ChartLine } from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { name: 'Key Metrics', icon: <ChartLine size={20} />, href: '#keymetrics' },
  {
    name: 'Recent Streams',
    icon: <Podcast size={20} />,
    href: '#recentstreams',
  },
  { name: 'Analytics', icon: <ChartPie size={20} />, href: '#analytics' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="md:hidden fixed top-0 left-0 w-full bg-gradient-to-b from-[#1D1C37] to-[#3A3A6E] text-white p-4 flex items-center justify-between z-50">
        <button onClick={() => setIsOpen(true)} className="text-white">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold flex gap-2 items-center">
          <Play color="#F48066" size={28} strokeWidth={4} />
          Streamify
        </h1>
        <div className="w-6"></div>{' '}
      </nav>

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 h-screen bg-gradient-to-b from-[#1D1C37] to-[#3A3A6E] text-white p-5 space-y-6 transition-transform duration-300',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          'md:translate-x-0 md:w-60'
        )}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold tracking-wide flex gap-2 items-center">
            <Play color="#F48066" size={30} strokeWidth={4} />
            Streamify
          </h1>
          <button className="md:hidden" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col space-y-2">
          {menuItems.map(({ name, icon, href }) => (
            <a
              key={name}
              href={href}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#2A2950] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {icon}
              <span>{name}</span>
            </a>
          ))}
        </nav>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
