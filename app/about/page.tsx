'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navButtonStyle = `
    relative px-7 py-3 rounded-xl 
    bg-gradient-to-b from-[#2a2d2e] to-[#1c1f20]
    border-b-4 border-[#111314]
    shadow-[0_10px_20px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)]
    hover:from-[#323638] hover:to-[#222526]
    active:border-b-0 active:translate-y-1
    transition-all duration-150 ease-out
    text-white font-bold text-sm md:text-base tracking-wider uppercase
  `;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000000]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        
        {/* Left Corner: Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex flex-col items-center">
            <span className="text-xl md:text-2xl font-black tracking-[0.2em] text-white">
              AEXUS
            </span>
            <div className="flex items-center gap-1.5 w-full justify-between">
              <span className="h-[1px] w-6 bg-[var(--color-aexus-orange)]" />
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/75">
                STUDIOS
              </span>
              <span className="h-[1px] w-6 bg-[var(--color-aexus-orange)]" />
            </div>
          </div>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/" className={navButtonStyle}>
            Home
          </Link>
          <Link href="/services" className={navButtonStyle}>
            Services
          </Link>
          <Link href="/portfolio" className={navButtonStyle}>
            Portfolio
          </Link>
          <Link href="/about" className={navButtonStyle}>
            About Us
          </Link>
        </nav>

        {/* Right Corner: Start A Project CTA */}
        <div className="hidden lg:flex items-center">
          <Link 
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-[var(--color-aexus-orange)] text-black font-black text-sm tracking-wider uppercase shadow-lg shadow-[var(--color-aexus-orange)]/20 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Start A Project
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 focus:outline-none"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-[#000000] border-b border-white/10 px-6 py-8 flex flex-col gap-4 shadow-2xl">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className={`${navButtonStyle} text-center block w-full`}>
            Home
          </Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className={`${navButtonStyle} text-center block w-full`}>
            Services
          </Link>
          <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className={`${navButtonStyle} text-center block w-full`}>
            Portfolio
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={`${navButtonStyle} text-center block w-full`}>
            About Us
          </Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full py-4 text-center rounded-full bg-[var(--color-aexus-orange)] text-black font-black text-sm tracking-wider uppercase mt-4 shadow-lg">
            Start A Project
          </Link>
        </div>
      )}
    </header>
  );
}

export default function AboutPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const whyChooseUsData = [
    {
      title: 'A DRIVE FOR EXCELLENCE!',
      description: 'We believe striving for perfection pushes us closer to excellence. This principle guides everything we do at Aexus Studios. Our commitment is simple: to deliver rendering and digital services that not only meet expectations but rise above industry standards, setting a benchmark beyond our competitors.'
    },
    {
      title: 'YOUR INVESTMENT MATTERS',
      description: 'We deliver scalable digital solutions designed to maximize user engagement, secure long-term value, and optimize your business ROI.'
    },
    {
      title: 'GREAT EXPERIENCES COME FROM GREAT TEAMS',
      description: 'Every project reflects a meticulous balance of efficient workflows, collaborative talent, and creative precision delivered by seasoned industry experts.'
    }
  ];

  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-[var(--color-aexus-orange)] selection:text-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 md:px-16 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[var(--color-aexus-orange)] animate-ping" />
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-aexus-orange)]">
            About Us
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
          Our 
          <span className="text-[var(--color-aexus-orange)]"> Mission</span>
        </h1>
        
        <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-16">
          Aexus Studios objective is to reach the firm in such a level from where we can create
          most of opportunity for young new professionals to excel learning more about the
          website and designing world. I saved over 50% using Mouno over my company. The
          customer care support staff was very helpful. I will definitely do future collaborations.
          Thank you !!!        </p>

        {/* Hero Image */}
        <div className="relative w-full h-[350px] md:h-[550px] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl mb-12 group">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop" 
            alt="Engineering and Development Team" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-transparent" />
        </div>

        {/* Stats Grid Box */}
        <div className="bg-[#141414] text-white border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl grid grid-cols-2 md:grid-cols-5 gap-8 items-center text-center">
          <div className="border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0">
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-1">20+</h3>
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-white/50">Employees</p>
          </div>
          <div className="border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0">
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-1">50+</h3>
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-white/50">Global Clients</p>
          </div>
          <div className="border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0">
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-1">120+</h3>
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-white/50">Projects Done</p>
          </div>
          <div className="pb-6 md:pb-0 md:border-r border-white/10">
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-1">8+</h3>
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-white/50">Years Experience</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-1">25+</h3>
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-white/50">Project Awards</p>
          </div>
        </div>
      </section>

      {/* Who We Are, What We Offer & Why Choose Us */}
      <section className="bg-[#000000] text-white py-24 px-6 md:px-16 border-t border-white/10 overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-32">
          
          {/* Who We Are */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-[var(--color-aexus-orange)]">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Crafting Digital Excellence <span className="text-[var(--color-aexus-orange)]">Worldwide</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed">
              Aexus Studios is Pakistan&apos;s leading creative content studio. We specialise in producing digital assets that elevate projects across luxury residential, real estate, commercial, and cultural domains. Our strength lies in combining artistry with practical problem-solving. Every project reflects a balance of efficient workflows and a creative approach to visual communication.
            </p>
            <div className="w-24 h-1 bg-[var(--color-aexus-orange)] mx-auto rounded-full mt-8" />
          </div>

          {/* What We Offer */}
          <div className="space-y-10 text-center">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-[var(--color-aexus-orange)] block mb-3">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                Comprehensive <span className="text-[var(--color-aexus-orange)]">Digital Solutions</span>
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-4xl mx-auto pt-4">
              {[
                "3D ANIMATION", 
                "VR EXPERIENCE", 
                "STILL IMAGES", 
                "PRODUCT RENDERING", 
                "CONCEPT CREATION", 
                "BRAND IDENTITY", 
                "WEB DEVELOPMENT", 
                "360-DEGREE MARKETING SERVICES", 
                "RESEARCH & ANALYSIS", 
                "STRATEGY & CONSULTING"
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-[#141414] border border-white/10 px-6 py-3.5 rounded-full text-xs md:text-sm font-bold tracking-widest text-white/95 hover:border-[var(--color-aexus-orange)] hover:text-[var(--color-aexus-orange)] transition-all duration-300 shadow-lg cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="w-24 h-1 bg-[var(--color-aexus-orange)] mx-auto rounded-full mt-12" />
          </div>

          {/* Why Choose Us (Interactive Accordion layout) */}
          <div className="space-y-10 max-w-4xl mx-auto">
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-[var(--color-aexus-orange)] block mb-3">
                Why Choose Us?
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                Built on Trust <span className="text-[var(--color-aexus-orange)]">&amp; Performance</span>
              </h2>
            </div>

            <div className="space-y-3 pt-4">
              {whyChooseUsData.map((item, idx) => {
                const isOpen = openAccordion === idx;
                return (
                  <div 
                    key={idx} 
                    className="bg-[#141414] border border-white/10 rounded-2xl overflow-hidden transition-all shadow-xl"
                  >
                    <button
                      onClick={() => setOpenAccordion(isOpen ? null : idx)}
                      className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none group hover:bg-white/[0.02] transition-colors"
                    >
                      <h3 className="text-lg md:text-xl font-black tracking-wide text-white group-hover:text-[var(--color-aexus-orange)] transition-colors">
                        {item.title}
                      </h3>
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-black group-hover:bg-[var(--color-aexus-orange)] group-hover:text-black transition-all shrink-0">
                        {isOpen ? '–' : '+'}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-white/5">
                        <p className="text-white/60 text-sm md:text-base leading-relaxed pt-4">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}