import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Aexus Studios',
  description: 'See how Aexus Studios helps brands turn complex ideas into compelling digital experiences.',
  alternates: { canonical: '/case-studies/' },
};

import PortfolioSection from "@/components/PortfolioSection";
export default function PortfolioSectionPage() {
  return (
    <div>
      
      <PortfolioSection />
    </div>
  );
}