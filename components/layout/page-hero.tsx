import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 to-brand-900 text-white">
      <div className="absolute inset-0 bg-grid opacity-15" aria-hidden="true" />
      <div
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative py-14 md:py-20">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/70">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-1 hover:text-white"
                >
                  <Home className="h-3.5 w-3.5" />
                  <span>홈</span>
                </Link>
              </li>
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 text-white/40" />
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="font-semibold text-white">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <p className="text-xs font-bold tracking-[0.2em] text-accent-300 uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">
            {description}
          </p>
        )}
      </div>

      <svg
        className="block w-full text-white"
        viewBox="0 0 1440 48"
        fill="currentColor"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 48h1440V16C1080 0 720 32 360 24S120 24 0 24v24Z" />
      </svg>
    </section>
  );
}
