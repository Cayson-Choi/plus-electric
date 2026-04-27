import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export type PageHeroVariant =
  | "default"
  | "about"
  | "courses"
  | "location"
  | "contact";

// 모든 variant에 동일한 브랜드 럭셔리 톤 적용 (학원 사이트 일관성)
const unifiedStyle = {
  bg: "from-brand-800 via-brand-900 to-slate-950",
  eyebrow: "text-accent-300",
  glowPrimary: "bg-brand-500/30",
  glowSecondary: "bg-brand-400/20",
  accentBar: "from-transparent via-accent-300/50 to-transparent",
} as const;

const variantStyles: Record<
  PageHeroVariant,
  {
    bg: string;
    eyebrow: string;
    glowPrimary: string;
    glowSecondary: string;
    accentBar: string;
  }
> = {
  default: unifiedStyle,
  about: unifiedStyle,
  courses: unifiedStyle,
  location: unifiedStyle,
  contact: unifiedStyle,
};

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  variant = "default",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  variant?: PageHeroVariant;
}) {
  const v = variantStyles[variant];

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div
        className={cn("absolute inset-0 bg-gradient-to-br", v.bg)}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-grid opacity-[0.18]"
        aria-hidden="true"
      />
      <div
        className={cn(
          "absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full blur-3xl",
          v.glowPrimary,
        )}
        aria-hidden="true"
      />
      <div
        className={cn(
          "absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full blur-3xl",
          v.glowSecondary,
        )}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 via-black/10 to-transparent"
        aria-hidden="true"
      />
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r",
          v.accentBar,
        )}
        aria-hidden="true"
      />

      <div className="container-x relative flex flex-col justify-center py-8 md:py-10 md:min-h-[9rem] lg:min-h-[11rem]">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="breadcrumb" className="mb-4">
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
          <p
            className={cn(
              "inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase",
              v.eyebrow,
            )}
          >
            <span
              className={cn(
                "block h-px w-8",
                "bg-gradient-to-r from-transparent to-current",
              )}
              aria-hidden="true"
            />
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 text-balance text-3xl leading-[1.15] font-extrabold tracking-tight sm:text-4xl md:text-[44px] md:leading-[1.1] lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-white/85 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
