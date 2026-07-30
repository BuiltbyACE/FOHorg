'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Heart, Globe } from 'lucide-react';
import SocialLinks from '@/components/common/SocialLinks';
import Button from '@/components/common/Button';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-[#E91E63] text-xs font-semibold uppercase tracking-wider mb-4 border border-pink-200/50">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B63] tracking-tight mb-5">
            We Would Love to Hear From You
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Whether you want to volunteer, partner, ask a question, or visit our field missions, our team is ready to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Foundation Contact Info */}
          <motion.div 
            className="lg:col-span-5 bg-[#081B63] text-white p-8 sm:p-10 rounded-3xl shadow-xl border border-white/10 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-2xl font-bold text-white mb-6">Foundation Headquarters</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              Reach out to our global team or local field offices. We respond to all inquiries within 24 business hours.
            </p>

            {/* Info Cards */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">Headquarters Address</div>
                  <div className="text-sm font-semibold text-white">100 Hope Boulevard, Suite 400<br />Nairobi, Kenya &bull; Washington D.C., USA</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">Email Us Directly</div>
                  <div className="text-sm font-semibold text-white">info@fountainofhope.org</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">Call Our Office</div>
                  <div className="text-sm font-semibold text-white">+254 700 000 000 / +1 (800) 555-HOPE</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/15">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">Connect With Us</div>
              <SocialLinks variant="dark" />
            </div>
          </motion.div>

          {/* Right Professional Contact Form */}
          <motion.div 
            className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-900/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold text-[#081B63] mb-2">Thank You for Reaching Out!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                  Your message has been safely received. A member of our team will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[#E91E63] font-bold text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#081B63] mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#E91E63] focus:bg-white transition-colors"
                      suppressHydrationWarning
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#081B63] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#E91E63] focus:bg-white transition-colors"
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#081B63] mb-2">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-[#E91E63] focus:bg-white transition-colors"
                    suppressHydrationWarning
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Donation & Sponsorship">Donation & Sponsorship</option>
                    <option value="Partnership Opportunities">Partnership Opportunities</option>
                    <option value="Volunteer Applications">Volunteer Applications</option>
                    <option value="Media & Press">Media & Press</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#081B63] mb-2">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="How can we help or collaborate with you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#E91E63] focus:bg-white transition-colors resize-none"
                    suppressHydrationWarning
                  />
                </div>

                <Button variant="primary" size="lg" className="w-full py-3.5">
                  Send Message
                  <Send size={16} />
                </Button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
