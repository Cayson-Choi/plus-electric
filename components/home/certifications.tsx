import { ArrowUpRight, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Certifications() {
  return (
    <section className="relative overflow-hidden bg-mesh-brand py-20 text-white md:py-28">
      <div
        className="absolute inset-0 bg-grid opacity-15"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-brand-400/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-accent-300 uppercase ring-1 ring-white/15 backdrop-blur">
            Certification Info
          </span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-[44px] md:leading-[1.1]">
            한국산업인력공단{" "}
            <span className="bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">
              공식 자료
            </span>{" "}
            바로가기
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80">
            자격증 정보 · 원서 접수 · 합격자 발표까지, Q-Net 공식 페이지로
            <br className="hidden sm:inline" />
            한 번에 이동할 수 있도록 정리했습니다.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {siteConfig.certifications.map((item, idx) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/[0.08] p-6 shadow-soft ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.16] hover:ring-accent-300/50 hover:shadow-elevate"
            >
              <div
                className="absolute inset-0 -z-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative flex items-center justify-between">
                <span className="text-[11px] font-extrabold tracking-[0.2em] text-accent-300">
                  0{idx + 1}
                </span>
                <ExternalLink className="h-3.5 w-3.5 text-white/40" />
              </div>

              <h3 className="relative mt-5 text-lg font-extrabold leading-tight tracking-tight text-white">
                {item.title}
              </h3>
              <p className="relative mt-2 text-xs leading-relaxed text-white/70">
                {item.description}
              </p>

              <div className="relative mt-6 flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] text-accent-300/80 uppercase transition-colors duration-300 group-hover:text-accent-300">
                <span>바로가기</span>
                <ArrowUpRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-white/50">
          Q-Net (www.q-net.or.kr) 공식 페이지로 새 창에서 열립니다
        </p>
      </div>
    </section>
  );
}
