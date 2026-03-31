import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
      <div className="w-full max-w-xl rounded-[32px] border border-[var(--border)] bg-white p-8 text-center card-shadow">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-500)]">
          Product Missing
        </p>
        <h1 className="mt-4 font-display text-5xl uppercase leading-none text-slate-900">
          We Could Not Find That Item
        </h1>
        <p className="mt-5 text-sm leading-7 text-slate-500">
          The product may not exist anymore, or the URL is pointing to an
          invalid record.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--brand-500)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0ea7bf]"
        >
          Back To Store
        </Link>
      </div>
    </div>
  );
}
