'use client';

import { motion } from 'framer-motion';
import { Users, Handshake, Target, BarChart3, Megaphone, HeartHandshake } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Expand Your Impact',
    desc: 'Help more communities and create lasting positive change.',
  },
  {
    icon: Handshake,
    title: 'Meaningful Collaboration',
    desc: 'Work alongside a trusted organization with a strong track record.',
  },
  {
    icon: Target,
    title: 'Achieve Shared Goals',
    desc: 'Align your vision with our mission for sustainable development.',
  },
  {
    icon: BarChart3,
    title: 'Transparency & Accountability',
    desc: 'We ensure clear reporting and responsible use of resources.',
  },
  {
    icon: Megaphone,
    title: 'Brand Visibility',
    desc: 'Gain recognition and visibility as a champion for social good.',
  },
  {
    icon: HeartHandshake,
    title: 'Strong Community Relationships',
    desc: 'Build trust and stronger relationships within local communities.',
  },
];

export default function WhyPartnerSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-12 lg:mb-14">
          <p className="text-[#E91E63] text-[11px] font-bold uppercase tracking-[0.22em] mb-3">
            Why Partner With Us
          </p>
          <h2
            className="font-extrabold uppercase leading-tight tracking-[-0.01em] mb-4"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}
          >
            <span className="text-[#081B63]">Stronger Together, </span>
            <span className="text-[#E91E63]">Greater Impact</span>
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed max-w-[560px] mx-auto">
            We believe in the power of collaboration. Our partners help us expand our reach,
            enhance our programs, and bring hope to more lives.
          </p>
        </div>

        {/* 6-column benefits grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                className="flex flex-col items-center text-center gap-3 px-1"
              >
                <div className="w-[52px] h-[52px] rounded-full bg-pink-50 flex items-center justify-center text-[#E91E63] flex-shrink-0">
                  <Icon size={24} strokeWidth={1.75} />
                </div>
                <h3 className="text-[#081B63] font-bold text-[12px] uppercase tracking-[0.04em] leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-[12px] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
