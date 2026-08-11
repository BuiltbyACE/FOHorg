'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const stories = [
  {
    image: '/images/foh6.jpeg',
    alt: 'Students in classroom',
    title: 'Education for All',
    desc: 'Thanks to our partners, we have built classrooms, provided learning materials, and supported thousands of children to stay in school.',
  },
  {
    image: '/images/foh7.jpeg',
    alt: 'Community healthcare workers',
    title: 'Healthier Communities',
    desc: 'Our health programs have reached remote communities through the support of our healthcare partners.',
  },
  {
    image: '/images/foh8.jpeg',
    alt: 'Women in empowerment program',
    title: 'Empowering Women & Youth',
    desc: 'Together with our partners, we provide skills training, mentorship, and resources for a better future.',
  },
  {
    image: '/images/foh10.jpeg',
    alt: 'Hands holding a plant',
    title: 'Sustainable Futures',
    desc: 'Our environmental initiatives promote conservation, climate action, and sustainable livelihoods.',
  },
];

export default function ImpactStoriesSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section label */}
        <div className="text-center mb-10 lg:mb-12">
          <p className="text-[#E91E63] text-[11px] font-bold uppercase tracking-[0.22em]">
            Impact Through Partnerships
          </p>
        </div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stories.map((story, i) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              className="bg-white border border-[#EEF1F7] rounded-[10px] overflow-hidden flex flex-col hover:shadow-md hover:border-pink-100 transition-all duration-300"
            >
              {/* Story image */}
              <div className="relative w-full h-[110px] flex-shrink-0">
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  unoptimized
                />
              </div>

              {/* Story content */}
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="text-[#081B63] font-bold text-[13.5px] leading-snug tracking-[-0.01em]">
                  {story.title}
                </h3>
                <p className="text-slate-500 text-[12px] leading-relaxed flex-1">
                  {story.desc}
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-[#E91E63] font-bold text-[11.5px] uppercase tracking-[0.06em] hover:gap-2.5 transition-all duration-200 mt-1"
                >
                  Read Story
                  <ArrowRight size={11} strokeWidth={2.5} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
