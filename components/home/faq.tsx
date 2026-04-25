import { siteConfig } from "@/lib/site-config";

export function Faq() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-600 uppercase">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              자주 묻는 질문
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              궁금한 점을 빠르게 확인하세요. 더 자세한 안내는 전화로 상담해드립니다.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul className="space-y-3">
              {siteConfig.faqs.map((faq, idx) => (
                <li
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-brand-200"
                >
                  <details className="group">
                    <summary className="flex cursor-pointer items-start justify-between gap-4 text-base font-bold text-slate-900 marker:hidden [&::-webkit-details-marker]:hidden">
                      <span className="flex items-start gap-3">
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-brand-50 text-sm font-extrabold text-brand-700">
                          Q
                        </span>
                        <span className="pt-0.5">{faq.q}</span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-slate-100 text-slate-500 transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <div className="mt-4 flex items-start gap-3 border-t border-slate-100 pt-4 pl-0 sm:pl-10">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-accent-100 bg-accent-300/30 text-sm font-extrabold text-accent-600 sm:hidden">
                        A
                      </span>
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
