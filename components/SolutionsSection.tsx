'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const solutions = [
  {
    id: '01',
    title: 'Interactive Configurators',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    link: '#'
  },
  {
    id: '02',
    title: 'Photoreal 3D Rendering',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    link: '#'
  },
  {
    id: '03',
    title: 'Immersive VR Experiences',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80',
    link: '#'
  },
  {
    id: '04',
    title: 'Dynamic Motion Graphics',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    link: '#'
  },
  {
    id: '05',
    title: 'Engaging 2D Animation',
    image: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&w=1200&q=80',
    link: '#'
  },
  {
    id: '06',
    title: 'Sales-Driven Commercials',
    image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=1200&q=80',
    link: '#'
  },
  {
    id: '07',
    title: 'Architectural Digital Twin',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    link: '#'
  },
  {
    id: '08',
    title: 'Next-Gen E-Commerce',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    link: '#'
  }
];

export default function SolutionsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 1;

    const step = () => {
      if (!isDragging && !isPausedRef.current) {
        container.scrollLeft += speed;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section className="relative w-full bg-[#333333] py-16 text-white overflow-hidden select-none">
      
      {/* Top Parallel Border Line */}
      <div className="w-full h-[1px] bg-white/15 max-w-[1600px] mx-auto mb-12" />

      {/* Main Wrapper taking full width edge-to-edge for slider */}
      <div className="w-full">
        
        {/* Header container with padding */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-left uppercase">
            Turning Technology <span className="text-orange-500">Into Results</span>
          </h2>

          <Link 
            href="#"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-90 text-white font-bold text-xs md:text-sm tracking-wider transition-all duration-300 shadow-lg"
          >
            Start Your Project
          </Link>
        </div>

        {/* Auto-Scrolling & Draggable Container */}
        <div 
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { setIsDragging(false); isPausedRef.current = false; }}
          onTouchStart={() => { isPausedRef.current = true; }}
          onTouchEnd={() => { isPausedRef.current = false; }}
          className="relative w-full overflow-x-auto flex py-4 px-4 sm:px-8 gap-4 sm:gap-6 scrollbar-none cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[...solutions, ...solutions].map((item, index) => {
            const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
            
            return (
              <div 
                key={`${item.id}-${index}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ perspective: '1000px' }}
                className={`w-[240px] sm:w-[300px] md:w-[380px] flex-shrink-0 flex flex-col bg-[#070e17] border rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden p-2.5 sm:p-3 transition-all duration-500 shadow-xl ${
                  isDimmed 
                    ? 'opacity-30 blur-[1px] scale-[0.98] border-white/10' 
                    : hoveredIndex === index 
                    ? 'opacity-100 scale-[1.02] border-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.6)]' 
                    : 'opacity-100 border-white/10'
                }`}
              >
                {/* Image Box */}
                <div className="relative w-full h-44 sm:h-60 md:h-72 rounded-[1.2rem] sm:rounded-[1.5rem] overflow-hidden bg-black/40 pointer-events-none">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Title Below Image */}
                <div className="py-3 sm:py-4 px-2 sm:px-3 flex items-center justify-between">
                  <h3 className="text-xs sm:text-base md:text-xl font-bold text-white tracking-wide whitespace-normal">
                    {item.title}
                  </h3>
                  <span className="text-[10px] sm:text-xs font-mono text-white/40">{item.id}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Bottom Parallel Border Line */}
      <div className="w-full h-[1px] bg-white/15 max-w-[1600px] mx-auto mt-12" />

    </section>
  );
}