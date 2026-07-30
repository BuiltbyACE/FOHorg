'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Heart, ArrowRight, Sparkles, Quote, ChevronLeft, ChevronRight,
  Users, HeartHandshake, Globe, Trees, Stethoscope, BookOpen, Camera,
  HandHeart, Award, ShieldCheck, X, MapPin,
} from 'lucide-react';
import Container from '@/components/layout/Container';

/* ─── Data ─────────────────────────────────────────────────────────── */

const categories = [
  { id: 'all',       label: 'All Moments',       icon: Camera },
  { id: 'education', label: 'Education',          icon: BookOpen },
  { id: 'healthcare',label: 'Healthcare',         icon: Stethoscope },
  { id: 'women',     label: 'Women Empowerment',  icon: HeartHandshake },
  { id: 'community', label: 'Community',          icon: Users },
  { id: 'events',    label: 'Events',             icon: Sparkles },
  { id: 'environment',label:'Environment',        icon: Trees },
];

const galleryItems = [
  { id: '1',  title: 'Bright Futures Begin in the Classroom',      location: 'Turkana County, Kenya',  category: 'education',   aspect: 'aspect-[3/4]',  image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop' },
  { id: '2',  title: 'Mobile Medical Clinic Reaching Villages',     location: 'Gulu District, Uganda',  category: 'healthcare',  aspect: 'aspect-[4/3]',  image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop' },
  { id: '3',  title: 'Women Artisans Building Independence',        location: 'Kigali, Rwanda',          category: 'women',       aspect: 'aspect-[3/4]',  image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1000&auto=format&fit=crop' },
  { id: '4',  title: 'Community Agricultural Training Program',     location: 'Lilongwe, Malawi',        category: 'community',   aspect: 'aspect-[16/9]', image: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?q=80&w=1200&auto=format&fit=crop' },
  { id: '5',  title: 'Youth Leadership & Coding Workshop',          location: 'Nairobi, Kenya',          category: 'education',   aspect: 'aspect-[4/3]',  image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop' },
  { id: '6',  title: 'Tree Planting & Environmental Conservation',  location: 'Nyeri County, Kenya',     category: 'environment', aspect: 'aspect-[3/4]',  image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop' },
  { id: '7',  title: 'Community Sports & Recreation Day',           location: 'Kampala, Uganda',         category: 'events',      aspect: 'aspect-[4/3]',  image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop' },
  { id: '8',  title: 'Food Distribution & Nutrition Support',       location: 'Turkana County, Kenya',   category: 'community',   aspect: 'aspect-[4/3]',  image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop' },
  { id: '9',  title: 'Reading Circles Inspire Young Minds',         location: 'Kumasi, Ghana',           category: 'education',   aspect: 'aspect-[3/4]',  image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop' },
  { id: '10', title: 'Clean Water Well Inauguration Ceremony',      location: 'Turkana County, Kenya',   category: 'events',      aspect: 'aspect-[3/4]',  image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1200&auto=format&fit=crop' },
  { id: '11', title: 'Volunteers Building School Classrooms',       location: 'Kisumu, Kenya',           category: 'community',   aspect: 'aspect-[4/3]',  image: 'https://images.unsplash.com/photo-1469571486292-b53601010b89?q=80&w=1000&auto=format&fit=crop' },
  { id: '12', title: 'Celebrating Graduation & New Beginnings',     location: 'Nairobi, Kenya',          category: 'education',   aspect: 'aspect-[3/4]',  image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop' },
  { id: '13', title: 'Healthcare Workers on the Frontline',         location: 'Gulu District, Uganda',   category: 'healthcare',  aspect: 'aspect-[4/3]',  image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop' },
  { id: '14', title: 'Community Clean-Up & Sanitation Drive',       location: 'Kampala, Uganda',         category: 'environment', aspect: 'aspect-[16/9]', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1000&auto=format&fit=crop' },
  { id: '15', title: 'Smiles of Hope and Transformation',           location: 'Turkana County, Kenya',   category: 'community',   aspect: 'aspect-[3/4]',  image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop' },
];

const stats = [
  { icon: Users,          target: 50000, suffix: '+', label: 'Lives Impacted' },
  { icon: Globe,          target: 150,   suffix: '+', label: 'Communities Reached' },
  { icon: HeartHandshake, target: 85,    suffix: '+', label: 'Programs Launched' },
  { icon: Award,          target: 2000,  suffix: '+', label: 'Active Volunteers' },
  { icon: ShieldCheck,    target: 20,    suffix: '+', label: 'Partner Nations' },
];

const testimonials = [
  {
    name: 'Grace Akinyi',
    role: 'Education Program Beneficiary',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    quote: 'Thanks to Fountain of Hope, I received a scholarship that changed my entire future. Today I am a nurse serving my own community. Hope is real.',
  },
  {
    name: 'James Omondi',
    role: 'Community Volunteer Leader',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    quote: 'The clean water project transformed our village. Our children no longer walk miles for water. We are forever grateful for this life-changing support.',
  },
  {
    name: 'Sarah Wanjiku',
    role: 'Women Empowerment Coordinator',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    quote: 'The micro-grant program empowered over 200 women in our cooperative. We now run thriving businesses and support our families with dignity.',
  },
];

/* ─── Animated count-up ─────────────────────────────────────────────── */

function CountUpStat({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let elapsed = 0;
    const duration = 1800;
    const step = 16;
    const timer = setInterval(() => {
      elapsed += step;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      setCount(current);
      if (elapsed >= duration) { setCount(target); clearInterval(timer); }
    }, step);
    return () => clearInterval(timer);
  }, [active, target]);

  return <>{count >= 1000 ? count.toLocaleString() : count}{suffix}</>;
}

/* ─── Page ──────────────────────────────────────────────────────────── */

export default function GalleryPage() {
  const [activeCategory, setActiveCategory]     = useState('all');
  const [lightboxIndex, setLightboxIndex]       = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const statsRef    = useRef<HTMLElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox  = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  /* Keyboard navigation + scroll-lock for lightbox */
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { closeLightbox(); return; }
      if (e.key === 'ArrowRight') setLightboxIndex((p) => p !== null ? Math.min(p + 1, filteredItems.length - 1) : null);
      if (e.key === 'ArrowLeft')  setLightboxIndex((p) => p !== null ? Math.max(p - 1, 0) : null);
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, filteredItems.length, closeLightbox]);

  const lightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const nextTestimonial = () => setTestimonialIndex((p) => (p + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  /* ── Render ── */
  return (
    <>
      {/* ════════════════════════════════════
          HERO
      ════════════════════════════════════ */}
      <section className="pt-[84px] pb-20 lg:pb-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(233,30,99,0.05),transparent_55%)] pointer-events-none" />

        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">

            {/* Left */}
            <div className="lg:col-span-5 xl:col-span-5">
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E91E63] mb-4"
              >
                Our Gallery
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#081B63] leading-[1.05] tracking-tight mb-5"
              >
                Moments of Hope,{' '}
                <span className="text-[#E91E63]">Stories of Change</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.14 }}
                className="w-10 h-[3px] bg-[#E91E63] mb-6"
              />

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8 max-w-[440px]"
              >
                Every photograph captures a moment of transformation. From classroom smiles
                to community celebrations — these are the faces behind our mission.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.26 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#gallery"
                  className="inline-flex items-center gap-2 h-[52px] px-8 rounded-[6px] bg-[#E91E63] text-white font-bold text-sm uppercase tracking-[0.07em] shadow-md shadow-pink-500/25 hover:-translate-y-0.5 hover:bg-[#C2185B] transition-all duration-300"
                >
                  Explore Gallery
                  <Camera size={16} />
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 h-[52px] px-8 rounded-[6px] bg-white border border-slate-200 text-[#081B63] font-bold text-sm uppercase tracking-[0.07em] hover:border-[#081B63] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Our Impact
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>

            {/* Right — editorial image mosaic */}
            <motion.div
              className="lg:col-span-7 xl:col-span-7 relative"
              initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <div className="grid grid-cols-12 grid-rows-10 gap-3 h-[440px] sm:h-[520px] lg:h-[560px]">
                {/* Main tall left image */}
                <div className="col-span-7 row-span-10 relative rounded-3xl overflow-hidden shadow-xl shadow-black/10">
                  <Image
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800&auto=format&fit=crop"
                    alt="Smiling children" fill priority unoptimized
                    sizes="40vw" className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081B63]/40 to-transparent" />
                </div>
                {/* Top right large */}
                <div className="col-span-5 row-span-5 relative rounded-3xl overflow-hidden shadow-lg shadow-black/10">
                  <Image
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop"
                    alt="Classroom" fill priority unoptimized
                    sizes="25vw" className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Bottom right left */}
                <div className="col-span-2 row-span-5 relative rounded-3xl overflow-hidden shadow-md shadow-black/8">
                  <Image
                    src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=400&auto=format&fit=crop"
                    alt="Women" fill priority unoptimized
                    sizes="10vw" className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Bottom right main */}
                <div className="col-span-3 row-span-5 relative rounded-3xl overflow-hidden shadow-md shadow-black/8">
                  <Image
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400&auto=format&fit=crop"
                    alt="Community" fill priority unoptimized
                    sizes="15vw" className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Floating count badge */}
              <div className="glass-dark absolute bottom-5 left-4 sm:left-6 rounded-2xl px-5 py-4">
                <p className="text-white text-2xl font-extrabold leading-none">15+</p>
                <p className="text-white/55 text-xs mt-0.5 uppercase tracking-wide font-semibold">Photo Stories</p>
              </div>

              {/* Decorative ring */}
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full border-[18px] border-[#E91E63]/10 pointer-events-none" />
            </motion.div>

          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════
          STATS BAR
      ════════════════════════════════════ */}
      <section ref={statsRef} className="bg-[#081B63] py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(233,30,99,0.08),transparent_55%)] pointer-events-none" />

        <Container>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-0 relative z-10">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                  className={`flex flex-col items-center text-center px-4 ${i < stats.length - 1 ? 'md:border-r border-white/10' : ''}`}
                >
                  <div className="w-12 h-12 rounded-full bg-[#E91E63]/15 border border-[#E91E63]/25 flex items-center justify-center text-[#E91E63] mb-3">
                    <Icon size={20} />
                  </div>
                  <p className="text-white text-3xl font-extrabold leading-none tabular-nums">
                    <CountUpStat target={stat.target} suffix={stat.suffix} active={statsInView} />
                  </p>
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-[0.1em] mt-2">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════
          GALLERY — dark background, masonry
      ════════════════════════════════════ */}
      <section id="gallery" className="bg-[#0F1117] py-16 lg:py-24">
        <Container>

          {/* Section header */}
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E91E63] mb-3"
            >
              Browse by Category
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.06 }}
              className="text-white text-2xl md:text-[32px] font-extrabold leading-tight tracking-tight mb-8"
            >
              Gallery Highlights
            </motion.h2>

            {/* Filter pills */}
            <div className="flex items-center gap-2.5 flex-wrap justify-center">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <motion.button
                    key={cat.id}
                    onClick={() => { setActiveCategory(cat.id); setLightboxIndex(null); }}
                    whileTap={{ scale: 0.96 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.1em] transition-all duration-250 cursor-pointer ${
                      isActive
                        ? 'bg-[#E91E63] text-white shadow-lg shadow-pink-500/30'
                        : 'bg-white/8 text-white/55 border border-white/12 hover:bg-white/14 hover:text-white'
                    }`}
                  >
                    <Icon size={12} />
                    {cat.label}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Masonry grid — CSS columns */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-5"
            >
              {filteredItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="break-inside-avoid mb-5 group cursor-pointer"
                  onClick={() => openLightbox(idx)}
                >
                  <div className={`relative rounded-2xl overflow-hidden ${item.aspect}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#E91E63] text-white text-[10px] font-bold uppercase tracking-[0.1em] mb-2 capitalize">
                        {item.category}
                      </span>
                      <h3 className="text-white font-bold text-sm leading-snug">{item.title}</h3>
                      <p className="text-white/60 text-xs mt-1 flex items-center gap-1">
                        <MapPin size={10} className="flex-shrink-0" />
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <p className="text-center py-20 text-white/30 text-base">No photos in this category yet.</p>
          )}

        </Container>
      </section>

      {/* ════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <Container>

          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E91E63] mb-3"
            >
              Real Stories
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.06 }}
              className="text-[#081B63] text-2xl md:text-[36px] font-extrabold leading-tight tracking-tight"
            >
              Voices Behind the Photos
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.12 }}
              className="text-slate-500 text-base mt-4 max-w-xl mx-auto"
            >
              The real measure of our work lives in the lives transformed by your generosity.
            </motion.p>
          </div>

          {/* Desktop: 3 side-by-side cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
                className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(8,27,99,0.07)] p-8 flex flex-col hover:shadow-[0_8px_40px_rgba(8,27,99,0.12)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E91E63]" />
                <Quote size={28} className="text-[#E91E63]/25 mb-4" />
                <p className="text-slate-600 text-[14px] leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#E91E63]/20">
                    <Image src={t.image} alt={t.name} fill sizes="48px" className="object-cover" unoptimized />
                  </div>
                  <div>
                    <p className="text-[#081B63] font-bold text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: carousel */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(8,27,99,0.07)] p-7 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E91E63]" />
                <Quote size={28} className="text-[#E91E63]/25 mb-4" />
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  &ldquo;{testimonials[testimonialIndex].quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#E91E63]/20">
                    <Image src={testimonials[testimonialIndex].image} alt={testimonials[testimonialIndex].name} fill sizes="48px" className="object-cover" unoptimized />
                  </div>
                  <div>
                    <p className="text-[#081B63] font-bold text-sm">{testimonials[testimonialIndex].name}</p>
                    <p className="text-slate-400 text-xs">{testimonials[testimonialIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#081B63] hover:bg-[#E91E63] hover:text-white hover:border-[#E91E63] transition-all"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIndex(i)}
                    className={`rounded-full transition-all duration-300 ${i === testimonialIndex ? 'w-6 h-2.5 bg-[#E91E63]' : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#081B63] hover:bg-[#E91E63] hover:text-white hover:border-[#E91E63] transition-all"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

        </Container>
      </section>

      {/* ════════════════════════════════════
          CTA
      ════════════════════════════════════ */}
      <section className="bg-[#E91E63] py-20 md:py-24 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border-[40px] border-white/10 pointer-events-none" />
        <div className="absolute -right-8 -top-8  w-40 h-40 rounded-full border-[20px] border-white/8  pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full border-[50px] border-white/8 pointer-events-none" />

        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-tight tracking-tight max-w-[580px]">
                Together We Can Create Lasting Change
              </h2>
              <p className="text-white/70 mt-5 text-base leading-relaxed max-w-[480px] mx-auto lg:mx-0">
                Join our mission to transform lives. Every contribution brings hope,
                education, and opportunity to communities across Africa.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 flex-shrink-0"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <Link
                href="/donations"
                className="inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-[6px] bg-white text-[#E91E63] font-bold text-sm uppercase tracking-[0.07em] shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
              >
                Donate Now
                <Heart size={16} className="fill-[#E91E63]" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-[6px] border-2 border-white text-white font-bold text-sm uppercase tracking-[0.07em] hover:bg-white hover:text-[#E91E63] transition-all duration-300"
              >
                Volunteer With Us
                <HandHeart size={16} />
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════
          LIGHTBOX
      ════════════════════════════════════ */}
      <AnimatePresence>
        {lightboxItem && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-black/96 flex flex-col items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Prev */}
            {lightboxIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1); }}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#E91E63] hover:bg-opacity-80 transition-colors z-10"
                aria-label="Previous photo"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            {/* Image + info */}
            <motion.div
              key={lightboxItem.id}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.22 }}
              className="w-full max-w-4xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: '68vh' }}>
                <Image
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div className="mt-5 text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-[#E91E63]/20 text-[#E91E63] text-[10px] font-bold uppercase tracking-[0.12em] mb-2 capitalize">
                  {lightboxItem.category}
                </span>
                <p className="text-white font-bold text-base">{lightboxItem.title}</p>
                <p className="text-white/45 text-xs mt-1 flex items-center justify-center gap-1">
                  <MapPin size={11} />
                  {lightboxItem.location}
                </p>
              </div>
            </motion.div>

            {/* Next */}
            {lightboxIndex < filteredItems.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1); }}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#E91E63] hover:bg-opacity-80 transition-colors z-10"
                aria-label="Next photo"
              >
                <ChevronRight size={22} />
              </button>
            )}

            {/* Counter pill */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/10 text-white/65 text-xs font-semibold tracking-wider">
              {lightboxIndex + 1} / {filteredItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
