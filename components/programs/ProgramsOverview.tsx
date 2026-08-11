'use client';

import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';
import { overviewStats } from '@/constants/programs';

function StatCard({ stat, index }: { stat: typeof overviewStats[0]; index: number }) {
  const { count, ref } = useCountUp(stat.value);
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-900/5 p-6 sm:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E91E63] to-pink-400 flex items-center justify-center text-white mx-auto mb-5 shadow-lg shadow-pink-500/20">
        <Icon size={26} />
      </div>
      <div className="text-3xl sm:text-4xl font-extrabold text-[#081B63] mb-2">
        <span ref={ref}>{count.toLocaleString()}</span>
        <span>{stat.suffix}</span>
      </div>
      <p className="text-slate-600 text-sm font-medium">{stat.label}</p>
    </motion.div>
  );
}

export default function ProgramsOverview() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-[#E91E63] text-xs font-semibold uppercase tracking-wider mb-4 border border-pink-200/50">
            Our Reach & Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B63] tracking-tight mb-5">
            Programs Overview
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our programs span multiple sectors, reaching thousands of beneficiaries across Garissa County through strategic partnerships and community-led initiatives.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-6">
          {overviewStats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
