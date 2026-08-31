'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/common/Button';

export default function BuildingHopeSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Image collage */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/4.5]">
                <Image
                  src="/images/heropagerefinnment.png"
                  alt="Fountain of Hope volunteers working with local community members in Garissa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B63]/50 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B63] tracking-tight mb-7 leading-tight">
              Building <span className="text-[#E91E63]">Hope,</span> Transforming{' '}
              <span className="text-[#E91E63]">Lives</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              Fountain of Hope is a community-based organization with its roots in
              Garissa County. Working through strategic partnerships and sustainable
              programmes, we walk with vulnerable communities to improve their
              health, education and livelihoods — and restore dignity and hope.
            </p>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-9">
              Our vision is a healthy, literate and prosperous Garissa community.
              We invest in people first — mothers, children, young people and
              families — so that lasting change is built from within.
            </p>

            <div className="flex flex-wrap gap-3.5 w-full">
              <Button href="/about" variant="primary" size="lg">
                Our Story
                <ArrowRight size={18} />
              </Button>
              <Button href="/about#approach" variant="secondary" size="lg">
                Our Approach
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
