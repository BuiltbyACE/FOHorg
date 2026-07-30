'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, GraduationCap, HeartPulse, HeartHandshake, Globe, Award } from 'lucide-react';

const stats = [
  { icon: Users,          value: 12500, suffix: '+', label: 'Lives Impacted' },
  { icon: GraduationCap, value: 45,    suffix: '+', label: 'Programs Running' },
  { icon: HeartPulse,    value: 78,    suffix: '+', label: 'Communities Reached' },
  { icon: HeartHandshake,value: 100,   suffix: '+', label: 'Volunteers Engaged' },
  { icon: Globe,         value: 30,    suffix: '+', label: 'Partner Organizations' },
  { icon: Award,         value: 15,    suffix: '+', label: 'Awards & Recognitions' },
];

function CountUpNumber({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-[#081B63] py-16 md:py-20 relative overflow-hidden" id="impact">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E91E63]/8 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/3 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E91E63] mb-3">
            Our Reach
          </p>
          <h2 className="text-white text-2xl md:text-[32px] font-extrabold leading-tight tracking-tight">
            Your Donation Creates Real Impact
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-0">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                className={`flex flex-col items-center text-center px-4 ${
                  index < stats.length - 1 ? 'lg:border-r border-white/10' : ''
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-[#E91E63]/15 border border-[#E91E63]/30 flex items-center justify-center text-[#E91E63]">
                  <Icon size={22} />
                </div>
                <p className="text-white text-3xl md:text-[36px] font-extrabold mt-4 leading-none tabular-nums">
                  <CountUpNumber target={item.value} suffix={item.suffix} active={inView} />
                </p>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-[0.1em] mt-2">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
