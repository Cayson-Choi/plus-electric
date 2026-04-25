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

const SLIDE_INTERVAL = 6000;
const TOTAL_SLIDES = 2;

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TOTAL_SLIDES);
    }, SLIDE_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const goTo = useCallback((index: number) => {
    setCurrent(((index % TOTAL_SLIDES) + TOTAL_SLIDES) % TOTAL_SLIDES);
  }, []);

  const goPrev = useCallback(
    () => goTo(current - 1),
    [current, goTo],
  );
  const goNext = useCallback(
    () => goTo(current + 1),
    [current, goTo],
  );

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
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
        aria-live="polite"
      >
        <SlideOne hidden={current !== 0} />
        <SlideTwo hidden={current !== 1} />
      </div>

      <button
        type="button"
        onClick={goPrev}
        aria-label="이전 슬라이드"
        className="absolute top-1/2 left-3 z-20 hidden -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/15 text-white backdrop-blur-sm ring-1 ring-white/30 transition-all hover:bg-white/25 hover:scale-105 md:grid"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="다음 슬라이드"
        className="absolute top-1/2 right-3 z-20 hidden -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/15 text-white backdrop-blur-sm ring-1 ring-white/30 transition-all hover:bg-white/25 hover:scale-105 md:grid"
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
            aria-current={current === idx}
            className={cn(
              "relative h-2 overflow-hidden rounded-full bg-white/30 transition-all duration-300",
              current === idx ? "w-10" : "w-2 hover:bg-white/50",
            )}
          >
            {current === idx && !paused && (
              <span
                key={current}
                className="absolute inset-y-0 left-0 bg-white"
                style={{
                  animation: `slideProgress ${SLIDE_INTERVAL}ms linear forwards`,
                }}
              />
            )}
            {current === idx && paused && (
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

function SlideOne({ hidden }: { hidden: boolean }) {
  return (
    <div
      className="relative w-full shrink-0 bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 text-white"
      role="group"
      aria-roledescription="slide"
      aria-label="1 / 2: 학원 소개"
      aria-hidden={hidden}
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

      <svg
        className="block w-full text-white"
        viewBox="0 0 1440 64"
        fill="currentColor"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 64h1440V32C1200 8 960 0 720 16S240 48 0 32v32Z" />
      </svg>
    </div>
  );
}

function SlideTwo({ hidden }: { hidden: boolean }) {
  return (
    <div
      className="relative w-full shrink-0 overflow-hidden bg-gradient-to-br from-rose-900 via-red-700 to-rose-900 text-white"
      role="group"
      aria-roledescription="slide"
      aria-label="2 / 2: 고용노동부 지정 국비지원학원"
      aria-hidden={hidden}
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

      <div className="container-x relative grid gap-12 py-20 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-28">
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
          <div className="relative mx-auto max-w-sm">
            <div
              className="absolute inset-0 -z-10 rounded-full bg-accent-400/30 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative aspect-square">
              <svg
                viewBox="0 0 320 320"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-full w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="goldGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#fde68a" />
                    <stop offset="40%" stopColor="#fbbf24" />
                    <stop offset="70%" stopColor="#d97706" />
                    <stop offset="100%" stopColor="#92400e" />
                  </linearGradient>
                  <linearGradient id="goldShine" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fffbe6" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#fffbe6" stopOpacity="0" />
                  </linearGradient>
                  <radialGradient id="medalGrad" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="60%" stopColor="#1e40af" />
                    <stop offset="100%" stopColor="#1e3a8a" />
                  </radialGradient>
                </defs>

                {/* Trophy base */}
                <ellipse cx="160" cy="290" rx="80" ry="10" fill="rgba(0,0,0,0.35)" />
                <rect
                  x="120"
                  y="250"
                  width="80"
                  height="35"
                  rx="4"
                  fill="url(#goldGrad)"
                />
                <rect
                  x="115"
                  y="245"
                  width="90"
                  height="10"
                  rx="2"
                  fill="url(#goldGrad)"
                />

                {/* Trophy stem */}
                <rect
                  x="148"
                  y="220"
                  width="24"
                  height="30"
                  fill="url(#goldGrad)"
                />

                {/* Trophy cup */}
                <path
                  d="M90 60 Q90 50 100 50 L220 50 Q230 50 230 60 L230 130 Q230 220 160 220 Q90 220 90 130 Z"
                  fill="url(#goldGrad)"
                />

                {/* Cup handles */}
                <path
                  d="M90 80 Q40 80 40 130 Q40 175 85 175"
                  stroke="url(#goldGrad)"
                  strokeWidth="14"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M230 80 Q280 80 280 130 Q280 175 235 175"
                  stroke="url(#goldGrad)"
                  strokeWidth="14"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Cup shine */}
                <path
                  d="M105 65 Q105 58 115 58 L150 58 Q160 58 160 65 L160 200 Q140 215 115 195 Q105 180 105 130 Z"
                  fill="url(#goldShine)"
                  opacity="0.55"
                />

                {/* Medal */}
                <circle
                  cx="160"
                  cy="135"
                  r="55"
                  fill="url(#medalGrad)"
                  stroke="#fbbf24"
                  strokeWidth="3"
                />
                <circle
                  cx="160"
                  cy="135"
                  r="48"
                  fill="none"
                  stroke="#fde68a"
                  strokeWidth="1"
                  strokeDasharray="2 3"
                  opacity="0.6"
                />
                <text
                  x="160"
                  y="125"
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="800"
                  fill="#fde68a"
                  letterSpacing="1"
                >
                  국비지원
                </text>
                <text
                  x="160"
                  y="148"
                  textAnchor="middle"
                  fontSize="20"
                  fontWeight="900"
                  fill="#fff"
                  letterSpacing="1"
                >
                  PLUS
                </text>
                <text
                  x="160"
                  y="166"
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="700"
                  fill="#fde68a"
                  letterSpacing="1.5"
                >
                  ELECTRIC ACADEMY
                </text>

                {/* Sparkles */}
                <g fill="#fde68a">
                  <circle cx="60" cy="60" r="3" opacity="0.9" />
                  <circle cx="270" cy="50" r="2.5" opacity="0.8" />
                  <circle cx="290" cy="200" r="2" opacity="0.7" />
                  <circle cx="40" cy="220" r="2.5" opacity="0.8" />
                </g>
              </svg>
            </div>

            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-accent-400 px-4 py-1.5 text-[11px] font-extrabold tracking-wide text-rose-900 uppercase shadow-lift">
              ⚡ Certified Academy
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
    </div>
  );
}
