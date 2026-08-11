'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Globe } from 'lucide-react';
import SocialLinks from '@/components/common/SocialLinks';

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  details: (string | React.ReactNode)[];
  iconBg?: 'primary' | 'navy';
  index: number;
}

function InfoItem({ icon, label, details, iconBg = 'primary', index }: InfoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.09, ease: 'easeOut' }}
      className="flex flex-col items-center text-center group"
    >
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 ${
          iconBg === 'primary' ? 'bg-[#E91E63] shadow-md shadow-pink-500/25' : 'bg-[#081B63]'
        }`}
      >
        {icon}
      </div>
      <h3 className="text-[#081B63] font-bold text-xs uppercase tracking-[0.14em] mt-3 mb-2">
        {label}
      </h3>
      <div className="text-slate-500 text-sm leading-relaxed space-y-0.5">
        {details.map((detail, i) => (
          <p key={i}>{detail}</p>
        ))}
      </div>
    </motion.div>
  );
}

export default function QuickInfoStrip() {
  return (
    <section>
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="bg-white rounded-2xl shadow-[0_15px_50px_rgba(8,27,99,0.10)] p-8 md:p-12 border border-slate-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6">
            <InfoItem
              index={0}
              icon={<Phone size={18} />}
              label="Call Us"
              details={['+254 700 123 456', '+254 722 987 654']}
              iconBg="primary"
            />
            <InfoItem
              index={1}
              icon={
                <div className="relative w-5 h-4">
                  <Image src="/logo/Gmail-logo-500x281.png" alt="Gmail" fill className="object-contain" sizes="20px" />
                </div>
              }
              label="Email Us"
              details={['info@fountainofhope.org', 'partnerships@fountainofhope.org']}
              iconBg="navy"
            />
            <InfoItem
              index={2}
              icon={<MapPin size={18} />}
              label="Visit Us"
              details={['Garissa County,', 'North Eastern Region,', 'Kenya']}
              iconBg="primary"
            />
            <InfoItem
              index={3}
              icon={<Clock size={18} />}
              label="Office Hours"
              details={['Mon – Fri: 8:00 AM – 5:00 PM', 'Sat: 9:00 AM – 1:00 PM', 'Sun: Closed']}
              iconBg="navy"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 4 * 0.09, ease: 'easeOut' }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-[#E91E63] shadow-md shadow-pink-500/25 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                <Globe size={18} />
              </div>
              <h3 className="text-[#081B63] font-bold text-xs uppercase tracking-[0.14em] mt-3 mb-2">
                Follow Us
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-[180px] mb-3">
                Stay connected for updates, stories, and impact.
              </p>
              <SocialLinks variant="light" className="justify-center" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
