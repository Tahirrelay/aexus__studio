'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

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
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-[999] bg-transparent py-6 px-6 md:px-12">
        <div className="w-full flex items-center justify-between">
          
          {/* Logo - Completely Left Corner */}
          <Link href="/" onClick={(e) => handleNavigation(e, '/')} className="flex items-center cursor-pointer">
            <div className="relative h-10 md:h-14 w-36 md:w-48">
              <Image
                src="/logo-images/Aexus-Logo.png"
                alt="Aexus Studios Logo"
                fill
                priority
                sizes="(max-width: 768px) 144px, 192px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Right Area - Get In Touch next to Menu Icon, all on Right Corner */}
          <div className="flex items-center gap-3">
            
            {/* Get In Touch */}
            <Link
              href="/contact"
              onClick={(e) => handleNavigation(e, '/contact')}
              className="inline-flex px-5 md:px-7 py-2.5 md:py-3 rounded-full border border-white/20 bg-transparent text-white font-semibold text-[10px] md:text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              GET IN TOUCH
            </Link>

            {/* Menu Button - Right Corner */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-transparent flex items-center justify-center text-white hover:bg-white/10 transition-all focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[998] bg-[#05060a]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6">
          
          <Link
            href="/#home"
            onClick={(e) => handleNavigation(e, '/#home')}
            className="text-2xl font-bold tracking-widest text-white hover:text-[var(--color-aexus-orange)] transition-colors uppercase"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={(e) => handleNavigation(e, '/about')}
            className="text-2xl font-bold tracking-widest text-white hover:text-[var(--color-aexus-orange)] transition-colors uppercase"
          >
            About Us
          </Link>

          <Link
            href="/#portfolio"
            onClick={(e) => handleNavigation(e, '/#portfolio')}
            className="text-2xl font-bold tracking-widest text-white hover:text-[var(--color-aexus-orange)] transition-colors uppercase"
          >
            Portfolio
          </Link>

          <Link
            href="/case-studies"
            onClick={(e) => handleNavigation(e, '/case-studies')}
            className="text-2xl font-bold tracking-widest text-white hover:text-[var(--color-aexus-orange)] transition-colors uppercase"
          >
            Case Studies
          </Link>

          <Link
            href="/contact"
            onClick={(e) => handleNavigation(e, '/contact')}
            className="px-8 py-3.5 rounded-full bg-[var(--color-aexus-orange)] text-black font-bold text-sm tracking-widest uppercase mt-4 shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </>
  );
}