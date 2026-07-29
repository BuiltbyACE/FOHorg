import { Heart, HeartHandshake, Users, TrendingUp, Globe } from 'lucide-react';

const steps = [
  {
    icon: HeartHandshake,
    number: '1.',
    title: 'YOU GIVE',
    desc: 'You make a donation in the way that is most convenient for you.',
  },
  {
    icon: Users,
    number: '2.',
    title: 'WE RECEIVE',
    desc: 'We receive your support and allocate it where it\'s needed most.',
  },
  {
    icon: TrendingUp,
    number: '3.',
    title: 'WE ACT',
    desc: 'We implement programs that address real needs in our communities.',
  },
  {
    icon: Heart,
    number: '4.',
    title: 'LIVES CHANGE',
    desc: 'Your support creates opportunities and transforms lives.',
  },
  {
    icon: Globe,
    number: '5.',
    title: 'BETTER TOMORROW',
    desc: 'Together, we build stronger, healthier, and more hopeful communities.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#FDF6F8] py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="text-[#131B40] text-2xl md:text-[28px] font-extrabold uppercase tracking-[0.02em]">
            HOW YOUR DONATION WORKS
          </h2>
          <div className="flex items-center justify-center gap-1 mt-3">
            <Heart size={16} className="text-[#D6266F] fill-[#D6266F]" />
          </div>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[50px] left-[10%] right-[10%] h-0 border-t-2 border-dashed border-[#D6266F]/40 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#D6266F] bg-white flex items-center justify-center text-[#D6266F] relative">
                    <Icon size={26} />
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-[calc(50%+20px)] top-1/2 -translate-y-1/2" />
                    )}
                  </div>
                  <h3 className="text-[#131B40] font-bold text-sm uppercase tracking-[0.03em] mt-4">
                    {step.number} {step.title}
                  </h3>
                  <p className="text-[#515767] text-[13.5px] leading-relaxed mt-1 max-w-[200px]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
