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

export default function PartnershipsSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white text-[#081B63] text-xs font-semibold uppercase tracking-wider mb-3 border border-slate-200">
            Our Collaborations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#081B63] tracking-tight">
            Trusted Partners Working Hand-in-Hand
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-4">
            Together with government, institutional and community partners, we
            deliver programmes that change lives across Garissa County.
          </p>
        </div>

        <div className="flex flex-wrap items-stretch justify-center gap-5">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col items-center justify-center text-center bg-white rounded-2xl border border-slate-200/70 p-6 pb-5 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-500/10 hover:-translate-y-1 transition-all duration-300 w-[200px]"
            >
              <div className="relative h-16 w-32">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
              <h3 className="text-xs font-bold text-[#081B63] group-hover:text-[#E91E63] transition-colors leading-tight mt-4 mb-1 text-center">
                {partner.name}
              </h3>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                {partner.category}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 font-medium">
            Interested in becoming a corporate sponsor or institutional partner?{' '}
            <a href="/partnerships" className="text-[#E91E63] font-bold hover:underline">
              Partner With Us &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}