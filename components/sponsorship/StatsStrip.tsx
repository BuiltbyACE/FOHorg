'use client';

import { motion } from 'framer-motion';
import { Users, HeartHandshake, MapPin, User, Handshake, Award } from 'lucide-react';

const stats = [
  { icon: Users, value: '10,500+', label: 'Children in Education' },
  { icon: HeartHandshake, value: '3,500+', label: 'Youth Trained' },
  { icon: MapPin, value: '1,400+', label: 'CHVs & CBDs Trained' },
  { icon: User, value: '300,000+', label: 'Reached via Radio' },
  { icon: Handshake, value: '14,000+', label: 'Peacebuilding Reached' },
  { icon: Award, value: '40+', label: 'Faith Leaders Engaged' },
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function StatsStrip() {
  return (
    <div className="relative z-10 -mt-10 mb-4">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-40px' }}
          className="bg-white rounded-2xl shadow-lg shadow-black/5 border border-[#E7E7EF] px-6 py-8 md:py-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center relative"
                >
                  {i > 0 && (
                    <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-10 bg-[#E7E7EF]" />
                  )}
                  <div className="w-11 h-11 rounded-full bg-[#E01A6F] flex items-center justify-center text-white mb-3">
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <span className="text-[#151640] font-extrabold text-xl md:text-2xl leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-[#6B6B80] text-[11px] font-medium mt-0.5 leading-tight">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
