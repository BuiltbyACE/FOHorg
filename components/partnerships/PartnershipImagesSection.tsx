'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  { src: '/images/partnership.jpeg', alt: 'Partnership collaboration' },
  { src: '/images/partnership2.jpeg', alt: 'Community partnership' },
  { src: '/images/partnership3.jpeg', alt: 'Partner engagement' },
  { src: '/images/partnership4.jpeg', alt: 'Joint community initiatives' },
  { src: '/images/partnership6.jpeg', alt: 'Partnership impact' },
  { src: '/images/image1.jpeg', alt: 'Partnership outreach' },
  { src: '/images/meeting.jpeg', alt: 'Partner meeting' },
  { src: '/images/stakeholders.jpeg', alt: 'Stakeholder engagement' },
];

export default function PartnershipImagesSection() {
  return (
    <section className="bg-[#F7F7FB] py-16 lg:py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E91E63] mb-3">
            Our Partnerships in Action
          </p>
          <h2 className="text-[#081B63] text-2xl md:text-[32px] font-extrabold leading-tight tracking-tight">
            Working Together for Lasting Change
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-2xl ${
                i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-[4/3]'
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
