'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeartHandshake, Droplets, CheckCircle2 } from 'lucide-react';
import Button from '@/components/common/Button';

export default function MaternalHealthSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl lg:rounded-[36px] bg-gradient-to-r from-[#081B63] via-[#0E2888] to-[#E91E63] p-8 sm:p-12 lg:p-16 text-white shadow-2xl shadow-navy-950/20 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-pink-200 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/20">
                <HeartHandshake size={15} />
                <span>Maternal Health &amp; Dignity</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                No Mother Should Lose Her Life Giving Life
              </h2>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                Through the Okoa Mama na Mtoto Initiative, we advocate for safe
                motherhood and newborn care — engaging faith leaders, youth
                champions and community radio to bring maternal mortality into the
                open and save mothers and babies across Garissa.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
                <div className="flex items-center gap-3 text-sm text-slate-100 font-medium">
                  <CheckCircle2 size={18} className="text-pink-300 flex-shrink-0" />
                  <span>Faith leaders as maternal health champions</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-100 font-medium">
                  <CheckCircle2 size={18} className="text-pink-300 flex-shrink-0" />
                  <span>Safe motherhood &amp; newborn care</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-100 font-medium">
                  <CheckCircle2 size={18} className="text-pink-300 flex-shrink-0" />
                  <span>Menstrual health &amp; dignity for girls</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-100 font-medium">
                  <CheckCircle2 size={18} className="text-pink-300 flex-shrink-0" />
                  <span>Community radio reaching thousands</span>
                </div>
              </div>

              <Button href="/programs/maternal-health" variant="primary" size="lg" className="w-full sm:w-auto">
                Support Maternal Health
              </Button>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/4] sm:aspect-[4/3.8]">
                <Image
                  src="/images/foh2.jpeg"
                  alt="Maternal health outreach supporting mothers and newborns in Garissa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B63]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <Droplets size={16} className="text-pink-300" />
                    Okoa Mama na Mtoto Initiative (OMMI)
                  </div>
                  <div className="text-xs text-pink-200">Garissa County, Kenya</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
