'use client';
import React from 'react';

const industriesData = [
  {
    id: '01',
    title: 'Travel & Hospitality',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '02',
    title: 'IT / ITES',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '04',
    title: 'Education',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '05',
    title: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '06',
    title: 'Banking & Insurance',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '07',
    title: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '08',
    title: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
  },
];

function IndustryCard({ item }: { item: typeof industriesData[0] }) {
  return (
    <div className="group relative w-full h-[120px] sm:h-[240px] lg:h-[400px] rounded-xl sm:rounded-2xl cursor-pointer overflow-hidden border border-white/10 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:border-orange-500 hover:shadow-[0_0_25px_rgba(249,115,22,0.6)]">
      {/* Background Image */}
      <img 
        src={item.image} 
        alt={item.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-colors duration-300" />

      {/* Bottom Aligned Title Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end p-2 sm:p-6 text-left">
        <h3 className="text-[10px] sm:text-lg lg:text-2xl font-bold tracking-wide text-white drop-shadow-md uppercase truncate">
          {item.title}
        </h3>
      </div>
    </div>
  );
}

export default function IndustriesSection() {
  return (
    <section className="relative w-full bg-[#0A1B31] py-16 px-3 sm:px-6 select-none overflow-hidden">
      <div className="w-full max-w-[1750px] mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
            Industries <span className="text-orange-500">We Empower</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Explore cutting-edge digital solutions tailored for every sector.
          </p>
        </div>

        {/* Cards Grid: Mobile par 3 columns, Large screens par 4 columns */}
        <div className="w-full grid grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6">
          {industriesData.map((item) => (
            <IndustryCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}