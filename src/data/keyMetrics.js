import { Users, UserCheck, Music, DollarSign, Mic } from 'lucide-react';

export const metricsData = [
  {
    title: 'Total Users',
    value: '10,492',
    description: '↑ 12% from last month',
    icon: <Users size={30} />,
    bgColor: 'bg-gradient-to-r from-blue-500 to-indigo-500',
  },
  {
    title: 'Active Users',
    value: '6,732',
    description: '↑ 8% from last month',
    icon: <UserCheck size={30} />,
    bgColor: 'bg-gradient-to-r from-green-500 to-emerald-500',
  },
  {
    title: 'Total Streams',
    value: '1,235,678',
    description: '↑ 15% from last month',
    icon: <Music size={30} />,
    bgColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
  },
  {
    title: 'Revenue',
    value: '$84,320',
    description: '↑ 10% from last month',
    icon: <DollarSign size={30} />,
    bgColor: 'bg-gradient-to-r from-yellow-500 to-orange-500',
  },
  {
    title: 'Top Artist',
    value: 'ABBA',
    description: 'Most streamed artist this month',
    icon: <Mic size={30} />,
    bgColor: 'bg-gradient-to-r from-red-500 to-rose-500',
  },
];
