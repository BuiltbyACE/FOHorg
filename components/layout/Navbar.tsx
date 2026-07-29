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
}

export default function Navbar({ onMenuToggle, isMenuOpen }: NavbarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <div className="max-w-[1280px] mx-auto flex items-center justify-between h-[90px] px-10 max-lg:px-6 max-sm:px-4">
      <Logo height={65} width={180} />

      <div className="hidden lg:flex items-center">
        <ul className="flex items-center gap-x-5 xl:gap-x-7">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li
                key={item.href}
                className="relative"
              >
                <Link
                  href={item.href}
                  className="relative inline-block py-1 group"
                >
                  <span
                    className={`text-[14px] font-medium uppercase tracking-[0.05em] transition-colors duration-[250ms] ${
                      active ? 'text-primary' : 'text-navy group-hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </span>
                  <motion.span
                    className="absolute -bottom-0 left-0 h-[2px] bg-primary rounded-full"
                    animate={{ width: active ? '100%' : '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="hidden lg:flex items-center flex-shrink-0">
        <Button href="/donate">
          Donate Now
          <Heart size={16} className="fill-white" />
        </Button>
      </div>

      <button
        className="lg:hidden flex items-center justify-center w-10 h-10 text-navy hover:text-primary transition-colors duration-[250ms]"
        onClick={onMenuToggle}
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
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
