'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowUpRight } from 'lucide-react';
import Button from '@/components/common/Button';

export default function ProgramsCTA() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#081B63] via-[#0a2080] to-[#E91E63] text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/20 backdrop-blur-md">
            <Sparkles size={15} />
            Join The Movement
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Together We Can <span className="text-pink-300">Do More</span>
          </h2>

          <p className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
            Every contribution — whether your time, resources, or voice — helps us build stronger, healthier, and more hopeful communities across Africa.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <Button href="/donations" variant="primary" size="lg" className="w-full sm:w-auto bg-white text-[#081B63] hover:bg-slate-100 shadow-xl shadow-pink-500/30">
              Donate Now
              <Heart size={18} className="fill-[#E91E63]" />
            </Button>
            <Button href="/volunteer" variant="outline-white" size="lg" className="w-full sm:w-auto">
              Volunteer With Us
              <ArrowUpRight size={18} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
