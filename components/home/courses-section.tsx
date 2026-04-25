import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, GraduationCap } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function CoursesSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-600 uppercase">
            Our Courses
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            지금 모집 중인 교육 과정
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            전기 자격증, 어떤 과정을 선택하시든 합격까지 책임집니다.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-7 lg:gap-8">
          {siteConfig.courses.map((course) => (
            <article
              key={course.slug}
              className={cn(
                "group relative overflow-hidden rounded-3xl bg-white p-7 ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-9",
                course.highlight
                  ? "ring-2 ring-brand-600"
                  : "ring-slate-200 hover:ring-brand-300",
              )}
            >
              {course.highlight && (
                <span className="absolute top-6 right-6 inline-flex items-center gap-1 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-extrabold tracking-wide text-white uppercase shadow-soft">
                  추천 과정
                </span>
              )}

              <div
                className={cn(
                  "grid h-12 w-12 place-items-center rounded-2xl",
                  course.highlight
                    ? "bg-brand-600 text-white"
                    : "bg-brand-50 text-brand-700",
                )}
              >
                <GraduationCap className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-900">
                {course.name}
              </h3>
              <p className="mt-2 text-sm font-semibold text-brand-700">
                {course.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {course.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {course.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-slate-50 p-4">
                <div>
                  <p className="text-[11px] tracking-wide text-slate-500 uppercase">
                    수강료
                  </p>
                  <p
                    className={cn(
                      "mt-1 text-lg font-extrabold tracking-tight",
                      course.highlight ? "text-brand-700" : "text-slate-900",
                    )}
                  >
                    {course.priceLabel}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] tracking-wide text-slate-500 uppercase">
                    기간
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-sm font-bold text-slate-900">
                    <Clock className="h-3.5 w-3.5" />
                    {course.duration}
                  </p>
                </div>
              </div>

              <Link
                href={`/courses/#${course.slug}`}
                className={cn(
                  "mt-7 inline-flex w-full items-center justify-between rounded-xl px-5 py-3.5 text-sm font-bold transition-colors",
                  course.highlight
                    ? "bg-brand-600 text-white hover:bg-brand-700"
                    : "bg-slate-900 text-white hover:bg-slate-800",
                )}
              >
                자세히 보기
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
