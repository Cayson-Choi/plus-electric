import { BookOpen, Trophy, Users, Wallet, type LucideIcon } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Users,
  Wallet,
  Trophy,
};

export function Features() {
  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-600 uppercase">
              Why Plus Electric
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              왜 플러스 전기학원을
              <br />
              선택해야 할까요?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              자격증 합격은 전략입니다. 플러스 전기학원은 수강생 한 분 한 분의
              상황에 맞춰, 가장 빠르고 확실한 합격 루트를 함께 설계합니다.
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-brand-50 to-blue-50 p-6 ring-1 ring-brand-100">
              <p className="text-xs font-bold tracking-wider text-brand-700 uppercase">
                Plus Promise
              </p>
              <p className="mt-2 text-lg leading-snug font-bold text-slate-900">
                &ldquo;합격이 끝이 아니라, 합격까지 책임지는 학원입니다.&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {siteConfig.features.map((feature, idx) => {
                const Icon = iconMap[feature.icon];
                return (
                  <div
                    key={feature.title}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-brand-300 hover:shadow-card"
                  >
                    <span className="absolute top-5 right-5 text-5xl font-black text-slate-100 transition-colors group-hover:text-brand-50">
                      0{idx + 1}
                    </span>
                    <div className="relative grid h-11 w-11 place-items-center rounded-xl bg-brand-600 text-white shadow-soft">
                      {Icon && <Icon className="h-5 w-5" />}
                    </div>
                    <h3 className="relative mt-5 text-base font-extrabold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
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
