'use client';

import { motion } from 'framer-motion';
import { Award, Medal, Gem, Check } from 'lucide-react';

interface TierFeature {
  text: string;
}

interface PricingTier {
  name: string;
  price: string;
  period: string;
  color: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  features: TierFeature[];
  featured?: boolean;
  buttonStyle: 'outline' | 'solid';
  buttonText: string;
}

const tiers: PricingTier[] = [
  {
    name: 'Bronze Partner',
    price: 'KSh 50,000+',
    period: 'per year',
    color: '#D98A2B',
    icon: Award,
    features: [
      { text: 'Logo on our website' },
      { text: 'Social media recognition' },
      { text: 'Quarterly impact updates' },
      { text: 'Certificate of appreciation' },
    ],
    buttonStyle: 'outline',
    buttonText: 'Choose Bronze',
  },
  {
    name: 'Silver Partner',
    price: 'KSh 150,000+',
    period: 'per year',
    color: '#B0B0B8',
    icon: Award,
    features: [
      { text: 'All Bronze benefits' },
      { text: 'Logo on event materials' },
      { text: 'Monthly impact updates' },
      { text: 'Invitation to events' },
    ],
    buttonStyle: 'outline',
    buttonText: 'Choose Silver',
  },
  {
    name: 'Gold Partner',
    price: 'KSh 300,000+',
    period: 'per year',
    color: '#F0A93A',
    icon: Medal,
    featured: true,
    features: [
      { text: 'All Silver benefits' },
      { text: 'Featured logo placement' },
      { text: 'Speaking opportunity' },
      { text: 'Customized impact report' },
      { text: 'Media feature' },
    ],
    buttonStyle: 'solid',
    buttonText: 'Choose Gold',
  },
  {
    name: 'Platinum Partner',
    price: 'KSh 500,000+',
    period: 'per year',
    color: '#151640',
    icon: Gem,
    features: [
      { text: 'All Gold benefits' },
      { text: 'Co-branding opportunities' },
      { text: 'Executive engagement' },
      { text: 'Site visits & experiences' },
      { text: 'Annual appreciation gala' },
    ],
    buttonStyle: 'outline',
    buttonText: 'Choose Platinum',
  },
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function PricingTiers() {
  return (
    <section className="bg-white py-16 lg:py-20">
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
            <span className="text-[#151640]">Sponsorship </span>
            <span className="text-[#E01A6F]">Opportunities</span>
          </h2>
          <p className="text-[#6B6B80] text-[15px] leading-relaxed max-w-[560px] mx-auto">
            Choose a partnership level that aligns with your goals and makes a meaningful difference.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-start"
        >
          {tiers.map((tier) => {
            const Icon = tier.icon;
            const isGold = tier.featured;

            return (
              <motion.div
                key={tier.name}
                variants={cardVariants}
                className={`relative flex flex-col bg-white rounded-[20px] border-2 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isGold
                    ? 'border-[#E01A6F] shadow-lg shadow-pink-500/10 lg:-mt-4 z-10'
                    : 'border-[#E7E7EF] shadow-sm hover:shadow-lg'
                }`}
              >
                {isGold && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-block bg-[#151640] text-white text-[10px] font-bold uppercase tracking-[0.1em] px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: tier.color }}
                  >
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3
                    className="font-bold text-sm uppercase tracking-[0.05em]"
                    style={{ color: tier.color }}
                  >
                    {tier.name}
                  </h3>
                </div>

                <div className="mb-5">
                  <span className="text-[#151640] font-extrabold text-2xl leading-none">
                    {tier.price}
                  </span>
                  <span className="text-[#6B6B80] text-[13px] ml-1">{tier.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-2.5">
                      <Check
                        size={16}
                        strokeWidth={3}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: tier.color }}
                      />
                      <span className="text-[#3D3D5C] text-[13px] leading-snug">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {tier.buttonStyle === 'solid' ? (
                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#E01A6F] hover:bg-[#C0175E] text-white font-bold text-[12px] uppercase tracking-[0.07em] px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-500/25 cursor-pointer select-none"
                  >
                    {tier.buttonText}
                  </button>
                ) : (
                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center gap-2 bg-transparent border-2 text-[#151640] border-[#151640] hover:bg-[#151640] hover:text-white font-bold text-[12px] uppercase tracking-[0.07em] px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 cursor-pointer select-none"
                  >
                    {tier.buttonText}
                  </button>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
