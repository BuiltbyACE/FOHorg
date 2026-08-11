'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Kenya Red Cross', src: '/logo/kenya-red-cross-logo.png' },
  { name: 'UNDP', src: '/logo/united-nations-logo-500x281.png' },
  { name: 'Safaricom', src: '/logo/Safaricom.png' },
  { name: 'Equity Bank', src: '/logo/Equity_Bank_Logo.png' },
  { name: 'KCB Foundation', src: '/logo/Safaricom.png' },
  { name: 'CBA', src: '/logo/Equity_Bank_Logo.png' },
  { name: 'Standard Chartered', src: '/logo/united-nations-logo-500x281.png' },
  { name: 'Britam', src: '/logo/kenya-red-cross-logo.png' },
];

export default function PartnersStrip() {
  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-center text-[#151640] font-bold text-sm uppercase tracking-[0.08em] mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Proud to Partner With
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.06 }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative h-9 w-[120px] grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                className="object-contain"
                sizes="120px"
                unoptimized
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
