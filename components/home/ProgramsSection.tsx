'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const programs = [
  {
    id: 'maternal',
    title: 'Maternal & Family Planning',
    category: 'RMNCAH',
    slug: 'maternal-health',
    description:
      'Championing safe motherhood, newborn care and child spacing through faith leaders, youth champions and community radio.',
    image: '/images/foh21.jpeg',
    color: 'from-[#E91E63] to-pink-600',
  },
  {
    id: 'peace',
    title: 'Peace Building',
    category: 'Community Resilience',
    slug: 'peace-building',
    description:
      'Sensitizing women and men against violent extremism while strengthening community structures and supporting survivors.',
    image: '/images/foh22.jpeg',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'education',
    title: 'Quality Education',
    category: 'Education',
    slug: '',
    description:
      'Keeping children in school and learning — from quality classroom experiences to scholarship and retention support.',
    image: '/images/quality education.jpeg',
    color: 'from-sky-500 to-blue-600',
  },
  {
    id: 'youth',
    title: 'Youth Mentorship',
    category: 'Empowerment',
    slug: 'empowerment',
    description:
      'Mentoring young people in leadership, trade skills and digital literacy so they can lead change and build independence.',
    image: '/images/fohhero2.jpeg',
    color: 'from-emerald-500 to-teal-600',
  },
];

export default function ProgramsSection() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden" id="programs">
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-[#E91E63] text-xs font-semibold uppercase tracking-wider mb-4 border border-pink-200/50">
            Programs of Focus
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B63] tracking-tight mb-5">
            Where Our Work Happens
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We focus on the pillars that enable entire Garissa communities to thrive —
            maternal health, peace, education and youth empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-navy-950/10 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-semibold text-[#081B63]">
                  {program.category}
                </span>
              </div>

              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#081B63] mb-3 group-hover:text-[#E91E63] transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {program.description}
                  </p>
                </div>

                <Link
                  href={program.slug ? `/programs/${program.slug}` : '/programs'}
                  className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#081B63] group-hover:text-[#E91E63] transition-colors"
                >
                  <span>Learn More</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-pink-50 flex items-center justify-center transition-colors">
                    <ArrowUpRight
                      size={16}
                      className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
