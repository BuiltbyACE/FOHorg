'use client';

import { useState, type FormEvent } from 'react';
import { SendHorizontal, Phone, Mail, MapPin, Heart, Handshake, UserPlus, Mic } from 'lucide-react';
import Button from '@/components/common/Button';

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
  subscribe: boolean;
}

const initialForm: FormData = {
  fullName: '',
  email: '',
  subject: '',
  phone: '',
  message: '',
  subscribe: false,
};

const otherWays = [
  {
    icon: Handshake,
    title: 'PARTNER WITH US',
    description:
      'We collaborate with organizations, institutions, and businesses to create lasting impact.',
  },
  {
    icon: UserPlus,
    title: 'VOLUNTEER WITH US',
    description:
      'Join our team of dedicated volunteers and make a difference in your community.',
  },
  {
    icon: Heart,
    title: 'SUPPORT OUR CAUSE',
    description:
      'Your support helps us continue our mission and reach more lives.',
  },
  {
    icon: Mic,
    title: 'MEDIA & PRESS',
    description:
      'For media inquiries, interviews, or press releases, contact us.',
  },
];

export default function ContactGrid() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="bg-light-gray py-16 md:py-24" id="contact-form">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white">
                  <SendHorizontal size={18} />
                </div>
                <h2 className="text-navy font-bold text-lg uppercase tracking-[0.03em]">
                  SEND US A MESSAGE
                </h2>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3 className="text-navy font-bold text-lg">Thank You!</h3>
                  <p className="text-muted text-sm mt-2">
                    Your message has been received. We&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      required
                      value={form.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      className="h-[48px] w-full px-4 rounded-lg border border-gray-200 text-sm text-navy placeholder-muted focus:outline-none focus:border-primary transition-colors duration-[250ms]"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="h-[48px] w-full px-4 rounded-lg border border-gray-200 text-sm text-navy placeholder-muted focus:outline-none focus:border-primary transition-colors duration-[250ms]"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    required
                    value={form.subject}
                    onChange={(e) => updateField('subject', e.target.value)}
                    className="h-[48px] w-full px-4 rounded-lg border border-gray-200 text-sm text-navy placeholder-muted focus:outline-none focus:border-primary transition-colors duration-[250ms]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="h-[48px] w-full px-4 rounded-lg border border-gray-200 text-sm text-navy placeholder-muted focus:outline-none focus:border-primary transition-colors duration-[250ms]"
                  />
                  <textarea
                    placeholder="Your Message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-navy placeholder-muted focus:outline-none focus:border-primary transition-colors duration-[250ms] resize-none"
                  />
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.subscribe}
                      onChange={(e) => updateField('subscribe', e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-muted text-sm leading-relaxed">
                      I would like to receive updates and newsletters from Fountain of Hope.
                    </span>
                  </label>
                  <Button type="submit" className="w-full sm:w-auto">
                    SEND MESSAGE
                    <SendHorizontal size={16} />
                  </Button>
                </form>
              )}
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <h2 className="text-navy font-bold text-lg uppercase tracking-[0.03em]">
                  OTHER WAYS TO CONNECT
                </h2>
              </div>

              <div className="space-y-6">
                {otherWays.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-navy font-bold text-sm uppercase tracking-[0.03em]">
                          {item.title}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 p-6 pb-0">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white">
                <MapPin size={18} />
              </div>
              <h2 className="text-navy font-bold text-lg uppercase tracking-[0.03em]">
                FIND US HERE
              </h2>
            </div>
            <div className="relative mt-4 h-[400px] bg-border overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
                <rect width="400" height="400" fill="#EEF1F7" />
                <line x1="0" y1="120" x2="400" y2="120" stroke="#D6DAE8" strokeWidth="2" />
                <line x1="0" y1="240" x2="400" y2="240" stroke="#D6DAE8" strokeWidth="2" />
                <line x1="200" y1="0" x2="200" y2="400" stroke="#D6DAE8" strokeWidth="2" />
                <line x1="80" y1="0" x2="80" y2="400" stroke="#D6DAE8" strokeWidth="1.5" />
                <line x1="320" y1="0" x2="320" y2="400" stroke="#D6DAE8" strokeWidth="1.5" />
                <circle cx="140" cy="180" r="20" fill="#D6DAE8" opacity="0.5" />
                <rect x="260" y="100" width="50" height="30" rx="4" fill="#D6DAE8" opacity="0.3" />
                <rect x="60" y="280" width="70" height="20" rx="4" fill="#D6DAE8" opacity="0.3" />
              </svg>
              <div className="absolute top-[180px] left-[140px] -translate-x-1/2 -translate-y-1/2 z-10">
                <svg width="36" height="44" viewBox="0 0 24 36" fill="none">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 12 12 24 12 24s12-12 12-24C24 5.373 18.627 0 12 0z" fill="#E91E63" />
                  <circle cx="12" cy="12" r="5" fill="white" />
                </svg>
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 max-w-[200px] z-20">
                <p className="text-navy font-bold text-xs">Fountain of Hope</p>
                <p className="text-muted text-[10px] leading-tight mt-0.5">
                  Kilimani, Chania Avenue, Kidgrove Court, Nairobi, Kenya
                </p>
              </div>
              <span className="absolute top-[118px] left-[78px] text-[10px] text-muted font-medium -translate-x-1/2">YAYA Centre</span>
              <span className="absolute top-[118px] right-[78px] text-[10px] text-muted font-medium translate-x-1/2">Prestige Plaza</span>
              <span className="absolute top-[238px] left-[140px] text-[10px] text-muted font-medium -translate-x-1/2">Chania Ave</span>
              <span className="absolute top-[238px] right-[200px] text-[10px] text-muted font-medium translate-x-1/2">KILIMANI</span>
              <span className="absolute bottom-[100px] left-[80px] text-[10px] text-muted font-medium">Kilimani Primary School</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
