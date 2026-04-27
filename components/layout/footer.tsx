import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Logo variant="white" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
              대전 동구 전기 자격증 전문 교육기관
              <br />
              체계적인 커리큘럼과 1:1 합격 코칭으로 합격까지 책임지는 학원입니다
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-[11px] font-bold tracking-wide text-slate-300 ring-1 ring-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                내일배움카드 사용 가능
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-[11px] font-bold tracking-wide text-slate-300 ring-1 ring-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                전기기능사 / 전기기사 운영
              </span>
            </div>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-[11px] font-bold tracking-[0.2em] text-white uppercase">
              연락처
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <a
                  href={`tel:${siteConfig.contact.phoneDigits}`}
                  className="text-base font-extrabold tracking-tight text-white hover:text-accent-400"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-semibold text-slate-300 hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <span className="text-slate-300">
                  {siteConfig.contact.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <span className="text-slate-300">
                  {siteConfig.contact.hours}
                </span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[11px] font-bold tracking-[0.2em] text-white uppercase">
              바로가기
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 font-semibold text-slate-300 transition-colors hover:text-white"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-slate-700/60 pt-8 text-xs text-slate-300 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>
              © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-slate-400">
              사업자등록번호 {siteConfig.contact.businessNumber}
            </p>
          </div>
          <p className="text-slate-400">
            본 사이트는 정보 제공 목적이며, 자세한 사항은 전화 상담 부탁드립니다
          </p>
        </div>
      </div>
    </footer>
  );
}
