import TopSongsChart from '@/components/TopSongsChart';
import UserGrowthChart from '@/components/UserGrowthChart';
import RevenueChart from '@/components/RevenueChart';
import userGrowth from '@/data/userGrowth';
import topSongs from '@/data/topSongs';
import revenueStats from '@/data/revenueStats';

export default function Analytics() {
  return (
    <div className="max-w-7xl mx-auto space-y-4">
      <div className="">
        <UserGrowthChart userData={userGrowth} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2">
          <TopSongsChart songsData={topSongs} />
        </div>

        <div className="col-span-1">
          <RevenueChart revenueData={revenueStats} />
        </div>
      </div>
    </div>
  );
}
