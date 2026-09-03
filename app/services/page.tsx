'use client';
import { useState } from 'react';
import Footer from '@/components/Footer'; // Apne folder path ke mutabiq adjust kar lein

export default function ServicesMainPage() {
  const allServices = [
    { 
      title: 'Architecture Visualization', 
      desc: 'Transforms architectural designs into highly realistic 3D models and renderings. This helps clients visualize a building or a space before...',
      bgImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop'
    },
    { 
      title: 'Configurator', 
      desc: 'Builds interactive digital tools that allow customers to customize a product in real-time. This provides a personalized shopping experience for...',
      bgImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop'
    },
    { 
      title: 'Digital Marketing', 
      desc: 'Devises strategies to promote businesses and products online through various channels like SEO, social media, and email campaigns. Aims to...',
      bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
    },
    { 
      title: '3D Animation', 
      desc: 'Develops compelling three-dimensional animated videos for product showcases, explainer videos, or short films. It brings concepts and characters to life...',
      bgImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop'
    },
    { 
      title: 'Web-Development', 
      desc: 'Designs and builds professional, responsive websites and web applications from the ground up. Focuses on creating a fast, secure, and...',
      bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop'
    },
    { 
      title: 'Real-Time Tour', 
      desc: 'Develops interactive tours that can be experienced live, often with an expert guide, in a virtual environment. This offers a...',
      bgImage: 'https://images.unsplash.com/photo-1527842891421-42eec6e703ea?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-[#04060b] text-white flex flex-col justify-between">
      {/* Main Content Area */}
      <div className="pt-32 pb-20 px-6 lg:px-20 max-w-7xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="mb-16 text-center">
          <span className="text-xs font-extrabold tracking-[0.3em] text-[#ff6600] uppercase mb-3 block">
            WHAT WE OFFER
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-4">
            Our Services
          </h1>
          <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto">
            Explore our comprehensive suite of cutting-edge creative, 3D, and software development services built for modern brands.
          </p>
        </div>

        {/* Services Grid with Image Card Design & Hover Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <div 
              key={index}
              className="group relative h-96 rounded-3xl overflow-hidden border border-white/10 hover:border-[#ff6600] transition-all duration-500 shadow-2xl cursor-pointer flex flex-col justify-end p-8"
            >
              {/* Background Image with Zoom Effect */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#04060b] via-[#04060b]/70 to-transparent transition-opacity duration-500" />

              {/* Content Positioned at Bottom */}
              <div className="relative z-10">
                <h3 className="text-2xl font-black uppercase tracking-wide text-white group-hover:text-[#ff6600] transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed font-medium line-clamp-3">
                  {service.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                  <span>Explore capability</span>
                  <span className="text-[#ff6600] group-hover:translate-x-1 transition-transform text-base">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Imported Global Footer Component */}
      <Footer />
    </div>
  );
}