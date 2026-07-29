'use client';

import { motion } from 'framer-motion';
import { Globe, Building2, Heart, Award, ShieldCheck, Zap } from 'lucide-react';

const partners = [
  { name: 'Global Health Alliance', category: 'Medical Partner', icon: Heart },
  { name: 'United Nations Water Initiative', category: 'Clean Water Partner', icon: Globe },
  { name: 'Africa Education Foundation', category: 'Literacy Sponsor', icon: Award },
  { name: 'Apex Tech Cares', category: 'Corporate Philanthropy', icon: Building2 },
  { name: 'Beacon Trust Org', category: 'Financial Auditor', icon: ShieldCheck },
  { name: 'Horizon Renewable Energy', category: 'Solar Borehole Partner', icon: Zap },
];

export default function PartnershipsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-slate-100 text-[#081B63] text-xs font-semibold uppercase tracking-wider mb-3">
            Global Collaboration
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#081B63] tracking-tight">
            Trusted by World-Class Organizations & Corporate Partners
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl bg-slate-50 border border-slate-200/70 p-6 flex flex-col items-center justify-center text-center hover:bg-white hover:border-pink-300 hover:shadow-xl hover:shadow-pink-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer min-h-[140px]"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#E91E63] group-hover:bg-[#E91E63] group-hover:text-white flex items-center justify-center mb-3 transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-xs font-bold text-[#081B63] group-hover:text-[#E91E63] transition-colors leading-tight mb-1">
                  {partner.name}
                </h3>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">{partner.category}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Strategic Call to Action Banner */}
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
