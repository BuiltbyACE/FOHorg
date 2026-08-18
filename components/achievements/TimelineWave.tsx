'use client';

import { useRef, useState, useCallback, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  Heart,
  HandHeart,
  Users,
  BarChart3,
  Award,
  Sparkles,
} from 'lucide-react';

const TIMELINE_HEIGHT = 440;
const DOT_SIZE = 20;
const DOT_ABOVE = 130;
const DOT_BELOW = 310;
const GAP = 16;

const timelineIcons = [Star, Heart, HandHeart, Users, BarChart3, Award, Sparkles];

interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

function catmullRomToBezier(pts: { x: number; y: number }[]): string {
  if (pts.length < 2) return '';
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i === 0 ? 0 : i - 1];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(i + 2, pts.length - 1)];
    d += [
      ` C`,
      (p1.x + (p2.x - p0.x) / 6).toFixed(1),
      (p1.y + (p2.y - p0.y) / 6).toFixed(1),
      (p2.x - (p3.x - p1.x) / 6).toFixed(1),
      (p2.y - (p3.y - p1.y) / 6).toFixed(1),
      p2.x.toFixed(1),
      p2.y.toFixed(1),
    ].join(' ');
  }
  return d;
}

function measureMarkers(container: HTMLElement): { x: number; y: number }[] | null {
  const cr = container.getBoundingClientRect();
  const dots = container.querySelectorAll<HTMLElement>('[data-marker]');
  if (dots.length < 2) return null;
  const pts: { x: number; y: number }[] = [];
  for (const dot of dots) {
    const mr = dot.getBoundingClientRect();
    pts.push({ x: mr.left - cr.left + mr.width / 2, y: mr.top - cr.top + mr.height / 2 });
  }
  return pts;
}

export default function TimelineWave({ items }: { items: TimelineItem[] }) {
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [desktopPath, setDesktopPath] = useState('');
  const [mobilePath, setMobilePath] = useState('');
  const [ready, setReady] = useState(false);

  const measure = useCallback(() => {
    const dc = desktopRef.current;
    if (dc && dc.offsetParent !== null) {
      const pts = measureMarkers(dc);
      if (pts) setDesktopPath(catmullRomToBezier(pts));
    }
    const mc = mobileRef.current;
    if (mc && mc.offsetParent !== null) {
      const pts = measureMarkers(mc);
      if (pts) setMobilePath(catmullRomToBezier(pts));
    }
    if (!ready) setReady(true);
  }, [ready]);

  useLayoutEffect(() => {
    measure();
    const targets = [desktopRef.current, mobileRef.current].filter(Boolean) as HTMLElement[];
    if (targets.length === 0) return;
    const ro = new ResizeObserver(measure);
    targets.forEach((t) => ro.observe(t));
    return () => ro.disconnect();
  }, [measure]);

  return (
    <>
      {/* Desktop / Tablet */}
      <div
        ref={desktopRef}
        className="hidden md:block relative select-none mx-auto"
        style={{ height: TIMELINE_HEIGHT, maxWidth: 1100 }}
      >
        <svg
          className={`absolute inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-500 ${ready ? 'opacity-100' : 'opacity-0'}`}
          style={{ overflow: 'visible' }}
        >
          <motion.path
            d={desktopPath}
            stroke="#0A1E5E"
            strokeWidth={5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </svg>

        <div className="relative z-10 w-full h-full">
          {items.map((item, i) => {
            const Icon = timelineIcons[i] || Star;
            const dotAbove = i % 2 === 0;
            const dotCenter = dotAbove ? DOT_ABOVE : DOT_BELOW;

            return (
              <div
                key={item.title}
                className="absolute top-0"
                style={{
                  left: `${(i / (items.length - 1)) * 100}%`,
                  width: 0,
                  height: '100%',
                }}
              >
                <div
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{
                    width: 160,
                    [dotAbove ? 'top' : 'bottom']: dotAbove
                      ? dotCenter + DOT_SIZE + GAP
                      : TIMELINE_HEIGHT - dotCenter + GAP,
                  }}
                >
                  <motion.div
                    className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 text-center"
                    initial={{ opacity: 0, y: dotAbove ? 12 : -12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2.5">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <p className="text-[11px] text-primary font-bold uppercase tracking-wider mb-0.5">
                      {item.year}
                    </p>
                    <p className="text-navy font-bold text-sm mb-1">{item.title}</p>
                    <p className="text-gray-500 text-[11px] leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                </div>

                <span
                  data-marker
                  className="absolute left-1/2 -translate-x-1/2 block rounded-full bg-primary border-[3px] border-white shadow-md shadow-primary/30 z-20 cursor-pointer hover:scale-125 hover:shadow-lg hover:shadow-primary/40 transition-all duration-300"
                  style={{ top: dotCenter, width: DOT_SIZE, height: DOT_SIZE }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile — vertical S-curve with measured path */}
      <div ref={mobileRef} className="md:hidden relative select-none">
        <svg
          className={`absolute inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-500 ${ready ? 'opacity-100' : 'opacity-0'}`}
          style={{ overflow: 'visible' }}
        >
          <motion.path
            d={mobilePath}
            stroke="#0A1E5E"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </svg>

        <div className="relative z-10 space-y-12 py-4">
          {items.map((item, i) => {
            const Icon = timelineIcons[i] || Star;
            const side = i % 2 === 0 ? 'left' : 'right';
            return (
              <motion.div
                key={item.title}
                className={`relative flex items-start gap-5 ${side === 'right' ? 'flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={14} className="text-primary" />
                      </div>
                      <div>
                        <span className="text-[10px] text-primary font-bold uppercase tracking-wider">
                          {item.year}
                        </span>
                        <p className="text-navy font-bold text-sm leading-tight">{item.title}</p>
                      </div>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                <div className="flex-shrink-0 relative z-10 pt-2">
                  <span data-marker className="block w-4 h-4 rounded-full bg-primary border-[2.5px] border-white shadow-md shadow-primary/30" />
                </div>

                <div className="flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
