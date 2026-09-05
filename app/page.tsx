// app/page.tsx
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
      <div id="latest-work"><LatestWorkGrid /></div>
      <div id="reviews"><ClientReviews /></div>
      <div id="solutions"><SolutionsSection /></div>
      <div id="industries"><IndustriesSection /></div>
      <div id="tech"><TechSection /></div>
      <div id="news"><LatestNewsSection /></div>
      <div id="contact"><ContactUs /></div>
    </main>
  );
}