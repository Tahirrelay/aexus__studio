import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Aexus Studios',
  description: 'Meet Aexus Studios, a creative technology team building high-quality 3D visualizations and digital experiences.',
  alternates: { canonical: '/about-us/' },
};

export default function AboutUsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}