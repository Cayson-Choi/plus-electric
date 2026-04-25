"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="hidden bg-slate-900 text-slate-300 md:block">
        <div className="container-x flex h-9 items-center justify-between text-[13px]">
          <span className="text-slate-400">
            대전 유성구 전기 자격증 전문 교육기관
          </span>
          <a
            href={`tel:${siteConfig.contact.phoneDigits}`}
            className="flex items-center gap-1.5 font-semibold text-white hover:text-accent-400"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>{siteConfig.contact.phone}</span>
          </a>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 w-full border-b transition-all duration-200",
          scrolled
            ? "border-slate-200 bg-white/90 shadow-soft backdrop-blur-md"
            : "border-transparent bg-white",
        )}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-18">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {siteConfig.nav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-md px-4 py-2 text-[15px] font-semibold transition-colors",
                    active
                      ? "text-brand-700"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
                  )}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-brand-600" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${siteConfig.contact.phoneDigits}`}
              className="hidden h-10 items-center gap-2 rounded-lg bg-brand-600 px-4 text-sm font-bold text-white shadow-soft hover:bg-brand-700 lg:inline-flex"
            >
              <Phone className="h-4 w-4" />
              상담 문의
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="메뉴 열기"
              className="grid h-10 w-10 place-items-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!open}
      >
        <div className="flex h-16 items-center justify-between border-b border-slate-200 px-5">
          <Logo />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="메뉴 닫기"
            className="grid h-10 w-10 place-items-center rounded-lg text-slate-700 hover:bg-slate-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-5 py-6">
          <ul className="space-y-1">
            {siteConfig.nav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-lg px-4 py-3.5 text-[17px] font-semibold transition-colors",
                      active
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-800 hover:bg-slate-50",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="space-y-3 border-t border-slate-200 p-5">
          <p className="text-xs font-medium text-slate-500">상담 전화</p>
          <a
            href={`tel:${siteConfig.contact.phoneDigits}`}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-600 text-base font-bold text-white shadow-soft hover:bg-brand-700"
          >
            <Phone className="h-5 w-5" />
            {siteConfig.contact.phone}
          </a>
          <p className="text-xs leading-relaxed text-slate-500">
            {siteConfig.contact.address}
          </p>
        </div>
      </aside>
    </>
  );
}
