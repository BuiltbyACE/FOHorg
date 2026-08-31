'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export interface CarouselSlide {
  src: string;
  alt: string;
  caption?: string;
}

interface AboutCarouselProps {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  interval?: number;
}

export default function AboutCarousel({
  slides,
  autoPlay = true,
  interval = 5000,
}: AboutCarouselProps) {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (newIndex: number, dir: number) => {
      const count = slides.length;
      setIndex([((newIndex % count) + count) % count, dir]);
    },
    [slides.length]
  );

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  useEffect(() => {
    if (!autoPlay || paused) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, paused, next, interval]);

  const pauseAutoplay = () => setPaused(true);
  const resumeAutoplay = () => setPaused(false);

  const slide = slides[index];
  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
      onFocus={pauseAutoplay}
      onBlur={resumeAutoplay}
      aria-roledescription="carousel"
      aria-label="Fountain of Hope image gallery"
    >
      {/* Viewport with fixed aspect ratio to prevent layout shift */}
      <div
        className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-3xl bg-slate-900 select-none"
        role="group"
        aria-live="polite"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const delta = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(delta) > 40) {
            if (delta < 0) next();
            else prev();
          }
          touchStartX.current = null;
        }}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x > 80) prev();
              else if (info.offset.x < -80) next();
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081B63]/70 via-transparent to-transparent" />
            {slide.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm sm:text-base font-semibold leading-snug max-w-md">
                  {slide.caption}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Previous / Next buttons */}
        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-[#081B63] flex items-center justify-center hover:bg-white transition-colors shadow-lg"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-[#081B63] flex items-center justify-center hover:bg-white transition-colors shadow-lg"
        >
          <ChevronRight size={20} />
        </button>

        {/* Pause / Play control */}
        {autoPlay && (
          <button
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? 'Resume slideshow' : 'Pause slideshow'}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors backdrop-blur-sm"
          >
            {paused ? <Play size={16} /> : <Pause size={16} />}
          </button>
        )}
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {slides.map((s, i) => (
          <button
            key={s.src + i}
            onClick={() => goTo(i, i > index ? 1 : -1)}
            aria-label={`Go to image ${i + 1} of ${slides.length}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-7 bg-[#E91E63]' : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>

      {/* Screen-reader-only current slide note */}
      <span className="sr-only">
        Image {index + 1} of {slides.length}: {slide.alt}
      </span>
    </div>
  );
}
