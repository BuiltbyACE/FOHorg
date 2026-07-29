import { Heart } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="bg-[#99224C] rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-black/10 to-transparent" />
          <div className="absolute right-8 top-1/2 -translate-y-1/2 flex gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" className="opacity-20"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" className="opacity-15 mt-4"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" className="opacity-10 -mt-2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="text-center lg:text-left flex-1">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                TOGETHER, WE CAN CREATE A WORLD OF HOPE
              </h2>
              <p className="text-white/70 mt-4 text-base leading-relaxed max-w-[600px] mx-auto lg:mx-0">
                Join thousands of compassionate individuals who are taking action and making a difference every day.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a
                href="/donate"
                className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full bg-white text-[#B8123E] font-bold text-sm uppercase tracking-[0.03em] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-[250ms]"
              >
                DONATE NOW
                <Heart size={16} className="fill-[#B8123E]" />
              </a>
              <a
                href="/monthly"
                className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full border-2 border-white text-white font-bold text-sm uppercase tracking-[0.03em] hover:bg-white hover:text-[#99224C] transition-all duration-[250ms]"
              >
                BECOME A MONTHLY PARTNER
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
