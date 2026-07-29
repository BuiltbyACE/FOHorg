import { Heart, ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <p className="font-['Pacifico',_cursive] text-[#D6266F] text-xl md:text-2xl italic">
              Give Hope. Change Lives.
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-extrabold leading-[1.1] mt-2">
              <span className="text-[#131B40]">TOGETHER, WE CAN</span>
              <br />
              <span className="text-[#D6266F]">TRANSFORM LIVES</span>
            </h1>
            <div className="mt-6 space-y-3 text-[#515767] text-base leading-relaxed max-w-[540px]">
              <p>
                Your generosity empowers communities, uplifts the vulnerable, and creates opportunities for a brighter tomorrow.
              </p>
              <p>
                Every donation, no matter the size, creates a ripple of hope that lasts for generations.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/donate"
                className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full bg-[#B8123E] text-white font-bold text-sm uppercase tracking-[0.03em] hover:brightness-110 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-[250ms]"
              >
                DONATE NOW
                <Heart size={16} className="fill-white" />
              </a>
              <a
                href="#impact"
                className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full bg-white border border-[#515767] text-[#131B40] font-bold text-sm uppercase tracking-[0.03em] hover:bg-[#131B40] hover:text-white hover:border-[#131B40] transition-all duration-[250ms]"
              >
                SEE THE IMPACT
                <ChevronRight size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative">
              <svg className="absolute -left-6 -top-6 w-[110%] h-[110%] z-0" viewBox="0 0 600 500" fill="none" preserveAspectRatio="none">
                <path
                  d="M30,80 C60,40 120,20 200,30 C280,40 340,10 420,25 C500,40 560,60 580,100 C600,140 590,200 580,260 C570,320 560,380 540,420 C520,460 460,480 380,470 C300,460 240,490 160,475 C80,460 20,440 10,400 C0,360 10,300 20,240 C30,180 40,120 30,80Z"
                  fill="#131B40"
                  opacity="0.08"
                />
              </svg>
              <div className="relative z-10 rounded-3xl overflow-hidden bg-gradient-to-br from-[#D6266F]/10 via-[#D6266F]/5 to-[#131B40]/5 aspect-[5/4] border border-[#E7E7EF]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(214,38,111,0.08)_0%,transparent_60%),radial-gradient(circle_at_70%_30%,rgba(19,27,64,0.05)_0%,transparent_50%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-[#D6266F]/20 flex items-center justify-center text-4xl">🧒</div>
                    <p className="text-[#131B40]/40 text-xs font-medium uppercase tracking-wider mt-4">Hero Image Placeholder</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-5 shadow-lg max-w-[240px] z-20 border border-[#E7E7EF]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D6266F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                <p className="text-[#131B40] text-sm italic leading-snug mt-1">
                  Be the reason someone believes in the goodness of people.
                </p>
                <div className="w-8 h-0.5 bg-[#D6266F] mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
