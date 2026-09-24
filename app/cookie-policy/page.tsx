import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Cookie Policy | Aexus Studios',
  description: 'Learn how Aexus Studios uses cookies and similar technologies.',
  alternates: { canonical: '/cookie-policy/' },
};

const contact = (
  <>
    <strong className="font-semibold text-white">Aexus Studios</strong><br />
    OFFICE NO.305, 3RD FLOOR, ITTEHAD LANE 12, BUILDING NO.23C, PHASE 2 EXT, Karachi, Defence Housing Authority<br />
    <a className="text-[var(--color-aexus-orange)] hover:underline" href="mailto:info@aexusstudios.com">info@aexusstudios.com</a>
  </>
);

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      lastUpdated="August 2026"
      sections={[
        { title: 'What Are Cookies?', content: <>Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, provide a better browsing experience, and give website owners useful information about how their site is being used.</> },
        { title: 'How We Use Cookies', content: <>Aexus Studios uses cookies for the following purposes:</>, items: ['Essential Cookies: These cookies are necessary for the website to function properly. They enable core functionality such as page navigation and access to secure areas. The website cannot function properly without these cookies.', "Analytics Cookies: These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.", 'Functional Cookies: These cookies enable the website to provide enhanced functionality and personalization, such as remembering your preferences (for example, theme choice or language settings).', 'Marketing Cookies: These cookies may be set through our site by advertising partners. They may be used to build a profile of your interests and show you relevant content on other sites.'] },
        { title: 'Third-Party Cookies', content: <>Some cookies are placed by third-party services that appear on our pages. We use third-party services such as Google Analytics to analyze website traffic. These services may set their own cookies to collect information about your online activity.</> },
        { title: 'Managing Cookies', content: <>You can control and manage cookies through your browser settings. Most browsers allow you to:</>, items: ['View what cookies are stored and delete them individually', 'Block third-party cookies', 'Block all cookies from specific sites', 'Block all cookies from being set', 'Delete all cookies when you close your browser'] },
        { title: 'Changes to This Policy', content: <>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. Any changes will be posted on this page with an updated revision date.</> },
        { title: 'Contact Us', content: contact },
      ]}
    />
  );
}