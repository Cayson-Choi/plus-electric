# 플러스 전기학원 웹사이트 — Action Plan

> **버전**: 1.0
> **작성일**: 2026-04-25
> **PRD 참조**: `docs/PRD.md`
> **목표 일정**: 단일 작업 세션 내 MVP 완성 → 배포

---

## 0. 전체 흐름 요약

```
[1] 프로젝트 초기화  →  [2] 디자인 시스템 셋업  →  [3] 공통 컴포넌트
       ↓
[4] 메인 페이지       →  [5] 서브 페이지         →  [6] 반응형/디테일
       ↓
[7] 빌드/품질검증    →  [8] GitHub 푸시          →  [9] Cloudflare Pages 배포
       ↓
[10] 검증/스모크테스트
```

각 단계는 체크포인트가 있어 다음 단계로 넘어가기 전 검증을 거친다.

---

## 1단계: 프로젝트 초기화 (예상 5분)

### 1.1 작업
- [ ] `D:\Antigravity\cloudfare-test`에서 Next.js 15 프로젝트 생성
  - `npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*" --turbopack --yes`
- [ ] `package.json`의 프로젝트 이름을 `plus-electric-academy`로 수정
- [ ] `next.config.ts` 정적 export 설정 (`output: 'export'`, `images.unoptimized: true`)
- [ ] `.gitignore` 확인 (Next.js 기본값 사용)
- [ ] `README.md` 작성 (프로젝트 소개, 개발/배포 가이드)

### 1.2 의존성 추가
```bash
npm i lucide-react clsx tailwind-merge class-variance-authority
npm i -D @types/node
```

### 1.3 폴더 구조
```
cloudfare-test/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── about/page.tsx
│   ├── courses/page.tsx
│   ├── location/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── floating-cta.tsx
│   ├── home/
│   │   ├── hero.tsx
│   │   ├── quick-links.tsx
│   │   ├── courses-section.tsx
│   │   ├── certifications.tsx
│   │   ├── reviews.tsx
│   │   └── location-preview.tsx
│   └── ui/
│       ├── button.tsx
│       └── container.tsx
├── lib/
│   ├── utils.ts
│   └── site-config.ts
├── public/
│   ├── favicon.ico
│   └── images/
├── docs/
│   ├── PRD.md
│   └── ACTION_PLAN.md
└── next.config.ts
```

### ✅ 체크포인트
- `npm run dev` 정상 실행
- 기본 Next.js 페이지 표시

---

## 2단계: 디자인 시스템 셋업 (예상 10분)

### 2.1 작업
- [ ] `app/globals.css`에 Pretendard 웹폰트 import (CDN)
- [ ] `tailwind.config.ts`에 컬러 팔레트 / 폰트 / 브레이크포인트 등록
  - Primary: `#1E40AF`, Primary-dark: `#1E3A8A`, Accent: `#FACC15`
- [ ] `lib/site-config.ts`에 학원 정보 상수화 (학원명, 전화, 주소, 메뉴 등)
- [ ] `lib/utils.ts`에 `cn()` 헬퍼 추가 (clsx + tailwind-merge)
- [ ] 베이스 `<Button>`, `<Container>` 컴포넌트 작성

### ✅ 체크포인트
- 폰트가 Pretendard로 적용됨
- Primary 컬러로 만든 버튼이 정상 렌더

---

## 3단계: 공통 컴포넌트 (예상 20분)

### 3.1 Header
- [ ] 데스크톱: 상단바(전화번호) + 로고 + 메뉴(드롭다운) 형식
- [ ] 모바일: 햄버거 메뉴 → 풀스크린 드로어
- [ ] 스크롤 시 그림자 효과
- [ ] 네비게이션 항목: 학원소개 / 교육과정 / 오시는길 / 문의

### 3.2 Footer
- [ ] 학원명, 주소, 전화번호 표시
- [ ] **사업자등록번호 표시 안 함** (PRD 요구사항)
- [ ] 카피라이트
- [ ] 이용약관 / 개인정보처리방침 (정적 페이지로 추후 추가, 일단 placeholder)

### 3.3 플로팅 CTA
- [ ] 우측 하단: 맨 위로 이동 버튼 (스크롤 시 노출)
- [ ] 모바일 하단 고정: 전화 / 카카오 문의 버튼

### ✅ 체크포인트
- 모든 페이지에서 헤더/푸터 정상 표시
- 모바일에서 햄버거 메뉴 동작

---

## 4단계: 메인 페이지 구현 (예상 40분)

### 4.1 Hero 섹션
- [ ] 풀폭 배경 그라디언트 + 헤드라인 + CTA 버튼 2개
- [ ] 헤드라인: "전기 자격증, 플러스로 끝낸다"
- [ ] 서브카피 + "수강 문의" / "과정 보기" 버튼
- [ ] 우측에 일러스트 또는 사진 (placeholder)

