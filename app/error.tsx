'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled App Error:', error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#f3f5fb] text-[#1e293b] flex items-center justify-center px-4">
      <div className="max-w-md w-full rounded-[24px] p-8 glass-card-strong text-center border border-white/60 shadow-xl">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-500 mb-4 font-bold text-[20px]">
          !
        </div>
        <h2 className="text-[22px] font-bold text-[#18233f]">Something went wrong</h2>
        <p className="mt-2 text-[14px] text-[#5b657c] leading-relaxed">
          An unexpected error occurred while loading this page.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#3d5aff] hover:bg-[#2b44d8] text-white px-6 py-2.5 text-[14px] font-semibold transition"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 hover:bg-slate-100 text-[#18233f] px-6 py-2.5 text-[14px] font-semibold transition"
          >
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
