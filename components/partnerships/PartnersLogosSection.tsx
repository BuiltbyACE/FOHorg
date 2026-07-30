'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users } from 'lucide-react';

const partners = [
  { name: 'UNICEF',         src: '/logo/UNICEF-logo-500x281.png' },
  { name: 'World Vision',   src: '/logo/world-vision-logo.png' },
  { name: 'Rotary',         src: '/logo/rotary-logos.webp' },
  { name: 'Kenya Red Cross',src: '/logo/kenya-red-cross-logo.png' },
  { name: 'UNDP',           src: '/logo/united-nations-logo-500x281.png' },
  { name: 'USAID',          src: '/logo/USAID logo.png' },
  { name: 'Safaricom',      src: '/logo/Safaricom.png' },
  { name: 'Equity Bank',    src: '/logo/Equity_Bank_Logo.png' },
];

const easeInOut = (t: number) => t * t * (3 - 2 * t);

const stackShadow = (depth: number) =>
  `${depth * 1.5}px ${depth * 2.5}px ${depth * 4 + 8}px rgba(0,0,0,${0.04 + depth * 0.012})`;

function PartnerCard({
  partner,
  index,
  total,
  scrollYProgress,
}: {
  partner: { name: string; src: string };
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const slots = total + 1;
  const cardsAbove = total - 1 - index;

  const y = useTransform(scrollYProgress, (p: number) => {
    const seg = p * slots;

    if (seg <= index) return '100%';

    if (seg <= index + 1) {
      const t = (seg - index) / 1;
      return `${(1 - easeInOut(t)) * 100}%`;
    }

    const shifts = Math.min(seg - (index + 1), cardsAbove);
    return `${-(shifts * 12)}px`;
  });

  const s = useTransform(scrollYProgress, (p: number) => {
    const seg = p * slots;

    if (seg <= index) return 0.85;

    if (seg <= index + 1) {
      const t = (seg - index) / 1;
      return 0.85 + easeInOut(t) * 0.15;
    }

    const shifts = Math.min(seg - (index + 1), cardsAbove);
    return 0.985 ** shifts;
  });

  return (
    <motion.div
      style={{ y, scale: s, zIndex: index + 1 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="relative mx-4 w-full max-w-[300px] flex-1 rounded-[2.25rem] bg-white sm:mx-6">
        <div
          className="pointer-events-none absolute inset-0 rounded-[2.25rem]"
          style={{ boxShadow: stackShadow(cardsAbove) }}
        />
        <div className="flex h-full flex-col items-center justify-center gap-5 px-6">
          <div className="relative h-20 w-[240px] max-w-full sm:h-24 sm:w-[280px]">
            <Image
              src={partner.src}
              alt={partner.name}
              fill
              className="object-contain"
              sizes="280px"
              priority={index < 2}
            />
          </div>
          <p className="text-[11px] font-medium tracking-[0.18em] text-gray-400 uppercase">
            {partner.name}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function PartnersLogosSection() {
  const [showAll, setShowAll] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      {/* ── Desktop — grid of 5, enlarged ── */}
      <section className="hidden md:block bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <div className="mb-12 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E91E63]">
              Our Valued Partners
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 items-center justify-items-center gap-10 lg:grid-cols-3 lg:gap-14">
            {(showAll ? partners : partners.slice(0, 5)).map((partner, i) => (
              <motion.div
                key={partner.name}
                layout
                initial={showAll && i >= 5 ? { opacity: 0, scale: 0.6 } : undefined}
                animate={showAll && i >= 5 ? { opacity: 1, scale: 1 } : undefined}
                transition={{ duration: 0.45, delay: (i - 5) * 0.1, ease: 'easeOut' }}
                className="flex items-center justify-center"
              >
                <div className="relative h-24 w-[280px]">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    sizes="280px"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {!showAll && (
            <div className="flex justify-center">
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                onClick={() => setShowAll(true)}
                className="inline-flex cursor-pointer select-none items-center gap-2 rounded-full bg-[#E91E63] px-6 py-2.5 text-[12px] font-bold uppercase tracking-[0.08em] text-white shadow-md shadow-pink-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C2185B]"
              >
                <Users size={14} strokeWidth={2} />
                View All Partners
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* ── Mobile — premium tiled stack ── */}
      {reducedMotion ? (
        <section className="bg-white px-6 py-12 md:hidden">
          <div className="mb-8 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E91E63]">
              Our Valued Partners
            </p>
          </div>
          <div className="flex flex-col items-center gap-8">
            {partners.map((p) => (
              <div key={p.name} className="relative h-20 w-[240px] max-w-full">
                <Image src={p.src} alt={p.name} fill className="object-contain" sizes="240px" />
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section ref={sectionRef} className="relative md:hidden bg-neutral-100">
          <div className="sticky top-0 z-0 h-screen overflow-hidden">
            <div className="pointer-events-none absolute left-0 right-0 top-6 z-50 text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E91E63]">
                Our Valued Partners
              </p>
            </div>
            {partners.map((partner, i) => (
              <PartnerCard
                key={partner.name}
                partner={partner}
                index={i}
                total={partners.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
          <div style={{ height: `${(partners.length + 1) * 100}vh` }} />
        </section>
      )}
    </>
  );
}
