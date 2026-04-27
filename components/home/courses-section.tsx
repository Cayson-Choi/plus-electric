import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  CreditCard,
  GraduationCap,
  Phone,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const courseIcon: Record<string, typeof Zap> = {
  electrician: Zap,
  "electric-engineer": GraduationCap,
};

export function CoursesSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
      <div
        className="absolute inset-x-0 top-0 -z-0 h-px divider-fade"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 left-1/2 -z-0 h-80 w-[64rem] -translate-x-1/2 rounded-full bg-brand-100/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-brand-700 uppercase ring-1 ring-brand-100 shadow-soft">
            <Sparkles className="h-3 w-3" />
            Our Courses
          </span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-[44px] md:leading-[1.1]">
            지금 모집 중인{" "}
            <span className="bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
              교육 과정
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            전기기능사부터 전기기사 국비지원까지, 목표에 맞는 과정을
            <br className="hidden sm:inline" />
            전문 강사진과 함께 한 번에 끝내세요
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-7 lg:gap-8">
          {siteConfig.courses.map((course) => {
            const Icon = courseIcon[course.slug] ?? GraduationCap;
            const isHighlight = course.highlight;

            return (
              <article
                key={course.slug}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-3xl p-7 transition-all duration-500 sm:p-9",
                  isHighlight
                    ? "bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 text-white shadow-elevate hover:-translate-y-2"
                    : "bg-white text-slate-900 shadow-card ring-1 ring-slate-200/80 hover:-translate-y-1.5 hover:shadow-elevate hover:ring-brand-200",
                )}
              >
                {isHighlight && (
                  <>
                    <div
                      className="absolute inset-0 -z-0 bg-grid opacity-[0.18]"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute -top-32 -right-24 -z-0 h-72 w-72 rounded-full bg-brand-400/30 blur-3xl"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute -bottom-24 -left-24 -z-0 h-64 w-64 rounded-full bg-brand-500/35 blur-3xl"
                      aria-hidden="true"
                    />
                  </>
                )}

                <div className="relative flex items-start justify-between gap-4">
                  <div
                    className={cn(
                      "grid h-14 w-14 place-items-center rounded-2xl shadow-soft transition-transform duration-500 group-hover:scale-105",
                      isHighlight
                        ? "bg-accent-400 text-brand-900"
                        : "bg-gradient-to-br from-brand-600 to-brand-800 text-white",
                    )}
                  >
                    <Icon className="h-7 w-7" strokeWidth={2.2} />
                  </div>

                  {isHighlight ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-400 px-3 py-1.5 text-[11px] font-extrabold tracking-wide text-brand-900 uppercase shadow-soft">
                      <CreditCard className="h-3.5 w-3.5" />
                      국비지원
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-[11px] font-extrabold tracking-wide text-brand-700 uppercase ring-1 ring-brand-100">
                      입문 추천
                    </span>
                  )}
                </div>

                <div className="relative mt-7">
                  <h3
                    className={cn(
                      "text-2xl font-extrabold tracking-tight sm:text-[28px]",
                      isHighlight ? "text-white" : "text-slate-900",
                    )}
                  >
                    {course.name}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-sm font-bold",
                      isHighlight ? "text-accent-300" : "text-brand-700",
                    )}
                  >
                    {course.tagline}
                  </p>
                  <p
                    className={cn(
                      "mt-4 text-sm leading-relaxed",
                      isHighlight ? "text-white/85" : "text-slate-600",
                    )}
                  >
                    {course.description}
                  </p>
                </div>

                <ul className="relative mt-7 space-y-2.5">
                  {course.features.map((feature) => (
                    <li
                      key={feature}
                      className={cn(
                        "flex items-start gap-2.5 text-sm",
                        isHighlight ? "text-white/90" : "text-slate-700",
                      )}
                    >
                      <CheckCircle2
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          isHighlight ? "text-accent-300" : "text-brand-600",
                        )}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {"inquiryOnly" in course && course.inquiryOnly ? (
                  <a
                    href={`tel:${siteConfig.contact.phoneDigits}`}
                    className={cn(
                      "relative mt-7 flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5",
                      isHighlight
                        ? "bg-accent-400 text-brand-900 ring-2 ring-accent-300 shadow-lift hover:bg-accent-300"
                        : "bg-gradient-to-br from-brand-50 via-blue-50 to-brand-100 ring-2 ring-brand-300 shadow-card hover:ring-brand-400 hover:shadow-elevate",
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-12 w-12 shrink-0 place-items-center rounded-xl shadow-soft",
                        isHighlight
                          ? "bg-brand-900 text-accent-300"
                          : "bg-brand-700 text-white",
                      )}
                    >
                      <Phone className="h-5 w-5" strokeWidth={2.5} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p
                        className={cn(
                          "text-[11px] font-extrabold tracking-[0.18em] uppercase",
                          isHighlight ? "text-brand-900/70" : "text-brand-700",
                        )}
                      >
                        과정 신청 문의
                      </p>
                      <p
                        className={cn(
                          "mt-0.5 text-xl font-black tracking-tight leading-tight sm:text-2xl",
                          isHighlight ? "text-brand-900" : "text-brand-900",
                        )}
                      >
                        {siteConfig.contact.phone}
                      </p>
                      <p
                        className={cn(
                          "mt-0.5 text-xs font-semibold leading-snug",
                          isHighlight ? "text-brand-900/80" : "text-slate-700",
                        )}
                      >
                        수강료 · 일정은 전화로 친절하게 안내해드립니다
                      </p>
                    </div>
                    <ArrowRight
                      className={cn(
                        "h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1",
                        isHighlight ? "text-brand-900" : "text-brand-700",
                      )}
                    />
                  </a>
                ) : (
                  <div
                    className={cn(
                      "relative mt-7 grid grid-cols-2 gap-4 rounded-2xl p-5",
                      isHighlight
                        ? "bg-white/10 ring-1 ring-white/15 backdrop-blur-sm"
                        : "bg-slate-50 ring-1 ring-slate-100",
                    )}
                  >
                    <div>
                      <p
                        className={cn(
                          "text-[10px] font-bold tracking-[0.15em] uppercase",
                          isHighlight ? "text-white/60" : "text-slate-500",
                        )}
                      >
                        수강료
                      </p>
                      <p
                        className={cn(
                          "mt-1.5 text-lg font-extrabold tracking-tight leading-tight",
                          isHighlight ? "text-accent-300" : "text-brand-700",
                        )}
                      >
                        {course.priceLabel}
                      </p>
                    </div>
                    <div>
                      <p
                        className={cn(
                          "text-[10px] font-bold tracking-[0.15em] uppercase",
                          isHighlight ? "text-white/60" : "text-slate-500",
                        )}
                      >
                        교육 기간
                      </p>
                      <p
                        className={cn(
                          "mt-1.5 flex items-center gap-1.5 text-sm font-extrabold leading-tight",
                          isHighlight ? "text-white" : "text-slate-900",
                        )}
                      >
                        <Clock className="h-3.5 w-3.5" />
                        {course.duration}
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-7">
                  <Link
                    href={`/courses/#${course.slug}`}
                    className={cn(
                      "relative inline-flex w-full items-center justify-between rounded-xl px-5 py-3.5 text-sm font-extrabold tracking-tight transition-all duration-300",
                      isHighlight
                        ? "bg-accent-400 text-brand-900 shadow-soft hover:bg-accent-300 hover:shadow-card"
                        : "bg-slate-900 text-white shadow-soft hover:bg-brand-700 hover:shadow-card",
                    )}
                  >
                    과정 자세히 보기
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-slate-500">
          <Users className="h-4 w-4 text-brand-600" />
          <span>
            소수정예 운영 · 자세한 일정은{" "}
            <a
              href={`tel:${siteConfig.contact.phoneDigits}`}
              className="font-bold text-brand-700 hover:underline"
            >
              {siteConfig.contact.phone}
            </a>{" "}
            로 문의 주세요
          </span>
        </div>
      </div>
    </section>
  );
}
