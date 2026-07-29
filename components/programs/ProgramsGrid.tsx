'use client';

import { programs } from '@/constants/programs';
import ProgramCard from './ProgramCard';

export default function ProgramsGrid() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-[#E91E63] text-xs font-semibold uppercase tracking-wider mb-4 border border-pink-200/50">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B63] tracking-tight mb-5">
            Our Core Programs
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Each program is designed to address specific community needs while contributing to our overarching mission of sustainable development and empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
