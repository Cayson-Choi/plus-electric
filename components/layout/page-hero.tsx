import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export type PageHeroVariant =
  | "default"
  | "about"
  | "courses"
  | "location"
  | "contact";

const variantStyles: Record<
  PageHeroVariant,
  { bg: string; eyebrow: string; glow: string; gridOpacity: string }
> = {
  default: {
    bg: "from-brand-700 to-brand-900",
    eyebrow: "text-accent-300",
    glow: "bg-accent-400/20",
    gridOpacity: "opacity-15",
  },
  about: {
    bg: "from-indigo-700 via-violet-800 to-purple-900",
    eyebrow: "text-amber-300",
    glow: "bg-fuchsia-400/25",
    gridOpacity: "opacity-15",
  },
  courses: {
    bg: "from-sky-700 via-cyan-800 to-teal-900",
    eyebrow: "text-amber-300",
    glow: "bg-cyan-300/25",
    gridOpacity: "opacity-15",
  },
  location: {
    bg: "from-emerald-700 via-teal-800 to-emerald-900",
    eyebrow: "text-amber-300",
    glow: "bg-lime-300/25",
    gridOpacity: "opacity-15",
  },
  contact: {
    bg: "from-slate-700 via-slate-800 to-blue-950",
    eyebrow: "text-amber-300",
    glow: "bg-amber-300/20",
    gridOpacity: "opacity-15",
  },
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
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br text-white",
        v.bg,
      )}
    >
      <div
        className={cn("absolute inset-0 bg-grid", v.gridOpacity)}
        aria-hidden="true"
      />
      <div
        className={cn(
          "absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl",
          v.glow,
        )}
        aria-hidden="true"
      />
      <div
        className={cn(
          "absolute -bottom-32 -left-24 h-72 w-72 rounded-full blur-3xl",
          v.glow,
        )}
        aria-hidden="true"
      />

      <div className="container-x relative flex flex-col justify-center py-12 md:py-16 md:min-h-[16rem] lg:min-h-[18rem]">
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
          <p
            className={cn(
              "text-xs font-bold tracking-[0.2em] uppercase",
              v.eyebrow,
            )}
          >
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
    </section>
  );
}
