import type { ReactNode } from 'react';

type LegalSection = {
  title: string;
  content?: ReactNode;
  items?: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export default function LegalPage({ eyebrow, title, lastUpdated, sections }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[#05060a] px-6 pb-24 pt-36 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <header className="mb-14 border-b border-white/10 pb-10">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-[var(--color-aexus-orange)]">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-sm uppercase tracking-[0.16em] text-white/45">
            Last updated: {lastUpdated}
          </p>
        </header>

        <div className="space-y-10">
          {sections.map((section, index) => (
            <section key={section.title} className="border-b border-white/10 pb-10 last:border-b-0">
              <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">
                <span className="mr-3 text-[var(--color-aexus-orange)]">{index + 1}.</span>
                {section.title}
              </h2>
              {section.content && (
                <div className="text-base leading-8 text-white/65">{section.content}</div>
              )}
              {section.items && (
                <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-8 text-white/65 marker:text-[var(--color-aexus-orange)]">
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}