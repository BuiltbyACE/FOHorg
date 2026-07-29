'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { navItems } from '@/constants/navigation';
import Logo from '@/components/common/Logo';
import Button from '@/components/common/Button';

interface NavbarProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
  isScrolled?: boolean;
}

export default function Navbar({ onMenuToggle, isMenuOpen }: NavbarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between h-[84px] px-6 lg:px-12 transition-all duration-300">
      <Logo height={56} width={175} priority />

      <div className="hidden lg:flex items-center">
        <ul className="flex items-center gap-x-7 xl:gap-x-9">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  className="relative inline-flex items-center py-2 group text-[14px] font-medium tracking-[0.02em] transition-colors duration-200"
                >
                  <span
                    className={`transition-colors duration-200 ${
                      active ? 'text-[#E91E63] font-semibold' : 'text-[#081B63] group-hover:text-[#E91E63]'
                    }`}
                  >
                    {item.label}
                  </span>
                  {active ? (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E91E63] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ) : (
                    <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-[#E91E63] rounded-full group-hover:w-full transition-all duration-300 ease-out" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="hidden lg:flex items-center flex-shrink-0">
        <Button href="/donations" variant="primary" size="md">
          Donate Now
          <Heart size={17} className="fill-white animate-pulse" />
        </Button>
      </div>

      <button
        className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full bg-slate-100 text-[#081B63] hover:text-[#E91E63] hover:bg-pink-50 transition-colors"
        onClick={onMenuToggle}
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          {isMenuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>
    </div>
  );
}
