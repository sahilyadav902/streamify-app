'use client';

import {
  ArrowUpDown,
  Music,
  User,
  Calendar,
  BarChart,
  Search,
  Podcast,
} from 'lucide-react';
import { format } from 'date-fns';
import { useStreamStore, StreamData } from '@/store/useStreamStore';

export default function RecentStreams() {
  const { data, searchQuery, clickedSource, setSearchQuery, sortTable } =
    useStreamStore();

  const filteredData = data.filter((stream) => {
    if (clickedSource) return stream.revenueSource === clickedSource;
    return (
      stream.song.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stream.artist.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="w-full bg-white shadow-2xl rounded-2xl p-3 md:p-6">
      <h2 className="text-3xl font-bold mb-3 text-center bg-gradient-to-r from-amber-500 to-orange-700 text-transparent bg-clip-text flex justify-center items-center gap-2">
        <Podcast color="#FE9900" size={30} /> Recent Streams
      </h2>

      <div className="relative mb-6 flex items-center w-full max-w-md mx-auto">
        <Search size={18} className="absolute left-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search by song or artist..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-full bg-white border border-amber-500 shadow-xl focus:ring-1 focus:ring-amber-500 focus:outline-none"
        />
      </div>

      <div className="overflow-x-auto shadow-xl rounded-lg border border-gray-300 bg-white">
        <table className="min-w-full rounded-lg">
          <thead>
            <tr className="bg-amber-500">
              {[
                { label: 'Song Name', key: 'song', icon: <Music size={16} /> },
                { label: 'Artist', key: 'artist', icon: <User size={16} /> },
                {
                  label: 'Date Streamed',
                  key: 'date',
                  icon: <Calendar size={16} />,
                },
                {
                  label: 'Stream Count',
                  key: 'streams',
                  icon: <BarChart size={16} />,
                },
                { label: 'User ID', key: 'userId', icon: <User size={16} /> },
              ].map(({ label, key, icon }) => (
                <th
                  key={key}
                  onClick={() => sortTable(key as keyof StreamData)}
                  className="px-6 py-3 text-sm font-semibold text-black uppercase tracking-wider cursor-pointer hover:text-white transition-all"
                >
                  <div className="flex items-center gap-2 justify-center whitespace-nowrap">
                    {icon} {label} <ArrowUpDown size={14} />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((stream, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 cursor-pointer hover:bg-gray-200 transition"
              >
                <td className="px-6 py-4 text-sm text-gray-900 font-medium text-center">
                  {stream.song}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 text-center">
                  {stream.artist}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 text-center">
                  {format(new Date(stream.date), 'dd-MMM-yyyy')}
                </td>
                <td className="px-6 py-4 text-sm font-bold text-green-600 text-center">
                  {stream.streams}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 text-center">
                  {stream.userId}
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-4 text-sm text-gray-700 text-center"
                >
                  No results found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
