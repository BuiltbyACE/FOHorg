'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, HeartPulse, Sparkles, UserCheck, TreePine, ArrowUpRight } from 'lucide-react';

const programs = [
  {
    id: 'education',
    detailsId: 'education',
    title: 'Quality Education & Literacy',
    category: 'Education Access',
    description: 'Keeping boys and girls in school with scholarships and learning materials to boost literacy and numeracy across Garissa.',
    icon: BookOpen,
    image: '/images/quality education.jpeg',
    stat: '10,500+ Children Enrolled',
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 'healthcare',
    detailsId: 'healthcare',
    title: 'Maternal & Newborn Health',
    category: 'OMMI Initiative',
    description: 'Advocating safe motherhood and newborn care through radio campaigns, faith leaders and health system strengthening.',
    icon: HeartPulse,
    image: '/images/foh21.jpeg',
    stat: '300,000+ Reached via Radio',
    color: 'from-[#E91E63] to-pink-600',
  },
  {
    id: 'family-health',
    detailsId: 'women-empowerment',
    title: 'Family Planning & Safe Motherhood',
    category: 'Women & Families',
    description: 'Promoting child spacing and reproductive health among married women through faith-based dialogues and male involvement.',
    icon: Sparkles,
    image: '/images/foh12.jpeg',
    stat: '40+ Faith Leaders Engaged',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'youth-development',
    detailsId: 'youth-development',
    title: 'Youth Leadership & Vocational Training',
    category: 'Future Leaders',
    description: 'Training young people in trade crafts and leadership so they can earn, lead and build economic independence.',
    icon: UserCheck,
    image: '/images/foh13.jpeg',
    stat: '3,500+ Youth Trained',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'peacebuilding',
    detailsId: 'social-support',
    title: 'Peacebuilding & Community Resilience',
    category: 'Resilient Communities',
    description: 'Sensitizing women and men against violent extremism while strengthening community health structures and emergency response.',
    icon: TreePine,
    image: '/images/foh10.jpeg',
    stat: '14,000+ Sensitized',
    color: 'from-sky-500 to-blue-600',
  },
];

export default function ProgramsSection() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden" id="programs">
      {/* Background Subtle Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-[#E91E63] text-xs font-semibold uppercase tracking-wider mb-4 border border-pink-200/50">
            Our Core Initiatives
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B63] tracking-tight mb-5">
            Targeted Programs Creating Lasting Transformation
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We focus on holistic development pillars — health, education, skills
            and resilience — that enable entire Garissa communities to break
            cycles of poverty and thrive independently.
          </p>
        </div>

        {/* 5 Premium Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const isLarge = index === 0 || index === 3;
            
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-navy-950/10 transition-all duration-500 overflow-hidden flex flex-col justify-between ${
                  isLarge ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Image Container with Soft Overlay */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  
                  {/* Category Pill Top Left */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-semibold text-[#081B63]">
                    {program.category}
                  </span>

                  {/* Icon Floating Badge Top Right */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center text-white shadow-lg shadow-black/20 transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} />
                  </div>

                  {/* Stat Text Over Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-semibold uppercase tracking-wider text-pink-300 block mb-0.5">Impact Metric</span>
                    <p className="text-sm font-bold">{program.stat}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#081B63] mb-3 group-hover:text-[#E91E63] transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {program.description}
                    </p>
                  </div>

                  {/* Action Link */}
                  <Link
                    href={`/programs#${program.detailsId}`}
                    className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#081B63] group-hover:text-[#E91E63] transition-colors"
                  >
                    <span>Learn More & Support</span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-pink-50 flex items-center justify-center transition-colors">
                      <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
