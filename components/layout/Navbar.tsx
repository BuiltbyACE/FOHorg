'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { navItems } from '@/constants/navigation';
import type { NavItem, NavDropdownSection } from '@/types/navigation';
import Logo from '@/components/common/Logo';
import Button from '@/components/common/Button';

interface NavbarProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
  isScrolled?: boolean;
}

export default function Navbar({ onMenuToggle, isMenuOpen }: NavbarProps) {
  const pathname = usePathname();

  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between h-[76px] px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <Logo height={68} width={210} priority />

      <div className="hidden xl:flex items-center">
        <ul className="flex items-center gap-x-6 xl:gap-x-8">
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} pathname={pathname} />
          ))}
        </ul>
      </div>

      <div className="hidden xl:flex items-center flex-shrink-0">
        <Button href="/donations" variant="primary" size="md">
          Donate Now
          <Heart size={17} className="fill-white animate-pulse" />
        </Button>
      </div>

      <button
        className="xl:hidden flex items-center justify-center w-11 h-11 rounded-full bg-slate-100 text-[#081B63] hover:text-[#E91E63] hover:bg-pink-50 transition-colors"
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

function NavLink({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

  const content = (
    <Link
      href={item.href}
      className="relative inline-flex items-center py-2 group text-[14px] font-medium tracking-[0.02em] transition-colors duration-200"
      onMouseEnter={() => setOpen(true)}
      aria-haspopup={item.dropdown ? 'menu' : undefined}
      aria-expanded={item.dropdown ? open : undefined}
      onClick={() => item.dropdown && setOpen((o) => !o)}
    >
      <span
        className={`transition-colors duration-200 ${
          active ? 'text-[#E91E63] font-semibold' : 'text-[#081B63] group-hover:text-[#E91E63]'
        }`}
      >
        {item.label}
      </span>
      {item.dropdown && (
        <ChevronDown
          size={14}
          className={`ml-1 transition-transform duration-200 ${open ? 'rotate-180 text-[#E91E63]' : 'text-slate-400'}`}
        />
      )}
      {active && !item.dropdown && (
        <motion.span
          layoutId="activeNavIndicator"
          className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E91E63] rounded-full"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
      {!active && (
        <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-[#E91E63] rounded-full group-hover:w-full transition-all duration-300 ease-out" />
      )}
    </Link>
  );

  if (!item.dropdown) return <li className="relative">{content}</li>;

  const hasChildren = item.dropdown.some((s) => s.items.some((i) => i.children?.length));
  const menuWidth =
    item.dropdown.length > 1
      ? hasChildren
        ? 'w-[860px]'
        : 'w-[640px]'
      : 'w-[300px]';

  return (
    <li className="relative" onMouseLeave={() => setOpen(false)}>
      {content}
      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 ${menuWidth}`}
          >
            <div
              className={`grid gap-6 rounded-3xl bg-white border border-slate-100 shadow-2xl shadow-navy-950/10 p-6 ${
                item.dropdown.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
              }`}
            >
              {item.dropdown.map((section) => (
                <NavDropdownColumn key={section.title} section={section} onNavigate={() => setOpen(false)} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function NavDropdownColumn({
  section,
  onNavigate,
}: {
  section: NavDropdownSection;
  onNavigate: () => void;
}) {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-wider text-[#E91E63] mb-3 px-3">
        {section.title}
      </p>
      <ul className="space-y-1">
        {section.items.map((sub) =>
          sub.children?.length ? (
            <li key={sub.href}>
              <div className="px-3 py-2.5 rounded-xl">
                <p className="text-sm font-semibold text-[#081B63] mb-1.5 flex items-center gap-1.5">
                  <ChevronRight size={14} className="text-[#E91E63]" />
                  {sub.label}
                </p>
                <ul className="ml-2 border-l-2 border-pink-100 pl-3 space-y-0.5">
                  {sub.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        role="menuitem"
                        onClick={onNavigate}
                        className="flex items-center rounded-lg px-2 py-1.5 text-sm text-[#081B63] hover:bg-pink-50 hover:text-[#E91E63] transition-colors"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ) : (
            <li key={sub.href}>
              <Link
                href={sub.href}
                role="menuitem"
                onClick={onNavigate}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-[#081B63] hover:bg-pink-50 hover:text-[#E91E63] transition-colors"
              >
                {sub.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
