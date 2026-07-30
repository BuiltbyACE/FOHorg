'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const partners = [
  { name: 'UNICEF',         src: '/logo/UNICEF-logo-500x281.png' },
  { name: 'World Vision',   src: '/logo/world-vision-logo.png' },
  { name: 'Rotary',         src: '/logo/rotary-logos.webp' },
  { name: 'Kenya Red Cross',src: '/logo/kenya-red-cross-logo.png' },
  { name: 'UNDP',           src: '/logo/united-nations-logo-500x281.png' },
  { name: 'USAID',          src: '/logo/USAID logo.png' },
  { name: 'Safaricom',      src: '/logo/Safaricom.png' },
  { name: 'Equity Bank',    src: '/logo/Equity_Bank_Logo.png' },
];

export default function PartnersLogosSection() {
  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section label */}
        <div className="text-center mb-10">
          <p className="text-[#E91E63] text-[11px] font-bold uppercase tracking-[0.22em]">
            Our Valued Partners
          </p>
        </div>

        {/* Logos row */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 lg:gap-x-12 mb-10">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-200"
            >
              <div className="relative h-14 w-[168px]">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="200px"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <div className="flex justify-center">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-[#E91E63] hover:bg-[#C2185B] text-white font-bold text-[12px] uppercase tracking-[0.08em] px-6 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-pink-500/25 select-none cursor-pointer"
          >
            <Users size={14} strokeWidth={2} />
            View All Partners
          </motion.button>
        </div>

      </div>
    </section>
  );
}
