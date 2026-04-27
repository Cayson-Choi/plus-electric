import { HelpCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Faq() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
      <div
        className="absolute -top-32 left-1/3 h-72 w-72 rounded-full bg-brand-100/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-brand-700 uppercase ring-1 ring-brand-100 shadow-soft">
              <HelpCircle className="h-3 w-3" />
              FAQ
            </span>
            <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-[44px] md:leading-[1.1]">
              자주 묻는{" "}
              <span className="bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
                질문
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              궁금한 점을 빠르게 확인하세요 더 자세한 안내는 전화 상담으로
              친절하게 도와드립니다
            </p>

            <a
              href={`tel:${siteConfig.contact.phoneDigits}`}
              className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-0.5 hover:ring-brand-200 hover:shadow-elevate"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-soft">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[11px] font-bold tracking-[0.18em] text-slate-500 uppercase">
                  바로 전화 상담
                </span>
                <span className="mt-0.5 block text-base font-extrabold tracking-tight text-slate-900">
                  {siteConfig.contact.phone}
                </span>
              </span>
            </a>
          </div>

          <div className="lg:col-span-8">
            <ul className="space-y-3">
              {siteConfig.faqs.map((faq, idx) => (
                <li key={idx}>
                  <details className="group rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-200/80 transition-all duration-300 hover:ring-brand-200 open:shadow-elevate open:ring-brand-200">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-bold text-slate-900 marker:hidden [&::-webkit-details-marker]:hidden">
                      <span className="flex items-start gap-3">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-50 text-sm font-extrabold text-brand-700 ring-1 ring-brand-100">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="pt-1 leading-snug">{faq.q}</span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-500 transition-all duration-300 group-hover:bg-brand-50 group-hover:text-brand-700 group-open:rotate-45 group-open:bg-brand-600 group-open:text-white"
                      >
                        <span className="text-lg leading-none">+</span>
                      </span>
                    </summary>
                    <div className="mt-5 ml-0 border-t border-slate-100 pt-5 sm:ml-11">
                      <p className="text-sm leading-relaxed text-slate-600">
                        {faq.a}
                      </p>
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
