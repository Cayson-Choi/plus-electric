import Link from "next/link";
import {
  ArrowUpRight,
  CreditCard,
  GraduationCap,
  MapPin,
  Monitor,
  Phone,
  Zap,
} from "lucide-react";

type QuickLinkItem = {
  title: string;
  description: string;
  href: string;
  icon: typeof Zap;
  gradient: string;
  accent?: boolean;
  hot?: boolean;
  external?: boolean;
};

const items: QuickLinkItem[] = [
  {
    title: "전기기능사 과정",
    description: "기초부터 실기까지",
    href: "/courses/#electrician",
    icon: Zap,
    gradient: "from-blue-500 to-brand-700",
  },
  {
    title: "전기기사 국비지원",
    description: "내일배움카드 가능",
    href: "/courses/#electric-engineer",
    icon: CreditCard,
    gradient: "from-accent-400 to-accent-600",
    accent: true,
  },
  {
    title: "CBT 모의고사",
    description: "온라인 시험 체험",
    href: "https://www.mycbt.xyz",
    icon: Monitor,
    gradient: "from-violet-500 to-purple-700",
    external: true,
    hot: true,
  },
  {
    title: "수강 안내",
    description: "전체 과정 한눈에",
    href: "/courses/",
    icon: GraduationCap,
    gradient: "from-emerald-500 to-emerald-700",
  },
  {
    title: "오시는 길",
    description: "대전 동구 동서대로",
    href: "/location/",
    icon: MapPin,
    gradient: "from-rose-500 to-rose-700",
  },
  {
    title: "상담 문의",
    description: "010-9937-9510",
    href: "/contact/",
    icon: Phone,
    gradient: "from-slate-700 to-slate-900",
  },
];

export function QuickLinks() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-slate-50/60 to-white">
      <div className="container-x py-10 md:py-14">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-brand-700 uppercase ring-1 ring-brand-100">
              Quick Menu
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              가장 자주 찾는 메뉴
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {items.map((item) => {
            const Icon = item.icon;
            const cardInner = (
              <>
                <div
                  className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-brand-50 opacity-0 transition-opacity duration-500 group-hover:opacity-70"
                  aria-hidden="true"
                />
                <div
                  className={`relative mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-soft transition-transform duration-300 group-hover:scale-105`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <h3 className="relative text-[15px] font-extrabold tracking-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="relative mt-1 text-xs leading-relaxed text-slate-500">
                  {item.description}
                </p>
                <ArrowUpRight className="absolute top-5 right-5 h-4 w-4 text-slate-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600" />
              </>
            );
            const cardClassName =
              "group relative block h-full overflow-hidden rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-elevate hover:ring-brand-300";
            return (
              <div key={item.title} className="relative">
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClassName}
                  >
                    {cardInner}
                  </a>
                ) : (
                  <Link href={item.href} className={cardClassName}>
                    {cardInner}
                  </Link>
                )}
                {item.accent && (
                  <span className="animate-plus-wobble pointer-events-none absolute -top-2 -right-2 z-10 rounded-full bg-accent-400 px-2 py-0.5 text-[10px] font-extrabold tracking-wide text-brand-900 shadow-soft ring-2 ring-white">
                    NEW
                  </span>
                )}
                {item.hot && (
                  <span className="animate-plus-wobble pointer-events-none absolute -top-2 -right-2 z-10 rounded-full bg-rose-500 px-2 py-0.5 text-[10px] font-extrabold tracking-wide text-white shadow-soft ring-2 ring-white">
                    HOT
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
