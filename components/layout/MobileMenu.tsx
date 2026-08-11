'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@/constants/navigation';
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

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="fixed inset-x-0 top-[84px] bottom-0 z-40 bg-white border-t border-slate-100 lg:hidden flex flex-col shadow-2xl"
        >
          <div className="flex flex-col flex-1 px-6 max-sm:px-4 py-6 overflow-y-auto">
            <ul className="flex flex-col gap-y-3">
              {navItems.map((item, i) => {
                const active = isActive(item.href);
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
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
                  </motion.li>
                );
              })}
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
