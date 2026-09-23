import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | Aexus Studios',
  description: 'Learn how Aexus Studios collects, uses, and protects your information.',
};

const contact = (
  <>
    <strong className="font-semibold text-white">Aexus Studios</strong><br />
    OFFICE NO.305, 3RD FLOOR, ITTEHAD LANE 12, BUILDING NO.23C, PHASE 2 EXT, Karachi, Defence Housing Authority<br />
    <a className="text-[var(--color-aexus-orange)] hover:underline" href="mailto:info@aexusstudios.com">info@aexusstudios.com</a>
  </>
);

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="August 2026"
      sections={[
        { title: 'Introduction', content: <>Aexus Studios (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services, including 3D visualization, virtual reality, web development, and related digital solutions.</> },
        { title: 'Information We Collect', items: ['Personal Information: Name, email address, phone number, company name, and any other details you provide when contacting us or submitting a project inquiry.', 'Usage Data: Information about how you interact with our website, including pages visited, time spent, browser type, device information, and IP address.', 'Cookies & Tracking: We use cookies and similar technologies to enhance your experience. See our Cookie Policy for details.'] },
        { title: 'How We Use Your Information', items: ['To respond to your inquiries and provide our services', 'To send project updates, proposals, and relevant communications', 'To improve our website, services, and user experience', 'To comply with legal obligations and protect our rights', 'To analyze website traffic and usage patterns'] },
        { title: 'Information Sharing', content: <>We do not sell, trade, or rent your personal information to third parties. We may share your data only in the following circumstances:</>, items: ['With trusted service providers who assist in operating our website and business', 'When required by law or to comply with legal proceedings', 'To protect the rights, property, or safety of Aexus Studios and its users'] },
        { title: 'Data Security', content: <>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</> },
        { title: 'Your Rights', content: <>You have the right to:</>, items: ['Access, correct, or delete your personal information', 'Withdraw consent for data processing at any time', 'Request a copy of your data in a portable format', 'Object to the processing of your personal information'] },
        { title: 'Third-Party Links', content: <>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites. We encourage you to review the privacy policies of any third-party sites you visit.</> },
        { title: 'Changes to This Policy', content: <>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this page periodically.</> },
        { title: 'Contact Us', content: contact },
      ]}
    />
  );
}