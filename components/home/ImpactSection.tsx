'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, HeartHandshake, BookOpen, Globe, Award } from 'lucide-react';

const stats = [
  { value: '10,500+', label: 'Children in Education', icon: BookOpen },
  { value: '3,500+', label: 'Youth Trained', icon: Users },
  { value: '1,400+', label: 'CHVs & CBDs Trained', icon: HeartHandshake },
  { value: '300,000+', label: 'Reached via Community Radio', icon: Globe },
  { value: '14,000+', label: 'Peacebuilding Sensitized', icon: Award },
];

function CountUpText({ value }: { value: string }) {
  const target = parseFloat(value.replace(/[^0-9.]/g, ''));
  const isNaNParsed = isNaN(target);
  const [display, setDisplay] = useState(isNaNParsed ? value : '');
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView || isNaNParsed) return;

    // 1. Isolate the formatting suffix (+, etc.)
    const suffix = value.replace(/[\d.,kK]+/g, '');
    
    // 2. Extract pure numeric digits, including decimals
    const useK = value.toLowerCase().includes('k');
    const hasComma = value.includes(',');

    let start = 0;
    const duration = 2000; // 2 seconds animation duration
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        if (useK) {
          setDisplay(`${target}k${suffix}`);
        } else if (hasComma) {
          setDisplay(`${Math.round(target).toLocaleString()}${suffix}`);
        } else {
          setDisplay(`${Math.round(target)}${suffix}`);
        }
      } else {
        if (useK) {
          setDisplay(`${start.toFixed(1)}k${suffix}`);
        } else if (hasComma) {
          setDisplay(`${Math.floor(start).toLocaleString()}${suffix}`);
        } else {
          setDisplay(`${Math.floor(start)}${suffix}`);
        }
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, target, isNaNParsed]);

  return <span ref={ref}>{display || '0'}</span>;
}

export default function ImpactSection() {
  return (
    <section className="bg-[#0D1B2A] py-16 lg:py-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          {/* ─── Left: Text Intro ─── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-[22%] shrink-0 text-center lg:text-left"
          >
            <p className="text-[#D11A5B] text-xs sm:text-sm font-bold uppercase tracking-[0.08em] mb-3">
              Our Impact in Pictures
            </p>
            <p className="text-white/85 text-base sm:text-lg leading-relaxed">
              Every statistic tells a story of hope, resilience, and transformation.
            </p>
          </motion.div>

          {/* ─── Right: Statistics Metrics Grid ─── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ staggerChildren: 0.08 }}
            className="lg:w-[78%] w-full"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-4 xl:gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left group min-w-0"
                  >
                    {/* Floating circular icon container */}
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#D11A5B]/20 group-hover:text-[#D11A5B] transition-all duration-300 mb-3">
                      <Icon size={18} />
                    </div>
                    
                    {/* Counter text value */}
                    <span className="text-white font-heading font-extrabold text-2xl sm:text-3xl lg:text-[24px] xl:text-[28px] leading-none tracking-tight whitespace-nowrap group-hover:text-[#D11A5B] transition-colors duration-300">
                      <CountUpText value={stat.value} />
                    </span>
                    
                    {/* Description label text */}
                    <span className="text-white/50 text-xs sm:text-sm font-medium mt-2 leading-snug">
                      {stat.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
