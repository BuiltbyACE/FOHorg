import { Users, MapPin, BookOpen, Heart } from 'lucide-react';

interface ImpactStat {
  value: string;
  label: string;
  icon: React.ElementType;
}

export default function ImpactBar() {
  const stats: ImpactStat[] = [
    {
      value: '300,000+',
      label: 'People reached via radio',
      icon: Users,
    },
    {
      value: '10,500+',
      label: 'Children in education',
      icon: MapPin,
    },
    {
      value: '3,500+',
      label: 'Youth trained',
      icon: BookOpen,
    },
    {
      value: '40+',
      label: 'Faith leaders engaged',
      icon: Heart,
    },
  ];

  return (
    <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-2xl shadow-slate-300/60 border border-slate-100">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`flex items-center gap-4 ${
                index !== 0 ? 'pt-4 sm:pt-0 lg:pl-8' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-[#FFF3F8] border border-pink-100 text-[#E91E63] flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#081B63] tracking-tight leading-none">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
