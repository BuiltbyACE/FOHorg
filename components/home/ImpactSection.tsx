'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Droplets, BookOpen, HeartPulse, ShieldCheck, Heart } from 'lucide-react';

const stats = [
  {
    id: 'lives',
    value: 50000,
    suffix: '+',
    label: 'Lives Impacted Directly',
    description: 'Children, mothers, and families empowered with vital support.',
    icon: Users,
  },
  {
    id: 'communities',
    value: 120,
    suffix: '+',
    label: 'Rural Communities Reached',
    description: 'Active field projects across East and West Africa.',
    icon: ShieldCheck,
  },
  {
    id: 'water',
    value: 85,
    suffix: '+',
    label: 'Clean Water Systems Built',
    description: 'Providing sustainable clean water access daily.',
    icon: Droplets,
  },
  {
    id: 'students',
    value: 15000,
    suffix: '+',
    label: 'Students Educated',
    description: 'Classrooms built, teachers trained, scholarships awarded.',
    icon: BookOpen,
  },
  {
    id: 'funding',
    value: 95,
    suffix: '%',
    label: 'Direct Program Funding',
    description: 'Going directly into transparent field operations.',
    icon: Heart,
  },
];

function CountUpNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-extrabold tracking-tight">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function ImpactSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#081B63] text-white relative overflow-hidden">
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-900/40 via-[#081B63] to-[#040E36] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15 backdrop-blur-md">
            Measurable Global Reach
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Our Transparent Impact in Numbers
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Every donation directly feeds, educates, protects, and sustains lives. Here is what we have accomplished together with our global partners and donors.
          </p>
        </div>

        {/* Stats Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:bg-white/10 hover:border-pink-500/40 transition-all duration-300 group"
              >
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#E91E63] to-pink-400 flex items-center justify-center text-white mb-6 shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>

                {/* Animated Count Up Stat */}
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-white mb-2 text-pink-400 group-hover:text-pink-300 transition-colors">
                    <CountUpNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{stat.label}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{stat.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Transparency Guarantee Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-pink-500/20 via-white/5 to-blue-500/20 border border-white/15 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-pink-400 flex-shrink-0">
              <ShieldCheck size={26} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Full Financial Transparency & Accountability</h4>
              <p className="text-sm text-slate-300">Audited annually by independent international accounting firms.</p>
            </div>
          </div>
          
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-colors border border-white/20 flex-shrink-0"
          >
            View Financial Reports
          </a>
        </motion.div>

      </div>
    </section>
  );
}
