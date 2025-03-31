import KeyMetrics from '@/sections/KeyMetrics';
import RecentStreams from '@/sections/RecentStreams';
import Analytics from '@/sections/Analytics';
import { Suspense } from 'react';
import Loader from '@/components/Loader';

// Added React Suspense boundaries for lazy loading
export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen p-3 sm:p-6">
      <section id="keymetrics" className="mb-6">
        <Suspense fallback={<Loader />}>
          <KeyMetrics />
        </Suspense>
      </section>

      <section id="analytics" className="mb-6">
        <Suspense fallback={<Loader />}>
          <Analytics />
        </Suspense>
      </section>

      <section id="recentstreams" className="">
        <Suspense fallback={<Loader />}>
          <RecentStreams />
        </Suspense>
      </section>
    </main>
  );
}
