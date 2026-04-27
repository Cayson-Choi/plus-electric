import { ArrowRight, Bus, Car, MapPin, Navigation, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { KakaoRoughMap } from "@/components/ui/kakao-rough-map";

export function LocationPreview() {
  const kakaoQuery = encodeURIComponent(
    `${siteConfig.name} ${siteConfig.contact.address}`,
  );
  const kakaoMapUrl = siteConfig.contact.mapLinks.kakao;
  const kakaoDirectionsUrl = `https://map.kakao.com/?sName=&eName=${kakaoQuery}`;

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-brand-700 uppercase ring-1 ring-brand-100">
            <MapPin className="h-3 w-3" />
            Location
          </span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-[44px] md:leading-[1.1]">
            오시는 길
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            대전 동구 동서대로, 편안하게 학습할 수 있는 환경에서 만나뵙겠습니다
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="rounded-[28px] bg-white p-2 shadow-elevate ring-1 ring-slate-200 sm:p-2.5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-slate-200/80 sm:aspect-[16/10]">
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
          </div>

          <div className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-3xl bg-gradient-to-br from-slate-50 to-white p-7 shadow-card ring-1 ring-slate-200/80 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-soft">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.18em] text-brand-600 uppercase">
                    {siteConfig.contact.region}
                  </p>
                  <h3 className="text-lg font-extrabold tracking-tight text-slate-900">
                    {siteConfig.name}
                  </h3>
                </div>
              </div>

              <ul className="mt-7 space-y-4 text-sm">
                <InfoRow
                  icon={<MapPin className="h-4 w-4" />}
                  label="주소"
                  value={siteConfig.contact.address}
                />
                <InfoRow
                  icon={<Phone className="h-4 w-4" />}
                  label="전화"
                  value={
                    <a
                      href={`tel:${siteConfig.contact.phoneDigits}`}
                      className="font-extrabold tracking-tight text-brand-700 hover:underline"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  }
                />
                <InfoRow
                  icon={<Bus className="h-4 w-4" />}
                  label="대중교통"
                  value="동서대로 인근 버스 정류장에서 도보 이동"
                />
                <InfoRow
                  icon={<Car className="h-4 w-4" />}
                  label="자가용"
                  value="건물 주차장 이용 가능 (자세한 안내는 전화 문의)"
                />
              </ul>

              <div className="mt-auto flex flex-col gap-2 pt-7 sm:flex-row">
                <Button
                  href={kakaoDirectionsUrl}
                  external
                  variant="primary"
                  fullWidth
                >
                  <Navigation className="h-4 w-4" />
                  카카오맵 길찾기
                </Button>
                <Button href="/location/" variant="secondary" fullWidth>
                  오시는 길 자세히
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-brand-600 ring-1 ring-slate-200 shadow-soft">
        {icon}
      </span>
      <div className="min-w-0 pt-0.5">
        <p className="text-[10px] font-bold tracking-[0.18em] text-slate-500 uppercase">
          {label}
        </p>
        <div className="mt-0.5 leading-relaxed font-semibold text-slate-900">
          {value}
        </div>
      </div>
    </li>
  );
}
