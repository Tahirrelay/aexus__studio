'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function MinimalHeader() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-[999] bg-transparent py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <img 
              src="/logo-images/Aexus-Logo.png" 
              alt="Aexus Studios Logo" 
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Right Area: GET IN TOUCH & Menu Icon */}
          <div className="flex items-center gap-4">
            <Link 
              href="/contact" 
              className="hidden sm:inline-flex px-7 py-3 rounded-full border border-white/20 bg-transparent text-white font-semibold text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              GET IN TOUCH
            </Link>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-12 h-12 rounded-full border border-white/20 bg-transparent flex items-center justify-center text-white hover:bg-white/10 transition-all focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile / Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[998] bg-[#05060a]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold tracking-widest text-white hover:text-[var(--color-aexus-orange)] transition-colors uppercase">
            Home
          </Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold tracking-widest text-white hover:text-[var(--color-aexus-orange)] transition-colors uppercase">
            Services
          </Link>
          <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold tracking-widest text-white hover:text-[var(--color-aexus-orange)] transition-colors uppercase">
            Portfolio
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold tracking-widest text-white hover:text-[var(--color-aexus-orange)] transition-colors uppercase">
            About Us
          </Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="px-8 py-3.5 rounded-full bg-[var(--color-aexus-orange)] text-black font-bold text-sm tracking-widest uppercase mt-4 shadow-lg">
            Get In Touch
          </Link>
        </div>
      )}
    </>
  );
}