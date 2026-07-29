import { Heart, Check, ShieldCheck, PieChart, FileText, ChevronRight, Search } from 'lucide-react';

export default function TransparencyPanel() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="bg-[#05143C] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#D6266F]/5 rounded-full -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase leading-tight">
                <span className="text-white">TRANSPARENCY</span>{' '}
                <span className="text-[#D6266F]">YOU CAN TRUST</span>
              </h2>
              <p className="text-white/70 text-base leading-relaxed mt-4 max-w-[500px]">
                We are committed to accountability and ensure that your donations are used effectively.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex flex-col items-start">
                  <div className="w-10 h-10 rounded-lg border border-[#D6266F]/30 flex items-center justify-center text-[#D6266F]">
                    <Search size={18} />
                  </div>
                  <p className="text-white text-2xl font-extrabold mt-2">100%</p>
                  <p className="text-white/50 text-xs font-medium">Transparency</p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="w-10 h-10 rounded-lg border border-[#D6266F]/30 flex items-center justify-center text-[#D6266F]">
                    <ShieldCheck size={18} />
                  </div>
                  <p className="text-white text-base font-extrabold mt-2 leading-tight">Secure &amp; Safe</p>
                  <p className="text-white/50 text-xs font-medium">Protected giving</p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="w-10 h-10 rounded-lg border border-[#D6266F]/30 flex items-center justify-center text-[#D6266F]">
                    <PieChart size={18} />
                  </div>
                  <p className="text-white text-2xl font-extrabold mt-2">90%+</p>
                  <p className="text-white/50 text-xs font-medium">To Programs</p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="w-10 h-10 rounded-lg border border-[#D6266F]/30 flex items-center justify-center text-[#D6266F]">
                    <FileText size={18} />
                  </div>
                  <p className="text-white text-base font-extrabold mt-2 leading-tight">Annual Reports</p>
                  <p className="text-white/50 text-xs font-medium">Full accountability</p>
                </div>
              </div>

              <a
                href="/financials"
                className="inline-flex items-center gap-2 mt-8 h-[48px] px-7 rounded-full border border-[#D6266F] text-[#D6266F] font-bold text-sm uppercase tracking-[0.03em] hover:bg-[#D6266F] hover:text-white transition-all duration-[250ms]"
              >
                VIEW FINANCIAL REPORTS
                <ChevronRight size={16} />
              </a>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#D6266F]/10 via-[#D6266F]/5 to-white/5 aspect-[4/3] border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex gap-3 justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-[#D6266F]/20 flex items-center justify-center text-2xl">🧒</div>
                      <div className="w-12 h-12 rounded-full bg-[#D6266F]/20 flex items-center justify-center text-2xl">🧒</div>
                      <div className="w-12 h-12 rounded-full bg-[#D6266F]/20 flex items-center justify-center text-2xl">🧒</div>
                    </div>
                    <p className="text-white/30 text-xs font-medium uppercase tracking-wider">Photo Placeholder</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 md:p-5 max-w-[240px]">
                <h4 className="text-[#D6266F] font-bold text-sm uppercase tracking-[0.03em]">
                  Your impact in action
                </h4>
                <ul className="mt-3 space-y-2">
                  {[
                    'Quality education for children',
                    'Healthcare for mothers & families',
                    'Skills & entrepreneurship training',
                    'Clean water & sanitation',
                    'Hope, dignity & a better future',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#131B40] text-xs leading-snug">
                      <Check size={13} className="text-[#B8123E] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
