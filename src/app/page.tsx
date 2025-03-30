import KeyMetrics from '@/sections/KeyMetrics';
import RecentStreams from '@/sections/RecentStreams';

export default function Home() {
  return (
    <main className="bg-[#F9FAFB] p-3 sm:p-6">
      <section id="keymetrics" className="mb-6">
        <KeyMetrics />
      </section>

      <section id="recentstreams" className="mb-6">
        <RecentStreams />
      </section>

      <section id="songs" className="mb-6">
        <h2 className="text-2xl font-bold">Songs</h2>
        {/* Content */}
      </section>

      <section id="analytics" className="mb-6">
        <h2 className="text-2xl font-bold">Analytics</h2>
        {/* Content */}
      </section>
    </main>
  );
}