### 4.2 Quick Links 그리드
- [ ] 5개 카드: 전기기능사 / 전기기사 / 전기산업기사 / 수강신청 / 오시는길
- [ ] 각 카드 아이콘(lucide) + 제목 + 설명
- [ ] 호버 시 살짝 떠오르는 효과

### 4.3 Courses Section
- [ ] "지금 모집 중인 과정" 슬라이더 또는 그리드
- [ ] 카드: 썸네일 + 과정명 + 일정 + 수강료 + "자세히" 버튼
- [ ] MVP: 3~4개 과정을 정적 데이터로

### 4.4 Certifications 섹션
- [ ] 파란 배경 + "자격증 시험 안내" 타이틀
- [ ] Q-Net 4개 링크 카드 (자격증 정보 / 원서접수 / 합격조회 / CBT 체험)

### 4.5 Reviews 섹션
- [ ] "수강 후기" — 이미지 카드 3개 (placeholder)

### 4.6 Location Preview
- [ ] 좌측: 주소/연락처/오시는 길 텍스트
- [ ] 우측: 카카오맵 임베드 또는 placeholder 이미지

### 4.7 Contact CTA Banner
- [ ] 풀폭 어두운 배경 + "지금 상담 받기" 큰 버튼
- [ ] 전화번호 강조 표시

### ✅ 체크포인트
- 메인 페이지 모든 섹션 렌더
- 데스크톱/모바일에서 레이아웃 깨짐 없음

---

## 5단계: 서브 페이지 (예상 30분)

### 5.1 학원 소개 (`/about`)
- [ ] 페이지 히어로 (작은 배너)
- [ ] 인사말 + 학원 비전
- [ ] 강사 소개 (placeholder 카드 2~3개)
- [ ] 시설 갤러리 (그리드, placeholder)

### 5.2 교육 과정 (`/courses`)
- [ ] 과정 목록 (필터: 전기기능사/기사/산업기사)
- [ ] 각 과정 상세 카드 (커리큘럼, 일정, 수강료)

### 5.3 오시는 길 (`/location`)
- [ ] 주소 + 카카오맵 임베드
- [ ] 대중교통 / 자가용 / 주차 안내
- [ ] 학원 외관 사진 placeholder

### 5.4 문의 (`/contact`)
- [ ] 폼: 이름, 연락처, 관심 과정, 문의 내용
- [ ] 전화 / 카카오톡 / 이메일 직접 연결 버튼
- [ ] MVP는 `mailto:` 또는 폼 제출 시 단순 alert (Web3Forms 키 확보 시 정식 연동)

### ✅ 체크포인트
- 모든 라우트 접근 가능
- 메뉴에서 정상 이동

---

## 6단계: 반응형 / 디테일 / 접근성 (예상 20분)

### 6.1 반응형
- [ ] 320px ~ 1920px 브레이크포인트별 검수
- [ ] 모바일 메뉴 / 카드 / 그리드 레이아웃 점검

### 6.2 디테일
- [ ] 페이지 메타데이터 (`metadata` export per page)
- [ ] Open Graph 이미지 (placeholder)
- [ ] favicon
- [ ] `sitemap.xml`, `robots.txt`
- [ ] JSON-LD 구조화 데이터 (`EducationalOrganization`, `LocalBusiness`)

### 6.3 접근성
- [ ] 시맨틱 HTML 검수
- [ ] 이미지 alt 속성
- [ ] 키보드 네비게이션 (Tab, Enter)
- [ ] 색상 대비 점검

### ✅ 체크포인트
- Lighthouse 모바일 ≥ 90 / 95 / 95 / 95

---

## 7단계: 빌드 / 품질 검증 (예상 5분)

- [ ] `npm run build` 성공 (정적 export)
- [ ] `out/` 디렉토리 생성 확인
- [ ] `npm run start`로 로컬에서 빌드 결과 확인 (또는 `npx serve out`)
- [ ] 콘솔 에러 / 워닝 없음

### ✅ 체크포인트
- 빌드 성공
- 정적 파일이 `out/`에 생성됨

---

## 8단계: GitHub 푸시 (예상 5분)

### 8.1 작업
- [ ] `git init` (현재 비-git 디렉토리)
- [ ] `git add . && git commit -m "feat: initial Plus Electric Academy website"`
- [ ] `gh repo create plus-electric-academy --public --source=. --remote=origin --push` (gh CLI 가용 시)
  - 또는 사용자가 GitHub에 빈 저장소 생성 → URL 공유 → `git remote add origin ...` → `git push -u origin main`

### ✅ 체크포인트
- GitHub에서 코드 확인 가능

---

## 9단계: Cloudflare Pages 배포 (예상 10분)

