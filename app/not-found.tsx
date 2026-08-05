import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f3f5fb] text-[#1e293b] flex items-center justify-center px-4">
      <div className="max-w-md w-full rounded-[24px] p-8 glass-card-strong text-center border border-white/60 shadow-xl">
        <h1 className="text-[64px] font-extrabold text-[#3d5aff] tracking-tight leading-none">404</h1>
        <h2 className="mt-3 text-[22px] font-bold text-[#18233f]">Page Not Found</h2>
        <p className="mt-2 text-[14px] text-[#5b657c] leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#3d5aff] hover:bg-[#2b44d8] text-white px-7 py-3 text-[14px] font-semibold transition"
          >
            ← Return to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
