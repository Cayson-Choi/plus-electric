"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const courseOptions = [
  { value: "electrician", label: "전기기능사 과정" },
  { value: "electric-engineer", label: "전기기사 국비지원 과정" },
  { value: "etc", label: "기타 / 일반 문의" },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const courseValue = String(data.get("course") || "etc");
    const courseLabel =
      courseOptions.find((c) => c.value === courseValue)?.label || courseValue;
    const message = String(data.get("message") || "");

    const subject = `[홈페이지 문의] ${courseLabel} - ${name}`;
    const body = [
      `이름: ${name}`,
      `연락처: ${phone}`,
      `관심 과정: ${courseLabel}`,
      "",
      "문의 내용:",
      message,
      "",
      "---",
      "본 메일은 플러스 전기학원 홈페이지에서 발송되었습니다.",
    ].join("\n");

    const tel = siteConfig.contact.phoneDigits;
    // 서버가 없으므로 mailto로 메일 클라이언트 열기 + 전화 안내
    const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
    form.reset();

    // 2초 후 안내 문구 유지하지만 폼은 다시 사용 가능하게
    setTimeout(() => {
      // optional: 추가 안내. 여기선 그대로 둠
      void tel;
    }, 2000);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-brand-50 p-8 text-center ring-1 ring-brand-100">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-600 text-white shadow-soft">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-xl font-extrabold tracking-tight text-slate-900">
          문의 접수가 시작되었습니다
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          기본 메일 앱이 열렸다면 보내주신 내용을{" "}
          <strong className="font-bold text-slate-900">전송</strong>해 주세요.
          빠른 답변이 필요하시면 아래 번호로 직접 전화 주시면 더 신속하게
          안내해드립니다.
        </p>
        <a
          href={`tel:${siteConfig.contact.phoneDigits}`}
          className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 text-sm font-bold text-white shadow-soft hover:bg-brand-700"
        >
          {siteConfig.contact.phone}
        </a>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-3 block w-full text-xs font-semibold text-slate-500 hover:text-slate-700"
        >
          다시 작성하기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="이름" required>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="홍길동"
            className={inputClasses}
          />
        </Field>
        <Field label="연락처" required>
          <input
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            placeholder="010-0000-0000"
            className={inputClasses}
          />
        </Field>
      </div>

      <Field label="관심 과정">
        <select name="course" defaultValue="etc" className={inputClasses}>
          {courseOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="문의 내용" required>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="문의하실 내용을 자세히 적어주세요. (수강 일정, 시간표, 내일배움카드 활용 등)"
          className={cn(inputClasses, "min-h-[140px] resize-y leading-relaxed")}
        />
      </Field>

      <label className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-600">
        <input
          type="checkbox"
          required
          name="agree"
          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-600"
        />
        <span>
          <strong className="font-bold text-slate-900">
            개인정보 수집·이용
          </strong>
          에 동의합니다. (수집 항목: 이름, 연락처 / 이용 목적: 상담 회신 / 보유
          기간: 상담 종료 후 즉시 파기)
        </span>
      </label>

      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-600 text-base font-bold text-white shadow-soft transition-colors hover:bg-brand-700 active:scale-[0.99]"
      >
        <Send className="h-4.5 w-4.5" />
        문의 보내기
      </button>

      <p className="text-center text-[11px] text-slate-500">
        * 본 폼은 메일 앱을 통해 전송됩니다. 빠른 상담은 전화{" "}
        <a
          href={`tel:${siteConfig.contact.phoneDigits}`}
          className="font-bold text-brand-700 hover:underline"
        >
          {siteConfig.contact.phone}
        </a>
        를 이용해주세요.
      </p>
    </form>
  );
}

const inputClasses =
  "block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-600 focus:outline-2 focus:outline-offset-2 focus:outline-brand-600/40";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-bold text-slate-900">
        {label}
        {required && <span className="ml-1 text-brand-600">*</span>}
      </span>
      {children}
    </label>
  );
}
