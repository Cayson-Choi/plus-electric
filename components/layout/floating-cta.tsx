"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function FloatingCta() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="맨 위로 이동"
        className={cn(
          "fixed right-4 bottom-24 z-30 grid h-12 w-12 place-items-center rounded-full bg-white text-brand-700 shadow-lift ring-1 ring-slate-200 transition-all duration-300 hover:bg-brand-50 hover:text-brand-800 md:right-6 md:bottom-6",
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <div className="fixed right-0 bottom-0 left-0 z-30 grid grid-cols-2 border-t border-slate-200 bg-white shadow-lift md:hidden">
        <a
          href={`tel:${siteConfig.contact.phoneDigits}`}
          className="flex items-center justify-center gap-2 py-4 text-sm font-bold text-white transition-colors active:bg-brand-800"
          style={{ background: "var(--color-brand-600)" }}
        >
          <Phone className="h-4.5 w-4.5" />
          전화 상담
        </a>
        <a
          href="/contact/"
          className="flex items-center justify-center gap-2 py-4 text-sm font-bold text-brand-700 hover:bg-slate-50 active:bg-slate-100"
        >
          <MessageCircle className="h-4.5 w-4.5" />
          문의 남기기
        </a>
      </div>
    </>
  );
}
