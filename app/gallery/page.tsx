'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  Heart,
  ArrowRight,
  Sparkles,
  Quote,
  ChevronLeft,
  ChevronRight,
  Users,
  HeartHandshake,
  Globe,
  TreePine,
  Stethoscope,
  BookOpen,
  Camera,
  HandHeart,
  Award,
  ShieldCheck,
} from 'lucide-react';
import Container from '@/components/layout/Container';
import Button from '@/components/common/Button';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '-80px' },
  transition: { staggerChildren: 0.1 },
};

const fadeUpChild = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

const categories = [
  { id: 'all', label: 'All Moments', icon: Camera },
  { id: 'education', label: 'Education', icon: BookOpen },
  { id: 'healthcare', label: 'Healthcare', icon: Stethoscope },
  { id: 'women', label: 'Women Empowerment', icon: HeartHandshake },
  { id: 'community', label: 'Community Outreach', icon: Users },
  { id: 'events', label: 'Events', icon: Sparkles },
  { id: 'environment', label: 'Environment', icon: TreePine },
];

const galleryItems = [
  {
    id: '1',
    title: 'Bright Futures Begin in the Classroom',
    location: 'Turkana County, Kenya',
    category: 'education',
    image: 'https://images.unsplash.com/photo-1496307042754-b4e0b1f14293?q=80&w=1200&auto=format&fit=crop',
    span: 'lg:col-span-2 lg:row-span-2',
    aspect: 'aspect-[4/5]',
  },
  {
    id: '2',
    title: 'Mobile Medical Clinic Reaching Remote Villages',
    location: 'Gulu District, Uganda',
    category: 'healthcare',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop',
    span: 'lg:col-span-1 lg:row-span-1',
    aspect: 'aspect-[4/5]',
  },
  {
    id: '3',
    title: 'Women Artisans Building Economic Independence',
    location: 'Kigali, Rwanda',
    category: 'women',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1000&auto=format&fit=crop',
    span: 'lg:col-span-1 lg:row-span-1',
    aspect: 'aspect-[16/10]',
  },
  {
    id: '4',
    title: 'Community Agricultural Training Program',
    location: 'Lilongwe, Malawi',
    category: 'community',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop',
    span: 'lg:col-span-3 lg:row-span-1',
    aspect: 'aspect-[16/7]',
  },
  {
    id: '5',
    title: 'Youth Leadership & Coding Workshop',
    location: 'Nairobi, Kenya',
    category: 'education',
    image: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=1000&auto=format&fit=crop',
    span: 'lg:col-span-1 lg:row-span-1',
    aspect: 'aspect-[4/5]',
  },
  {
    id: '6',
    title: 'Tree Planting & Environmental Conservation',
    location: 'Nyeri County, Kenya',
    category: 'environment',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1000&auto=format&fit=crop',
    span: 'lg:col-span-1 lg:row-span-1',
    aspect: 'aspect-[4/5]',
  },
  {
    id: '7',
    title: 'Community Sports & Recreation Day',
    location: 'Kampala, Uganda',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop',
    span: 'lg:col-span-1 lg:row-span-1',
    aspect: 'aspect-[16/10]',
  },
  {
    id: '8',
    title: 'Food Distribution & Nutrition Support',
    location: 'Turkana County, Kenya',
    category: 'community',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop',
    span: 'lg:col-span-2 lg:row-span-1',
    aspect: 'aspect-[16/9]',
  },
  {
    id: '9',
    title: 'Reading Circles Inspire Young Minds',
    location: 'Kumasi, Ghana',
    category: 'education',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop',
    span: 'lg:col-span-1 lg:row-span-1',
    aspect: 'aspect-[4/5]',
  },
  {
    id: '10',
    title: 'Clean Water Well Inauguration Ceremony',
    location: 'Turkana County, Kenya',
    category: 'events',
    image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=1200&auto=format&fit=crop',
    span: 'lg:col-span-2 lg:row-span-2',
    aspect: 'aspect-[4/5]',
  },
  {
    id: '11',
    title: 'Volunteer Team Building School Classrooms',
    location: 'Kisumu, Kenya',
    category: 'community',
    image: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=1000&auto=format&fit=crop',
    span: 'lg:col-span-1 lg:row-span-1',
    aspect: 'aspect-[16/10]',
  },
  {
    id: '12',
    title: 'Celebrating Graduation & New Beginnings',
    location: 'Nairobi, Kenya',
    category: 'education',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop',
    span: 'lg:col-span-1 lg:row-span-1',
    aspect: 'aspect-[4/5]',
  },
  {
    id: '13',
    title: 'Healthcare Workers on the Frontline',
    location: 'Gulu District, Uganda',
    category: 'healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
    span: 'lg:col-span-1 lg:row-span-1',
    aspect: 'aspect-[16/10]',
  },
  {
    id: '14',
    title: 'Community Clean-Up & Sanitation Drive',
    location: 'Kampala, Uganda',
    category: 'environment',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1000&auto=format&fit=crop',
    span: 'lg:col-span-2 lg:row-span-1',
    aspect: 'aspect-[16/9]',
  },
  {
    id: '15',
    title: 'Smiles of Hope and Transformation',
    location: 'Turkana County, Kenya',
    category: 'community',
    image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=1000&auto=format&fit=crop',
    span: 'lg:col-span-1 lg:row-span-1',
    aspect: 'aspect-[4/5]',
  },
];

