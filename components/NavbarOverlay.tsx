'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function NavbarOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      const targetPath = path === '' ? '/' : path;

      if (pathname === targetPath) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push(href);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <>
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-transparent pointer-events-auto">
        <Link href="/" onClick={(e) => handleNavigation(e, '/')} className="flex items-center cursor-pointer">
          <img 
            src="/logo-images/Aexus-Logo.png" 
            alt="Aexus Studios Logo" 
            className="h-14 md:h-16 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            onClick={(e) => handleNavigation(e, '/contact')}
            className="hidden sm:flex relative px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-sm tracking-widest hover:bg-[var(--color-aexus-orange)] hover:border-[var(--color-aexus-orange)] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,165,0,0.5)] items-center gap-2 animate-pulse cursor-pointer"
          >
            GET IN TOUCH
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
          </Link>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 flex flex-col items-center justify-center gap-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full cursor-pointer group z-50 hover:border-[var(--color-aexus-orange)] transition-all"
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>

      {/* Menu Overlay with #333333 background */}
      <div className={`fixed inset-0 bg-[#333333]/90 backdrop-blur-md z-40 transition-transform duration-500 ease-in-out flex items-start justify-end px-8 md:px-32 pt-28 md:pt-32 overflow-y-auto ${isOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'}`}>
        <nav className="flex flex-col gap-3 md:gap-4 text-2xl md:text-4xl font-extrabold tracking-tight text-right text-white">
          <Link href="/#home" onClick={(e) => handleNavigation(e, '/#home')} className="hover:text-[var(--color-aexus-orange)] transition-colors duration-200 cursor-pointer">Home</Link>
          <Link href="/about" onClick={(e) => handleNavigation(e, '/about')} className="hover:text-[var(--color-aexus-orange)] transition-colors duration-200 cursor-pointer">About Us</Link>
          <Link href="/portfolio" onClick={(e) => handleNavigation(e, '/portfolio')} className="hover:text-[var(--color-aexus-orange)] transition-colors duration-200 cursor-pointer">Portfolio</Link>
          <Link href="/case-studies" onClick={(e) => handleNavigation(e, '/case-studies')} className="hover:text-[var(--color-aexus-orange)] transition-colors duration-200 cursor-pointer">Case Studies</Link>
          <Link href="/contact" onClick={(e) => handleNavigation(e, '/contact')} className="hover:text-[var(--color-aexus-orange)] transition-colors duration-200 cursor-pointer">Contact</Link>
        </nav>
      </div>
    </>
  );
}