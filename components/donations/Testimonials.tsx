'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: 'Thanks to the scholarship program, I can now attend school and dream beyond my village. Thank you!',
    name: 'Brian',
    age: 16,
    location: 'Nairobi, Kenya',
  },
  {
    quote: 'The medical camp in our area saved my mother\'s life. We are forever grateful for your support.',
    name: 'Amina',
    age: 28,
    location: 'Mombasa, Kenya',
  },
  {
    quote: 'The skills training program gave me the confidence to start my business and support my family.',
    name: 'Grace',
    age: 24,
    location: 'Kisumu, Kenya',
  },
  {
    quote: 'Because of people like you, our community now has clean water and better sanitation.',
    name: 'John',
    age: 35,
    location: 'Eldoret, Kenya',
  },
];

const QUOTE_MARKS = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D6266F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
);

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const visible = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return [testimonials[current]];
    const items = [];
    for (let i = 0; i < Math.min(3, testimonials.length); i++) {
      items.push(testimonials[(current + i) % testimonials.length]);
    }
    return items;
  };

  const goTo = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => {
      const next = prev + dir;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section className="bg-[#F4F1F4] py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-[#131B40] text-2xl md:text-[28px] font-extrabold uppercase tracking-[0.02em]">
            STORIES MADE POSSIBLE BY YOU
          </h2>
          <div className="flex items-center justify-center gap-1 mt-3">
            <Heart size={16} className="text-[#D6266F] fill-[#D6266F]" />
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => goTo(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-6 z-20 w-11 h-11 rounded-full bg-[#D6266F] text-white flex items-center justify-center shadow-lg hover:brightness-110 transition-all duration-[250ms]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="overflow-hidden mx-4 lg:mx-8">
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {visible().map((t, i) => (
                <div key={`${t.name}-${i}`} className="bg-white rounded-xl shadow-[0_4px_20px_rgba(19,27,64,0.06)] p-6 md:p-7">
                  <div className="text-[#D6266F]">{QUOTE_MARKS}</div>
                  <p className="text-[#515767] text-sm leading-relaxed italic mt-3">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="w-9 h-9 rounded-full bg-[#D6266F]/20 flex items-center justify-center text-[#131B40] font-bold text-sm uppercase">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-[#131B40] font-bold text-sm">{t.name}, {t.age}</p>
                      <p className="text-[#515767] text-xs">{t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

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
                  className="bg-white rounded-xl shadow-[0_4px_20px_rgba(19,27,64,0.06)] p-6"
                >
                  <div className="text-[#D6266F]">{QUOTE_MARKS}</div>
                  <p className="text-[#515767] text-sm leading-relaxed italic mt-3">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="w-9 h-9 rounded-full bg-[#D6266F]/20 flex items-center justify-center text-[#131B40] font-bold text-sm uppercase">
                      {testimonials[current].name[0]}
                    </div>
                    <div>
                      <p className="text-[#131B40] font-bold text-sm">{testimonials[current].name}, {testimonials[current].age}</p>
                      <p className="text-[#515767] text-xs">{testimonials[current].location}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <button
            onClick={() => goTo(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-6 z-20 w-11 h-11 rounded-full bg-[#D6266F] text-white flex items-center justify-center shadow-lg hover:brightness-110 transition-all duration-[250ms]"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
