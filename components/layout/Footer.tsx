'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { navItems } from '@/constants/navigation';
import { siteConfig } from '@/constants/site';
import Container from './Container';
import Logo from '@/components/common/Logo';
import SocialLinks from '@/components/common/SocialLinks';

const programLinks = [
  { label: 'Education', href: '/programs' },
  { label: 'Healthcare', href: '/programs' },
  { label: 'Community', href: '/programs' },
  { label: 'Emergency Relief', href: '/programs' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#040E36] text-white pt-20 pb-12 relative overflow-hidden border-t border-white/10">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Logo height={52} width={160} priority={false} />
            <p className="mt-5 text-slate-300 text-sm leading-relaxed max-w-sm">
              Fountain of Hope is a global organization dedicated to empowering vulnerable communities through education, clean water, healthcare, and sustainable growth.
            </p>
            
            <SocialLinks variant="dark" className="mt-6" />
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-5 text-pink-300">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300 text-sm hover:text-[#E91E63] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-5 text-pink-300">
              Our Initiatives
            </h3>
            <ul className="space-y-3">
              {programLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-300 text-sm hover:text-[#E91E63] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-5 text-pink-300">
              Stay Inspired & Connected
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Subscribe to receive authentic impact updates, mission field stories, and financial report releases directly to your inbox.
            </p>
            {subscribed ? (
              <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-semibold">
                Thank you for subscribing! Check your email for our latest field report.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="h-12 px-5 rounded-full bg-white/10 text-white text-sm placeholder-slate-400 border border-white/20 focus:outline-none focus:border-[#E91E63] transition-colors"
                  aria-label="Email address for newsletter"
                  suppressHydrationWarning
                />
                <button
                  type="submit"
                  className="h-12 px-6 rounded-full bg-gradient-to-r from-[#E91E63] to-[#D81B60] text-white text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 cursor-pointer"
                  suppressHydrationWarning
                >
                  Subscribe to Newsletter
                </button>
              </form>
            )}
          </div>

        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-8">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
            <p>&copy; {year} {siteConfig.name}. All rights reserved. Registered 501(c)(3) Organization.</p>
            <p className="flex items-center gap-1.5">
              Made with <Heart size={14} className="text-[#E91E63] fill-[#E91E63]" /> for humanity &amp; hope worldwide.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
