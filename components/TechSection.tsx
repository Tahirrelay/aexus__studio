'use client';
import React, { useState } from 'react';

const techStackData = [
  { id: "01", title: "UNREAL ENGINE", subtitle: "Real-time 3D creation", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg" },
  { id: "02", title: "3DS MAX", subtitle: "3D modeling & rendering", icon: "https://img.icons8.com/color/96/autodesk-3ds-max.png" },
  { id: "03", title: "CORONA", subtitle: "Photorealistic engine", icon: "https://i.pinimg.com/736x/78/bf/92/78bf922cdcf20c47583d1eb1a430c536.jpg" },
  { id: "04", title: "V-RAY", subtitle: "Advanced rendering", icon: "https://img.icons8.com/color/96/virtual-reality.png" },
  { id: "05", title: "ZBRUSH", subtitle: "Digital sculpting", icon: "https://img.icons8.com/color/96/3d-scale.png" },
  { id: "06", title: "SUBSTANCE", subtitle: "Texturing & materials", icon: "https://img.icons8.com/color/96/paint-palette.png" },
  { id: "07", title: "PHOTOSHOP", subtitle: "Visual post-processing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
  { id: "08", title: "AFTER EFFECTS", subtitle: "Motion graphics & VFX", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg" },
  { id: "09", title: "UNITY", subtitle: "Interactive experiences", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
  { id: "10", title: "PLAYCANVAS", subtitle: "WebGL 3D engine", icon: "https://img.icons8.com/color/96/source-code.png" },
  { id: "11", title: "MAYA", subtitle: "Animation & rigging", icon: "https://img.icons8.com/color/96/autodesk.png" },
  { id: "12", title: "BLENDER", subtitle: "Open-source 3D suite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
];

function TechCard({ item }: { item: typeof techStackData[0] }) {
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
      className="group relative flex flex-col items-center justify-center p-4 sm:p-5 h-[130px] sm:h-[155px] rounded-[24px] bg-[#070e17] border border-white/10 cursor-pointer overflow-hidden transition-all duration-500 hover:border-orange-500/40 shadow-xl text-center"
      style={{
        boxShadow: `
          rgba(0, 0, 0, 0.45) 0px -15px 25px 0px inset, 
          rgba(0, 0, 0, 0.35) 0px -30px 30px 0px inset, 
          rgba(0, 0, 0, 0.3) 0px 10px 20px 0px
        `
      }}
    >
      {/* Desktop Direction-Aware Hover Effect */}
      <div 
        className={`absolute w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-orange-600 via-orange-500 to-amber-300 transition-transform duration-500 ease-out pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0 hidden md:block ${
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
      <span className={`absolute top-3 right-4 text-[10px] font-mono tracking-widest z-15 transition-colors ${
        isHovered ? 'text-black/70 font-semibold' : 'text-white/40'
      }`}>
        {item.id}
      </span>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-2">
        <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
          <img 
            src={item.icon} 
            alt={item.title} 
            className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all"
          />
        </div>

        <div>
          <h4 className={`text-xs sm:text-sm font-extrabold tracking-wide uppercase truncate transition-colors ${
            isHovered ? 'text-black' : 'text-white'
          }`}>
            {item.title}
          </h4>
          <p className={`text-[10px] sm:text-[11px] mt-0.5 hidden sm:block transition-colors ${
            isHovered ? 'text-black/80 font-medium' : 'text-white/50'
          }`}>
            {item.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function RealTimeStackSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="relative w-full bg-[#333333] py-16 md:py-20 text-white overflow-hidden select-none">
      
      {/* Top Parallel Border Line */}
      <div className="w-full h-[1px] bg-white/15 max-w-[1600px] mx-auto mb-12" />

      {/* Main Content Wrapper */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
            Cinematic Real‑Time<span className="text-orange-500"> Technology</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-3 tracking-wide max-w-xl mx-auto font-medium">
            Powered by industry-standard tools to deliver high-end 3D environments, real-time configurators, and immersive web experiences.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Right Side Cards */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techStackData.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`${!showAll && index >= 6 ? 'hidden lg:flex' : 'flex'} flex-col`}
                >
                  <TechCard item={item} />
                </div>
              ))}
            </div>

            {/* See More / See Less Button for Mobile */}
            <div className="flex justify-center mt-2 lg:hidden">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:bg-orange-500 hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg"
              >
                {showAll ? 'Show Less' : 'See More Technologies'}
              </button>
            </div>
          </div>

          {/* Left Side Image Card */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl h-[300px] sm:h-[450px] lg:h-[600px] bg-[#121212]">
            <img 
              src="Interior_01.jpg" 
              alt="Real Time Technology" 
              className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>

      </div>

      {/* Bottom Parallel Border Line */}
      <div className="w-full h-[1px] bg-white/15 max-w-[1600px] mx-auto mt-12" />

    </section>
  );
}