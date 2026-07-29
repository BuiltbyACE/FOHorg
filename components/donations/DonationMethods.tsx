import { Heart, HeartHandshake, GraduationCap, Gift, Building2, Smartphone } from 'lucide-react';

const methods = [
  {
    icon: HeartHandshake,
    title: 'ONE-TIME DONATION',
    desc: 'Make a single contribution to support our ongoing programs and projects.',
    accent: '#B8123E',
  },
  {
    icon: Heart, // using Heart as calendar - actually let me use Calendar icon
    title: 'MONTHLY PARTNERSHIP',
    desc: 'Become a monthly donor and help us plan, sustain, and grow our impact.',
    accent: '#131B40',
  },
  {
    icon: GraduationCap,
    title: 'SPONSOR A CHILD',
    desc: 'Provide education, care, and hope by sponsoring a child\'s future.',
    accent: '#B8123E',
  },
  {
    icon: Gift,
    title: 'IN-KIND DONATION',
    desc: 'Donate goods, materials, or services that help empower communities.',
    accent: '#131B40',
  },
  {
    icon: Building2,
    title: 'BANK TRANSFER',
    desc: 'Support us directly through secure bank transfers.',
    accent: '#B8123E',
  },
  {
    icon: Smartphone,
    title: 'M-PESA DONATION',
    desc: 'Quick and easy giving using M-PESA to reach more people in need.',
    accent: '#131B40',
  },
];

const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
);

export default function DonationMethods() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-[#131B40] text-2xl md:text-[28px] font-extrabold uppercase tracking-[0.02em]">
            CHOOSE A WAY TO GIVE
          </h2>
          <div className="flex items-center justify-center gap-1 mt-3">
            <Heart size={16} className="text-[#D6266F] fill-[#D6266F]" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((method) => {
            const Icon = method.icon;
            return (
              <div
                key={method.title}
                className="bg-white rounded-xl border border-[#EFEFF4] shadow-[0_4px_20px_rgba(19,27,64,0.06)] p-6 md:p-7 text-center flex flex-col items-center relative overflow-hidden"
              >
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px]"
                  style={{ backgroundColor: method.accent }}
                />
                <div className="w-14 h-14 rounded-full bg-[#131B40] flex items-center justify-center text-white">
                  {method.icon === Heart ? <CalendarIcon /> : <Icon size={24} />}
                </div>
                <h3 className="text-[#131B40] font-bold text-sm uppercase tracking-[0.03em] mt-5 mb-2">
                  {method.title}
                </h3>
                <p className="text-[#515767] text-[13.5px] leading-relaxed">
                  {method.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
