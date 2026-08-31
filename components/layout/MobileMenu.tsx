'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@/constants/navigation';
import type { NavItem } from '@/types/navigation';
import Button from '@/components/common/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="fixed inset-x-0 top-[76px] bottom-0 z-40 bg-white border-t border-slate-100 xl:hidden flex flex-col shadow-2xl"
        >
          <div className="flex flex-col flex-1 px-6 max-sm:px-4 py-6 overflow-y-auto">
            <ul className="flex flex-col gap-y-3">
              {navItems.map((item, i) => (
                <MobileLink
                  key={item.href}
                  item={item}
                  index={i}
                  pathname={pathname}
                  onClose={onClose}
                />
              ))}
            </ul>

            <div className="mt-auto pt-6 pb-6 border-t border-slate-100">
              <Button
                href="/donations"
                size="lg"
                className="w-full justify-center"
                onClick={onClose}
              >
                Donate Now
                <Heart size={18} className="fill-white" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MobileLink({
  item,
  index,
  pathname,
  onClose,
}: {
  item: NavItem;
  index: number;
  pathname: string;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

  return (
    <motion.li
      key={item.href}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.04, duration: 0.2 }}
    >
      {item.dropdown ? (
        <div className="rounded-2xl overflow-hidden">
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className={`w-full flex items-center justify-between text-[15px] font-bold uppercase tracking-[0.05em] px-4 py-3.5 rounded-2xl transition-all duration-200 ${
              active
                ? 'bg-[#FFF3F8] text-[#E91E63]'
                : 'text-[#081B63] hover:bg-slate-50 hover:text-[#E91E63]'
            }`}
          >
            <span>{item.label}</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${open ? 'rotate-180 text-[#E91E63]' : 'text-slate-400'}`}
            />
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pl-3 mt-1 flex flex-col gap-1 border-l-2 border-pink-100 ml-6">
                  {item.dropdown.map((section) => (
                    <div key={section.title} className="py-1">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#E91E63] px-4 pt-2 pb-1">
                        {section.title}
                      </p>
                      <ul className="mb-1">
                        {section.items.map((sub) =>
                          sub.children?.length ? (
                            <li key={sub.href} className="px-4 py-1.5">
                              <p className="flex items-center gap-1.5 text-sm font-semibold text-[#081B63]">
                                {sub.label}
                              </p>
                              <ul className="mt-1 ml-3 border-l-2 border-pink-100 pl-3">
                                {sub.children.map((child) => (
                                  <li key={child.href}>
                                    <Link
                                      href={child.href}
                                      onClick={onClose}
                                      className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-[#081B63] hover:bg-pink-50 hover:text-[#E91E63] transition-colors"
                                    >
                                      {child.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ) : (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                onClick={onClose}
                                className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-[#081B63] hover:bg-pink-50 hover:text-[#E91E63] transition-colors"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <Link
          href={item.href}
          onClick={onClose}
          className={`flex items-center justify-between text-[15px] font-bold uppercase tracking-[0.05em] px-4 py-3.5 rounded-2xl transition-all duration-200 ${
            active
              ? 'bg-[#FFF3F8] text-[#E91E63]'
              : 'text-[#081B63] hover:bg-slate-50 hover:text-[#E91E63]'
          }`}
        >
          <span>{item.label}</span>
          {active && (
            <span className="w-2 h-2 rounded-full bg-[#E91E63]" />
          )}
        </Link>
      )}
    </motion.li>
  );
}
