import { ArrowRight, Clock, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section className="relative overflow-hidden py-14 text-white md:py-20">
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-slate-950"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-grid opacity-15"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-brand-500/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-brand-400/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-1/4 h-1/2 bg-gradient-to-b from-transparent via-slate-950/30 to-transparent"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-300 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
              </span>
              지금 바로 상담 가능
            </span>

            <h2 className="mt-7 text-balance text-4xl leading-[1.15] font-extrabold tracking-tight sm:text-5xl sm:leading-[1.1] lg:text-[60px] lg:leading-[1.1]">
              합격까지 한 걸음 더,
              <br />
              <span className="text-accent-300">플러스 전기학원</span>
              과 함께하세요
            </h2>
            <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/85 sm:text-lg">
              과정 안내, 수강 상담, 내일배움카드 활용 방법까지 친절하게
              안내해드립니다
            </p>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <Button
                href={`tel:${siteConfig.contact.phoneDigits}`}
                variant="accent"
                size="lg"
                className="animate-pulse-soft min-w-[16rem] sm:min-w-[18rem]"
              >
                <Phone className="h-5 w-5" />
                {siteConfig.contact.phone}
              </Button>
              <Button
                href="/contact/"
                variant="outline"
                size="lg"
                className="min-w-[12rem]"
              >
                <MessageCircle className="h-5 w-5" />
                온라인 문의
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3 sm:gap-4">
            <InfoCard
              icon={<Clock className="h-4 w-4" />}
              label="운영 시간"
              value={siteConfig.contact.hours}
            />
            <InfoCard
              icon={<MapPin className="h-4 w-4" />}
              label="위치"
              value={siteConfig.contact.addressShort}
            />
            <InfoCard
              icon={<Sparkles className="h-4 w-4" />}
              label="지원 가능"
              value="내일배움카드 사용 가능"
              accent
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  label,
  value,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10 backdrop-blur-sm">
      <span
        className={
          accent
            ? "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent-400 text-brand-900"
            : "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/15 text-accent-300 ring-1 ring-white/10"
        }
      >
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[10px] font-bold tracking-[0.18em] text-white/60 uppercase">
          {label}
        </p>
        <p className="mt-0.5 truncate text-sm font-bold text-white">{value}</p>
      </div>
    </div>
  );
}
