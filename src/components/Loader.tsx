import { Music } from 'lucide-react';

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-[200px]">
      <div className="relative flex justify-center items-center">
        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-700 rounded-full animate-ping" />
        <Music size={30} className="absolute text-amber-600 animate-pulse" />
      </div>
      <p className="mt-3 text-sm text-gray-700 font-medium">Loading...</p>
    </div>
  );
}
