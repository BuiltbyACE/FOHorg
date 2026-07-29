import { Heart, Users, GraduationCap, HeartPulse, HeartHandshake, Award, Globe } from 'lucide-react';

const stats = [
  { icon: Users, value: '12,500+', label: 'Lives Impacted' },
  { icon: GraduationCap, value: '45+', label: 'Programs Running' },
  { icon: HeartPulse, value: '78+', label: 'Communities Reached' },
  { icon: HeartHandshake, value: '100+', label: 'Volunteers Engaged' },
  { icon: Globe, value: '30+', label: 'Partner Organizations' },
  { icon: Award, value: '15+', label: 'Awards & Recognitions' },
];

export default function ImpactStats() {
  return (
    <section className="bg-[#FCEBF3] py-16 md:py-20 relative" id="impact">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-[#131B40] text-2xl md:text-[28px] font-extrabold uppercase tracking-[0.02em]">
            YOUR DONATION CREATES REAL IMPACT
          </h2>
          <div className="flex items-center justify-center gap-1 mt-3">
            <Heart size={16} className="text-[#D6266F] fill-[#D6266F]" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-0">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`flex flex-col items-center text-center px-4 ${
                  index < stats.length - 1 ? 'lg:border-r border-[#D6266F]/20' : ''
                }`}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#D6266F] flex items-center justify-center text-white">
                  <Icon size={24} />
                </div>
                <p className="text-[#131B40] text-3xl md:text-[32px] font-extrabold mt-3 leading-none">
                  {item.value}
                </p>
                <p className="text-[#515767] text-xs md:text-sm font-medium mt-1">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
