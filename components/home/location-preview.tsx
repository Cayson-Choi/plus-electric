import { ArrowRight, Bus, Car, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export function LocationPreview() {
  const mapQuery = encodeURIComponent(siteConfig.contact.address);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-600 uppercase">
            Location
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            오시는 길
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100 ring-1 ring-slate-200 sm:aspect-[16/10]">
              <iframe
                title="플러스 전기학원 위치"
                src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
              <h3 className="text-xl font-extrabold text-slate-900">
                {siteConfig.name}
              </h3>

              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-brand-600 ring-1 ring-slate-200">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                      주소
                    </p>
                    <p className="mt-0.5 leading-relaxed font-semibold text-slate-900">
                      {siteConfig.contact.address}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-brand-600 ring-1 ring-slate-200">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                      전화
                    </p>
                    <a
                      href={`tel:${siteConfig.contact.phoneDigits}`}
                      className="mt-0.5 block font-bold text-brand-700 hover:underline"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-brand-600 ring-1 ring-slate-200">
                    <Bus className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                      대중교통
                    </p>
                    <p className="mt-0.5 leading-relaxed text-slate-700">
                      대정로 인근 버스 정류장에서 도보 이동 가능
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-brand-600 ring-1 ring-slate-200">
                    <Car className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                      자가용
                    </p>
                    <p className="mt-0.5 leading-relaxed text-slate-700">
                      건물 주차장 이용 가능 (자세한 주차 안내는 전화 문의)
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-auto flex flex-col gap-2 pt-7 sm:flex-row">
                <Button href="/location/" variant="primary" fullWidth>
                  오시는 길 자세히
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  href={`https://map.kakao.com/?q=${mapQuery}`}
                  external
                  variant="secondary"
                  fullWidth
                >
                  카카오맵 열기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
