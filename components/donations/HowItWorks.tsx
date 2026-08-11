'use client';

import { motion } from 'framer-motion';
import { HeartHandshake, Users, TrendingUp, Heart, Globe } from 'lucide-react';

const steps = [
  {
    Icon: HeartHandshake,
    number: '01',
    title: 'You Give',
    desc: 'You make a donation in the way that is most convenient and meaningful for you.',
  },
  {
    Icon: Users,
    number: '02',
    title: 'We Receive',
    desc: 'We receive your support and allocate it where it is needed most, with full accountability.',
  },
  {
    Icon: TrendingUp,
    number: '03',
    title: 'We Act',
    desc: 'We implement programs that address real, urgent needs in our communities on the ground.',
  },
  {
    Icon: Heart,
    number: '04',
    title: 'Lives Change',
    desc: 'Your support creates real opportunities and transforms the lives of those who need it most.',
  },
  {
    Icon: Globe,
    number: '05',
    title: 'Better Tomorrow',
    desc: 'Together, we build stronger, healthier, and more hopeful communities for the future.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E91E63] mb-3">
            The Process
          </p>
          <h2 className="text-[#081B63] text-2xl md:text-[32px] font-extrabold leading-tight tracking-tight">
            How Your Donation Works
          </h2>
          <p className="text-slate-500 text-base mt-4 max-w-xl mx-auto">
            From your gift to real-world change — here is how every donation makes its journey.
          </p>
        </div>

        <div className="relative">
          {/* Connecting dashed line */}
          <div className="hidden lg:block absolute top-[28px] left-[calc(10%+28px)] right-[calc(10%+28px)] h-px border-t-2 border-dashed border-[#E91E63]/30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.Icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#E91E63] flex items-center justify-center text-white shadow-md shadow-pink-500/25 relative">
                    <Icon size={24} />
                  </div>
                  <p className="text-[#E91E63] text-xs font-bold uppercase tracking-[0.14em] mt-4">
                    Step {step.number}
                  </p>
                  <h3 className="text-[#081B63] font-bold text-base mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-[13.5px] leading-relaxed max-w-[180px]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
