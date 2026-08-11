'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { approachSteps } from '@/constants/programs';
import ApproachItem from './ApproachItem';

export default function ProgramApproach() {
  return (
    <section id="approach" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-[#E91E63] text-xs font-semibold uppercase tracking-wider mb-4 border border-pink-200/50">
              <Sparkles size={14} />
              Our Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B63] tracking-tight mb-5">
              Our Program Approach
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We follow a structured, community-centered approach that ensures every program is culturally relevant, sustainable, and impactful.
            </p>
          </motion.div>

          <div className="lg:col-span-7">
            {approachSteps.map((step, index) => (
              <ApproachItem
                key={step.title}
                step={step}
                index={index}
                isLast={index === approachSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
