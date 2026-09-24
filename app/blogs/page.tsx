import type { Metadata } from 'next';
import LatestNewsSection from "@/components/LatestNewsSection";

export const metadata: Metadata = {
  title: 'Blogs | Aexus Studios',
  description: 'Insights on 3D visualization, digital products, configurators, and creative technology from Aexus Studios.',
  alternates: { canonical: '/blogs/' },
};

export default function LatestBlogsSection() {
  return (
    <main className="min-h-screen bg-[#05060a] pt-32 pb-20">
      <LatestNewsSection />
    </main>
  );
}