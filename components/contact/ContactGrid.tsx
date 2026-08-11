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
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">

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
              <iframe
                title="Foundation of Hope — Garissa County, Kenya"
                src="https://www.google.com/maps?q=Garissa,+Kenya&z=11&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
