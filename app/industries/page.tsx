import type { Metadata } from 'next';
import IndustriesSection from "@/components/IndustriesSection";

export const metadata: Metadata = {
  title: 'Industries | Aexus Studios',
  description: 'Discover the industries Aexus Studios serves with 3D, configurator, and digital experience solutions.',
  alternates: { canonical: '/industries/' },
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#05060a] pt-32 pb-20">
      <IndustriesSection />
    </main>
  );
}