import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Service | Aexus Studios',
  description: 'Review the terms that apply to using the Aexus Studios website and services.',
  alternates: { canonical: '/terms-of-service/' },
};

const contact = (
  <>
    <strong className="font-semibold text-white">Aexus Studios</strong><br />
    OFFICE NO.305, 3RD FLOOR, ITTEHAD LANE 12, BUILDING NO.23C, PHASE 2 EXT, Karachi, Defence Housing Authority<br />
    <a className="text-[var(--color-aexus-orange)] hover:underline" href="mailto:info@aexusstudios.com">info@aexusstudios.com</a>
  </>
);

export default function TermsOfServicePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      lastUpdated="August 2026"
      sections={[
        { title: 'Agreement to Terms', content: <>By accessing and using the Aexus Studios website and services, you agree to be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, you must not use our website or services.</> },
        { title: 'Services', content: <>Aexus Studios provides digital visualization services including but not limited to: 3D architectural visualization, virtual reality experiences, web-based product configurators, 3D animations, 360° virtual tours, and website development. All services are subject to individual project agreements.</> },
        { title: 'Intellectual Property', content: <>All content on this website, including designs, text, graphics, logos, images, videos, 3D renders, and software, is the property of Aexus Studios or its clients and is protected by intellectual property laws.</>, items: ['You may not reproduce, distribute, or create derivative works without our written consent', 'Client project deliverables are governed by individual project contracts', 'Portfolio items are shared with client permission for demonstration purposes'] },
        { title: 'Project Engagements', items: ['All project scopes, timelines, and pricing are defined in individual proposals and contracts', 'Payment terms are agreed upon before project commencement', 'Revisions and scope changes may incur additional charges', 'Project cancellations are subject to the terms defined in the project agreement'] },
        { title: 'User Conduct', content: <>When using our website and services, you agree not to:</>, items: ['Use the website for any unlawful purpose', 'Attempt to gain unauthorized access to any part of the website', "Interfere with or disrupt the website's functionality", 'Upload or transmit any malicious code or content', 'Scrape, copy, or harvest content without authorization'] },
        { title: 'Confidentiality', content: <>Both parties agree to maintain the confidentiality of proprietary information shared during project engagements. This includes project details, business strategies, technical specifications, and any other sensitive information disclosed during our collaboration.</> },
        { title: 'Limitation of Liability', content: <>Aexus Studios shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.</> },
        { title: 'Warranty Disclaimer', content: <>Our website and services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses.</> },
        { title: 'Governing Law', content: <>These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Karachi, Pakistan.</> },
        { title: 'Changes to Terms', content: <>We reserve the right to modify these Terms &amp; Conditions at any time. Changes will be effective immediately upon posting to this page. Continued use of our website after changes are posted constitutes acceptance of the updated terms.</> },
        { title: 'Contact', content: contact },
      ]}
    />
  );
}