import { Suspense } from 'react';
import LatestWorkGrid from '@/components/LatestWorkGrid';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#05060a] text-white">
      <Suspense fallback={<div className="w-full h-96 flex items-center justify-center text-white/50">Loading portfolio...</div>}>
        <LatestWorkGrid />
      </Suspense>
    </main>
  );
}