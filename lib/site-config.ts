export const siteConfig = {
  name: "플러스 전기학원",
  tagline: "전기 자격증, 플러스로 끝낸다",
  description:
    "대전 동구 전기 자격증 전문 교육기관 전기기능사·전기기사 국비지원 과정 운영 합격까지 한 걸음 더, 플러스 전기학원과 함께하세요",
  url: "https://plus-electric.vercel.app",
  ogImage: "/og.png",

  contact: {
    phone: "010-9937-9510",
    phoneDigits: "01099379510",
    email: "dw2860@naver.com",
    address: "대전광역시 동구 동서대로 1517번지 4층",
    addressShort: "대전 동구 동서대로 1517",
    region: "대전 동구",
    hours: "평일 09:00 - 21:00 / 토요일 09:00 - 17:00",
    businessNumber: "506-92-21717",
    // 외부 지도 단축 링크 (도로명 주소 검색)
    mapLinks: {
      kakao:
        "https://map.kakao.com/?q=" +
        encodeURIComponent("대전 동구 동서대로 1517"),
      naver:
        "https://map.naver.com/p/search/" +
        encodeURIComponent("대전 동구 동서대로 1517"),
    },
    // 카카오맵 RoughMap "지도 퍼가기" 임베드 정보
    // ⚠ 새 주소로 핀이 변경된 경우 map.kakao.com → 검색 → 지도 퍼가기에서
    //    timestamp / key를 재발급 받아 아래 값을 교체해야 정확한 위치가 표시됩니다.
    kakaoRoughMap: {
      timestamp: "1777265436328",
      key: "2ayav2mjbhes",
    },
  },

  nav: [
    { label: "학원 소개", href: "/about/" },
    { label: "교육 과정", href: "/courses/" },
    { label: "오시는 길", href: "/location/" },
    { label: "문의하기", href: "/contact/" },
  ],

  courses: [
    {
      slug: "electrician",
      name: "전기기능사 과정",
      tagline: "기초부터 실기까지, 한 번에 합격",
      description:
        "전기 자격증의 기본인 전기기능사 자격증을 단계별 커리큘럼으로 체계적으로 준비합니다 필기와 실기를 모두 다루며 합격까지 책임집니다",
      target: "전기 자격증을 처음 준비하는 분, 입문자",
      duration: "상담 후 안내",
      schedule: "주간반 / 야간반 운영",
      price: null,
      priceLabel: "전화 상담",
      inquiryOnly: true,
      features: [
        "필기 + 실기 완벽 종합반",
        "현장 경력 강사진의 1:1 코칭",
        "실습 위주의 반복 훈련",
        "최신 기출 분석 및 모의시험 제공",
      ],
      highlight: false,
    },
    {
      slug: "electric-engineer",
      name: "전기기사 국비지원 과정",
      tagline: "내일배움카드로 부담 없이 도전",
      description:
        "전기 산업의 핵심 자격증인 전기기사를 국비지원으로 준비할 수 있습니다 내일배움카드 사용이 가능하여 수강료 부담 없이 합격에 집중할 수 있습니다",
      target: "전기기사 자격 요건 충족자, 재직자",
      duration: "과정별 상이 (상담 후 안내)",
      schedule: "정규 일정에 따라 진행",
      price: null,
      priceLabel: "내일배움카드 사용 가능",
      features: [
        "내일배움카드 국비지원 적용",
        "필기·실기 통합 커리큘럼",
        "자격 요건 / 환급 절차 무료 상담",
        "현장 실무 중심 강의",
      ],
      highlight: true,
    },
  ],

  certifications: [
    {
      title: "자격증 정보",
      description: "전기 분야 국가기술자격 종목 안내",
      href: "https://www.q-net.or.kr/crf021.do?id=crf02103&gSite=Q",
      external: true,
    },
    {
      title: "원서 접수",
      description: "Q-Net 시험 원서 접수 바로가기",
      href: "https://www.q-net.or.kr/rcv002.do?id=rcv00201&gSite=Q",
      external: true,
    },
    {
      title: "합격자 발표",
      description: "시험 결과 및 합격 조회",
      href: "https://www.q-net.or.kr/myp011.do?id=myp01101&gSite=Q",
      external: true,
    },
    {
      title: "CBT 체험",
      description: "컴퓨터 시험 체험으로 미리 준비",
      href: "https://www.q-net.or.kr/cbt/index.html",
      external: true,
    },
    {
      title: "내일배움카드 안내",
      description: "국민내일배움카드 신청 및 활용",
      href: "https://www.work24.go.kr/cm/main.do",
      external: true,
    },
  ],

  features: [
    {
      icon: "BookOpen",
      title: "체계적인 커리큘럼",
      description:
        "기초부터 합격까지, 단계별로 설계된 커리큘럼으로 누구나 따라올 수 있습니다",
    },
    {
      icon: "Users",
      title: "현장 출신 전문 강사",
      description:
        "오랜 현장 경험을 갖춘 강사진이 실무까지 직접 지도합니다",
    },
    {
      icon: "Wallet",
      title: "내일배움카드 가능",
      description:
        "전기기사 국비지원 과정은 내일배움카드 사용이 가능합니다",
    },
    {
      icon: "Trophy",
      title: "합격까지 책임",
      description:
        "합격할 때까지 함께합니다 1:1 맞춤 피드백과 모의시험을 제공합니다",
    },
  ],

  faqs: [
    {
      q: "전기기능사 과정은 누구나 들을 수 있나요?",
      a: "네, 자격 제한 없이 누구나 수강 가능합니다 전기를 처음 접하는 분도 기초부터 차근차근 배울 수 있도록 설계되어 있습니다",
    },
    {
      q: "전기기사 과정은 내일배움카드로 어떻게 신청하나요?",
      a: "고용노동부 HRD-Net 또는 가까운 고용센터에서 국민내일배움카드를 발급받으신 후, 학원에 전화 주시면 절차를 안내해드립니다",
    },
    {
      q: "수업 시간은 어떻게 되나요?",
      a: "주간반과 야간반을 운영하고 있으며, 자세한 일정은 전화 상담을 통해 안내해드립니다",
    },
    {
      q: "주차가 가능한가요?",
      a: "네, 건물 주차장을 이용하실 수 있습니다",
    },
  ],

  copyrightYear: new Date().getFullYear(),
} as const;

export type SiteConfig = typeof siteConfig;
