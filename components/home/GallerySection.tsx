'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';

const galleryImages = [
  {
    id: 'featured',
    src: '/images/foh1.jpeg',
    title: 'Education Brings Hope to Garissa',
    location: 'Garissa County, Kenya',
    featured: true,
  },
  {
    id: 'img2',
    src: '/images/foh2.jpeg',
    title: 'Bright Futures Begin in the Classroom',
    location: 'Fafi, Kenya',
    featured: false,
  },
  {
    id: 'img3',
    src: '/images/foh3.jpeg',
    title: 'Celebrating Academic Achievement',
    location: 'Garissa Town, Kenya',
    featured: false,
  },
  {
    id: 'img4',
    src: '/images/foh4.jpeg',
    title: 'Women Artisans Cooperative',
    location: 'Ijara, Kenya',
    featured: false,
  },
  {
    id: 'img5',
    src: '/images/foh5.jpeg',
    title: 'Community-Led Development',
    location: 'Balambala, Kenya',
    featured: false,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

export default function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<(typeof galleryImages)[0] | null>(null);

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden" id="gallery">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <motion.div className="text-center max-w-3xl mx-auto mb-12" {...fadeUp}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B63] tracking-tight leading-tight">
            Our Impact in Pictures
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed mt-5">
            Real moments captured across our field operations across Garissa County — each image tells a story of transformation, dignity, and lasting change.
          </p>
        </motion.div>

        {/* Editorial Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.06 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[190px] sm:auto-rows-[210px] lg:auto-rows-[215px]"
        >
          {galleryImages.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
              }}
              onClick={() => setSelectedItem(item)}
              className={`relative cursor-pointer overflow-hidden rounded-[18px] bg-slate-900 shadow-lg shadow-black/5 ${
                item.featured ? 'row-span-2' : ''
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />

              {/* Dark gradient for caption readability */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent ${
                  item.featured ? 'opacity-80' : 'opacity-70'
                }`}
              />

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <div className="flex items-center gap-1 text-pink-200 text-xs font-semibold mb-1">
                  <MapPin size={11} />
                  <span>{item.location}</span>
                </div>
                <h3 className="text-white text-sm sm:text-base font-bold leading-snug">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#081B63] rounded-3xl overflow-hidden border border-white/20 shadow-2xl text-white"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Close lightbox"
              >
                <X size={22} />
              </button>
              <div className="relative h-[65vh] w-full bg-black">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <MapPin size={14} />
                  <span>{selectedItem.location}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">{selectedItem.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
