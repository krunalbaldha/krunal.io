export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full pb-10 pt-4">
      <div className="mx-auto flex flex-col items-center justify-center text-center px-4">
        {/* Line 1 — name + year */}
        <p className="text-[14px] font-semibold text-[#1f2a44] tracking-tight">
          © {year} Krunal Baldha
        </p>

        {/* Line 2 — tagline */}
        <p className="mt-1 text-[13px] font-medium text-[#5b657c] tracking-normal">
          From vision to reality, one product at a time.
        </p>
      </div>
    </footer>
  );
}
