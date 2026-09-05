'use client';
import { useRef } from 'react';

const clientLogos = [
  { name: 'Ashaab', logo: '/images/clients/ashaab.jpeg' },
  { name: 'CE', logo: '/images/clients/ce.jpeg' },
  { name: 'Commtel', logo: '/images/clients/commtel.jpeg' },
  { name: 'DHA City', logo: '/images/clients/dha.jpeg' },
  { name: 'Ehsan Associates', logo: '/images/clients/ehsan.jpeg' },
  { name: 'Lakhani Properties', logo: '/images/clients/lakhani.jpeg' },
  { name: 'Nexgen', logo: '/images/clients/nexgen.jpeg' },
  { name: 'Stadium View', logo: '/images/clients/stadium.jpeg' },
];

export default function ClientSlider() {
  return (
    <section className="relative w-full py-6 md:py-8 bg-[#000000] overflow-hidden select-none flex items-center">
      
      {/* Main Strip with Top and Bottom Borders */}
      <div className="w-full border-t border-b border-white/15 py-3 md:py-4 relative overflow-hidden flex items-center">
        
        {/* Left & Right Smooth Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#000000] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#000000] to-transparent z-10 pointer-events-none" />

        {/* Continuous Marquee Track */}
        <div className="flex w-max items-center animate-marquee">
          {[...clientLogos, ...clientLogos].map((client, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-center justify-center shrink-0 px-6 md:px-10 py-3 md:py-4 border-r border-white/15 transition-all duration-300 hover:bg-white/[0.03] hover:shadow-[0_0_25px_rgba(255,102,0,0.35)] hover:border-[var(--color-aexus-orange)]/50"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-[35px] sm:h-[42px] md:h-[50px] max-w-[120px] sm:max-w-[140px] md:max-w-[160px] w-auto object-contain transition-all duration-300 pointer-events-none mb-2"
              />
              <span className="text-white/80 group-hover:text-white text-xs sm:text-sm font-medium tracking-wider uppercase transition-colors duration-300 text-center whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}