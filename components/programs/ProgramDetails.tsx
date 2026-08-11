import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowUpRight, HandHeart } from 'lucide-react';
import { programs } from '@/constants/programs';
import Button from '@/components/common/Button';

export default function ProgramDetails() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-[#E91E63] text-xs font-semibold uppercase tracking-wider mb-4 border border-pink-200/50">
            Program Highlights
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B63] tracking-tight mb-5">
            Explore Each Program In Depth
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Learn more about what each program does, who it reaches, and how you can stand with the people of Garissa.
          </p>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const isEven = index % 2 === 1;

            return (
              <div
                key={program.id}
                id={program.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-28"
              >
                {/* Image */}
                <div className={`relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 group ${isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative h-72 sm:h-80 lg:h-[440px] w-full">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  </div>

                  <div className={`absolute top-5 left-5 w-14 h-14 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center text-white shadow-lg shadow-black/20 transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} />
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-[#081B63] mb-2">
                      {String(index + 1).padStart(2, '0')} · Core Program
                    </span>
                    <h3 className="text-2xl font-extrabold text-white leading-tight">
                      {program.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className={isEven ? 'lg:order-1' : ''}>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                    {program.description}
                  </p>

                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#E91E63] mb-4">
                    What We Do
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span className="w-5 h-5 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} className="text-[#E91E63]" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#081B63] mb-4">
                    Proven Impact
                  </h4>
                  <div className="flex flex-wrap gap-2.5 mb-10">
                    {program.impact.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold text-[#081B63]"
                      >
                        <HandHeart size={13} className="text-[#E91E63]" />
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button href="/donations" variant="primary" size="md">
                      Support This Program
                      <ArrowUpRight size={16} />
                    </Button>
                    <Link
                      href="#programs"
                      className="inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold text-[#081B63] hover:text-[#E91E63] transition-colors px-2"
                    >
                      Back to All Programs
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
