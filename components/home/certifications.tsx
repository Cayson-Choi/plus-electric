import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Certifications() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 to-brand-900 py-16 text-white md:py-24">
      <div className="absolute inset-0 bg-grid opacity-15" aria-hidden="true" />
      <div
        className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-accent-300 uppercase">
            Certification Info
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            자격증 시험 안내
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80">
            한국산업인력공단(Q-Net) 공식 자료와 내일배움카드 안내 페이지로 바로
            연결됩니다.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {siteConfig.certifications.map((item, idx) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:ring-white/30"
            >
              <span className="text-xs font-bold tracking-wider text-accent-300">
                0{idx + 1}
              </span>
              <h3 className="mt-3 text-lg font-extrabold leading-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {item.description}
              </p>
              <ArrowUpRight className="mt-5 h-5 w-5 text-white/60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
