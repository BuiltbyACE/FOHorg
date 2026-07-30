import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Globe } from 'lucide-react';
import SocialLinks from '@/components/common/SocialLinks';

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  details: (string | React.ReactNode)[];
  iconBg?: 'primary' | 'navy';
}

function InfoItem({ icon, label, details, iconBg = 'primary' }: InfoItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`w-11 h-11 rounded-full flex items-center justify-center text-white ${
          iconBg === 'primary' ? 'bg-primary' : 'bg-navy'
        }`}
      >
        {icon}
      </div>
      <h3 className="text-navy font-bold text-sm uppercase tracking-[0.03em] mt-3 mb-2">
        {label}
      </h3>
      <div className="text-muted text-sm leading-relaxed space-y-0.5">
        {details.map((detail, i) => (
          <p key={i}>{detail}</p>
        ))}
      </div>
    </div>
  );
}

export default function QuickInfoStrip() {
  return (
    <section>
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10 pb-16 md:pb-24">
        <div className="bg-white rounded-2xl shadow-[0_15px_40px_rgba(10,30,94,0.10)] p-8 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
            <InfoItem
              icon={<Phone size={18} />}
              label="Call Us"
              details={['+254 700 123 456', '+254 722 987 654']}
              iconBg="primary"
            />
            <InfoItem
              icon={
                <div className="relative w-5 h-4">
                  <Image src="/logo/Gmail-logo-500x281.png" alt="Gmail" fill className="object-contain" sizes="20px" />
                </div>
              }
              label="Email Us"
              details={['info@fountainofhope.org', 'partnerships@fountainofhope.org']}
              iconBg="navy"
            />
            <InfoItem
              icon={<MapPin size={18} />}
              label="Visit Us"
              details={['Kilimani, Chania Avenue,', 'Kidgrove Court,', 'Nairobi, Kenya']}
              iconBg="primary"
            />
            <InfoItem
              icon={<Clock size={18} />}
              label="Office Hours"
              details={['Mon – Fri: 8:00 AM – 5:00 PM', 'Sat: 9:00 AM – 1:00 PM', 'Sun: Closed']}
              iconBg="navy"
            />
            <div className="flex flex-col items-center text-center">
              <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white">
                <Globe size={18} />
              </div>
              <h3 className="text-navy font-bold text-sm uppercase tracking-[0.03em] mt-3 mb-2">
                Follow Us
              </h3>
              <p className="text-muted text-sm leading-relaxed max-w-[200px]">
                Stay connected on social media for updates, stories, and impact.
              </p>
                <SocialLinks variant="light" className="mt-3 justify-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
