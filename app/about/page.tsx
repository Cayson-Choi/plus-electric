import type { Metadata } from "next";
import { Award, BookOpen, HeartHandshake, Target } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = {
  title: "학원 소개",
  description:
    "플러스 전기학원은 대전 동구에 위치한 전기 자격증 전문 교육기관입니다 풍부한 현장 경험을 갖춘 강사진과 체계적인 커리큘럼으로 합격을 책임집니다",
};

const values = [
  {
    icon: Target,
    title: "확실한 합격",
    description:
      "단계별 커리큘럼과 반복 학습으로 누구나 합격할 수 있는 환경을 만듭니다",
  },
  {
    icon: HeartHandshake,
    title: "1:1 맞춤 지도",
    description:
      "수강생 한 분 한 분의 학습 속도와 약점에 맞춘 1:1 피드백으로 실력을 다집니다",
  },
  {
    icon: BookOpen,
    title: "현장 중심 교육",
    description:
      "이론에 그치지 않고 실무까지 적용 가능한 살아있는 교육을 제공합니다",
  },
  {
    icon: Award,
    title: "투명한 운영",
    description:
      "수강료, 일정, 환급 절차까지 모든 정보를 투명하게 공개합니다",
  },
];

const facilities = [
  {
    src: "/images/2.jpg",
    title: "학원 입구",
    caption: "수강생을 맞이하는 학원 정문",
    width: 1504,
    height: 2000,
    // 노출 과다 (흰 벽이 날아감) — 톤 다운 필터
    filter:
      "brightness-[0.92] saturate-105 contrast-[1.08]",
  },
  {
    src: "/images/4.jpg",
    title: "로비 공간",
    caption: "자연 채광이 들어오는 휴게·안내 공간",
    width: 4000,
    height: 3000,
  },
  {
    src: "/images/5.jpg",
    title: "전기 실습 패널",
    caption: "현장 실무 수준의 배선 실습 보드",
    width: 4000,
    height: 3000,
  },
  {
    src: "/images/3.jpg",
    title: "이론 강의실",
    caption: "체계적인 필기 강의가 진행되는 강의실",
    width: 4000,
    height: 3000,
  },
  {
    src: "/images/6.jpg",
    title: "실습 작업실",
    caption: "공구·기자재가 갖춰진 전용 실습 공간",
    width: 4000,
    height: 3000,
  },
];

const DEFAULT_IMAGE_FILTER =
  "brightness-110 saturate-110 contrast-[1.03]";