const impactStats = [
  { icon: Users, value: '50,000+', label: 'Lives Impacted' },
  { icon: Globe, value: '150+', label: 'Communities Reached' },
  { icon: HeartHandshake, value: '85+', label: 'Programs Launched' },
  { icon: Award, value: '2,000+', label: 'Active Volunteers' },
  { icon: ShieldCheck, value: '20+', label: 'Partner Nations' },
];

const testimonials = [
  {
    name: 'Grace Akinyi',
    role: 'Education Program Beneficiary',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    quote: 'Thanks to Fountain of Hope, I received a scholarship that changed my entire future. Today, I am a nurse serving my own community. Hope is real.',
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

function CountUp({ value, suffix }: { value: string; suffix?: string }) {
  return (
    <span className="font-extrabold tracking-tight">
      {value}{suffix}
    </span>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const impactRef = useRef<HTMLDivElement>(null);
  const impactInView = useInView(impactRef, { once: true, margin: '-80px' });

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-pink-50/20 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(233,30,99,0.04),transparent_50%)] pointer-events-none" />
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-[0.05em] mb-6">
                <Sparkles size={16} />
                Our Gallery
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#081B5A] leading-[1.1] tracking-tight mb-6">
                Moments of Hope,{' '}
                <span className="text-primary">Stories of Change</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-xl">
                Every photograph captures a moment of transformation. From classroom smiles to community celebrations, these are the faces and stories behind our mission.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">
                  Explore Gallery
                  <Camera size={18} />
                </Button>
                <Button href="/about" variant="outline" size="lg">
                  View Our Impact
                  <ArrowRight size={18} />
                </Button>
              </div>
            </motion.div>

            {/* Right Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="relative"
            >
              <div className="grid grid-cols-5 grid-rows-4 gap-3 h-[500px] lg:h-[560px]">
                {/* Large main image - left side spanning full height */}
                <div className="col-span-3 row-span-4 relative rounded-3xl overflow-hidden shadow-xl shadow-black/10">
                  <Image
                    src="https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=800&auto=format&fit=crop"
                    alt="Smiling African children"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081B5A]/40 to-transparent" />
                </div>

                {/* Top-right image */}
                <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden shadow-lg shadow-black/10">
                  <Image
                    src="https://images.unsplash.com/photo-1496307042754-b4e0b1f14293?q=80&w=400&auto=format&fit=crop"
                    alt="Classroom learning"
                    fill
                    sizes="(max-width: 1024px) 50vw, 15vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>

                {/* Middle-right image */}
                <div className="col-span-1 row-span-2 relative rounded-3xl overflow-hidden shadow-lg shadow-black/10">
                  <Image
                    src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=400&auto=format&fit=crop"
                    alt="Women empowerment"
                    fill
                    sizes="(max-width: 1024px) 50vw, 10vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>

                {/* Bottom-right image */}
                <div className="col-span-1 row-span-2 relative rounded-3xl overflow-hidden shadow-lg shadow-black/10">
                  <Image
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400&auto=format&fit=crop"
                    alt="Community outreach"
                    fill
                    sizes="(max-width: 1024px) 50vw, 10vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CATEGORY SECTION */}
      <section className="py-16 lg:py-20 bg-white">
        <Container>
          <motion.div className="text-center mb-10" {...fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-[0.05em] mb-4">
              Browse Categories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081B5A] leading-tight tracking-tight">
              Gallery Highlights
            </h2>
            <p className="text-gray-500 text-lg mt-3 max-w-2xl mx-auto">
              Explore our impact through the lens — each category tells a unique story of transformation.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3 lg:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                      : 'bg-white text-[#081B5A] shadow-md shadow-black/5 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5'
                  }`}
                >
                  <Icon size={18} className={isActive ? 'text-white' : 'text-primary'} />
                  {cat.label}
                </button>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* GALLERY GRID */}
      <section className="py-16 lg:py-24 bg-gray-50/50">
        <Container>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 auto-rows-auto"
            {...stagger}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-slate-900 shadow-lg shadow-black/5 border border-gray-100/80 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-1 transition-all duration-500 ${item.span} ${item.aspect}`}
                {...fadeUpChild}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B5A]/80 via-[#081B5A]/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                  <div className="flex items-center gap-1.5 text-primary text-xs font-medium mb-1.5">
                    <Camera size={13} />
                    <span className="capitalize">{item.category}</span>
                  </div>
                  <h3 className="text-white text-base lg:text-lg font-bold leading-snug group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-xs mt-1">{item.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* IMPACT + TESTIMONIAL SECTION */}
      <section className="py-20 lg:py-28" ref={impactRef}>
        <Container>
          <motion.div
            className="rounded-3xl bg-[#081B5A] overflow-hidden relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(233,30,99,0.08),transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.04),transparent_50%)] pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-0 relative">
              {/* Left - Stats */}
              <div className="p-10 lg:p-14 xl:p-16">
                <motion.div {...fadeUp}>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold uppercase tracking-[0.05em] mb-4">
                    <Sparkles size={16} />
                    Our Impact in Pictures
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-10">
                    Changing Lives Across{' '}
                    <span className="text-primary">Africa</span>
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {impactStats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <Icon size={24} className="text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl sm:text-3xl font-extrabold text-white">
                            {impactInView && <CountUp value={stat.value} />}
                          </div>
                          <p className="text-white/60 text-sm">{stat.label}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right - Testimonial */}
              <div className="p-10 lg:p-14 xl:p-16 flex items-center">
                <div className="w-full">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-5">
                      <Quote size={20} className="text-primary" />
                    </div>
                    <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 italic">
                      &ldquo;{testimonials[testimonialIndex].quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50 flex-shrink-0">
                        <Image
                          src={testimonials[testimonialIndex].image}
                          alt={testimonials[testimonialIndex].name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">
                          {testimonials[testimonialIndex].name}
                        </p>
                        <p className="text-white/50 text-xs">
                          {testimonials[testimonialIndex].role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={prevTestimonial}
                        className="w-9 h-9 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="w-9 h-9 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight size={16} />
                      </button>
                      <div className="flex gap-1.5 ml-2">
                        {testimonials.map((_, i) => (
                          <span
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              i === testimonialIndex ? 'bg-primary w-5' : 'bg-white/30'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 lg:py-24 bg-gray-50/50">
        <Container>
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#D81B60] to-rose-700 px-8 py-16 md:px-16 md:py-20 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.12),transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
                Together We Can Create Lasting Change
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Join us in our mission to transform lives. Every contribution brings hope, education, and opportunity to communities across Africa.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/donations"
                  className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full bg-white text-primary font-bold text-base uppercase tracking-[0.03em] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Donate Now
                  <Heart size={18} className="fill-primary" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full border-2 border-white/40 text-white font-bold text-base uppercase tracking-[0.03em] hover:bg-white/10 hover:border-white/60 transition-all duration-300"
                >
                  Volunteer With Us
                  <HandHeart size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
