import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-x text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-brand-600 uppercase">
          404 Not Found
        </p>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-slate-600">
          요청하신 주소가 변경되었거나 존재하지 않습니다. 홈으로 돌아가
          원하시는 메뉴를 찾아보세요.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" variant="primary" size="lg">
            홈으로 돌아가기
          </Button>
          <Link
            href="/contact/"
            className="text-sm font-semibold text-brand-700 hover:underline"
          >
            문의하기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
