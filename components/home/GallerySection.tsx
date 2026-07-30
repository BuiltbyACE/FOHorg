'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';

const collageImages = [
  {
    id: 'featured',
    src: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=1200&auto=format&fit=crop',
    title: 'Clean Water Brings Hope to Turkana',
    location: 'Turkana County, Kenya',
    span: 'col-span-3 row-span-6',
  },
  {
    id: 'img2',
    src: 'https://images.unsplash.com/photo-1496307042754-b4e0b1f14293?q=80&w=600&auto=format&fit=crop',
    title: 'Bright Futures Begin in the Classroom',
    location: 'Kumasi, Ghana',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 'img3',
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop',
    title: 'Celebrating Academic Achievement',
    location: 'Nairobi, Kenya',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 'img4',
    src: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=600&auto=format&fit=crop',
    title: 'Women Artisans Cooperative',
    location: 'Kigali, Rwanda',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 'img5',
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop',
    title: 'Community-Led Development',
    location: 'Lilongwe, Malawi',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'img6',
    src: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=600&auto=format&fit=crop',
    title: 'Youth Leadership Workshop',
    location: 'Kampala, Uganda',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'img7',
    src: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop',
    title: 'Mobile Medical Clinic Outreach',
    location: 'Gulu District, Uganda',
    span: 'col-span-2 row-span-2',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

export default function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<(typeof collageImages)[0] | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20" {...fadeUp}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B63] tracking-tight leading-tight">
            Our Impact in Pictures
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed mt-4">
            Real moments captured across our field operations — each image tells a story of transformation, dignity, and lasting change.
          </p>
        </motion.div>

        {/* Asymmetric Collage Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.06 }}
          className="grid grid-cols-5 grid-rows-6 gap-3 sm:gap-4 h-auto"
        >
          {collageImages.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
              }}
              onClick={() => setSelectedItem(item)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-900 shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-black/15 transition-all duration-500 ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B63]/70 via-[#081B63]/5 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <div className="flex items-center gap-1 text-pink-300 text-xs font-medium mb-1">
                  <MapPin size={11} />
                  <span>{item.location}</span>
                </div>
                <h3 className="text-white text-sm sm:text-base font-bold leading-snug group-hover:text-pink-200 transition-colors duration-300">
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
