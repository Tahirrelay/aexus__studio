'use client';
import React, { useState } from 'react';
import { 
  Building2, 
  Ruler, 
  Sofa, 
  Factory, 
  ShoppingCart, 
  Car, 
  HeartPulse, 
  GraduationCap 
} from 'lucide-react';

const industriesData = [
  {
    id: '01',
    title: 'Real Estate',
    description: 'Off-plan 3D visualization & interactive real estate sales centre solutions.',
    icon: Building2,
  },
  {
    id: '02',
    title: 'Architecture',
    description: 'Photorealistic architectural render production for design firms & architectural competitions.',
    icon: Ruler,
  },
  {
    id: '03',
    title: 'Interior Design',
    description: 'Photorealistic interior 3D visualization and virtual showrooms for hospitality.',
    icon: Sofa,
  },
  {
    id: '04',
    title: 'Manufacturing',
    description: '3D hero shots, exploded product views, and technical assembly animations.',
    icon: Factory,
  },
  {
    id: '05',
    title: 'E-Commerce',
    description: 'Interactive 3D product configurators, AR shopping experiences & virtual showrooms.',
    icon: ShoppingCart,
  },
  {
    id: '06',
    title: 'Automotive',
    description: 'Custom vehicle 3D configurators, digital car showrooms & VR test drives.',
    icon: Car,
  },
  {
    id: '07',
    title: 'Healthcare',
    description: 'Medical device 3D visualization, surgical simulations & patient education tools.',
    icon: HeartPulse,
  },
  {
    id: '08',
    title: 'Education & Training',
    description: 'Immersive learning software, VR training simulations & virtual classrooms.',
    icon: GraduationCap,
  },
];

function IndustryCard({ item }: { item: typeof industriesData[0] }) {
  const IconComponent = item.icon;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setIsHovered(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between p-6 sm:p-7 h-[220px] rounded-[24px] bg-[#070e17] border border-white/10 cursor-pointer overflow-hidden transition-all duration-500 hover:border-orange-500/40 shadow-xl text-left"
      style={{
        boxShadow: `
          rgba(0, 0, 0, 0.45) 0px -15px 25px 0px inset, 
          rgba(0, 0, 0, 0.35) 0px -30px 30px 0px inset, 
          rgba(0, 0, 0, 0.3) 0px 10px 20px 0px
        `
      }}
    >
      {/* Desktop Direction-Aware Spotlight Hover Effect */}
      <div 
        className={`absolute w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-orange-600 via-orange-500 to-amber-300 transition-transform duration-500 ease-out pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0 hidden md:block ${
          isHovered ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Mobile touch gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-600 to-amber-400 opacity-0 transition-opacity duration-300 md:hidden active:opacity-100 z-0" />

      {/* Top ID / Number badge */}
      <span className={`absolute top-4 right-5 text-xs font-mono tracking-widest z-10 transition-colors ${
        isHovered ? 'text-black/70 font-semibold' : 'text-white/40'
      }`}>
        {item.id}
      </span>

      {/* Top Icon */}
      <div className={`relative z-10 w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
        isHovered ? 'bg-black/10 text-black' : 'bg-blue-500/10 text-blue-400'
      }`}>
        <IconComponent size={22} />
      </div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col">
        <h3 className={`text-lg sm:text-xl font-extrabold tracking-wide uppercase truncate transition-colors mb-1 ${
          isHovered ? 'text-black' : 'text-white'
        }`}>
          {item.title}
        </h3>
        <p className={`text-xs sm:text-sm leading-relaxed transition-colors ${
          isHovered ? 'text-black/80 font-medium' : 'text-slate-400'
        }`}>
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function IndustriesSection() {
  return (
    <section className="relative w-full bg-[#000000] py-16 px-4 sm:px-6 select-none overflow-hidden">
      <div className="w-full max-w-[1750px] mx-auto">
        
        <div className="text-center mb-12">
          {/* SEO Optimized H2 Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
            Industries <span className="text-orange-500">We Empower with 3D & Web Solutions</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Explore cutting-edge 3D product configurators, architectural visualization, and digital solutions tailored for every sector.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industriesData.map((item) => (
            <IndustryCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}