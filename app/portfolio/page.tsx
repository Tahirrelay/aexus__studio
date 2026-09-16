import { Suspense } from 'react';
import LatestWorkGrid from '@/components/LatestWorkGrid';
import ContactUs from '@/components/ContactUs'; // <-- ContactUs component import kiya

export default function PortfolioPage() {
  return (
    <div className="w-full">
      {/* 1. Latest Work Grid Section */}
      <Suspense fallback={<div className="w-full h-96 flex items-center justify-center text-white/50">Loading portfolio...</div>}>
        <LatestWorkGrid />
      </Suspense>

      {/* 2. Contact Us Section (Footer se theek pehle) */}
      <ContactUs />
    </div>
  );
}