'use client';

import { motion } from 'framer-motion';
import { Users, Eye, GitBranch, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: 'Create Lasting Impact',
    desc: 'Your support directly transforms lives and builds stronger, self-sustaining communities.',
  },
  {
    icon: Eye,
    title: 'Enhance Your Brand',
    desc: 'Align your organization with a trusted name in community development and social change.',
  },
  {
    icon: GitBranch,
    title: 'Engage Your Team',
    desc: 'Involve your employees in meaningful volunteer opportunities and team-building experiences.',
  },
  {
    icon: TrendingUp,
    title: 'Sustainable Change',
    desc: 'Invest in long-term solutions that address root causes and create generational impact.',
  },
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function WhySponsorSection() {
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
            className="font-extrabold uppercase leading-tight tracking-[-0.01em] mb-4"
            style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.4rem)' }}
          >
            <span className="text-[#151640]">WHY </span>
            <span className="text-[#E01A6F]">SPONSOR</span>
            <span className="text-[#151640]"> FOUNTAIN OF HOPE?</span>
          </h2>
          <p className="text-[#6B6B80] text-[15px] leading-relaxed max-w-[580px] mx-auto">
            Partnership with us goes beyond financial support &mdash; it&apos;s a commitment to transforming lives.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="flex flex-col items-center text-center bg-white rounded-2xl p-8 border border-[#E7E7EF] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#E01A6F] flex items-center justify-center text-white mb-5">
                  <Icon size={26} strokeWidth={1.75} />
                </div>
                <h3 className="text-[#151640] font-bold text-sm uppercase tracking-[0.04em] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#6B6B80] text-[13px] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
