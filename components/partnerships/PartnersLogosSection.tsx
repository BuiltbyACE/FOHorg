'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  {
    name: 'Government of Kenya',
    category: 'National Partner',
    src: '/images/government of kenya.png',
  },
  {
    name: 'Government of Garissa',
    category: 'County Partner',
    src: '/images/governmentofGarissa.jpg',
  },
  {
    name: 'Okoa Mama Initiative',
    category: 'Maternal Health Partner',
    src: '/images/okoamamalogo-removebg-preview.png',
  },
  {
    name: 'Jhpiego',
    category: 'Health & Advocacy Partner',
    src: '/images/jheiphgo.png',
  },
  {
    name: 'ICHR-Kenya',
    category: 'Reproductive Health Partner',
    src: '/images/ICHR.png',
  },
];

export default function PartnersLogosSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E91E63] mb-3">
            Our Valued Partners
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#081B63] tracking-tight">
            Trusted Collaborators
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-4 max-w-2xl mx-auto">
            We work hand-in-hand with government, health institutions and community
            partners to deliver programmes that truly reach the people of Garissa.
          </p>
        </div>

        <div className="flex flex-wrap items-stretch justify-center gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col items-center justify-center text-center bg-slate-50 rounded-2xl border border-slate-200/70 p-7 pb-5 hover:bg-white hover:border-pink-300 hover:shadow-xl hover:shadow-pink-500/10 hover:-translate-y-1 transition-all duration-300 w-[210px]"
            >
              <div className="relative h-[68px] w-[140px]">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  sizes="140px"
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-bold text-[#081B63] group-hover:text-[#E91E63] transition-colors leading-tight mt-5 mb-1 text-center">
                {partner.name}
              </h3>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                {partner.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}