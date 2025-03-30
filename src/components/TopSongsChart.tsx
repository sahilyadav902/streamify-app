'use client';

import {
  BarChart,
  Bar,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  CartesianGrid,
} from 'recharts';
import { Music } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SongData {
  song: string;
  plays: number;
}

interface TopSongsChartProps {
  songsData: SongData[];
}

export default function TopSongsChart({ songsData }: TopSongsChartProps) {
  const [barSize, setBarSize] = useState(50);

  useEffect(() => {
    const updateBarSize = () => {
      setBarSize(window.innerWidth < 768 ? 30 : 50);
    };

    updateBarSize();
    window.addEventListener('resize', updateBarSize);

    return () => window.removeEventListener('resize', updateBarSize);
  }, []);

  return (
    <div className="bg-[#F9FAFB] px-2 py-4 md:p-6 rounded-2xl shadow-xl w-full">
      <h2 className="text-2xl md:text-3xl font-black text-center uppercase tracking-widest text-indigo-600 flex items-center justify-center gap-2">
        <Music className="text-indigo-600 w-7 h-7" />
        Top 5 Songs
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={songsData}
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="song" tick={false} height={1} />
          <YAxis tick={{ fill: 'black', fontSize: 13, fontWeight: '600' }} />

          <Tooltip
            contentStyle={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '12px',
              border: '2px solid #4F46E5',
              boxShadow: '0px 4px 12px rgba(79, 70, 229, 0.2)',
            }}
            labelStyle={{
              fontWeight: 'bold',
              color: 'black',
            }}
            itemStyle={{
              color: 'black',
              fontSize: '14px',
              fontWeight: '600',
            }}
            formatter={(value) => [`${value.toLocaleString()} Plays`]}
          />
          <Bar
            dataKey="plays"
            fill="url(#barGradient)"
            barSize={barSize}
            radius={[10, 10, 0, 0]}
            cursor="pointer"
          />
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#9333EA" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
