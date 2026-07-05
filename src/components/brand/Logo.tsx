import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2 font-semibold tracking-tight ${className}`}>
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
        <span className="absolute inset-0 rounded-xl opacity-60 blur-md bg-gradient-brand" aria-hidden />
        <svg viewBox="0 0 24 24" className="relative h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M4 6h16M12 6v14M7 13l2.5 2.5M17 11l-2.5 2.5" />
        </svg>
      </span>
      <span className="text-base">
        Testium<span className="text-gradient-brand">.Tech</span>
      </span>
    </Link>
  );
}
