import {
  BookOpen,
  Quote,
  Sparkles,
  Trophy,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Users,
  Wallet,
  Trophy,
};

function EmphasizedChar({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span
      className="animate-emphasis-sway inline-block"
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </span>
  );
}

export function Features() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-brand-700 uppercase ring-1 ring-brand-100">
              <Sparkles className="h-3 w-3" />
              Why Plus Electric
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.005em] text-slate-900 sm:text-4xl md:text-[44px] md:leading-[1.25]">
              <span className="inline-block">
                왜 <span className="text-brand-700">플러스 전기학원</span>을
              </span>
              <br />
              <span className="inline-block">선택해야 할까요?</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              자격증 합격은 결국 전략입니다 한 분 한 분의 출발점에 맞춰 가장
              빠르고 확실한 합격 루트를 함께 설계하고, 합격까지 곁에서
              책임집니다
            </p>

            <div className="mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 p-7 text-white shadow-elevate">
              <div className="relative">
                <div
                  className="absolute -top-2 -left-1 text-accent-300/30"
                  aria-hidden="true"
                >
                  <Quote className="h-12 w-12" />
                </div>
                <p className="relative pl-9 text-[11px] font-bold tracking-[0.2em] text-accent-300 uppercase">
                  Plus Promise
                </p>
                <p className="relative mt-3 pl-9 text-xl leading-snug font-extrabold tracking-tight text-white">
                  &ldquo;가르치는 학원이 아니라,
                  <br />
                  <span className="text-accent-300">
                    <EmphasizedChar>합</EmphasizedChar>
                    <EmphasizedChar delay={0.18}>격</EmphasizedChar>
                  </span>
                  시키는 학원입니다&rdquo;
                </p>
              </div>
              <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 ring-1 ring-white/20">
                  <Trophy className="h-5 w-5 text-accent-300" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    {siteConfig.name}
                  </p>
                  <p className="text-xs text-white/60">
                    {siteConfig.contact.region} 전기 자격증 전문
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {siteConfig.features.map((feature, idx) => {
                const Icon = iconMap[feature.icon];
                return (
                  <div
                    key={feature.title}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-7 shadow-card ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:ring-brand-300 hover:shadow-elevate"
                  >
                    <div
                      className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-gradient-to-tr from-brand-50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute top-5 right-6 text-6xl font-black tracking-tight text-slate-200 transition-colors duration-300 group-hover:text-brand-200"
                      aria-hidden="true"
                    >
                      0{idx + 1}
                    </span>

                    <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
                      {Icon && <Icon className="h-5.5 w-5.5" strokeWidth={2.2} />}
                    </div>

                    <h3 className="relative mt-5 text-lg font-extrabold tracking-tight text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-slate-600">
                      {feature.description}
                    </p>

                    <span
                      className="relative mt-auto pt-5 text-[11px] font-bold tracking-[0.2em] text-brand-600 uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    >
                      ━ Plus Difference
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
