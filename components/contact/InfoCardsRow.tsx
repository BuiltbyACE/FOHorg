'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Check, Plus, ArrowRight } from 'lucide-react';
import Button from '@/components/common/Button';

const faqItems = [
  { question: 'How can I donate?', answer: 'You can donate online through our secure donation portal, via mobile money transfer, or by visiting our office in person. Every contribution, no matter the size, makes a difference.' },
  { question: 'How can I volunteer?', answer: 'We welcome volunteers from all walks of life. Simply fill out our volunteer application form, attend an orientation session, and we will match you with a role that fits your skills and interests.' },
  { question: 'Can my company partner with you?', answer: 'Absolutely! We collaborate with businesses of all sizes through corporate social responsibility programs, sponsorships, and employee engagement initiatives.' },
  { question: 'How do I know my donation is used properly?', answer: 'We maintain full transparency with regular impact reports, financial statements, and program updates. Donors receive detailed information about how their contributions are making a difference.' },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-start justify-between w-full py-3 text-left gap-3"
      >
        <span className="text-navy text-sm font-medium leading-snug flex-1">
          {question}
        </span>
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-[250ms] ${
            isOpen ? 'bg-primary' : 'bg-primary/10'
          }`}
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className={`${isOpen ? 'text-white' : 'text-primary'}`}
          >
            <Plus size={14} />
          </motion.span>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-muted text-sm leading-relaxed pb-4 -mt-1">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function InfoCardsRow() {
  return (
    <section className="bg-light-gray pb-16 md:pb-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white mb-4">
              <Clock size={18} />
            </div>
            <h3 className="text-navy font-bold text-base uppercase tracking-[0.03em] mb-4">
              OFFICE HOURS
            </h3>
            <ul className="space-y-3">
              {[
                'Monday – Friday / 8:00 AM – 5:00 PM',
                'Saturday / 9:00 AM – 1:00 PM',
                'Sunday / Closed',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted text-sm leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="w-11 h-11 rounded-full bg-navy flex items-center justify-center text-white mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 className="text-navy font-bold text-base uppercase tracking-[0.03em] mb-2">
              VOLUNTEER WITH US
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-4">
              We welcome passionate individuals who want to contribute their time and skills.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Community outreach',
                'Event support',
                'Mentorship programs',
                'Administrative support',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-muted text-sm">
                  <Check size={14} className="text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/volunteer" variant="primary" size="sm" className="w-full">
              APPLY TO VOLUNTEER
              <ArrowRight size={14} />
            </Button>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3 className="text-navy font-bold text-base uppercase tracking-[0.03em] mb-2">
              PARTNER WITH US
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Let&apos;s work together to build stronger communities and create sustainable change.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'NGO & Community Partners',
                'Corporate Partnerships',
                'Educational Institutions',
                'Faith-Based Organizations',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-muted text-sm">
                  <Check size={14} className="text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/partnerships" variant="primary" size="sm" className="w-full">
              BECOME A PARTNER
              <ArrowRight size={14} />
            </Button>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="w-11 h-11 rounded-full bg-navy flex items-center justify-center text-white mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
            </div>
            <h3 className="text-navy font-bold text-base uppercase tracking-[0.03em] mb-4">
              FREQUENTLY ASKED QUESTIONS
            </h3>
            <div className="divide-y divide-gray-100">
              {faqItems.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
            <Button href="/faq" variant="outline" size="sm" className="w-full mt-4">
              VIEW ALL FAQs
              <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
