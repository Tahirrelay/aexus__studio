'use client';
import { useState, useEffect } from 'react';

const slides = [
  {
    id: '01',
    title: 'EXTERIOR_RENDERING',
    alt: '3D Exterior Architectural Rendering and Visualization Services',
    image: "/Hero/Exterior_Rendering.jpg"
  },
  {
    id: '02',
    title: 'INTERIOR_RENDERING',
    alt: 'Photorealistic Interior Architectural Rendering and Design',
    image: "/Hero/interior_Rendering.jpg"
  },
  {
    id: '03',
    title: 'FLOORPLAN_RENDERING',
    alt: 'Interactive 3D Floorplan Rendering Solutions',
    image: "/Hero/FLOOR.png"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (distance < -minSwipeDistance) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section 
      className="relative w-full h-[65vh] sm:h-[75vh] md:h-screen bg-[#000000] overflow-hidden flex items-center justify-center select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
    >
      {/* SEO Optimized Hidden H1 for Search Engine Indexing */}
      <h1 className="sr-only">
        3D Architectural Rendering, Visualization & Product Configurator Agency | Aexus Studios
      </h1>

      <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
        {slides.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={s.image}
              alt={s.alt}
              className="w-full h-full object-cover object-center bg-[#000000]"
            />
          </div>
        ))}
      </div>

      {/* Indicator positioned inside the bottom space on mobile */}
      <div 
        className="absolute bottom-3 left-6 md:left-12 md:top-1/2 md:-translate-y-[40%] md:bottom-auto z-25 flex md:flex-col items-center gap-3 md:gap-4 cursor-pointer"
      >
        <span className="text-xs md:text-sm font-bold tracking-widest text-[var(--color-aexus-orange)]">
          {slide.id}
        </span>
        <div className="hidden md:block w-[1px] h-16 bg-white/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-aexus-orange)] animate-pulse" />
        </div>
        <div className="block md:hidden w-8 h-[1px] bg-white/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-aexus-orange)] animate-pulse" />
        </div>
        <span className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase text-white/80 md:[writing-mode:vertical-lr] md:rotate-180 font-medium whitespace-nowrap">
          {slide.title}
        </span>
      </div>

      {/* Bottom-Right WhatsApp Floating Button */}
      <a
        href="https://wa.me/03390095259"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()} 
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </section>
  );
}