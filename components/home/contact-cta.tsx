import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-20">
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-900 via-slate-950 to-slate-950"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-brand-600/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent-400/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
            </span>
            지금 바로 상담 가능
          </span>

          <h2 className="mt-6 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            합격까지 한 걸음 더,
            <br />
            <span className="bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">
              플러스 전기학원
            </span>
            과 함께하세요.
          </h2>
          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-white/80">
            과정 안내, 수강 상담, 내일배움카드 활용 방법까지 친절하게
            안내해드립니다.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
            <Button
              href={`tel:${siteConfig.contact.phoneDigits}`}
              variant="accent"
              size="lg"
            >
              <Phone className="h-5 w-5" />
              {siteConfig.contact.phone}
            </Button>
            <Button href="/contact/" variant="outline" size="lg">
              <MessageCircle className="h-5 w-5" />
              온라인 문의
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <p className="mt-7 text-xs text-white/50">
            {siteConfig.contact.hours}
          </p>
        </div>
      </div>
    </section>
  );
}
