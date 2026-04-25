import type { Metadata } from "next";
import { Award, BookOpen, Compass, HeartHandshake, Target } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { ContactCta } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "학원 소개",
  description:
    "플러스 전기학원은 대전 유성구에 위치한 전기 자격증 전문 교육기관입니다. 풍부한 현장 경험을 갖춘 강사진과 체계적인 커리큘럼으로 합격을 책임집니다.",
};

const values = [
  {
    icon: Target,
    title: "확실한 합격",
    description:
      "단계별 커리큘럼과 반복 학습으로 누구나 합격할 수 있는 환경을 만듭니다.",
  },
  {
    icon: HeartHandshake,
    title: "1:1 맞춤 지도",
    description:
      "수강생 한 분 한 분의 학습 속도와 약점에 맞춘 1:1 피드백으로 실력을 다집니다.",
  },
  {
    icon: BookOpen,
    title: "현장 중심 교육",
    description:
      "이론에 그치지 않고 실무까지 적용 가능한 살아있는 교육을 제공합니다.",
  },
  {
    icon: Award,
    title: "투명한 운영",
    description:
      "수강료, 일정, 환급 절차까지 모든 정보를 투명하게 공개합니다.",
  },
];

const milestones = [
  {
    label: "합격까지의 약속",
    title: "이해 → 반복 → 합격",
    description:
      "기본 개념을 단단히 이해한 뒤, 충분한 반복 학습을 통해 시험에서의 실수를 최소화합니다.",
  },
  {
    label: "실무 연계",
    title: "자격증 그 이상",
    description:
      "단순 합격을 넘어 현장에서 바로 쓸 수 있는 실무 능력까지 함께 다집니다.",
  },
  {
    label: "꾸준한 케어",
    title: "합격 그 후에도",
    description:
      "취업 / 추가 자격증 / 실무 적응까지, 합격 이후의 진로도 함께 고민합니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="플러스 전기학원을 소개합니다"
        description="대전 유성구 전기 자격증 전문 교육기관, 합격까지 책임집니다."
        breadcrumbs={[{ label: "학원 소개" }]}
        variant="about"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <p className="text-xs font-bold tracking-[0.2em] text-brand-600 uppercase">
                  Greetings
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  더하는 학원,
                  <br />
                  플러스 전기학원입니다.
                </h2>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-bold text-brand-700">
                  <Compass className="h-3.5 w-3.5" />
                  대전 유성구 · 전기 자격증 전문
                </div>
              </div>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-slate-700 lg:col-span-7">
              <p>
                안녕하세요. 플러스 전기학원입니다. 저희 학원은 대전 유성구
                대정로에 위치한 전기 자격증 전문 교육기관으로, 전기기능사부터
                전기기사 국비지원 과정까지 폭넓은 교육을 제공합니다.
              </p>
              <p>
                <strong className="font-bold text-slate-900">
                  &ldquo;합격까지 한 걸음 더 가까이&rdquo;
                </strong>{" "}
                — 단순히 자격증 한 장을 따는 것이 아니라, 시험 이후의 현장과
                커리어까지 든든하게 받쳐드리는 것이 플러스 전기학원의 약속입니다.
              </p>
              <p>
                현장에서 잔뼈가 굵은 강사진이 직접 지도하며, 수강생 한 분 한
                분의 학습 속도에 맞춰 1:1 피드백을 제공합니다. 또한 전기기사
                국비지원 과정은 내일배움카드를 활용하여 부담을 줄이고 합격에만
                집중하실 수 있도록 돕고 있습니다.
              </p>
              <p>
                전기를 처음 시작하는 분, 자격증으로 커리어를 한 단계 끌어올리고
                싶은 재직자, 취업 준비생까지 — 누구나 자신의 페이스로 합격할 수
                있는 환경을 만들기 위해 오늘도 한 걸음 더 노력하겠습니다.
              </p>
              <p className="pt-2 font-bold text-slate-900">
                감사합니다.
                <br />
                <span className="text-brand-700">— 플러스 전기학원 일동</span>
              </p>
            </div>
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
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-card"
                >
                  <span className="absolute top-5 right-6 text-4xl font-black text-slate-100 transition-colors group-hover:text-brand-50">
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
                className="relative rounded-3xl bg-gradient-to-b from-brand-50 to-white p-7 ring-1 ring-brand-100"
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

      <ContactCta />
    </>
  );
}
