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
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
          className="fixed inset-0 top-[90px] z-40 bg-white lg:hidden"
        >
          <div className="flex flex-col h-full px-6 max-sm:px-4 py-8 overflow-y-auto">
            <ul className="flex flex-col gap-y-5">
              {navItems.map((item, i) => {
                const active = isActive(item.href);
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`block text-[16px] font-medium uppercase tracking-[0.05em] py-2 transition-colors duration-[250ms] ${
                        active ? 'text-primary' : 'text-navy hover:text-primary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <div className="mt-auto pb-8">
              <Button
                href="/donate"
                size="lg"
                className="w-full"
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
