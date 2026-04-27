"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
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

const SLIDE_INTERVAL = 5500;
const TRANSITION_MS = 1100;
const TOTAL_SLIDES = 2;
const SWIPE_THRESHOLD_RATIO = 0.18;
const RESUME_AUTOPLAY_MS = 4000;

// We render 4 panels: [SlideTwoClone, SlideOne, SlideTwo, SlideOneClone].
// Initial index is 1 (SlideOne). Auto-advance and the right arrow both
// increment index → carousel always animates leftward. Left arrow decrements,
// animating rightward. When we reach a clone we snap back invisibly.
const RESET_FROM_RIGHT_END = TOTAL_SLIDES + 1; // index 3 → snap to 1
const RESET_FROM_LEFT_END = 0; //              → snap to TOTAL_SLIDES (2)

export function Hero() {
  const [index, setIndex] = useState(1);
  // Start with animate=false so the initial transform (-100%) snaps without
  // animating the carousel "into place" during hydration. We re-enable
  // transitions after first paint via rAF.
  const [animate, setAnimate] = useState(false);
  const [paused, setPaused] = useState(false);
  const [dragOffsetPx, setDragOffsetPx] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStartXRef = useRef<number | null>(null);
  const dragStartYRef = useRef<number | null>(null);
  const dragLockedRef = useRef<"x" | "y" | null>(null);
  const trackWidthRef = useRef<number>(0);

  // Enable transitions only after the first paint to avoid hydration flicker.
  useEffect(() => {
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnimate(true)),
    );
    return () => cancelAnimationFrame(id);
  }, []);

  // Pause carousel when tab is backgrounded; reset to a safe slide position
  // when it becomes visible again. Without this, throttled setInterval +
  // missed transitionEnd events can leave the track translated past the
  // clone, so the section appears empty when the user returns.
  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden) {
        setPaused(true);
        return;
      }
      // Returning to the tab: snap to a guaranteed-valid slide without animation,
      // then re-enable autoplay on the next frame.
      setAnimate(false);
      setIndex((prev) => {
        const normalized =
          (((prev - 1) % TOTAL_SLIDES) + TOTAL_SLIDES) % TOTAL_SLIDES;
        return normalized + 1; // map back to [1, TOTAL_SLIDES]
      });
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true);
          setPaused(false);
        });
      });
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

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

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const scheduleResume = useCallback(() => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setPaused(false);
    }, RESUME_AUTOPLAY_MS);
  }, []);

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

  const onPointerDown = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      // Ignore non-primary mouse buttons; allow touch + pen + primary mouse.
      if (e.pointerType === "mouse" && e.button !== 0) return;
      dragStartXRef.current = e.clientX;
      dragStartYRef.current = e.clientY;
      dragLockedRef.current = null;
      trackWidthRef.current =
        trackRef.current?.offsetWidth ?? window.innerWidth;
      setPaused(true);
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = null;
      }
    },
    [],
  );

  const onPointerMove = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      if (dragStartXRef.current === null || dragStartYRef.current === null)
        return;
      const dx = e.clientX - dragStartXRef.current;
      const dy = e.clientY - dragStartYRef.current;

      if (dragLockedRef.current === null) {
        if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
        dragLockedRef.current = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      }

      if (dragLockedRef.current === "x") {
        e.preventDefault();
        try {
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        } catch {}
        setAnimate(false);
        setDragOffsetPx(dx);
      }
    },
    [],
  );

  const finishDrag = useCallback(() => {
    if (dragStartXRef.current === null) return;
    const offset = dragOffsetPx;
    const width = trackWidthRef.current || 1;
    const threshold = width * SWIPE_THRESHOLD_RATIO;
    dragStartXRef.current = null;
    dragStartYRef.current = null;
    const wasHorizontal = dragLockedRef.current === "x";
    dragLockedRef.current = null;

    setAnimate(true);
    setDragOffsetPx(0);

    if (wasHorizontal) {
      if (offset < -threshold) {
        setIndex((prev) => prev + 1);
      } else if (offset > threshold) {
        setIndex((prev) => prev - 1);
      }
    }
    scheduleResume();
  }, [dragOffsetPx, scheduleResume]);

  const onPointerUp = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {}
      finishDrag();
    },
    [finishDrag],
  );

  const onPointerCancel = useCallback(() => {
    finishDrag();
  }, [finishDrag]);

  const activeDot =
    ((index - 1) % TOTAL_SLIDES + TOTAL_SLIDES) % TOTAL_SLIDES;

  const dragging = dragLockedRef.current === "x" && dragStartXRef.current !== null;

  return (
    <section
      className="relative overflow-hidden min-h-[28rem] sm:min-h-[30rem] lg:min-h-[32rem]"
      aria-roledescription="carousel"
      aria-label="플러스 전기학원 메인 슬라이드"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex touch-pan-y select-none"
        style={{
          transform: `translate3d(calc(-${index * 100}% + ${dragOffsetPx}px), 0, 0)`,
          transition: animate
            ? `transform ${TRANSITION_MS}ms cubic-bezier(0.65, 0, 0.35, 1)`
            : "none",
          cursor: dragging ? "grabbing" : undefined,
        }}
        onTransitionEnd={handleTransitionEnd}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        aria-live="polite"
      >
        {/* clone of slide two — sits to the left of slide one for prev loop */}
        <SlideTwo hidden cloneFlag />
        <SlideOne hidden={activeDot !== 0} />
        <SlideTwo hidden={activeDot !== 1} />
        {/* clone of slide one — sits to the right of slide two for next loop */}
        <SlideOne hidden cloneFlag />
      </div>

      {/* Desktop side arrows — placed at md+ so they don't overlap mobile content */}
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

      <div className="absolute inset-x-0 bottom-5 z-20 flex items-center justify-center gap-3 md:bottom-8 md:gap-0">
        {/* Mobile-only inline prev arrow */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="이전 슬라이드"
          className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/25 md:hidden"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center justify-center gap-2.5">
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

        {/* Mobile-only inline next arrow */}
        <button
          type="button"
          onClick={goNext}
          aria-label="다음 슬라이드"
          className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/25 md:hidden"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
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
      className="relative w-full shrink-0 overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white min-h-[28rem] sm:min-h-[30rem] lg:min-h-[32rem]"
      role="group"
      aria-roledescription="slide"
      aria-label="1 / 2: 학원 소개"
      aria-hidden={hidden}
      inert={cloneFlag ? true : undefined}
    >
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 95%, rgba(59, 130, 246, 0.5), transparent 55%), radial-gradient(circle at 82% 8%, rgba(96, 165, 250, 0.35), transparent 55%)",
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-15" aria-hidden="true" />
      <div
        className="absolute top-1/2 left-1/2 -z-0 h-[120%] w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-60"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.06) 45%, transparent 55%), linear-gradient(245deg, transparent 35%, rgba(255,255,255,0.05) 45%, transparent 55%)",
        }}
      />
      <div
        className="absolute -bottom-24 -left-32 h-96 w-96 rounded-full bg-brand-400/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative grid gap-8 py-10 pb-20 md:pb-14 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-10 lg:min-h-[32rem]">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white ring-1 ring-white/20 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent-300" />
            대전 유성구 전기 자격증 전문 교육기관
          </span>

          <h1 className="mt-7 text-balance text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl lg:text-[60px]">
            전기 자격증,
            <br />
            <span
              className="sparkle-text text-sky-300"
              style={{
                fontFamily: "'Nanum Pen Script', cursive",
                fontSize: "1.9em",
                verticalAlign: "-0.15em",
                letterSpacing: "0.06em",
              }}
            >
              <span className="plus-char-1">플</span>
              <span className="plus-char-2">러</span>
              <span className="plus-char-3">스</span>
            </span>
            로 끝낸다
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/85 sm:text-lg">
            합격까지 한 걸음 더, 플러스 전기학원이 함께합니다 체계적인
            커리큘럼과 현장 출신 강사진으로 전기기능사부터 전기기사 국비지원
            과정까지 책임집니다
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
                내일배움카드로 부담 없이 시작하세요 전기 산업의 핵심 자격증을
                제대로 준비할 수 있습니다
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
      className="relative w-full shrink-0 overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-800 to-emerald-950 text-white min-h-[28rem] sm:min-h-[30rem] lg:min-h-[32rem]"
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
            "radial-gradient(circle at 20% 100%, rgba(250, 204, 21, 0.22), transparent 50%), radial-gradient(circle at 80% 0%, rgba(16, 185, 129, 0.45), transparent 55%)",
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

      <div className="container-x relative grid gap-8 py-10 pb-20 md:pb-14 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-10 lg:min-h-[32rem]">
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
            <span className="mt-1 block text-accent-300">
              지정한 국비지원학원
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/85 sm:text-lg">
            국가 공인 직업능력개발 훈련기관에서 안전하고 체계적으로 자격증을
            준비하세요 내일배움카드 사용이 가능한 전기기사 국비지원 과정을
            운영하고 있습니다
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

        <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:block">
          <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            {/* outer pulsing glow */}
            <div
              className="animate-trophy-glow absolute inset-0 -z-10 rounded-full bg-accent-400/55 blur-3xl"
              aria-hidden="true"
            />
            {/* inner amber halo */}
            <div
              className="absolute inset-x-10 inset-y-10 -z-10 rounded-full bg-amber-300/35 blur-2xl"
              aria-hidden="true"
            />
            {/* radial spotlight directly behind trophy */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(circle at 50% 45%, rgba(253, 224, 71, 0.45) 0%, rgba(250, 204, 21, 0.18) 30%, transparent 65%)",
              }}
            />

            <div className="animate-trophy-float relative aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/trophy.png"
                alt="플러스 전기학원 국비지원 인증 트로피"
                draggable={false}
                style={{
                  mixBlendMode: "lighten",
                  filter:
                    "drop-shadow(0 24px 48px rgba(0,0,0,0.55)) drop-shadow(0 0 60px rgba(250, 204, 21, 0.45)) saturate(1.15) contrast(1.05)",
                }}
                className="relative h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
