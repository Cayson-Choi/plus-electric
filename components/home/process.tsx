import { ArrowRight, ClipboardCheck, GraduationCap, MessageSquare, Trophy } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    label: "Step 01",
    title: "상담 신청",
    description:
      "전화 또는 온라인 문의로 상담을 신청하세요. 자격 요건과 일정을 빠르게 안내해드립니다.",
  },
  {
    icon: ClipboardCheck,
    label: "Step 02",
    title: "과정 등록",
    description:
      "내일배움카드 활용 가능 여부를 함께 확인하고, 맞춤 과정으로 등록을 진행합니다.",
  },
  {
    icon: GraduationCap,
    label: "Step 03",
    title: "체계적 학습",
    description:
      "필기·실기 통합 커리큘럼과 1:1 코칭으로 약점을 빠르게 메워 합격 루트를 완성합니다.",
  },
  {
    icon: Trophy,
    label: "Step 04",
    title: "자격증 합격",
    description:
      "모의시험으로 실전 감각을 끌어올린 후 시험에 응시. 합격까지 끝까지 함께합니다.",
  },
];

export function Process() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div
        className="absolute inset-x-0 top-0 -z-0 h-px divider-fade"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-brand-700 uppercase ring-1 ring-brand-100">
            How It Works
          </span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-[44px] md:leading-[1.1]">
            합격까지 단 <span className="text-brand-700">4단계</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            복잡할 것 없습니다. 한 통의 전화로 시작해, 합격까지 함께 갑니다.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-7 left-[12.5%] right-[12.5%] hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block"
          />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;
            return (
              <li
                key={step.title}
                className="group relative flex flex-col rounded-3xl bg-white p-6 shadow-card ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:ring-brand-200 hover:shadow-elevate sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                    <span className="absolute -top-1.5 -right-1.5 grid h-6 w-6 place-items-center rounded-full bg-accent-400 text-[11px] font-extrabold text-brand-900 shadow-soft ring-2 ring-white">
                      {idx + 1}
                    </span>
                  </div>
                  {!isLast && (
                    <ArrowRight
                      className="hidden h-5 w-5 text-slate-300 transition-colors duration-300 group-hover:text-brand-400 lg:block"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <p className="mt-6 text-[10px] font-bold tracking-[0.22em] text-brand-600 uppercase">
                  {step.label}
                </p>
                <h3 className="mt-1.5 text-lg font-extrabold tracking-tight text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
