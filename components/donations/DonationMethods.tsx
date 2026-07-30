'use client';

import { motion } from 'framer-motion';
import { HeartHandshake, GraduationCap, Gift, Building2, Smartphone, Heart } from 'lucide-react';

const CalendarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const methods = [
  {
    Icon: HeartHandshake,
    title: 'One-Time Donation',
    desc: 'Make a single contribution to support our ongoing programs and projects wherever they are needed most.',
    accent: '#E91E63',
  },
  {
    Icon: null,
    CustomIcon: CalendarIcon,
    title: 'Monthly Partnership',
    desc: 'Become a monthly donor and help us plan, sustain, and grow our impact with predictable funding.',
    accent: '#081B63',
  },
  {
    Icon: GraduationCap,
    title: 'Sponsor a Child',
    desc: "Provide education, care, and hope by directly sponsoring a child's future and journey to success.",
    accent: '#E91E63',
  },
  {
    Icon: Gift,
    title: 'In-Kind Donation',
    desc: 'Donate goods, materials, or services that directly help empower communities and individuals.',
    accent: '#081B63',
  },
  {
    Icon: Building2,
    title: 'Bank Transfer',
    desc: 'Support us directly through secure, fully traceable bank transfers to our verified accounts.',
    accent: '#E91E63',
  },
  {
    Icon: Smartphone,
    title: 'M-Pesa Donation',
    desc: 'Quick and easy giving using M-Pesa mobile money — ideal for reaching those in need across Kenya.',
    accent: '#081B63',
  },
];

export default function DonationMethods() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E91E63] mb-3">
            Ways to Give
          </p>
          <h2 className="text-[#081B63] text-2xl md:text-[32px] font-extrabold leading-tight tracking-tight">
            Choose a Way to Give
          </h2>
          <p className="text-slate-500 text-base mt-4 max-w-xl mx-auto">
            Every form of generosity matters. Find the giving method that works best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((method, i) => {
            const Icon = method.Icon;
            const CustomIcon = method.CustomIcon;
            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
                className="group bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(8,27,99,0.06)] p-7 flex flex-col items-start relative overflow-hidden hover:shadow-[0_8px_40px_rgba(233,30,99,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Bottom accent bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: method.accent }}
                />

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: method.accent }}
                >
                  {Icon ? <Icon size={24} /> : CustomIcon ? <CustomIcon /> : null}
                </div>

                <h3 className="text-[#081B63] font-bold text-base tracking-tight mb-2">
                  {method.title}
                </h3>
                <p className="text-slate-500 text-[13.5px] leading-relaxed">
                  {method.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
