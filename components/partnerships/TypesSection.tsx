'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Users, Landmark, Heart, ArrowRight } from 'lucide-react';

const types = [
  {
    icon: Building2,
    title: 'Corporate Partnerships',
    desc: 'We collaborate with businesses to implement impactful programs, support communities, and promote sustainable growth.',
  },
  {
    icon: GraduationCap,
    title: 'Institutional Partnerships',
    desc: 'We work with schools, universities, and research institutions to drive education, innovation, and community development.',
  },
  {
    icon: Users,
    title: 'NGO & Community Partnerships',
    desc: 'We join forces with like-minded organizations to reach more people and maximize collective impact.',
  },
  {
    icon: Landmark,
    title: 'Government Partnerships',
    desc: 'We collaborate with government agencies and local authorities to support policies and programs that transform lives.',
  },
  {
    icon: Heart,
    title: 'Individual Partnerships',
    desc: 'Individuals can partner with us through volunteering, skills sharing, mentorship, and championing our cause.',
  },
];

export default function TypesSection() {
  return (
    <section className="bg-[#F7F8FC] py-16 lg:py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="text-center mb-10 lg:mb-12">
          <p className="text-[#E91E63] text-[11px] font-bold uppercase tracking-[0.22em]">
            Types of Partnerships
          </p>
        </div>

        {/* 5-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {types.map((type, i) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                className="bg-white border border-[#EEF1F7] rounded-[10px] p-6 flex flex-col gap-3 hover:shadow-md hover:border-pink-100 transition-all duration-300"
              >
                <div className="w-[44px] h-[44px] rounded-full bg-pink-50 flex items-center justify-center text-[#E91E63] flex-shrink-0">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="text-[#081B63] font-bold text-[13px] uppercase tracking-[0.04em] leading-snug">
                  {type.title}
                </h3>
                <p className="text-slate-500 text-[12.5px] leading-relaxed flex-1">
                  {type.desc}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[#E91E63] font-bold text-[12px] uppercase tracking-[0.06em] hover:gap-2.5 transition-all duration-200 mt-1"
                >
                  Learn More
                  <ArrowRight size={12} strokeWidth={2.5} />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