const milestones = [
  {
    label: "합격까지의 약속",
    title: "이해 → 반복 → 합격",
    description:
      "기본 개념을 단단히 이해한 뒤, 충분한 반복 학습을 통해 시험에서의 실수를 최소화합니다",
  },
  {
    label: "실무 연계",
    title: "자격증 그 이상",
    description:
      "단순 합격을 넘어 현장에서 바로 쓸 수 있는 실무 능력까지 함께 다집니다",
  },
  {
    label: "꾸준한 케어",
    title: "합격 그 후에도",
    description:
      "취업 / 추가 자격증 / 실무 적응까지, 합격 이후의 진로도 함께 고민합니다",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="플러스 전기학원을 소개합니다"
        description="대전 동구 전기 자격증 전문 교육기관, 합격까지 책임집니다"
        breadcrumbs={[{ label: "학원 소개" }]}
        variant="about"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <p className="text-xs font-bold tracking-[0.2em] text-brand-600 uppercase">
                  Greetings
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  더하는 학원,
                  <br />
                  플러스 전기학원입니다
                </h2>

                <div className="relative mt-7 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-white shadow-card ring-1 ring-slate-200/80">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/together.png"
                    alt="플러스 전기학원 강사진"
                    draggable={false}
                    className="block h-auto w-full select-none"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-slate-900/5"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-slate-700 lg:col-span-7">
              <p>
                안녕하세요 플러스 전기학원입니다 저희 학원은 대전 동구
                동서대로에 위치한 전기 자격증 전문 교육기관으로, 전기기능사부터
                전기기사 국비지원 과정까지 폭넓은 교육을 제공합니다
              </p>
              <p>
                <strong className="font-bold text-slate-900">
                  &ldquo;합격까지 한 걸음 더 가까이&rdquo;
                </strong>{" "}
                — 단순히 자격증 한 장을 따는 것이 아니라, 시험 이후의 현장과
                커리어까지 든든하게 받쳐드리는 것이 플러스 전기학원의 약속입니다
              </p>
              <p>
                현장에서 잔뼈가 굵은 강사진이 직접 지도하며, 수강생 한 분 한
                분의 학습 속도에 맞춰 1:1 피드백을 제공합니다 또한 전기기사
                국비지원 과정은 내일배움카드를 활용하여 부담을 줄이고 합격에만
                집중하실 수 있도록 돕고 있습니다
              </p>
              <p>
                전기를 처음 시작하는 분, 자격증으로 커리어를 한 단계 끌어올리고
                싶은 재직자, 취업 준비생까지 — 누구나 자신의 페이스로 합격할 수
                있는 환경을 만들기 위해 오늘도 한 걸음 더 노력하겠습니다
              </p>
              <p className="pt-2 font-bold text-slate-900">
                감사합니다
                <br />
                <span className="text-brand-700">— 플러스 전기학원 일동</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-600 uppercase">
              Our Space
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              학원 공간 둘러보기
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              이론 강의실부터 전기 실습 작업실까지, 합격을 위한 모든 환경이
              한 자리에 마련되어 있습니다
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
            {[facilities[0], facilities[1], facilities[2]].map((item, idx) => (
              <figure
                key={item.src}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-slate-200/80 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-elevate md:col-span-4"
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-slate-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    draggable={false}
                    loading={idx === 0 ? "eager" : "lazy"}
                    decoding="async"
                    {...(idx === 0 ? { fetchPriority: "high" as const } : {})}
                    style={{ imageRendering: "auto" }}
                    className={`block h-full w-full select-none object-cover [will-change:transform] ${item.filter ?? DEFAULT_IMAGE_FILTER} transition-transform duration-700 group-hover:scale-[1.04]`}
                  />
                </div>
                <figcaption className="border-t border-slate-100 bg-white px-5 py-4">
                  <h3 className="text-base font-extrabold tracking-tight text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-600">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            ))}

            {[facilities[3], facilities[4]].map((item) => (
              <figure
                key={item.src}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-slate-200/80 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-elevate md:col-span-6"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-slate-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                    style={{ imageRendering: "auto" }}
                    className={`block h-full w-full select-none object-cover [will-change:transform] ${item.filter ?? DEFAULT_IMAGE_FILTER} transition-transform duration-700 group-hover:scale-[1.04]`}
                  />
                </div>
                <figcaption className="border-t border-slate-100 bg-white px-6 py-5">
                  <h3 className="text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-600 uppercase">
              Our Values
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              플러스가 지키는 가치
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:ring-brand-300 hover:shadow-elevate"
                >
                  <span className="absolute top-5 right-6 text-5xl font-black tracking-tight text-slate-200 transition-colors duration-300 group-hover:text-brand-200">
                    0{idx + 1}
                  </span>
                  <div className="relative grid h-11 w-11 place-items-center rounded-xl bg-brand-600 text-white shadow-soft">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="relative mt-5 text-base font-extrabold text-slate-900">
                    {value.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-600 uppercase">
              Our Approach
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              합격을 만드는 학습 단계
            </h2>
          </div>

          <ol className="mt-12 grid gap-5 md:grid-cols-3 md:gap-7">
            {milestones.map((m, idx) => (
              <li
                key={m.title}
                className="group relative rounded-3xl bg-gradient-to-b from-brand-50 to-white p-7 shadow-card ring-1 ring-brand-200/60 transition-all duration-300 hover:-translate-y-1 hover:ring-brand-300 hover:shadow-elevate"
              >
                <span className="text-xs font-bold tracking-wider text-brand-600">
                  STEP {idx + 1}
                </span>
                <p className="mt-1 text-[13px] font-bold tracking-wide text-slate-500 uppercase">
                  {m.label}
                </p>
                <h3 className="mt-4 text-xl font-extrabold tracking-tight text-slate-900">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {m.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

    </>
  );
}
