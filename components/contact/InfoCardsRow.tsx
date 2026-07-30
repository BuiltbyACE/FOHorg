'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Check, Plus, ArrowRight, Users, Handshake, HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: 'How can I donate?',
    answer: 'You can donate online through our secure donation portal, via M-Pesa, bank transfer, or by visiting our office. Every contribution makes a real difference.',
  },
  {
    question: 'How can I volunteer?',
    answer: 'Fill out our volunteer application, attend an orientation session, and we will match you with a role that fits your skills and availability.',
  },
  {
    question: 'Can my company partner with us?',
    answer: 'Absolutely! We collaborate with businesses through CSR programs, sponsorships, and employee engagement initiatives tailored to your goals.',
  },
  {
    question: 'How do I know my donation is used properly?',
    answer: 'We publish regular impact reports and audited financial statements. Donors receive detailed updates on how their contributions create change.',
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.07 }}
      className="border-b border-slate-100 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3.5 text-left gap-3"
      >
        <span className="text-[#081B63] text-sm font-semibold leading-snug flex-1">
          {question}
        </span>
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
            isOpen ? 'bg-[#E91E63]' : 'bg-[#E91E63]/10'
          }`}
        >
          <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
            <Plus size={13} className={isOpen ? 'text-white' : 'text-[#E91E63]'} />
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
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-slate-500 text-sm leading-relaxed pb-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const cards = [
  {
    icon: Clock,
    bg: 'primary' as const,
    title: 'Office Hours',
    content: (
      <ul className="space-y-3 mt-2">
        {[
          { day: 'Monday – Friday', hours: '8:00 AM – 5:00 PM' },
          { day: 'Saturday', hours: '9:00 AM – 1:00 PM' },
          { day: 'Sunday', hours: 'Closed' },
        ].map(({ day, hours }) => (
          <li key={day} className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#E91E63] mt-1.5 flex-shrink-0" />
            <div>
              <p className="text-[#081B63] text-xs font-bold uppercase tracking-[0.08em]">{day}</p>
              <p className="text-slate-500 text-sm">{hours}</p>
            </div>
          </li>
        ))}
      </ul>
    ),
    cta: null,
  },
  {
    icon: Users,
    bg: 'navy' as const,
    title: 'Volunteer With Us',
    description: 'Join our passionate team and contribute your time and skills to causes that truly matter.',
    list: ['Community outreach programs', 'Event planning & support', 'Mentorship for youth', 'Administrative support'],
    cta: { label: 'Apply to Volunteer', href: '/volunteer' },
  },
  {
    icon: Handshake,
    bg: 'primary' as const,
    title: 'Partner With Us',
    description: "Let's work together to build stronger communities and create sustainable, measurable change.",
    list: ['NGO & Community Partners', 'Corporate Partnerships', 'Educational Institutions', 'Faith-Based Organizations'],
    cta: { label: 'Become a Partner', href: '/partnerships' },
  },
  {
    icon: HelpCircle,
    bg: 'navy' as const,
    title: 'Frequently Asked',
    faq: true,
    cta: { label: 'View All FAQs', href: '/faq', outline: true },
  },
];

export default function InfoCardsRow() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">

        <div className="text-center mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E91E63] mb-3">
            What We Offer
          </p>
          <h2 className="text-[#081B63] text-2xl md:text-[32px] font-extrabold leading-tight tracking-tight">
            How We Can Help You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const isPrimary = card.bg === 'primary';

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
                className="group bg-white rounded-2xl border border-slate-100 shadow-[0_4px_24px_rgba(8,27,99,0.06)] p-7 flex flex-col hover:shadow-[0_8px_40px_rgba(8,27,99,0.12)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ backgroundColor: isPrimary ? '#E91E63' : '#081B63' }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: isPrimary ? '#E91E63' : '#081B63' }}
                >
                  <Icon size={20} />
                </div>

                <h3 className="text-[#081B63] font-bold text-sm uppercase tracking-[0.08em] mb-3">
                  {card.title}
                </h3>

                {/* Office hours */}
                {card.content && card.content}

                {/* List cards */}
                {card.description && (
                  <>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{card.description}</p>
                    <ul className="space-y-2 flex-1">
                      {card.list?.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-slate-600 text-sm">
                          <Check size={13} className="text-[#E91E63] flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* FAQ */}
                {card.faq && (
                  <div className="divide-y divide-slate-100 flex-1">
                    {faqItems.map((item, idx) => (
                      <FAQItem key={item.question} question={item.question} answer={item.answer} index={idx} />
                    ))}
                  </div>
                )}

                {/* CTA */}
                {card.cta && (
                  <a
                    href={card.cta.href}
                    className={`mt-5 inline-flex items-center justify-center gap-2 h-[42px] px-5 rounded-[6px] text-xs font-bold uppercase tracking-[0.07em] w-full transition-all duration-300 ${
                      card.cta.outline
                        ? 'border border-[#081B63] text-[#081B63] hover:bg-[#081B63] hover:text-white'
                        : 'bg-[#E91E63] text-white shadow-sm shadow-pink-500/20 hover:bg-[#C2185B]'
                    }`}
                  >
                    {card.cta.label}
                    <ArrowRight size={13} />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
