'use client';
import React, { useRef, useEffect, useState } from 'react';

const reviews = [
  {
    id: 1,
    quote: "I had a good experience working with Aexus Studios. One thing that really stood out was how responsive he was throughout the project.",
    name: "Jess",
    project: "3D Kitchen Configurator",
    metric: "Configurator"
  },
  {
    id: 2,
    quote: "Working with them was a seamless experience. They understood our complex requirements for the VR space and delivered a flawless application that our clients love.",
    name: "Mike",
    project: "Jacket Configurator",
    metric: "Configurator"
  },
  {
    id: 3,
    quote: "Aexus was timely with all work and communication. Renderings were precise and he was able to deliver everything we need exactly as we needed it.",
    name: "Samuel",
    project: "Graveyard Rendering",
    metric: "3D Rendering"
  },
  {
    id: 4,
    quote: "Thank you for the outstanding job Aexus. Your attention to detail transformed my space beyond expectations. Communication was excellent, and you met deadlines with efficiency. I've received numerous compliments and wholeheartedly recommend your services. Looking forward to future collaborations.",
    name: "Shafin",
    project: "Fan Rendering",
    metric: "Rendering"
  },
  {
    id: 5,
    quote: "The level of creativity and technical execution they brought to our web animation project exceeded all expectations. Our conversion rates have doubled since launch.",
    name: "Kashif",
    project: "Entrance Rendering",
    metric: "3D Rendering"
  },
  {
    id: 6,
    quote: "Fast communication, brilliant problem-solving skills, and a final product that looks straight out of the future. Highly recommended for any advanced web tech project.",
    name: "Elena Rostova",
    project: "Immersive Web Experience",
    metric: "Web Development"
  }
];

export default function ClientReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Pure Auto-Slide Marquee Effect (ignores hover pause so it never stops sliding)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 1; // Auto-slide speed

    const step = () => {
      if (!isDraggingRef.current) {
        container.scrollLeft += speed;
        // Seamless infinite loop reset
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    if (scrollRef.current) {
      startXRef.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeftRef.current = scrollRef.current.scrollLeft;
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  // Touch Handlers for Mobile / Tablets
  const handleTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true;
    if (scrollRef.current) {
      startXRef.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
      scrollLeftRef.current = scrollRef.current.scrollLeft;
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  // Duplicate array for seamless infinite looping effect
  const marqueeReviews = [...reviews, ...reviews];

  return (
    <section className="w-full bg-[#333333] py-16 md:py-20 relative overflow-hidden select-none">
      
      {/* Top Parallel Border Line */}
      <div className="w-full h-[1px] bg-white/15 max-w-[1600px] mx-auto mb-12" />

      {/* Background ambient lighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/5 blur-[140px] pointer-events-none rounded-full"></div>

      <div className="w-full">
        {/* Header container */}
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 mb-8 md:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
          <div>
            <span className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-2 block">
              
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
              Proof of <span className="text-orange-500">Trust</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-md font-medium">
            Discover how our high-end 3D solutions and interactive digital experiences are driving massive results for global brands.
          </p>
        </div>

        {/* Auto-Sliding & Draggable Marquee Container */}
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => { isDraggingRef.current = false; setHoveredIndex(null); }}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
          className="w-full flex gap-4 sm:gap-6 overflow-x-hidden pb-4 pt-2 px-4 md:px-8 lg:px-12 cursor-grab active:cursor-grabbing relative z-10 scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {marqueeReviews.map((review, index) => {
            const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <div 
                key={`${review.id}-${index}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`flex-none w-[75vw] sm:w-[360px] md:w-[420px] lg:w-[460px] flex flex-col justify-between bg-[#070e17] rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 md:p-10 border transition-all duration-500 shadow-2xl ${
                  isDimmed 
                    ? 'opacity-25 scale-[0.98] blur-[1px] border-white/10' 
                    : hoveredIndex === index 
                    ? 'opacity-100 scale-[1.02] border-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.6)]' 
                    : 'opacity-100 border-white/10'
                }`}
              >
                {/* Top Row: Metric Tag & Quote Icon */}
                <div className="flex items-center justify-between mb-4 sm:mb-8">
                  <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] sm:text-xs font-bold tracking-wide">
                    {review.metric}
                  </span>
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white/25 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote Text */}
                <div className="mb-6 sm:mb-10">
                  <p className="text-gray-300 text-xs sm:text-base md:text-lg leading-relaxed font-normal">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                {/* Bottom Client Info */}
                <div className="mt-auto pt-4 sm:pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-0.5 sm:mb-1">
                      {review.project}
                    </h3>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-400">
                      <span className="text-white font-medium">{review.name}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                    
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 transition-all duration-300">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 -rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
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