### 9.1 배포 옵션 비교
| 방식 | 장점 | 단점 |
|------|------|------|
| **A. Cloudflare 대시보드 GitHub 연동** (추천) | 자동 CI/CD, push 시 자동 배포 | 사용자 수동 클릭 필요 |
| B. `wrangler pages deploy out` CLI | 즉시 배포 | API 토큰 필요 |
| C. Direct Upload | 빠른 1회성 | CI/CD 없음 |

### 9.2 권장 절차 (사용자가 직접 1회 설정)
1. https://dash.cloudflare.com → Workers & Pages → "Create" → Pages → "Connect to Git"
2. GitHub 저장소 선택 (`plus-electric-academy`)
3. 빌드 설정:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node.js version**: 20 또는 22 (환경변수 `NODE_VERSION=20`)
4. Deploy → 배포 완료 시 `https://plus-electric-academy.pages.dev` 발급

### 9.3 wrangler 즉시 배포 (옵션, Claude가 가능)
- [ ] `npm i -g wrangler` (또는 npx 사용)
- [ ] `wrangler login` (사용자 직접 인증 필요)
- [ ] `wrangler pages deploy out --project-name=plus-electric-academy`

### ✅ 체크포인트
- 배포 URL 접속 시 사이트 로딩
- HTTPS 정상

---

## 10단계: 검증 / 스모크 테스트 (예상 5분)

- [ ] 모든 페이지 라우팅 정상
- [ ] 모바일/PC 모두 정상
- [ ] 학원명 / 전화번호 / 주소 정확히 표기됨
- [ ] **사업자등록번호 어디에도 노출되지 않음**
- [ ] 외부 링크 (카카오맵, Q-Net 등) 정상 동작
- [ ] 콘솔 에러 없음

---

## 작업 순서 / 의존성 다이어그램

```
[1] Init ──┬─→ [2] Design System ──┬─→ [3] Layout ──┬─→ [4] Home
           │                        │                │
           └──────────────────→ [5] Sub Pages ───────┴─→ [6] Polish
                                                         │
                                            [7] Build ←──┘
                                                │
                                            [8] GitHub
                                                │
                                            [9] CF Pages
                                                │
                                            [10] Smoke
```

---

## 작업 중 지켜야 할 원칙

1. **사업자등록번호는 어디에도 표기하지 않는다** (PRD 핵심 요구사항)
2. **학원 정보는 `lib/site-config.ts` 한 곳에서 관리** (이름/주소/전화번호 변경 시 한 곳만 수정)
3. **이미지는 Next.js `Image` 대신 일반 `<img>`** (정적 export 호환, `images.unoptimized: true`)
4. **외부 사이트 링크는 새 탭** (`target="_blank" rel="noopener noreferrer"`)
5. **콘텐츠는 한국어 우선** (`lang="ko"`)
6. **Mock 데이터는 `lib/data/`에 분리** (실데이터로 교체 용이)

---

## 사용자에게 요청해야 할 정보 (배포 전후)

- [ ] GitHub 저장소를 어떻게 할지: (A) 사용자가 직접 만들어서 URL 공유, (B) gh CLI로 Claude가 생성
- [ ] Cloudflare Pages 연동을 (A) 사용자가 대시보드에서 직접 할지, (B) wrangler CLI로 Claude가 할지 (인증 필요)
- [ ] 카카오톡 채널 / 블로그 / 유튜브 URL 보유 여부
- [ ] 학원 도메인 보유 여부 (구매 예정 vs 임시 `pages.dev` 사용)

---

## 예상 총 소요 시간

| 단계 | 시간 |
|------|------|
| 1. Init | 5분 |
| 2. Design System | 10분 |
| 3. Layout | 20분 |
| 4. Home | 40분 |
| 5. Sub Pages | 30분 |
| 6. Polish | 20분 |
| 7. Build | 5분 |
| 8. GitHub | 5분 |
| 9. CF Pages | 10분 |
| 10. Smoke | 5분 |
| **총계** | **약 2시간 30분** |

---

## 롤백 / 트러블슈팅

- Next.js 빌드 실패 → 정적 export 호환 안 되는 코드 점검 (`Image`, dynamic routes, `fetch` 동적 등)
- Cloudflare Pages 빌드 실패 → Node 버전 / build command / output dir 재확인
- 배포 후 라우팅 404 → Next.js export trailing slash 또는 `_redirects` 파일 추가

---

## 다음 단계 (포스트-MVP)

- 실제 학원 사진 / 강사 사진 / 시설 사진 교체
- 도메인 연결 (`pluselectric.co.kr` 등)
- 게시판 (공지/후기/QnA) 동적 기능
- 카카오맵 정식 임베드 (장소 ID)
- 폼 처리 백엔드 (Cloudflare Pages Functions)
- 다국어 (영어/중국어) 지원 (필요 시)
- 카카오톡 채널 자동 연동
