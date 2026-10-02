'use client';

import { useState } from 'react';

export default function AboutPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const whyChooseUsData = [
    {
      title: 'OUR DRIVE FOR EXCELLENCE',
      description: 'We believe that continuous improvement leads to exceptional results. This mindset shapes every project at Aexus Studios, guiding us to deliver digital experiences that surpass expectations and set new standards in the industry.'
    },
    {
      title: 'YOUR INVESTMENT MATTERS',
      description: 'We create scalable digital solutions designed to increase engagement, build long-term value, and maximize ROI for your business.'
    },
    {
      title: 'GREAT EXPERIENCES START WITH GREAT TEAMS',
      description: 'Every project reflects a balance of efficient workflows, collaborative talent, and creative precision delivered by experienced specialists.'
    }
  ];

  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-[var(--color-aexus-orange)] selection:text-black">
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
          Aexus Studios is built to create meaningful opportunities for young professionals to grow, innovate, and master the world of web development, design, and digital storytelling. We are committed to pushing the boundaries of creative vision and digital excellence.
        </p>

        {/* Hero Image */}
        <div className="relative w-full h-[550px] md:h-[550px] rounded-[12px] overflow-hidden border border-white/10 shadow-2xl mb-12 group">
          <img 
            src="/services/about.jpg" 
            alt="Engineering and Development Team" 
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-transparent" />
        </div>

        {/* Stats Grid Box */}
        <div className="bg-[#141414] text-white border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
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
          <div className="pb-6 md:pb-0">
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-1">8+</h3>
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-white/50">Years Experience</p>
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
              Aexus Studios is a leading creative content studio in Pakistan, creating digital assets that elevate projects across luxury residential, real estate, commercial, and cultural sectors. Our strength lies in combining artistic vision with practical problem-solving to deliver experiences that are both visually compelling and strategically effective.
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto pt-4">
              {[
                { title: 'REAL ESTATE', desc: 'Off-plan 3D visualization & interactive real estate sales centre solutions.' },
                { title: 'ARCHITECTURE', desc: 'Photorealistic architectural render production for design firms & architectural competitions.' },
                { title: 'INTERIOR DESIGN', desc: 'Photorealistic interior 3D visualization and virtual showrooms for hospitality.' },
                { title: 'MANUFACTURING', desc: '3D hero shots, exploded product views, and technical assembly animations.' },
                { title: 'E-COMMERCE', desc: 'Interactive 3D product configurators, AR shopping experiences & virtual showrooms.' },
                { title: 'AUTOMOTIVE', desc: 'Custom vehicle 3D configurators, digital car showrooms & VR test drives.' },
                { title: 'HEALTHCARE', desc: 'Medical 3D visualization, surgical simulations & patient education tools.' },
                { title: 'EDUCATION & TRAINING', desc: 'Immersive learning software, VR training simulations & virtual classrooms.' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#141414] border border-white/10 rounded-[24px] p-6 text-left shadow-[0_12px_30px_rgba(0,0,0,0.28)] hover:border-[var(--color-aexus-orange)] transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#1a1d20] border border-[var(--color-aexus-orange)]/40 flex items-center justify-center text-[var(--color-aexus-orange)] text-lg font-bold">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/65 text-base leading-relaxed">
                    {item.desc}
                  </p>
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