import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { PageHero } from "@/components/layout/page-hero";
import { siteConfig } from "@/lib/site-config";
import { Clock, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "문의하기",
  description:
    "전기기능사·전기기사 국비지원 과정 상담을 환영합니다. 전화 010-9937-9510 또는 문의 폼으로 연락 주세요.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="문의하기"
        description="과정 안내, 수강 상담, 내일배움카드 활용 방법 — 무엇이든 친절하게 안내해드립니다."
        breadcrumbs={[{ label: "문의하기" }]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <aside className="lg:col-span-5">
              <div className="rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 p-8 text-white shadow-lift">
                <p className="text-xs font-bold tracking-[0.2em] text-accent-300 uppercase">
                  Direct Contact
                </p>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight">
                  바로 연락하기
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  가장 빠른 방법은 전화 상담입니다. 운영 시간 내에 친절하게
                  안내해드립니다.
                </p>

                <ul className="mt-7 space-y-5">
                  <li className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15 text-accent-300">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold tracking-wider text-white/60 uppercase">
                        전화
                      </p>
                      <a
                        href={`tel:${siteConfig.contact.phoneDigits}`}
                        className="mt-0.5 block text-xl font-extrabold tracking-tight text-white hover:text-accent-300"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15 text-accent-300">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold tracking-wider text-white/60 uppercase">
                        운영 시간
                      </p>
                      <p className="mt-0.5 leading-relaxed font-bold">
                        {siteConfig.contact.hours}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15 text-accent-300">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold tracking-wider text-white/60 uppercase">
                        주소
                      </p>
                      <p className="mt-0.5 leading-relaxed font-bold">
                        {siteConfig.contact.address}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-5 rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
                <p className="text-xs font-bold tracking-wider text-brand-700 uppercase">
                  상담 가능한 내용
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>· 전기기능사 / 전기기사 과정 안내</li>
                  <li>· 내일배움카드 신청 절차 / 환급 안내</li>
                  <li>· 수강 일정 / 시간표 / 수강료</li>
                  <li>· 자격 요건 / 시험 일정 / 응시 자격</li>
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-white p-7 ring-1 ring-slate-200 sm:p-9">
                <p className="text-xs font-bold tracking-[0.2em] text-brand-600 uppercase">
                  Online Inquiry
                </p>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  온라인 문의 남기기
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  내용을 남겨주시면 운영 시간 내에 빠르게 답변드립니다. 신속한
                  답변을 원하시면 전화 상담을 추천합니다.
                </p>

                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
