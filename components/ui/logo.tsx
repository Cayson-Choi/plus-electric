import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "default",
  href = "/",
}: {
  className?: string;
  variant?: "default" | "white";
  href?: string;
}) {
  const isWhite = variant === "white";
  return (
    <Link
      href={href}
      aria-label="플러스 전기학원 홈"
      className={cn(
        "group inline-flex items-center gap-2.5 select-none",
        className,
      )}
    >
      <span
        className={cn(
          "relative grid h-10 w-10 place-items-center rounded-xl shadow-soft transition-transform group-hover:scale-105",
          isWhite
            ? "bg-white/15 backdrop-blur"
            : "bg-gradient-to-br from-brand-600 to-brand-700",
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="h-5 w-5"
        >
          <path
            d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
            fill={isWhite ? "#facc15" : "#facc15"}
            stroke={isWhite ? "#facc15" : "#facc15"}
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-accent-400 text-[10px] font-black text-brand-900 shadow-soft">
          +
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[11px] font-medium tracking-[0.2em]",
            isWhite ? "text-white/70" : "text-brand-600",
          )}
        >
          PLUS ELECTRIC
        </span>
        <span
          className={cn(
            "mt-0.5 text-[17px] font-extrabold tracking-tight",
            isWhite ? "text-white" : "text-slate-900",
          )}
        >
          플러스 전기학원
        </span>
      </span>
    </Link>
  );
}
