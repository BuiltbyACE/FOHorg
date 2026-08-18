'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
        <span className="text-2xl">!</span>
      </div>
      <h2 className="text-2xl font-bold text-[#081B63] mb-3">
        Something went wrong
      </h2>
      <p className="text-slate-500 mb-6 max-w-md">
        We encountered an unexpected error. Please try again or contact us if the problem persists.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 rounded-full bg-[#E91E63] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#C2185B] transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
