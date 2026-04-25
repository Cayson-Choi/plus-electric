import Link from "next/link";
import {
  ArrowUpRight,
  CreditCard,
  GraduationCap,
  MapPin,
  Phone,
  Zap,
} from "lucide-react";

const items = [
  {
    title: "전기기능사 과정",
    description: "기초부터 실기까지 한 번에",
    href: "/courses/#electrician",
    icon: Zap,
    color: "from-blue-500 to-brand-700",
  },
  {
    title: "전기기사 국비지원",
    description: "내일배움카드 사용 가능",
    href: "/courses/#electric-engineer",
    icon: CreditCard,
    color: "from-accent-400 to-accent-600",
    accent: true,
  },
  {
    title: "수강 안내",
    description: "전체 과정 한눈에 보기",
    href: "/courses/",
    icon: GraduationCap,
    color: "from-emerald-500 to-emerald-700",
  },
  {
    title: "오시는 길",
    description: "대전 유성구 대정로",
    href: "/location/",
    icon: MapPin,
    color: "from-rose-500 to-rose-700",
  },
  {
    title: "상담 문의",
    description: "전화 010-9937-9510",
    href: "/contact/",
    icon: Phone,
    color: "from-slate-700 to-slate-900",
  },
];

export function QuickLinks() {
  return (
    <section className="relative bg-white">
      <div className="container-x py-14 md:py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-brand-600 uppercase">
              Quick Menu
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              가장 자주 찾는 메뉴
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift"
              >
                <div
                  className={`mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-soft`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-[15px] font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  {item.description}
                </p>
                <ArrowUpRight className="absolute top-5 right-5 h-4 w-4 text-slate-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600" />
                {item.accent && (
                  <span className="absolute -top-1 -right-1 rounded-full bg-accent-400 px-2 py-0.5 text-[10px] font-extrabold tracking-wide text-brand-900 shadow-soft">
                    NEW
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
