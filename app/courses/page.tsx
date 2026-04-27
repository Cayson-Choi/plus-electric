import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  CreditCard,
  GraduationCap,
  Phone,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "교육 과정",
  description:
    "전기기능사 과정과 전기기사 국비지원 과정을 운영하고 있습니다 내일배움카드 사용이 가능한 국비지원 과정으로 부담 없이 자격증을 준비하세요",
};

const curriculums: Record<string, string[]> = {
  electrician: [
    "전기 기초 이론 및 회로 분석",
    "전기기기 / 전력공학 핵심 개념",
    "전기설비 기술기준 및 안전 관리",
    "필기 모의시험 및 약점 보완",
    "실기 도면 분석 및 작업 훈련",
    "현장형 실습으로 자신감 완성",
  ],
  "electric-engineer": [
    "전기자기학 / 전력공학 심화",
    "전기기기 / 회로 / 제어공학 통합",
    "전기설비 기술기준 / 판단기준 정리",
    "기출 분석 및 출제 경향 분석",
    "실기 단답·계산·도면 종합 훈련",
    "내일배움카드 활용 / 자격 요건 무료 상담",
  ],
};

const benefits = [
  {
    icon: Wallet,
    title: "내일배움카드 활용",
    description: "전기기사 국비지원 과정은 내일배움카드 사용이 가능합니다",
  },
  {
    icon: Users,
    title: "소수정예 운영",
    description: "한 분 한 분에게 집중할 수 있도록 인원 제한으로 운영합니다",
  },
  {
    icon: Sparkles,
    title: "1:1 합격 코칭",
    description: "약점에 맞춘 개별 피드백으로 합격까지 함께합니다",
  },
];

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Courses"
        title="합격을 위한 교육 과정"
        description="전기기능사부터 전기기사 국비지원 과정까지, 목표에 맞는 과정을 선택하세요"
        breadcrumbs={[{ label: "교육 과정" }]}
        variant="courses"
      />

      <section className="bg-white pt-10 pb-4 md:pt-14 md:pb-6">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-3">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="group flex items-start gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-0.5 hover:ring-brand-300 hover:shadow-elevate"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-600 text-white shadow-soft">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900">
                      {b.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      {b.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {siteConfig.courses.map((course, idx) => {
        const reverse = idx % 2 === 1;
        return (
          <section
            key={course.slug}
            id={course.slug}
            className={cn(
              "scroll-mt-24 py-10 md:py-14",
              reverse ? "bg-slate-50" : "bg-white",
            )}
          >
            <div className="container-x">
              <div className="mx-auto max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  {course.highlight && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-400 px-3 py-1 text-[11px] font-extrabold tracking-wide text-brand-900 uppercase">
                      <CreditCard className="h-3.5 w-3.5" />
                      추천 과정
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold tracking-wide text-brand-700">
                    <GraduationCap className="h-3.5 w-3.5" />
                    {course.target}
                  </span>
                </div>

                <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  {course.name}
                </h2>
                <p className="mt-3 text-lg font-bold text-brand-700">
                  {course.tagline}
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  {course.description}
                </p>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-slate-200/80 sm:p-9">
                    <h3 className="text-base font-extrabold tracking-tight text-slate-900">
                      커리큘럼 구성
                    </h3>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {curriculums[course.slug]?.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="mt-9 text-base font-extrabold tracking-tight text-slate-900">
                      과정 특징
                    </h3>
                    <ul className="mt-5 space-y-2.5">
                      {course.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="sticky top-24 rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 p-7 text-white shadow-lift sm:p-9">
                    <p className="text-xs font-bold tracking-[0.2em] text-accent-300 uppercase">
                      Enrollment
                    </p>
                    <h3 className="mt-3 text-2xl font-extrabold leading-tight">
                      수강 안내
                    </h3>

                    <dl className="mt-7 space-y-4 text-sm">
                      <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3">
                        <dt className="text-white/70">수강료</dt>
                        <dd className="text-right text-base font-extrabold text-accent-300">
                          {course.priceLabel}
                        </dd>
                      </div>
                      <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3">
                        <dt className="text-white/70">대상</dt>
                        <dd className="text-right font-bold">
                          {course.target}
                        </dd>
                      </div>
                      <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3">
                        <dt className="text-white/70">기간</dt>
                        <dd className="flex items-center gap-1 text-right font-bold">
                          <Clock className="h-3.5 w-3.5" />
                          {course.duration}
                        </dd>
                      </div>
                      <div className="flex items-start justify-between gap-3">
                        <dt className="text-white/70">일정</dt>
                        <dd className="text-right font-bold">
                          {course.schedule}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-7 space-y-3">
                      <Button
                        href={`tel:${siteConfig.contact.phoneDigits}`}
                        variant="accent"
                        size="lg"
                        fullWidth
                      >
                        <Phone className="h-5 w-5" />
                        {siteConfig.contact.phone}
                      </Button>
                      <Button
                        href="/contact/"
                        variant="outline"
                        size="lg"
                        fullWidth
                      >
                        온라인 문의
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>

                    {course.highlight && (
                      <p className="mt-5 rounded-xl bg-white/10 p-3.5 text-xs leading-relaxed text-white/85">
                        💡 내일배움카드 신청 / 자격 요건 / 환급 절차까지 무료로
                        상담해드립니다
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

    </>
  );
}
