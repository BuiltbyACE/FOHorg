'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'The community radio talk show changed how our families think about safe motherhood. Mothers in our village now go for antenatal checkups.',
    name: 'Hawa',
    age: 32,
    location: 'Balambala, Kenya',
    color: '#E91E63',
  },
  {
    quote: 'Thanks to the faith leaders who spoke with us, my husband and I now practice child spacing and our family is healthier.',
    name: 'Amina',
    age: 28,
    location: 'Dadaab, Kenya',
    color: '#081B63',
  },
  {
    quote: 'The vocational training gave me the confidence to start my own business and support my entire family.',
    name: 'Grace',
    age: 24,
    location: 'Ijara, Kenya',
    color: '#E91E63',
  },
  {
    quote: 'Because of your support, our school supplies reached hundreds of children who would have dropped out.',
    name: 'Mohammed',
    age: 35,
    location: 'Fafi, Kenya',
    color: '#081B63',
  },
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 120 : -120, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -120 : 120, opacity: 0 }),
};

function TestimonialCard({ t }: { t: typeof testimonials[number] }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(8,27,99,0.07)] p-7 flex flex-col">
      <Quote size={28} className="text-[#E91E63]/30 mb-4" />
      <p className="text-slate-600 text-[14px] leading-relaxed italic flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
          style={{ backgroundColor: t.color }}
        >
          {t.name[0]}
        </div>
        <div>
          <p className="text-[#081B63] font-bold text-sm">{t.name}, {t.age}</p>
          <p className="text-slate-400 text-xs">{t.location}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const visibleDesktop = [0, 1, 2].map((offset) => testimonials[(current + offset) % testimonials.length]);

  const goTo = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => {
      const next = prev + dir;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E91E63] mb-3">
            Real Stories
          </p>
          <h2 className="text-[#081B63] text-2xl md:text-[32px] font-extrabold leading-tight tracking-tight">
            Stories Made Possible By You
          </h2>
          <p className="text-slate-500 text-base mt-4 max-w-xl mx-auto">
            Real voices from the communities whose lives have been transformed by your generosity.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => goTo(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 lg:-translate-x-6 z-20 w-11 h-11 rounded-full bg-[#E91E63] text-white flex items-center justify-center shadow-md shadow-pink-500/25 hover:bg-[#C2185B] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="overflow-hidden mx-4 lg:mx-8">
            {/* Desktop: 3 cards */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {visibleDesktop.map((t, i) => (
                <TestimonialCard key={`${t.name}-${current}-${i}`} t={t} />
              ))}
            </div>

            {/* Mobile: single card with AnimatePresence */}
            <div className="md:hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <TestimonialCard t={testimonials[current]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <button
            onClick={() => goTo(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 lg:translate-x-6 z-20 w-11 h-11 rounded-full bg-[#E91E63] text-white flex items-center justify-center shadow-md shadow-pink-500/25 hover:bg-[#C2185B] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-6 h-2.5 bg-[#E91E63]' : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
