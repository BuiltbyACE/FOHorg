import Button from '@/components/common/Button';
import { SendHorizontal, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block text-primary font-semibold uppercase tracking-[0.05em] text-sm">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] mt-4">
              WE&apos;D <span className="text-primary">LOVE</span> TO HEAR FROM YOU
            </h1>
            <p className="text-muted text-lg mt-6 leading-relaxed max-w-[540px]">
              Have a question, partnership idea, or want to get involved? We are here to listen and help.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button href="#contact-form">
                SEND US A MESSAGE
                <SendHorizontal size={16} />
              </Button>
              <Button href="/partnerships" variant="outline">
                PARTNER WITH US
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-navy/5 aspect-[4/3]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(233,30,99,0.08)_0%,transparent_60%),radial-gradient(circle_at_70%_60%,rgba(10,30,94,0.06)_0%,transparent_50%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-2xl">👧</div>
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-2xl">👦</div>
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-2xl">👧</div>
                  </div>
                  <p className="text-navy/40 text-xs font-medium uppercase tracking-wider">Hero Image Placeholder</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 lg:-left-8 bg-navy rounded-xl p-6 shadow-xl max-w-[260px]">
              <span className="text-primary text-5xl font-serif leading-none">&ldquo;</span>
              <p className="text-white/90 text-sm leading-relaxed italic mt-1">
                Your message can bring hope and change a life today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
