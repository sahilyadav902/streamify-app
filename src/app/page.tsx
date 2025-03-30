import KeyMetrics from '@/sections/KeyMetrics';
import RecentStreams from '@/sections/RecentStreams';
import Analytics from '@/sections/Analytics';

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen p-3 sm:p-6">
      <section id="keymetrics" className="mb-6">
        <KeyMetrics />
      </section>

      <section id="analytics" className="mb-6">
        <Analytics />
      </section>

      <section id="recentstreams" className="">
        <RecentStreams />
      </section>
    </main>
  );
}
