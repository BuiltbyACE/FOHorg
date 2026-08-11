'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import Button from '@/components/common/Button';

export default function SponsorshipBanner() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Main Outer Card with Hope Pink & Navy Gradient */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl lg:rounded-[36px] bg-gradient-to-r from-[#081B63] via-[#0E2888] to-[#E91E63] p-8 sm:p-12 lg:p-16 text-white shadow-2xl shadow-navy-950/20 overflow-hidden"
        >
          {/* Subtle Glow Overlay Effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-pink-200 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/20">
                <Sparkles size={15} />
                <span>Education Sponsorship in Garissa</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Sponsor a Child & Change Their World Forever
              </h2>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                For just $35 a month, you provide a Garissa child with school fees,
                textbooks, healthcare checkups, and mentorship that keep them in
                school and on the path to independence.
              </p>

              {/* Benefits Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
                <div className="flex items-center gap-3 text-sm text-slate-100 font-medium">
                  <CheckCircle2 size={18} className="text-pink-300 flex-shrink-0" />
                  <span>School Fees & Textbooks</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-100 font-medium">
                  <CheckCircle2 size={18} className="text-pink-300 flex-shrink-0" />
                  <span>Healthcare Checkups & Nutrition</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-100 font-medium">
                  <CheckCircle2 size={18} className="text-pink-300 flex-shrink-0" />
                  <span>Learning Materials & School Kits</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-100 font-medium">
                  <CheckCircle2 size={18} className="text-pink-300 flex-shrink-0" />
                  <span>Mentorship & Progress Reports</span>
                </div>
              </div>

              <Button href="/sponsorship" variant="primary" size="lg" className="w-full sm:w-auto">
                Sponsor a Child Today
                <Heart size={18} className="fill-white" />
              </Button>
            </div>

            {/* Right Rounded Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/4] sm:aspect-[4/3.8]">
                <Image
                  src="/images/foh16.jpeg"
                  alt="Smiling child supported through Fountain of Hope education sponsorship"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B63]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-lg font-bold">10,500+ Children in Our Education Program</div>
                  <div className="text-xs text-pink-200">Across Garissa County</div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
