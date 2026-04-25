"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Phone,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SLIDE_INTERVAL = 5000;
const TRANSITION_MS = 600;
const TOTAL_SLIDES = 2;

// We render 4 panels: [SlideTwoClone, SlideOne, SlideTwo, SlideOneClone].
// Initial index is 1 (SlideOne). Auto-advance and the right arrow both
// increment index → carousel always animates leftward. Left arrow decrements,
// animating rightward. When we reach a clone we snap back invisibly.
const RESET_FROM_RIGHT_END = TOTAL_SLIDES + 1; // index 3 → snap to 1
const RESET_FROM_LEFT_END = 0; //              → snap to TOTAL_SLIDES (2)

export function Hero() {
  const [index, setIndex] = useState(1);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setAnimate(true);
      setIndex((prev) => prev + 1);
    }, SLIDE_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const handleTransitionEnd = useCallback(() => {
    if (index === RESET_FROM_RIGHT_END) {
      setAnimate(false);
      setIndex(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true));
      });
    } else if (index === RESET_FROM_LEFT_END) {
      setAnimate(false);
      setIndex(TOTAL_SLIDES);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true));
      });
    }
  }, [index]);

  const goNext = useCallback(() => {
    setAnimate(true);
    setIndex((prev) => prev + 1);
  }, []);

  const goPrev = useCallback(() => {
    setAnimate(true);
    setIndex((prev) => prev - 1);
  }, []);

  const goTo = useCallback((targetSlide: number) => {
    setAnimate(true);
    setIndex(targetSlide + 1);
  }, []);

  const activeDot =
    ((index - 1) % TOTAL_SLIDES + TOTAL_SLIDES) % TOTAL_SLIDES;

  return (
    <section
      className="relative overflow-hidden"
      aria-roledescription="carousel"
      aria-label="플러스 전기학원 메인 슬라이드"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="flex"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: animate
            ? `transform ${TRANSITION_MS}ms ease-out`
            : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
        aria-live="polite"
      >
        {/* clone of slide two — sits to the left of slide one for prev loop */}
        <SlideTwo hidden cloneFlag />
        <SlideOne hidden={activeDot !== 0} />
        <SlideTwo hidden={activeDot !== 1} />
        {/* clone of slide one — sits to the right of slide two for next loop */}
        <SlideOne hidden cloneFlag />
      </div>

      <button
        type="button"
        onClick={goPrev}
        aria-label="이전 슬라이드"
        className="absolute top-1/2 left-3 z-20 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/25 md:grid"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="다음 슬라이드"
        className="absolute top-1/2 right-3 z-20 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/25 md:grid"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-2.5 md:bottom-8">
        {Array.from({ length: TOTAL_SLIDES }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => goTo(idx)}
            aria-label={`${idx + 1}번 슬라이드로 이동`}
            aria-current={activeDot === idx}
            className={cn(
              "relative h-2 overflow-hidden rounded-full bg-white/30 transition-all duration-300",
              activeDot === idx ? "w-10" : "w-2 hover:bg-white/50",
            )}
          >
            {activeDot === idx && !paused && (
              <span
                key={`progress-${index}`}
                className="absolute inset-y-0 left-0 bg-white"
                style={{
                  animation: `slideProgress ${SLIDE_INTERVAL}ms linear forwards`,
                }}
              />
            )}
            {activeDot === idx && paused && (
              <span className="absolute inset-y-0 left-0 w-full bg-white" />
            )}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes slideProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}

function SlideOne({
  hidden,
  cloneFlag,
}: {
  hidden: boolean;
  cloneFlag?: boolean;
}) {
  return (
    <div
      className="relative w-full shrink-0 bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 text-white lg:min-h-[28rem]"
      role="group"
      aria-roledescription="slide"
      aria-label="1 / 2: 학원 소개"
      aria-hidden={hidden}
      inert={cloneFlag ? true : undefined}
    >
      <div className="absolute inset-0 bg-grid opacity-25" aria-hidden="true" />
      <div
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent-400/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-32 h-96 w-96 rounded-full bg-brand-400/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative grid gap-8 py-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-10 lg:min-h-[28rem]">
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
                  <p className="mt-1 text-base font-bold">내일배움카드</p>
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
                tabIndex={hidden ? -1 : 0}
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
    </div>
  );
}

function SlideTwo({
  hidden,
  cloneFlag,
}: {
  hidden: boolean;
  cloneFlag?: boolean;
}) {
  return (
    <div
      className="relative w-full shrink-0 overflow-hidden bg-gradient-to-br from-rose-900 via-red-700 to-rose-900 text-white lg:min-h-[28rem]"
      role="group"
      aria-roledescription="slide"
      aria-label="2 / 2: 고용노동부 지정 국비지원학원"
      aria-hidden={hidden}
      inert={cloneFlag ? true : undefined}
    >
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 100%, rgba(250, 204, 21, 0.18), transparent 50%), radial-gradient(circle at 80% 0%, rgba(255, 60, 60, 0.4), transparent 55%)",
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-10" aria-hidden="true" />
      <div
        className="absolute top-1/2 left-1/2 -z-0 h-[120%] w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-60"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.06) 45%, transparent 55%), linear-gradient(245deg, transparent 35%, rgba(255,255,255,0.05) 45%, transparent 55%)",
        }}
      />

      <div className="container-x relative grid gap-8 py-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-10 lg:min-h-[28rem]">
        <div className="order-2 lg:order-1 lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white ring-1 ring-white/25 backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5 text-accent-300" />
            Ministry of Employment and Labor Certified
          </span>

          <p className="mt-6 text-base font-bold tracking-tight text-accent-300 sm:text-lg">
            플러스 전기학원
          </p>

          <h2 className="mt-3 text-balance text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl lg:text-[64px]">
            <span className="block">고용노동부에서</span>
            <span className="mt-1 block bg-gradient-to-r from-accent-300 via-accent-400 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(250,204,21,0.35)]">
              지정한 국비지원학원
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/85 sm:text-lg">
            국가 공인 직업능력개발 훈련기관에서 안전하고 체계적으로 자격증을
            준비하세요. 내일배움카드 사용이 가능한 전기기사 국비지원 과정을
            운영하고 있습니다.
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5 text-sm font-medium text-white/90">
            {[
              { icon: Award, text: "국비지원 인증 학원" },
              { icon: ShieldCheck, text: "내일배움카드 사용 가능" },
              { icon: Trophy, text: "체계적 합격 커리큘럼" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-1.5">
                <Icon className="h-4 w-4 text-accent-300" />
                {text}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              href="/courses/#electric-engineer"
              variant="accent"
              size="lg"
            >
              국비지원 과정 보기
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

        <div className="order-1 lg:order-2 lg:col-span-5">
          <div className="relative mx-auto w-full max-w-2xl sm:max-w-3xl lg:max-w-md xl:max-w-lg">
            <div
              className="absolute inset-0 -z-10 rounded-full bg-accent-400/45 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/trophy.png"
                alt="플러스 전기학원 국비지원 인증 트로피"
                className="relative h-full w-full object-contain drop-shadow-[0_36px_70px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
