import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title: 'Thank You | Aexus Studios',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#000000] flex items-center justify-center px-4 overflow-hidden font-sans select-none">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#ff8800]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Card Container */}
      <div className="relative w-full max-w-2xl bg-[#0b0d13]/90 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col items-center text-center backdrop-blur-xl">
        
        {/* Top Accent Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#ff8800] to-transparent" />

        {/* Logo / Brand Image */}
        <div className="w-full flex items-center justify-center mb-8">
          <Image 
            src="/logo-images/Aexus-Logo.png" 
            alt="Aexus Studios Logo" 
            width={220} 
            height={60} 
            className="h-10 sm:h-12 w-auto object-contain"
            priority
          />
        </div>

        {/* Success Check Icon */}
        <div className="w-16 h-16 rounded-full border border-[#ff8800]/30 bg-[#ff8800]/10 flex items-center justify-center text-[#ff8800] mb-6 shadow-[0_0_30px_rgba(255,136,0,0.2)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Heading */}
        <span className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-[#ff8800] mb-2 block">
          SUBMITTED SUCCESSFULLY
        </span>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight uppercase text-white mb-4">
          Thank you for reaching out.
        </h1>
        <p className="text-sm text-white/60 max-w-md mb-8 leading-relaxed">
          We have received your project details. Our team will review your requirements and contact you shortly.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-sm justify-center">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#ff8800] text-black font-black text-xs uppercase tracking-wider hover:bg-[#ffa733] transition-all shadow-[0_4px_0_#b35f00] active:translate-y-0.5 text-center"
          >
            Back to Homepage
          </Link>
          <Link
            href="/#portfolio"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center"
          >
            View Our Work
          </Link>
        </div>

        {/* Footer info inside card */}
        <div className="mt-10 pt-6 border-t border-white/10 w-full text-center">
          <p className="text-[11px] text-white/40">
            info@aexusstudios.com &bull; +92 339 0095259
          </p>
          <p className="text-[10px] text-white/30 mt-1">
            Aexus Studios — Custom digital experiences built for business.
          </p>
        </div>

      </div>
    </main>
  );
}