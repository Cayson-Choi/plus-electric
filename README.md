# 플러스 전기학원 (Plus Electric Academy)

대전 동구 전기 자격증 전문 교육기관 **플러스 전기학원**의 공식 홈페이지입니다.

전기기능사 / 전기기사 국비지원 과정 안내, 학원 소개, 오시는 길, 상담 문의를 제공합니다.

---

## 학원 정보

- **학원명**: 플러스 전기학원
- **전화**: 010-9937-9510
- **이메일**: dw2860@naver.com
- **주소**: 대전광역시 동구 동서대로 1517번지 4층
- **운영 시간**: 평일 09:00 - 21:00 / 토요일 09:00 - 17:00

---

## 기술 스택

| 영역 | 기술 |
|------|------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, React 19) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) (`@theme` 토큰) |
| Icons | [lucide-react](https://lucide.dev/) |
| Font | [Pretendard Variable](https://github.com/orioncactus/pretendard) (본문) + 나눔손글씨 펜 (Hero 강조) |
| Map | 카카오맵 RoughMap 임베드 (지도 퍼가기) |
| Build | Static Export (`output: 'export'`) |
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com/) |

---

## 로컬 개발

### 요구 사항

- Node.js 20 LTS 이상 (권장: 22 / 24)
- npm 10 이상

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드 (정적 export → out/ 디렉토리)
npm run build

# 빌드 결과 로컬 미리보기
npm run preview
```

빌드 후 `out/` 디렉토리에 정적 자산이 생성됩니다.

---

## 프로젝트 구조

```
.
├── app/                            # Next.js App Router
│   ├── layout.tsx                  # 루트 레이아웃 (헤더/푸터/메타/JSON-LD)
│   ├── page.tsx                    # 메인 페이지
│   ├── about/page.tsx              # 학원 소개
│   ├── courses/page.tsx            # 교육 과정
│   ├── location/page.tsx           # 오시는 길
│   ├── contact/page.tsx            # 문의
│   ├── globals.css                 # 전역 스타일 (Tailwind v4 + 디자인 토큰)
│   ├── sitemap.ts                  # /sitemap.xml
│   ├── robots.ts                   # /robots.txt
│   ├── icon.svg                    # 파비콘
│   └── not-found.tsx               # 404 페이지
├── components/
│   ├── home/                       # 메인 페이지 섹션 컴포넌트
│   │   ├── hero.tsx                # 2-슬라이드 캐러셀 (드래그 + 화살표)
│   │   ├── quick-links.tsx         # 빠른 메뉴 5개 카드
│   │   ├── courses-section.tsx     # 교육 과정 (highlight 카드)
│   │   ├── features.tsx            # 학원 강점 + Plus Promise
│   │   ├── process.tsx             # 4-단계 수강 프로세스
│   │   ├── certifications.tsx      # Q-Net 자격증 정보 (다크 mesh)
│   │   ├── faq.tsx                 # 자주 묻는 질문 (accordion)
│   │   ├── location-preview.tsx    # 오시는 길 미리보기 + 카카오맵
│   │   ├── contact-cta.tsx         # 최종 문의 CTA
│   │   └── marquee-strip.tsx       # 신뢰 시그널 마퀴 (5개 항목)
│   ├── layout/
│   │   ├── header.tsx              # 상단 네비
│   │   ├── footer.tsx              # 하단 정보
│   │   ├── floating-cta.tsx        # 모바일 하단 고정 통화 버튼
│   │   └── page-hero.tsx           # 하위 페이지 공통 hero
│   ├── contact/contact-form.tsx    # 문의 폼 (mailto 발송)
│   └── ui/
│       ├── button.tsx
│       ├── logo.tsx
│       └── kakao-rough-map.tsx     # 카카오 RoughMap 임베드
├── lib/
│   ├── site-config.ts              # 학원 정보 / 메뉴 / 과정 (단일 진실 공급원)
│   └── utils.ts                    # cn() 헬퍼
├── public/
│   ├── _headers                    # Cloudflare 보안/캐시 헤더
│   ├── og.png                      # OG / Twitter share 이미지
│   ├── fonts/NanumPen.ttf          # 나눔손글씨 펜 (Hero "플러스" 강조용)
│   └── images/                     # trophy.png, together.png 등
├── docs/                           # PRD, Action Plan
└── next.config.ts                  # Next.js 설정 (정적 export)
```

### 콘텐츠 수정 가이드

학원명 / 전화번호 / 주소 / 이메일 / 교육 과정 / FAQ / 카카오맵 임베드 정보 등 모든 학원 정보는 [`lib/site-config.ts`](lib/site-config.ts) 한 파일에서 관리합니다. 정보가 변경되면 이 파일만 수정하면 사이트 전체에 반영됩니다.

---

## 디자인 시스템

### 컬러 토큰 (`@theme`)

- **brand 50–900**: 깊은 네이비/푸른 톤 (#eff6ff → #172554)
- **accent 300–600**: 황금 노랑 (#fde047 → #ca8a04)

### 그림자 토큰

- `shadow-soft` — 살짝 떠보이는 카드
- `shadow-card` — 3-layer 표준 카드 (페이지 전체에서 사용)
- `shadow-elevate` — 4-layer 호버 강조 (`@utility` 정의)
- `shadow-lift` — 다크 카드용 강한 그림자

### 카드 표준 패턴

```html
<!-- 흰 배경 카드 -->
<div class="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-200/80
            transition-all duration-300 hover:-translate-y-1
            hover:ring-brand-300 hover:shadow-elevate">
  ...
</div>

<!-- 다크 배경 카드 -->
<div class="rounded-2xl bg-white/[0.08] p-6 shadow-soft ring-1 ring-white/20
            backdrop-blur-sm hover:bg-white/[0.16]
            hover:ring-accent-300/50 hover:shadow-elevate">
  ...
</div>
```

### 애니메이션

- `animate-trophy-float` / `animate-trophy-glow` — Hero 트로피
- `animate-emphasis-sway` — Plus Promise 카드 "합격" 강조
- `animate-marquee` — MarqueeStrip 무한 흐름
- `sparkle-text` + `plus-char-1/2/3` — Hero "플러스" 글자 등장 사이클 (4s, 무지개 색상 60s)
- `animate-pulse-soft` — 전화 CTA 버튼 펄스

### Hero 캐러셀 안정성

- 첫 페인트 시 `animate=false` 로 transform 즉시 스냅 → 다음 rAF에서 transition 활성화 (hydration 직후 슬라이드 슬라이드인 깜빡임 방지)
- `document.visibilitychange` 핸들러로 백그라운드 탭에서 캐러셀 일시정지, 복귀 시 `index`를 `[1, TOTAL_SLIDES]` 범위로 normalize → 탭 비활성 동안 throttled `setInterval` + missed `transitionEnd`로 슬라이드가 화면 밖에 멈추는 문제 해결
- Section + 각 슬라이드에 모바일/태블릿 `min-height` 명시 (`28rem` / `30rem` / `32rem`) — layout race로 인한 collapse 방지

### 폰트 로딩 (FOUT 방지)

- `<link rel="preload" href="/fonts/NanumPen.ttf" as="font">` 를 layout.tsx `<head>` 에 명시 → HTML parse 시점에 폰트 다운로드 시작
- `Nanum Pen Script` `@font-face` 의 `font-display: block` → 폰트 로드 전엔 글자 invisible (fallback 고딕체로 표시되었다 손글씨로 swap되는 깜빡임 제거)

---

## 카카오맵 임베드

홈페이지의 LocationPreview와 `/location` 페이지는 **카카오 RoughMap 위젯**(지도 퍼가기)을 사용합니다.

`site-config.ts` 의 `contact.kakaoRoughMap` 값:

```ts
kakaoRoughMap: {
  timestamp: "1777219199002",
  key: "mdw52uzw86f",
}
```

이 값은 [map.kakao.com](https://map.kakao.com) → 학원 검색 → "공유 → 지도 퍼가기"에서 발급된 코드입니다.

[`components/ui/kakao-rough-map.tsx`](components/ui/kakao-rough-map.tsx) 컴포넌트가 Daum 로더 스크립트를 동적 로드 후 `window.daum.roughmap.Lander`로 렌더링하며, `globals.css` 의 CSS overrides로 컨테이너에 100% 반응형으로 fit 합니다.

---

## Cloudflare Pages 배포

### 1. GitHub 저장소 연동 방식 (권장)

1. https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. 본 저장소 (`Cayson-Choi/plus-electric`) 선택
3. 빌드 설정:

   | 항목 | 값 |
   |------|-----|
   | Framework preset | **Next.js (Static HTML Export)** |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Node version | `20`, `22`, 또는 `24` (환경변수 `NODE_VERSION` 또는 `.node-version`) |

4. **Save and Deploy** 클릭 → 자동 배포 진행
5. 배포 완료 시 `https://<프로젝트명>.pages.dev` URL 발급

이후 `main` 브랜치에 push 할 때마다 자동 배포됩니다.

### 2. Wrangler CLI 직접 배포 (옵션)

```bash
npm i -g wrangler
wrangler login
wrangler pages deploy out --project-name=plus-electric
```

---

## 페이지 목록

| 경로 | 설명 |
|------|------|
| `/` | 메인 (Hero 캐러셀, QuickLinks, Courses, Features, Process, Certifications, FAQ, Location, ContactCta, MarqueeStrip) |
| `/about/` | 학원 소개 (인사말 + 강사진 이미지 / 가치 / 학습 단계) |
| `/courses/` | 교육 과정 상세 (전기기능사 / 전기기사 국비지원) |
| `/location/` | 오시는 길 (카카오맵 + 대중교통/자가용) |
| `/contact/` | 문의 (양식 + 전화/주소/이메일) |

---

## 라이선스

본 프로젝트는 플러스 전기학원의 자산입니다. 무단 복제 및 배포를 금합니다.
