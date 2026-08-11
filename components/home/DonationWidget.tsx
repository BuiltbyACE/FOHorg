'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';

export default function DonationWidget() {
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | 'other'>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');

  const presetAmounts = [1000, 2500, 5000];

  const getFinalAmount = () => {
    if (selectedAmount === 'other') {
      return customAmount ? parseInt(customAmount, 10) || 1000 : 1000;
    }
    return selectedAmount;
  };

  const donateUrl = `/donations?amount=${getFinalAmount()}&frequency=${frequency}`;

  return (
    <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-pink-100/80 shadow-xl shadow-slate-300/40">
      {/* Top Row: Title + Subtitle on Left, Frequency Toggle on Right */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-[#FFF3F8] border border-pink-100 flex items-center justify-center text-[#E91E63] shrink-0">
            <Heart className="w-5 h-5 fill-[#E91E63]" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#081B63] leading-tight">
              Make a Difference Today
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Your generosity creates real change.
            </p>
          </div>
        </div>

        {/* Frequency Selector Pill */}
        <div className="inline-flex items-center p-1 rounded-full bg-slate-100/90 text-xs font-semibold self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setFrequency('one-time')}
            className={`px-4 py-1.5 rounded-full transition-all duration-200 ${
              frequency === 'one-time'
                ? 'bg-[#E91E63] text-white shadow-sm'
                : 'text-slate-600 hover:text-[#081B63]'
            }`}
          >
            One-time
          </button>
          <button
            type="button"
            onClick={() => setFrequency('monthly')}
            className={`px-4 py-1.5 rounded-full transition-all duration-200 ${
              frequency === 'monthly'
                ? 'bg-[#E91E63] text-white shadow-sm'
                : 'text-slate-600 hover:text-[#081B63]'
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Bottom Row: Preset Amounts + Donate Button */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="grid grid-cols-4 gap-2 flex-grow">
          {presetAmounts.map((amt) => (
            <button
              key={amt}
              type="button"
              onClick={() => {
                setSelectedAmount(amt);
                setCustomAmount('');
              }}
              className={`py-2 px-2 text-center text-xs sm:text-sm font-bold rounded-xl border transition-all duration-200 ${
                selectedAmount === amt
                  ? 'bg-[#E91E63] border-[#E91E63] text-white shadow-sm'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-pink-200 hover:bg-slate-50'
              }`}
            >
              KES {amt.toLocaleString()}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setSelectedAmount('other')}
            className={`py-2 px-2 text-center text-xs sm:text-sm font-bold rounded-xl border transition-all duration-200 ${
              selectedAmount === 'other'
                ? 'bg-[#E91E63] border-[#E91E63] text-white shadow-sm'
                : 'bg-white border-slate-200 text-slate-700 hover:border-pink-200 hover:bg-slate-50'
            }`}
          >
            Other
          </button>
        </div>

        {/* Custom Input Field when 'Other' selected */}
        {selectedAmount === 'other' && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            className="sm:w-32"
          >
            <div className="relative flex items-center">
              <span className="absolute left-2.5 text-xs font-bold text-slate-400">KES</span>
              <input
                type="number"
                placeholder="Amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full pl-10 pr-2 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-[#081B63] focus:outline-none focus:border-[#E91E63]"
              />
            </div>
          </motion.div>
        )}

        {/* Donate Now Button */}
        <Link
          href={donateUrl}
          className="h-10 sm:h-11 px-5 rounded-full bg-[#E91E63] hover:bg-[#C2185B] text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-[#E91E63]/30 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-1.5 shrink-0 group"
        >
          <span>DONATE NOW</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
