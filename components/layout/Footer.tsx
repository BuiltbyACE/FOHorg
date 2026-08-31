'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Heart,
  MapPin,
  Phone,
  Mail,
  HeartPulse,
  Users,
  Send,
  CheckCircle,
} from 'lucide-react';
import { siteConfig } from '@/constants/site';
import Container from './Container';
import Logo from '@/components/common/Logo';
import SocialLinks from '@/components/common/SocialLinks';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Contact Us', href: '/contact' },
];

const programLinks = [
  { label: 'Maternal Health', href: '/programs/maternal-health', icon: HeartPulse },
  { label: 'Menstrual Health', href: '/programs/menstrual-health', icon: HeartPulse },
  { label: 'Family Planning', href: '/programs/family-planning', icon: Users },
  { label: 'Non-Communicable Diseases', href: '/programs/non-communicable-diseases-nutrition', icon: HeartPulse },
  { label: 'Peace Building', href: '/programs/peace-building', icon: Users },
  { label: 'Empowerment', href: '/programs/empowerment', icon: Users },
];

const contactDetails = [
  {
    label: 'Phone',
    value: '+254700123456',
    icon: Phone,
    href: 'tel:+254700123456',
  },
  {
    label: 'Email',
    value: 'cflgarissa007@gmail.com',
    icon: Mail,
    href: 'mailto:cflgarissa007@gmail.com',
  },
  {
    label: 'Location',
    value: ['Garissa County,', 'North Eastern Region,', 'Kenya'],
    icon: MapPin,
    href: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

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
    <footer className="bg-[#040E36] text-white relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/8 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 pt-20 pb-16"
        >
          {/* Column 1 - Brand */}
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-3">
            <Logo height={48} width={155} priority={false} />
          <p className="mt-5 text-slate-300 text-sm leading-relaxed max-w-xs">
              Fountain of Hope is a non-profit organization dedicated to empowering vulnerable families in Garissa County through maternal &amp; newborn health, education, and sustainable livelihoods.
            </p>
            <SocialLinks variant="dark" className="mt-6" />
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-white font-bold text-sm tracking-wide">
              Quick Links
            </h3>
            <div className="w-10 h-[3px] bg-[#E91E63] rounded-full mt-2.5 mb-6" />
            <ul className="space-y-3">
              {quickLinks.map((item) => (
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
          </motion.div>

          {/* Column 3 - Our Programs */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-white font-bold text-sm tracking-wide">
              Our Programs
            </h3>
            <div className="w-10 h-[3px] bg-[#E91E63] rounded-full mt-2.5 mb-6" />
            <ul className="space-y-3">
              {programLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-2.5 text-slate-300 text-sm hover:text-[#E91E63] transition-colors duration-200"
                    >
                      <Icon size={13} className="text-slate-500 group-hover:text-[#E91E63] transition-colors duration-200 flex-shrink-0" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Column 4 - Contact Us */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-white font-bold text-sm tracking-wide">
              Contact Us
            </h3>
            <div className="w-10 h-[3px] bg-[#E91E63] rounded-full mt-2.5 mb-6" />
            <ul className="space-y-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-pink-400 flex-shrink-0">
                      <Icon size={14} />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">
                        {item.label}
                      </p>
                      {Array.isArray(item.value) ? (
                        (item.value as string[]).map((line, i) => (
                          <p key={i} className="text-sm text-slate-200 leading-snug mt-0.5 first:mt-0.5">
                            {line}
                          </p>
                        ))
                      ) : (
                        <p className="text-sm text-slate-200 leading-snug mt-0.5">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </>
                );
                return (
                  <li key={item.label} className="flex items-start gap-3">
                    {item.href ? (
                      <a href={item.href} className="flex items-start gap-3 group">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Column 5 - Newsletter */}
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-3">
            <h3 className="text-white font-bold text-sm tracking-wide">
              Stay Updated
            </h3>
            <div className="w-10 h-[3px] bg-[#E91E63] rounded-full mt-2.5 mb-4" />
            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              Subscribe to receive impact updates, mission stories, and financial reports directly to your inbox.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-sm font-medium">
                <CheckCircle size={18} className="text-emerald-400 flex-shrink-0" />
                <span>Thank you for subscribing! Check your inbox for updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full h-11 pl-10 pr-4 rounded-full bg-white/[0.06] border border-white/[0.1] text-white text-sm placeholder-slate-400 focus:outline-none focus:border-[#E91E63]/60 focus:bg-white/[0.08] transition-all duration-300"
                    aria-label="Email for newsletter"
                    suppressHydrationWarning
                  />
                </div>
                <button
                  type="submit"
                  className="h-11 px-6 rounded-full bg-gradient-to-r from-[#E91E63] to-[#D81B60] text-white text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer"
                  suppressHydrationWarning>
                  <Send size={14} />
                  Subscribe
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>

      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06] relative z-10">
        <Container>
          <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-3 md:gap-0 py-6 text-xs text-slate-400">
            <p className="text-center md:text-left">
              &copy; Copyright {year} {siteConfig.name}. All Rights Reserved.
            </p>
            <div className="flex justify-center">
              <Heart size={14} className="text-[#E91E63] fill-[#E91E63]" />
            </div>
            <p className="text-center md:text-right font-heading font-semibold tracking-wide italic text-slate-300">
              Together, We Can Make a Difference
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
