'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Automatically close mobile menu when navigating to another page
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-xl shadow-md shadow-slate-900/5 border-b border-slate-100/80'
            : 'bg-white border-b border-slate-100/60'
        }`}
      >
        <Navbar
          onMenuToggle={() => setIsOpen((prev) => !prev)}
          isMenuOpen={isOpen}
          isScrolled={isScrolled}
        />
      </header>
      {/* NOTE: MobileMenu must stay OUTSIDE the <header> — the header's
          backdrop-filter would otherwise become the containing block for its
          fixed positioning and break the menu when scrolled mid-page. */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
