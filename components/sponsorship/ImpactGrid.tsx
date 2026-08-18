'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Book, Heart, Footprints, Sprout, HandMetal, Leaf } from 'lucide-react';

interface ImpactItem {
  image: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: string;
  desc: string;
}

const impacts: ImpactItem[] = [
  {
    image: '/images/quality education.jpeg',
    icon: Book,
    title: 'Education for All',
    desc: 'Providing quality education and learning resources to children in underserved communities.',
  },
  {
    image: '/images/foh21.jpeg',
    icon: Heart,
    title: 'Healthcare & Wellness',
    desc: 'Ensuring access to essential healthcare services and wellness programs.',
  },
  {
    image: '/images/foh22.jpeg',
    icon: Footprints,
    title: 'Youth Development',
    desc: 'Empowering young people through sports, mentorship, and leadership training.',
  },
  {
    image: '/images/foh20.jpeg',
    icon: Leaf,
    title: 'Women Empowerment',
    desc: 'Supporting women with skills training, resources, and economic opportunities.',
  },
  {
    image: '/images/foh17.jpeg',
    icon: HandMetal,
    title: 'Community Outreach',
    desc: 'Reaching vulnerable families with essential supplies and support services.',
  },
  {
    image: '/images/foh21.jpeg',
    icon: Sprout,
    title: 'Environment & Sustainability',
    desc: 'Promoting environmental conservation and sustainable community practices.',
  },
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function ImpactGrid() {
  return (
    <section className="bg-[#F7F7FB] py-16 lg:py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 lg:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-extrabold uppercase leading-tight tracking-[-0.01em]"
            style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.4rem)' }}
          >
            <span className="text-[#151640]">Your Sponsorship </span>
            <span className="text-[#E01A6F]">Can Support</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {impacts.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group bg-white rounded-[18px] overflow-hidden border border-[#E7E7EF] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="relative px-5 pb-6 pt-3">
                  <div className="w-12 h-12 rounded-full bg-[#E01A6F] flex items-center justify-center text-white -mt-9 mb-3 shadow-lg shadow-pink-500/20 relative z-10">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-[#151640] font-bold text-sm uppercase tracking-[0.04em] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[#6B6B80] text-[13px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
