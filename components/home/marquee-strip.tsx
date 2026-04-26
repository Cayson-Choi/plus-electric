import {
  Award,
  CreditCard,
  GraduationCap,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

type ColorTone = "blue" | "amber" | "emerald" | "rose" | "violet";

const items: { icon: LucideIcon; text: string; color: ColorTone }[] = [
  { icon: ShieldCheck, text: "고용노동부 지정 직업능력개발 훈련기관", color: "blue" },
  { icon: CreditCard, text: "내일배움카드 사용 가능", color: "amber" },
  { icon: GraduationCap, text: "전기기능사 / 전기기사 국비지원 과정 운영", color: "emerald" },
  { icon: Users, text: "1:1 합격 코칭 · 소수정예 운영", color: "rose" },
  { icon: Award, text: "합격까지 책임지는 사후 케어", color: "violet" },
];

const colorClasses: Record<ColorTone, string> = {
  blue: "bg-brand-50 text-brand-700",
  amber: "bg-amber-100 text-amber-700",
  emerald: "bg-emerald-50 text-emerald-700",
  rose: "bg-rose-50 text-rose-700",
  violet: "bg-violet-50 text-violet-700",
};

export function MarqueeStrip() {
  // 두 번 반복해서 끊김 없이 무한 스크롤
  const looped = [...items, ...items];

  return (
    <section
      aria-label="학원 안내 정보"
      className="relative overflow-hidden border-y border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50"
    >
      {/* 좌우 페이드 마스크 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-32"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-32"
      />

      <div className="animate-marquee flex items-center gap-10 py-3 md:gap-14">
        {looped.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex shrink-0 items-center gap-3 whitespace-nowrap"
              aria-hidden={idx >= items.length}
            >
              <span
                className={`grid h-10 w-10 place-items-center rounded-full ${colorClasses[item.color]}`}
              >
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="text-base font-bold tracking-tight text-slate-800 md:text-[17px]">
                {item.text}
              </span>
              <span
                aria-hidden="true"
                className="ml-10 h-1 w-1 rounded-full bg-slate-300 md:ml-14"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
