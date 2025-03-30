'use client';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign } from 'lucide-react';
import { useStreamStore } from '@/store/useStreamStore';

interface RevenueData {
  source: string;
  value: number;
}

interface RevenueChartProps {
  revenueData: RevenueData[];
}

const COLORS = ['#2563EB', '#00BE76', '#9333EA', '#F59E0B', '#EF4444'];

export default function RevenueChart({ revenueData }: RevenueChartProps) {
  const { setClickedSource } = useStreamStore();

  const handlePieClick = (data: RevenueData) => {
    setClickedSource(data.source);
  };

  return (
    <div className="bg-[#F9FAFB] px-2 py-4 md:p-6 rounded-2xl shadow-xl w-full">
      <h2 className="text-2xl md:text-3xl font-black text-center uppercase tracking-wider text-green-600 flex items-center justify-center gap-2">
        <DollarSign className="text-green-600 w-7 h-7" />
        Revenue
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={revenueData}
            nameKey="source"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={5}
            dataKey="value"
            onClick={(entry) => handlePieClick(entry)}
          >
            {revenueData.map((entry, index) => (
              <Cell
                key={entry.source}
                fill={COLORS[index % COLORS.length]}
                cursor="pointer"
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '12px',
              border: '2px solid #2563EB',
              boxShadow: '0px 4px 12px rgba(37, 99, 235, 0.2)',
            }}
            labelStyle={{ fontWeight: 'bold', color: 'black' }}
            itemStyle={{ color: 'black', fontSize: '14px', fontWeight: '600' }}
            formatter={(value, name) => [`$${value.toLocaleString()}`, name]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
