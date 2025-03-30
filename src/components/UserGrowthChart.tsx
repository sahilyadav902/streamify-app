'use client';

import { UsersRound } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from 'recharts';

interface UserData {
  month: string;
  totalUsers: number;
  activeUsers: number;
}

interface UserGrowthChartProps {
  userData: UserData[];
}

export default function UserGrowthChart({ userData }: UserGrowthChartProps) {
  return (
    <div className="bg-[#F9FAFB] px-2 py-4 md:p-6 rounded-2xl shadow-2xl w-full">
      <h2 className="text-2xl md:text-3xl font-black text-center tracking-wider uppercase flex items-center justify-center gap-2 text-[#2563EB]">
        <UsersRound className="w-7 h-7 text-[#2563EB]" />
        User Growth
      </h2>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart
          data={userData}
          margin={{ top: 15, right: 15, left: 15, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, color: 'black' }}
            tickMargin={8}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '12px',
              border: '2px solid #00BE76',
              boxShadow: '0px 4px 12px rgba(0, 190, 118, 0.2)',
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
            formatter={(value, name) => [
              value.toLocaleString(),
              name === 'totalUsers' ? 'Total Users' : 'Active Users',
            ]}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            wrapperStyle={{ fontSize: '14px', color: 'black' }}
            formatter={(value) =>
              value === 'totalUsers' ? 'Total Users' : 'Active Users'
            }
          />

          <Line
            type="monotone"
            dataKey="totalUsers"
            stroke="#2563EB"
            strokeWidth={3}
            dot={{ r: 4, fill: '#2563EB' }}
            cursor="pointer"
          />

          <Line
            type="monotone"
            dataKey="activeUsers"
            stroke="#00BE76"
            strokeWidth={3}
            dot={{ r: 4, fill: '#00BE76' }}
            cursor="pointer"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
