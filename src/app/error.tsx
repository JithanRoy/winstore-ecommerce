"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
      <div className="w-full max-w-xl rounded-[32px] border border-[var(--border)] bg-white p-8 text-center card-shadow">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-500)]">
          Something Went Wrong
        </p>
        <h1 className="mt-4 font-display text-5xl uppercase leading-none text-slate-900">
          We Could Not Load The Storefront
        </h1>
        <p className="mt-5 text-sm leading-7 text-slate-500">
          This usually means the assessment API is temporarily unavailable or
          returned an unexpected payload.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--brand-500)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0ea7bf]"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
