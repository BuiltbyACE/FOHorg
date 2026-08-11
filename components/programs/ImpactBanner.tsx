'use client';

import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';
import { impactStats } from '@/constants/programs';

function ImpactStatCard({ stat, index }: { stat: typeof impactStats[0]; index: number }) {
  const { count, ref } = useCountUp(stat.value);
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center min-w-0 flex flex-col items-center"
    >
      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white/10 backdrop-blur border border-white/15 flex items-center justify-center text-pink-300 mx-auto mb-4 group-hover:bg-pink-500/20 transition-colors">
        <Icon size={24} />
      </div>
      <div className="text-2xl sm:text-3xl lg:text-[28px] xl:text-4xl font-extrabold text-white mb-2 text-pink-300 whitespace-nowrap tracking-tight">
        <span ref={ref}>{count.toLocaleString()}</span>
        <span>{stat.suffix}</span>
      </div>
      <p className="text-slate-300 text-xs sm:text-sm font-medium leading-snug">{stat.label}</p>
    </motion.div>
  );
}

export default function ImpactBanner() {
  return (
    <section className="py-16 lg:py-24 bg-[#081B63] text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-900/40 via-[#081B63] to-[#040E36] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15 backdrop-blur-md">
            Measurable Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Our Impact in Numbers
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Every program is rigorously tracked and evaluated to ensure maximum
            effectiveness and accountability to our donors and the communities of
            Garissa County.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-3 xl:gap-6">
          {impactStats.map((stat, index) => (
            <ImpactStatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
