'use client';
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
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05060a] overflow-x-hidden text-white relative">
      <NavbarOverlay />
      <Hero />
      <ClientSlider />
      <PortfolioSection />
      <LatestWorkGrid />
      <ClientReviews />
      <SolutionsSection />
      <IndustriesSection />
      <TechSection />
      <LatestNewsSection />
      <ContactUs />
      <Footer />
    </main>
  );
}