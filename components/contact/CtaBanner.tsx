import Button from '@/components/common/Button';
import { Heart } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="bg-navy rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 left-1/4 w-3 h-3 border border-primary/20 rounded-full" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 border border-primary/20 rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 border border-primary/20 rounded-full" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="hidden lg:flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 flex-shrink-0">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/><path d="M15.5 7.5L11 12l-2.5-2.5" stroke="currentColor"/></svg>
            </div>

            <div className="text-center lg:text-left flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                TOGETHER, WE CAN BUILD A <span className="text-primary">BETTER TOMORROW</span>
              </h2>
              <p className="text-footer-text mt-4 text-base leading-relaxed max-w-[600px] mx-auto lg:mx-0">
                Every connection counts. Reach out today and be part of the change.
              </p>
            </div>

            <Button href="/donate" size="lg">
              DONATE NOW
              <Heart size={18} className="fill-white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
