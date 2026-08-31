'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight, Home, ChevronRight, HeartHandshake, Sparkles } from 'lucide-react';
import { programs } from '@/constants/programs';
import type { Program } from '@/constants/programs';
import Button from '@/components/common/Button';

interface ProgramDetailContentProps {
  programId: string;
  categoryTitle: string;
  relatedProgramIds: string[];
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function ProgramDetailContent({
  programId,
  categoryTitle,
  relatedProgramIds,
}: ProgramDetailContentProps) {
  const program = programs.find((p) => p.id === programId) as Program;
  const relatedPrograms = relatedProgramIds
    .map((id) => programs.find((p) => p.id === id))
    .filter((p): p is Program => Boolean(p));

  const Icon = program.icon;

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Breadcrumb */}
      <div className="w-full bg-white border-b border-slate-100">
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-slate-500"
        >
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href="/" className="inline-flex items-center gap-1.5 hover:text-[#E91E63] transition-colors">
                <Home size={14} />
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-300">
              <ChevronRight size={14} />
            </li>
            <li>
              <Link href="/programs" className="hover:text-[#E91E63] transition-colors">
                Programs
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-300">
              <ChevronRight size={14} />
            </li>
            <li className="text-[#081B63] font-semibold">{program.title}</li>
          </ol>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative pt-12 lg:pt-16 pb-12 lg:pb-16 overflow-hidden bg-gradient-to-b from-white via-pink-50/20 to-white">
        <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-pink-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Text */}
            <motion.div {...fadeUp(0.05)} className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-[#E91E63] text-xs font-bold uppercase tracking-wider mb-5 border border-pink-200/50">
                <Sparkles size={14} />
                {categoryTitle}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B63] leading-[1.12] tracking-tight mb-6">
                {program.title}
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                {program.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button href="/donations" variant="primary" size="lg">
                  Support This Program
                  <HeartHandshake size={18} />
                </Button>
                <Button href="/partnerships" variant="outline" size="lg">
                  Partner With Us
                </Button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              {...fadeUp(0.15)}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/15 border-4 border-white">
                <div className="relative h-80 sm:h-[440px] w-full">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                </div>
                <div className={`absolute top-5 left-5 w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center text-white shadow-lg shadow-black/20`}>
                  <Icon size={28} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* What We Do */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-slate-50 rounded-3xl border border-slate-100 p-8 sm:p-10"
            >
              <h2 className="text-2xl font-extrabold text-[#081B63] mb-2">What We Do</h2>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#E91E63] mb-8">
                {program.title}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <span className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-[#E91E63]" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Proven Impact */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-gradient-to-br from-[#081B63] to-[#0a2080] rounded-3xl p-8 sm:p-10 text-white"
            >
              <h2 className="text-2xl font-extrabold mb-2">Proven Impact</h2>
              <p className="text-sm font-semibold uppercase tracking-wider text-pink-300 mb-8">
                In Garissa County
              </p>

              <div className="flex flex-col gap-4">
                {program.impact.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-4"
                  >
                    <span className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles size={17} className="text-pink-300" />
                    </span>
                    <span className="text-sm font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sub-programs (children) */}
          {program.children && program.children.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-16 lg:mt-20"
            >
              <h2 className="text-2xl font-extrabold text-[#081B63] mb-8">Within This Program</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {program.children.map((child) => (
                  <div key={child.id} id={child.id} className="bg-slate-50 rounded-2xl border border-slate-100 p-6 flex items-center gap-4 scroll-mt-28">
                    <span className="w-3 h-3 rounded-full bg-[#E91E63] flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-[#081B63]">{child.title}</h3>
                      <p className="text-sm text-slate-500 mt-1">
                        Part of our {program.title} pillar — building confidence,
                        skills and leadership among young people across Garissa.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Related Programs */}
      {relatedPrograms.length > 0 && (
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-14">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#081B63] tracking-tight">
                  More in {categoryTitle}
                </h2>
                <p className="text-slate-600 mt-2">
                  Explore other programs within this pillar.
                </p>
              </div>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#E91E63] hover:text-[#C2185B] transition-colors"
              >
                All Programs
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPrograms.map((related) => {
                const RelIcon = related.icon;
                return (
                  <Link
                    key={related.id}
                    href={`/programs/${related.slug}`}
                    className="group relative rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all overflow-hidden"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                      <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br ${related.color} flex items-center justify-center text-white shadow-md`}>
                        <RelIcon size={18} />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-[#081B63] group-hover:text-[#E91E63] transition-colors mb-1.5">
                        {related.title}
                      </h3>
                      <p className="text-sm text-slate-500 line-clamp-2">{related.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#081B63] via-[#0a2080] to-[#E91E63] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/20">
            <Sparkles size={15} />
            Stand With Garissa
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Support <span className="text-pink-300">{program.title}</span>
          </h2>
          <p className="text-slate-300 text-lg font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
            Every contribution helps improve the health, education and livelihoods of
            vulnerable communities in Garissa County.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/donations" variant="primary" size="lg" className="bg-white text-[#081B63] hover:bg-slate-100 shadow-xl shadow-pink-500/30">
              Donate Now
            </Button>
            <Button href="/programs" variant="outline-white" size="lg">
              Back to Programs
              <ArrowUpRight size={18} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
