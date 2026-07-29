'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, MapPin, Heart } from 'lucide-react';

const galleryItems = [
  {
    id: '1',
    title: 'Clean Water Well Inauguration',
    location: 'Turkana County, Kenya',
    category: 'Water Mission',
<<<<<<< HEAD
    image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=1200&auto=format&fit=crop',
=======
    image: 'https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&w=1200&auto=format&fit=crop',
>>>>>>> 1c0ffee (Merge remote changes and restore stashed work)
    span: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2',
  },
  {
    id: '2',
    title: 'New Classroom & Digital Lab Launch',
    location: 'Kumasi, Ghana',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1',
  },
  {
    id: '3',
    title: 'Mobile Medical & Vaccine Clinic',
    location: 'Gulu District, Uganda',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1',
  },
  {
    id: '4',
    title: 'Women Artisans Cooperative Market',
    location: 'Kigali, Rwanda',
    category: 'Empowerment',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1000&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1',
  },
  {
    id: '5',
    title: 'Youth Coding & Leadership Workshop',
    location: 'Nairobi, Kenya',
    category: 'Youth',
    image: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=1000&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1',
  },
  {
    id: '6',
    title: 'Community Agriculture & Nutrition Program',
    location: 'Lilongwe, Malawi',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1000&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1',
  },
];

export default function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-[#E91E63] text-xs font-semibold uppercase tracking-wider mb-4 border border-pink-200/50">
            Authentic Moments of Change
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B63] tracking-tight mb-5">
            Field Gallery & Transformation Stories
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Real stories, real smiles, and real progress from our field operations across Africa.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedItem(item)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-100 shadow-lg shadow-slate-900/5 ${item.span}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B63]/90 via-[#081B63]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Top Category Badge & Expand Icon */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/30">
                  {item.category}
                </span>
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                  <Maximize2 size={16} />
                </div>
              </div>

              {/* Bottom Caption Info */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                <div className="flex items-center gap-1.5 text-pink-300 text-xs font-medium mb-1">
                  <MapPin size={13} />
                  <span>{item.location}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold leading-snug group-hover:text-pink-200 transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#081B63] rounded-3xl overflow-hidden border border-white/20 shadow-2xl text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Close photo lightbox modal"
                className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <X size={22} />
              </button>

              {/* Large Image View */}
              <div className="relative h-[65vh] w-full bg-black">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Modal Description Footer */}
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#081B63]">
                <div>
                  <div className="flex items-center gap-2 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <MapPin size={14} />
                    <span>{selectedItem.location} &bull; {selectedItem.category}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">{selectedItem.title}</h3>
                </div>

                <a
                  href="/donations"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E91E63] hover:bg-pink-600 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-pink-500/30 flex-shrink-0"
                >
                  Support This Mission
                  <Heart size={16} className="fill-white" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
