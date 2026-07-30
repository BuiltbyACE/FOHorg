'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { SendHorizontal, MapPin, Heart, Handshake, UserPlus, Mic, CheckCircle } from 'lucide-react';

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
    title: 'Partner With Us',
    description: 'Collaborate with us through CSR programs, sponsorships, and shared community initiatives.',
    color: '#E91E63',
  },
  {
    icon: UserPlus,
    title: 'Volunteer With Us',
    description: 'Join our team of dedicated volunteers and make a lasting difference in your community.',
    color: '#081B63',
  },
  {
    icon: Heart,
    title: 'Support Our Cause',
    description: 'Your support — financial or in-kind — helps us reach more people in critical need.',
    color: '#E91E63',
  },
  {
    icon: Mic,
    title: 'Media & Press',
    description: 'For interviews, press releases, or media coverage requests, contact our communications team.',
    color: '#081B63',
  },
];

const inputClass =
  'h-[48px] w-full px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm text-[#081B63] placeholder-slate-400 focus:outline-none focus:border-[#E91E63] focus:bg-white transition-colors duration-200';

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
    <section className="bg-slate-50 py-16 md:py-24" id="contact-form">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E91E63] mb-3">
            Reach Out
          </p>
          <h2 className="text-[#081B63] text-2xl md:text-[32px] font-extrabold leading-tight tracking-tight">
            Connect With Our Team
          </h2>
          <p className="text-slate-500 text-base mt-4 max-w-xl mx-auto">
            Whether you have a question, a partnership idea, or simply want to say hello — we&apos;re ready.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Form + Other ways */}
          <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(8,27,99,0.07)] p-7 md:p-8"
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="w-11 h-11 rounded-xl bg-[#E91E63] flex items-center justify-center text-white">
                  <SendHorizontal size={18} />
                </div>
                <h2 className="text-[#081B63] font-bold text-base uppercase tracking-[0.08em]">
                  Send Us a Message
                </h2>
              </div>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-emerald-600" />
                  </div>
                  <h3 className="text-[#081B63] font-bold text-lg">Thank You!</h3>
                  <p className="text-slate-500 text-sm mt-2 max-w-xs mx-auto">
                    Your message has been received. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(initialForm); }}
                    className="mt-5 text-[#E91E63] font-bold text-sm hover:underline"
                  >
                    Send another message
                  </button>
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
                      className={inputClass}
                      suppressHydrationWarning
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className={inputClass}
                      suppressHydrationWarning
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Subject"
                      required
                      value={form.subject}
                      onChange={(e) => updateField('subject', e.target.value)}
                      className={inputClass}
                      suppressHydrationWarning
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number (optional)"
                      value={form.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className={inputClass}
                      suppressHydrationWarning
                    />
                  </div>
                  <textarea
                    placeholder="Tell us how we can help..."
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-[#081B63] placeholder-slate-400 focus:outline-none focus:border-[#E91E63] focus:bg-white transition-colors duration-200 resize-none"
                    suppressHydrationWarning
                  />
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={form.subscribe}
                      onChange={(e) => updateField('subscribe', e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-slate-300 accent-[#E91E63]"
                    />
                    <span className="text-slate-500 text-xs leading-relaxed">
                      Subscribe to receive updates, impact stories, and newsletters.
                    </span>
                  </label>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 h-[48px] px-8 rounded-[6px] bg-[#E91E63] text-white font-bold text-sm uppercase tracking-[0.07em] shadow-md shadow-pink-500/20 hover:-translate-y-0.5 hover:bg-[#C2185B] transition-all duration-300"
                  >
                    Send Message
                    <SendHorizontal size={16} />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Other Ways to Connect */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#081B63] rounded-2xl p-7 md:p-8 relative overflow-hidden"
            >
              {/* Decorative blob */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#E91E63]/8 rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/3" />

              <div className="relative z-10">
                <h2 className="text-white font-bold text-base uppercase tracking-[0.08em] mb-6">
                  Other Ways to Connect
                </h2>

                <div className="space-y-6">
                  {otherWays.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                        className="flex gap-4"
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${item.color}25`, border: `1px solid ${item.color}40` }}
                        >
                          <Icon size={16} style={{ color: item.color === '#E91E63' ? '#E91E63' : '#93A8D4' }} />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-sm">{item.title}</h3>
                          <p className="text-white/50 text-xs leading-relaxed mt-1">{item.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(8,27,99,0.07)] overflow-hidden"
          >
            <div className="flex items-center gap-3 p-7 pb-0">
              <div className="w-11 h-11 rounded-xl bg-[#E91E63] flex items-center justify-center text-white">
                <MapPin size={18} />
              </div>
              <h2 className="text-[#081B63] font-bold text-base uppercase tracking-[0.08em]">
                Find Us Here
              </h2>
            </div>

            <div className="relative mt-5 h-[420px] bg-slate-100 overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 420" preserveAspectRatio="none">
                <rect width="400" height="420" fill="#EEF1F7" />
                {/* Grid lines */}
                <line x1="0" y1="140" x2="400" y2="140" stroke="#D6DAE8" strokeWidth="1.5" />
                <line x1="0" y1="280" x2="400" y2="280" stroke="#D6DAE8" strokeWidth="1.5" />
                <line x1="200" y1="0" x2="200" y2="420" stroke="#D6DAE8" strokeWidth="1.5" />
                <line x1="80" y1="0" x2="80" y2="420" stroke="#D6DAE8" strokeWidth="1" />
                <line x1="320" y1="0" x2="320" y2="420" stroke="#D6DAE8" strokeWidth="1" />
                {/* Streets */}
                <rect x="60" y="120" width="280" height="8" rx="2" fill="#D0D5E8" opacity="0.7" />
                <rect x="80" y="100" width="8" height="200" rx="2" fill="#D0D5E8" opacity="0.6" />
                <rect x="180" y="80" width="8" height="280" rx="2" fill="#D0D5E8" opacity="0.6" />
                {/* Buildings */}
                <rect x="100" y="150" width="60" height="40" rx="3" fill="#C8CDE0" opacity="0.5" />
                <rect x="220" y="90" width="70" height="35" rx="3" fill="#C8CDE0" opacity="0.4" />
                <rect x="280" y="155" width="50" height="45" rx="3" fill="#C8CDE0" opacity="0.4" />
                <rect x="100" y="200" width="55" height="60" rx="3" fill="#C8CDE0" opacity="0.35" />
              </svg>

              {/* Pin */}
              <div className="absolute top-[185px] left-[155px] -translate-x-1/2 -translate-y-full z-10">
                <svg width="32" height="40" viewBox="0 0 24 36" fill="none">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 12 12 24 12 24s12-12 12-24C24 5.373 18.627 0 12 0z" fill="#E91E63" />
                  <circle cx="12" cy="12" r="5" fill="white" />
                </svg>
              </div>

              {/* Label card */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg px-4 py-3 max-w-[200px] z-20 text-center">
                <p className="text-[#081B63] font-bold text-xs">Fountain of Hope</p>
                <p className="text-slate-400 text-[10px] leading-snug mt-0.5">
                  Kilimani, Chania Avenue,<br />Kidgrove Court, Nairobi
                </p>
              </div>

              {/* Landmark labels */}
              <span className="absolute top-[138px] left-[78px] text-[9px] text-slate-400 font-semibold -translate-x-1/2">YAYA Centre</span>
              <span className="absolute top-[138px] right-[72px] text-[9px] text-slate-400 font-semibold translate-x-1/2">Prestige Plaza</span>
              <span className="absolute top-[278px] left-[155px] text-[9px] text-slate-400 font-semibold -translate-x-1/2">Chania Avenue</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
