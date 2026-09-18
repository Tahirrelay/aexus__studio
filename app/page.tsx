import { Suspense } from 'react';
import NavbarOverlay from '@/components/NavbarOverlay';
import Hero from '@/components/Hero';
import ClientSlider from '@/components/ClientSlider';
import PortfolioSection from '@/components/PortfolioSection';
import LatestWorkGrid from '@/components/LatestWorkGrid';
import ClientReviews from '@/components/ClientReviews';
import SolutionsSection from '@/components/SolutionsSection';
import IndustriesSection from '@/components/IndustriesSection';
import TechSection from '@/components/TechSection';
import LatestNewsSection from '@/components/LatestNewsSection';
import ContactUs from '@/components/ContactUs';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05060a] overflow-x-hidden text-white relative">
      <NavbarOverlay />
      <div id="home"><Hero /></div>
      <div id="clients"><ClientSlider /></div>
      <div id="portfolio"><PortfolioSection /></div>
      <div id="latest-work">
        <Suspense fallback={<div className="w-full h-96 flex items-center justify-center text-white/50">Loading portfolio...</div>}>
          <LatestWorkGrid />
        </Suspense>
      </div>
      <div id="reviews"><ClientReviews /></div>
      <div id="solutions"><SolutionsSection /></div>
      <div id="industries"><IndustriesSection /></div>
{/* --- SLIDING AEXUS STUDIOS TICKER --- */}
<div className="relative w-full bg-[#000000] py-4 overflow-hidden z-20 select-none">
  <div className="animate-marquee-custom">
    {/* Set 1 */}
    <div className="flex items-center">
      <span className="font-black tracking-[0.5em] uppercase text-xl sm:text-5xl font-sans mx-6 flex items-center gap-3">
        <span className="text-white">A E X U S</span> <span className="text-[#ff8800]">S T U D I O S</span>
        <span className="text-white/30 mx-6"> </span>
      </span>
      <span className="font-black tracking-[0.5em] uppercase text-xl sm:text-5xl font-sans mx-6 flex items-center gap-3">
        <span className="text-white">A E X U S</span> <span className="text-[#ff8800]">S T U D I O S</span>
        <span className="text-white/30 mx-6"></span>
      </span>
    </div>
    {/* Set 2 (Seamless loop ke liye duplicate set) */}
    <div className="flex items-center" aria-hidden="true">
      <span className="font-black tracking-[0.5em] uppercase text-xl sm:text-5xl font-sans mx-6 flex items-center gap-3">
        <span className="text-white">A E X U S</span> <span className="text-[#ff8800]">S T U D I O S</span>
        <span className="text-white/30 mx-6"></span>
      </span>
      <span className="font-black tracking-[0.5em] uppercase text-xl sm:text-5xl font-sans mx-6 flex items-center gap-3">
        <span className="text-white">A E X U S</span> <span className="text-[#ff8800]">S T U D I O S</span>
        <span className="text-white/30 mx-6"></span>
      </span>
    </div>
  </div>
</div>
      
      <div id="tech"><TechSection /></div>
      <div id="news"><LatestNewsSection /></div>
      <div id="contact"><ContactUs /></div>
    </main>
  );
}