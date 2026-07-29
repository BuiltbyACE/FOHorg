'use client';

import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/92 backdrop-blur-md shadow-md'
          : 'bg-white'
      }`}
    >
      <Navbar
        onMenuToggle={() => setIsOpen((prev) => !prev)}
        isMenuOpen={isOpen}
      />
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
