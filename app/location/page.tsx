import type { Metadata } from "next";
import {
  Bus,
  Car,
  Clock,
  Copy,
  ExternalLink,
  MapPin,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { KakaoRoughMap } from "@/components/ui/kakao-rough-map";

export const metadata: Metadata = {
  title: "오시는 길",
  description:
    "플러스 전기학원은 대전 유성구 대정로 28번길 50 105동 1105호에 위치하고 있습니다 대중교통 및 자가용 안내를 확인하세요",
};

export default function LocationPage() {
  const kakaoLink = siteConfig.contact.mapLinks.kakao;
  const naverLink = siteConfig.contact.mapLinks.naver;

  return (
    <>
      <PageHero
        eyebrow="Find Us"
        title="오시는 길"
        description="대전 유성구 대정로의 플러스 전기학원으로 찾아오시는 길을 안내해드립니다"
        breadcrumbs={[{ label: "오시는 길" }]}
        variant="location"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="rounded-[28px] bg-white p-2 shadow-elevate ring-1 ring-slate-200 sm:p-2.5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100 ring-1 ring-slate-200/80 sm:aspect-[16/9]">
                  <KakaoRoughMap
                    timestamp={siteConfig.contact.kakaoRoughMap.timestamp}
                    mapKey={siteConfig.contact.kakaoRoughMap.key}
                    name={siteConfig.name}
                    address={siteConfig.contact.address}
                    region={siteConfig.contact.region}
                    externalUrl={siteConfig.contact.mapLinks.kakao}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-slate-900/5"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Button href={kakaoLink} external variant="secondary" size="sm">
                  <ExternalLink className="h-4 w-4" />
                  카카오맵에서 보기
                </Button>
                <Button href={naverLink} external variant="secondary" size="sm">
                  <ExternalLink className="h-4 w-4" />
                  네이버맵에서 보기
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-200">
                <h2 className="text-xl font-extrabold tracking-tight text-slate-900">
                  {siteConfig.name}
                </h2>

                <ul className="mt-5 space-y-4 text-sm">
                  <li>
                    <p className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                      <MapPin className="mr-1 inline h-3.5 w-3.5" />
                      주소
                    </p>
                    <p className="mt-1 leading-relaxed font-bold text-slate-900">
                      {siteConfig.contact.address}
                    </p>
                  </li>
                  <li>
                    <p className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                      <Phone className="mr-1 inline h-3.5 w-3.5" />
                      전화
                    </p>
                    <a
                      href={`tel:${siteConfig.contact.phoneDigits}`}
                      className="mt-1 block text-base font-extrabold text-brand-700 hover:underline"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </li>
                  <li>
                    <p className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                      <Clock className="mr-1 inline h-3.5 w-3.5" />
                      운영 시간
                    </p>
                    <p className="mt-1 leading-relaxed font-semibold text-slate-700">
                      {siteConfig.contact.hours}
                    </p>
                  </li>
                </ul>

                <Button
                  href={`tel:${siteConfig.contact.phoneDigits}`}
                  variant="primary"
                  fullWidth
                  className="mt-7"
                >
                  <Phone className="h-4 w-4" />
                  지금 전화 상담
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <div className="group rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-0.5 hover:ring-brand-300 hover:shadow-elevate">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <Bus className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-extrabold text-slate-900">
                  대중교통
                </h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
                <li>· 대정로 인근 정류장 하차 후 도보 이동</li>
                <li>· 자세한 버스 노선은 카카오맵에서 검색 가능</li>
                <li>· 방문 전 전화 주시면 위치 안내 도와드립니다</li>
              </ul>
            </div>
            <div className="group rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-0.5 hover:ring-brand-300 hover:shadow-elevate">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <Car className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-extrabold text-slate-900">
                  자가용
                </h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
                <li>· 내비게이션에 &ldquo;{siteConfig.contact.address}&rdquo; 검색</li>
                <li>· 건물 내 주차 공간 이용 가능</li>
                <li>· 방문 전 학원으로 미리 연락 부탁드립니다</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 rounded-3xl bg-gradient-to-br from-brand-50 to-blue-50 p-7 text-center shadow-card ring-1 ring-brand-200/60 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div className="flex items-start gap-3">
              <Copy className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <p className="text-sm leading-relaxed text-slate-700">
                <span className="font-bold text-slate-900">방문 전 꼭 연락 주세요</span>{" "}
                상담 시간을 잡아두시면 더 충실한 안내를 받으실 수 있습니다
              </p>
            </div>
            <Button
              href={`tel:${siteConfig.contact.phoneDigits}`}
              variant="primary"
              size="md"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.contact.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
