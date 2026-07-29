'use client';

import { motion } from 'framer-motion';
import type { ApproachStep } from '@/constants/programs';

interface ApproachItemProps {
  step: ApproachStep;
  index: number;
  isLast: boolean;
}

export default function ApproachItem({ step, index, isLast }: ApproachItemProps) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="flex gap-5">
        <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-[#E91E63] flex-shrink-0">
          <Icon size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[#081B63] mb-2">{step.title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
        </div>
      </div>
      {!isLast && <div className="border-b border-slate-200 my-6 ml-[68px]" />}
    </motion.div>
  );
}
