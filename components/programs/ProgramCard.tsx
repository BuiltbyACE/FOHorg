'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import type { Program } from '@/constants/programs';

interface ProgramCardProps {
  program: Program;
  index: number;
}

export default function ProgramCard({ program, index }: ProgramCardProps) {
  const Icon = program.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-navy-950/10 transition-all duration-500 overflow-hidden flex flex-col"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

        <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${program.color} flex items-center justify-center text-white shadow-lg shadow-black/20 transform group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={22} />
        </div>
      </div>

      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-[#081B63] mb-3 group-hover:text-[#E91E63] transition-colors duration-300">
          {program.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">
          {program.description}
        </p>

        <ul className="space-y-2 mb-6 flex-1">
          {program.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
              <span className="w-5 h-5 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={12} className="text-[#E91E63]" />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <Link
          href={`/programs#${program.id}`}
          className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#081B63] group-hover:text-[#E91E63] transition-colors"
        >
          <span>Learn More</span>
          <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-pink-50 flex items-center justify-center transition-colors">
            <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
