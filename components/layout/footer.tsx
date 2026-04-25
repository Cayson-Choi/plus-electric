import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="mt-24 bg-slate-950 text-slate-300">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          <div>
            <Logo variant="white" />
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              대전 유성구 전기 자격증 전문 교육기관.
              <br />
              합격까지 한 걸음 더, 플러스 전기학원과 함께하세요.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wide text-white uppercase">
              연락처
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <span className="text-slate-300">
                  {siteConfig.contact.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <a
                  href={`tel:${siteConfig.contact.phoneDigits}`}
                  className="font-semibold text-white hover:text-accent-400"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <span className="text-slate-300">{siteConfig.contact.hours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wide text-white uppercase">
              바로가기
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-7 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-slate-600">
            본 사이트는 정보 제공 목적이며, 자세한 사항은 전화 상담 부탁드립니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
