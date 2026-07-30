'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, PieChart, FileText, Search, ChevronRight } from 'lucide-react';

const metrics = [
  { icon: Search,     value: '100%',        label: 'Transparency' },
  { icon: ShieldCheck,value: 'Secure',       label: 'Protected Giving' },
  { icon: PieChart,   value: '90%+',         label: 'To Programs' },
  { icon: FileText,   value: 'Annual',       label: 'Public Reports' },
];

const impactItems = [
  'Quality education for children',
  'Healthcare for mothers & families',
  'Skills & entrepreneurship training',
  'Clean water & sanitation projects',
  'Hope, dignity & a better future',
];

export default function TransparencyPanel() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="bg-[#081B63] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E91E63]/8 rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E91E63] mb-4">
                Full Accountability
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
                <span className="text-white">Transparency</span>
                <br />
                <span className="text-[#E91E63]">You Can Trust</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mt-5 max-w-[460px]">
                We are deeply committed to accountability. Every donation is tracked,
                reported, and allocated where it creates maximum impact.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-8">
                {metrics.map((m) => {
                  const Icon = m.icon;
                  return (
                    <div key={m.label} className="flex flex-col items-start">
                      <div className="w-10 h-10 rounded-lg bg-white/8 border border-[#E91E63]/25 flex items-center justify-center text-[#E91E63]">
                        <Icon size={18} />
                      </div>
                      <p className="text-white text-2xl font-extrabold mt-3 leading-none">{m.value}</p>
                      <p className="text-white/45 text-xs font-semibold mt-1">{m.label}</p>
                    </div>
                  );
                })}
              </div>

              <a
                href="/financials"
                className="inline-flex items-center gap-2 mt-9 h-[48px] px-7 rounded-[6px] border border-[#E91E63]/60 text-[#E91E63] font-bold text-sm uppercase tracking-[0.07em] hover:bg-[#E91E63] hover:text-white hover:border-[#E91E63] transition-all duration-250"
              >
                View Financial Reports
                <ChevronRight size={16} />
              </a>
            </motion.div>

            {/* Right — image + impact card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                  alt="Accountability and transparency at Fountain of Hope"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B63]/40 to-transparent" />
              </div>

              {/* Impact card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-5 max-w-[240px]">
                <h4 className="text-[#E91E63] font-bold text-xs uppercase tracking-[0.12em]">
                  Your Impact in Action
                </h4>
                <ul className="mt-3 space-y-2">
                  {impactItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#081B63] text-[12px] leading-snug">
                      <Check size={12} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
