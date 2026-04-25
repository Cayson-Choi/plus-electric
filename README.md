# 플러스 전기학원 (Plus Electric Academy)

대전 유성구 전기 자격증 전문 교육기관 **플러스 전기학원**의 공식 홈페이지입니다.

전기기능사 / 전기기사 국비지원 과정 안내, 학원 소개, 오시는 길, 상담 문의를 제공합니다.

---

## 학원 정보

- **학원명**: 플러스 전기학원
- **전화**: 010-9937-9510
- **주소**: 대전 유성구 대정로 28번길 50 105동 1105호
- **운영 시간**: 평일 09:00 - 21:00 / 토요일 09:00 - 17:00

---

## 기술 스택

| 영역 | 기술 |
|------|------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Icons | [lucide-react](https://lucide.dev/) |
| Font | [Pretendard Variable](https://github.com/orioncactus/pretendard) |
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
├── app/                      # Next.js App Router 페이지
│   ├── layout.tsx            # 루트 레이아웃 (헤더/푸터/메타)
│   ├── page.tsx              # 메인 페이지
│   ├── about/                # 학원 소개
│   ├── courses/              # 교육 과정
│   ├── location/             # 오시는 길
│   ├── contact/              # 문의
│   ├── globals.css           # 전역 스타일 (Tailwind v4)
│   ├── sitemap.ts            # /sitemap.xml
│   ├── robots.ts             # /robots.txt
│   ├── icon.svg              # 파비콘
│   └── not-found.tsx         # 404 페이지
├── components/
│   ├── layout/               # Header, Footer, FloatingCta, PageHero
│   ├── home/                 # 메인 페이지 섹션 컴포넌트
│   ├── contact/              # 문의 폼
│   └── ui/                   # 공통 UI (Button, Logo)
├── lib/
│   ├── site-config.ts        # 학원 정보 / 메뉴 / 과정 (단일 진실 공급원)
│   └── utils.ts              # cn() 헬퍼
├── public/                   # 정적 자산 (_headers 포함)
├── docs/                     # PRD, Action Plan
└── next.config.ts            # Next.js 설정 (정적 export)
```

### 콘텐츠 수정 가이드

학원명 / 전화번호 / 주소 / 교육 과정 / FAQ 등 모든 학원 정보는 [`lib/site-config.ts`](lib/site-config.ts) 한 파일에서 관리합니다. 정보가 변경되면 이 파일만 수정하면 사이트 전체에 반영됩니다.

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
| `/` | 메인 (히어로, 빠른 메뉴, 교육 과정, 학원 강점, 자격증 안내, FAQ, 오시는 길, 문의 CTA) |
| `/about/` | 학원 소개 / 비전 / 학습 단계 |
| `/courses/` | 교육 과정 상세 (전기기능사 / 전기기사 국비지원) |
| `/location/` | 오시는 길 (지도, 대중교통, 자가용) |
| `/contact/` | 문의 (양식 + 전화/주소) |

---

## 라이선스

본 프로젝트는 플러스 전기학원의 자산입니다. 무단 복제 및 배포를 금합니다.
