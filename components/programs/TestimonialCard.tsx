'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import type { Testimonial } from '@/constants/programs';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 p-8 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-[#E91E63] mb-5">
        <Quote size={20} />
      </div>

      <p
        className="text-slate-600 text-sm leading-relaxed mb-6 flex-1 italic"
        dangerouslySetInnerHTML={{ __html: testimonial.quote }}
      />

      <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div>
          <div className="text-sm font-bold text-[#081B63]">{testimonial.name}</div>
          <div className="text-xs text-slate-500">{testimonial.role}</div>
          <div className="text-xs text-slate-400">{testimonial.location}</div>
        </div>
      </div>
    </motion.div>
  );
}
