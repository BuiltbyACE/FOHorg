'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Government of Kenya', src: '/images/government of kenya.png' },
  { name: 'Government of Garissa', src: '/images/governmentofGarissa.jpg' },
  { name: 'Okoa Mama Initiative', src: '/images/okoamamalogo-removebg-preview.png' },
  { name: 'Jhpiego', src: '/images/jheiphgo.png' },
  { name: 'ICHR-Kenya', src: '/images/ICHR.png' },
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
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative h-14 w-[150px] grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                className="object-contain"
                sizes="150px"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}