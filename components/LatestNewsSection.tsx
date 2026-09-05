'use client';
import React, { useState } from 'react';

const blogsData = [
  {
    id: '01',
    title: '3D Animation for Brands: Product Storytelling',
    tag: '3D EXPERIENCES',
    date: 'AUGUST 19, 2026 • 10 MIN READ',
    subtitle: 'Elevating Brand Engagement Through Motion',
    desc: 'Discovering how immersive 3D animation and cinematic product storytelling capture customer attention and boost conversions.',
    icon: '✨',
  },
  {
    id: '02',
    title: 'WebAR for Ecommerce: Browser-Based AR Try-Ons',
    tag: 'WEBGL & AR',
    date: 'AUGUST 18, 2026 • 8 MIN READ',
    subtitle: 'Interactive Shopping Without Apps',
    desc: 'Bringing augmented reality directly to mobile and desktop browsers to let customers test products in their real-world space.',
    icon: '📱',
  },
  {
    id: '03',
    title: 'Web Development for Brands & Digital Showrooms',
    tag: 'FULL STACK',
    date: 'AUGUST 16, 2026 • 12 MIN READ',
    subtitle: 'Scaling High-End Web Architectures',
    desc: 'How modern frameworks like React and Three.js empower luxury brands to build breathtaking virtual spaces.',
    icon: '🌐',
  },
  {
    id: '04',
    title: 'How Brands Replace Physical Showrooms With 3D',
    tag: '3D EXPERIENCES',
    date: 'AUGUST 14, 2026 • 15 MIN READ',
    subtitle: 'Virtual Spaces & Global Reach',
    desc: 'Discovering how virtual spaces cut physical overhead costs and elevate global client reach through interactive web portals.',
    icon: '🏛️',
  },
  {
    id: '05',
    title: 'Unreal Engine Configurator: Real-Time 3D Products',
    tag: 'REAL-TIME 3D',
    date: 'AUGUST 12, 2026 • 9 MIN READ',
    subtitle: 'Next-Gen Customization Tools',
    desc: 'Empowering users to customize complex products with photorealistic real-time rendering directly in the browser.',
    icon: '⚡',
  },
];

function BlogCard({ item, onClick }: { item: typeof blogsData[0]; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group relative w-full h-[360px] rounded-2xl cursor-pointer overflow-hidden border border-white/10 bg-[#070e17] p-7 flex flex-col justify-between shadow-lg transition-all duration-500 hover:scale-[1.02] hover:border-orange-500 hover:shadow-[0_0_25px_rgba(249,115,22,0.6)]"
    >
      {/* Background Gradient Layer on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Card Header */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="w-10 h-10 rounded-xl bg-orange-600/20 border border-orange-500/30 flex items-center justify-center text-lg text-orange-500 shadow-inner">
          {item.icon}
        </span>
        <span className="text-[10px] font-mono tracking-widest uppercase font-semibold text-white/50">
          {item.tag}
        </span>
      </div>

      {/* Card Content */}
      <div className="relative z-10 my-auto py-2">
        <h3 className="text-sm sm:text-base font-extrabold tracking-wide uppercase mb-1 line-clamp-2 text-white">
          {item.title}
        </h3>
        <p className="text-xs font-bold mb-2 tracking-wide text-orange-500">
          {item.subtitle}
        </p>
        <p className="text-xs leading-relaxed line-clamp-3 font-medium text-white/60">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function LatestWorkGrid() {
  const [activeCard, setActiveCard] = useState<any | null>(null);

  return (
    <section className="relative w-full bg-[#000000] py-16 md:py-20 text-white overflow-hidden select-none">      
      
      {/* Top Parallel Border Line */}
      <div className="w-full h-[1px] bg-white/15 max-w-[1600px] mx-auto mb-12" />

      {/* Main Content Wrapper (Container box removed, matching layout structure) */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
            LATEST <span className="text-orange-500">BLOGS</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-3 tracking-wide max-w-xl mx-auto font-medium">
            Explore our specialized articles and insights into immersive experiences and high-end tech stacks.
          </p>
        </div>

        {/* Cards Grid Layout */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogsData.map((item) => (
            <BlogCard key={item.id} item={item} onClick={() => setActiveCard(item)} />
          ))}
        </div>

      </div>

      {/* Bottom Parallel Border Line */}
      <div className="w-full h-[1px] bg-white/15 max-w-[1600px] mx-auto mt-12" />

      {/* FULL-SCREEN ZOOM MODAL OVERLAY */}
      {activeCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all duration-300">
          <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#070e17] to-[#030712] border border-orange-500/60 rounded-3xl p-8 sm:p-12 shadow-2xl text-white transform animate-in fade-in zoom-in-95 duration-300">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveCard(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center text-white text-lg font-bold transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Modal Header Icon & Tag */}
            <div className="flex items-center gap-4 mb-6">
              <span className="w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-2xl">
                {activeCard.icon}
              </span>
              <div>
                <span className="text-xs font-mono tracking-widest text-orange-400 uppercase block mb-1">
                  {activeCard.tag}
                </span>
                <span className="text-xs text-white/50 font-mono">
                  {activeCard.date}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-3">
              {activeCard.title}
            </h3>
            
            <h4 className="text-sm font-semibold text-orange-500 mb-6 tracking-wide">
              {activeCard.subtitle}
            </h4>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed border-t border-white/10 pt-6">
              {activeCard.desc}
            </p>

            {/* Modal Footer CTA */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-white/40">FULL VIEW MODE</span>
              <button
                onClick={() => setActiveCard(null)}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-90 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-lg"
              >
                Close View
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}