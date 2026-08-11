'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { successStory } from '@/constants/programs';
import Button from '@/components/common/Button';

export default function FeaturedStory() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-900/5 overflow-hidden hover:shadow-2xl transition-shadow duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-72 sm:h-80 lg:h-full min-h-[320px]">
              <Image
                src={successStory.image}
                alt={successStory.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#081B63]/40 to-transparent" />
            </div>

            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-[#E91E63] text-xs font-semibold uppercase tracking-wider mb-4 border border-pink-200/50 w-fit">
                <Sparkles size={12} />
                Success Story
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#081B63] mb-4 leading-tight">
                {successStory.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {successStory.description}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {successStory.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-xl sm:text-2xl font-extrabold text-[#E91E63]">{stat.value}</div>
                    <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button href="/about" variant="primary" size="md">
                  Read Full Story
                  <ArrowUpRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
