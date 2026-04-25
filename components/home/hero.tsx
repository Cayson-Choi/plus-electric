import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 text-white">
      <div className="absolute inset-0 bg-grid opacity-25" aria-hidden="true" />
      <div
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent-400/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-32 h-96 w-96 rounded-full bg-brand-400/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative grid gap-12 py-20 lg:grid-cols-12 lg:gap-12 lg:py-28">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white ring-1 ring-white/20 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent-300" />
            대전 유성구 전기 자격증 전문 교육기관
          </span>

          <h1 className="mt-7 text-balance text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl lg:text-[60px]">
            전기 자격증,
            <br />
            <span className="bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">
              플러스
            </span>
            로 끝낸다.
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/85 sm:text-lg">
            합격까지 한 걸음 더, 플러스 전기학원이 함께합니다. 체계적인
            커리큘럼과 현장 출신 강사진으로 전기기능사부터 전기기사 국비지원
            과정까지 책임집니다.
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5 text-sm font-medium text-white/90">
            {[
              "전기기능사 / 전기기사 과정",
              "내일배움카드 사용 가능",
              "1:1 합격 코칭",
            ].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent-300" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/courses/" variant="accent" size="lg">
              교육 과정 보기
              <ArrowRight className="h-4.5 w-4.5" />
            </Button>
            <Button
              href={`tel:${siteConfig.contact.phoneDigits}`}
              variant="outline"
              size="lg"
            >
              <Phone className="h-4.5 w-4.5" />
              {siteConfig.contact.phone}
            </Button>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:mx-0 lg:ml-auto">
            <div className="relative rounded-2xl bg-white/10 p-6 shadow-lift ring-1 ring-white/20 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wider text-accent-300 uppercase">
                  지금 모집 중
                </span>
                <span className="rounded-full bg-accent-400 px-2.5 py-1 text-[10px] font-bold tracking-wide text-brand-900 uppercase">
                  Hot
                </span>
              </div>
              <h3 className="mt-3 text-2xl font-extrabold leading-tight">
                전기기사
                <br />
                국비지원 과정
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                내일배움카드로 부담 없이 시작하세요. 전기 산업의 핵심 자격증을
                제대로 준비할 수 있습니다.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/15 pt-5">
                <div>
                  <p className="text-[11px] tracking-wide text-white/60 uppercase">
                    수강료
                  </p>
                  <p className="mt-1 text-base font-bold">
                    내일배움카드
                  </p>
                </div>
                <div>
                  <p className="text-[11px] tracking-wide text-white/60 uppercase">
                    과정
                  </p>
                  <p className="mt-1 text-base font-bold">필기 + 실기</p>
                </div>
              </div>
              <Link
                href="/courses/#electric-engineer"
                className="mt-6 flex items-center justify-between rounded-lg bg-white px-4 py-3 text-sm font-bold text-brand-700 transition-colors hover:bg-accent-300"
              >
                자세히 보기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="absolute -top-4 -right-4 hidden rotate-6 rounded-xl bg-accent-400 px-3 py-2 text-xs font-extrabold text-brand-900 shadow-lift sm:block">
              ⚡ PLUS
            </div>
          </div>
        </div>
      </div>

      <svg
        className="block w-full text-white"
        viewBox="0 0 1440 64"
        fill="currentColor"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 64h1440V32C1200 8 960 0 720 16S240 48 0 32v32Z" />
      </svg>
    </section>
  );
}
