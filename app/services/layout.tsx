import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Aexus Studios',
  description: 'Explore Aexus Studios services, from architectural visualization and 3D animation to configurators and web development.',
  alternates: { canonical: '/services-1/' },
};

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}