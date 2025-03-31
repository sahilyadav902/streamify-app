'use client';

import { metricsData } from '@/data/keyMetrics';

export default function KeyMetrics() {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {metricsData.map((metric, index) => (
          <div
            key={index}
            className={`${metric.bgColor} text-white rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 cursor-pointer`}
          >
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">{metric.icon}</div>
              <h2 className="text-lg font-semibold">{metric.title}</h2>
            </div>
            <p className="text-2xl font-bold mt-3">{metric.value}</p>
            <p className="text-xs mt-1 opacity-90">{metric.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
