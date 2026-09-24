import type { Metadata } from 'next';
import ContactUs from '@/components/ContactUs';

export const metadata: Metadata = {
  title: 'Contact Aexus Studios',
  description: 'Start a project with Aexus Studios for 3D visualization, digital experiences, or interactive product solutions.',
  alternates: { canonical: '/contact-us/' },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#04060b] pt-20">
      <ContactUs />
    </main>
  );
}