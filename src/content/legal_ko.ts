import type { LocalizedLegalContent } from './legal';

export const LEGAL_KO: Record<string, LocalizedLegalContent> = {
  about: {
    title: "소개 - TheWhiteScreen.org",
    metaDescription: "TheWhiteScreen.org의 사명: 빠르고 깔끔하며 프라이버시를 존중하는 화면 테스트 및 조명 도구 제공.",
    h1: "소개 - TheWhiteScreen.org",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "TheWhiteScreen.org는 번거로운 광고, 팝업, 회원가입 절차 없이 전 세계 모든 기기에서 즉시 사용할 수 있는 방해 없는 전체화면 디스플레이 유틸리티를 제공한다는 명확한 사명으로 제작되었습니다.",
      "본 웹 애플리케이션은 속도에 최적화된 정적 아키텍처를 기반으로 하여 로딩 지연 없이 모든 최신 웹 브라우저에서 즉시 실행되며 사용자의 개인정보를 완벽하게 보호합니다."
    ],
    sections: [
      {
        heading: "우리의 목표와 사명",
        content: "새 모니터의 불량화소를 확인하는 엔지니어, 화상회의에서 얼굴을 밝혀줄 조명이 필요한 직장인, 화면 먼지를 청소하는 사용자, 도면을 트레이싱하는 학생까지 순수한 전체화면은 필수적인 도구입니다. 우리는 이 도구를 언제 어디서나 가볍고 평생 무료로 쓸 수 있도록 만들었습니다."
      },
      {
        heading: "핵심 원칙",
        bullets: [
          "100% 무료 및 회원가입 없음: 숨겨진 요금, 구독, 계정 생성이 전혀 필요 없습니다.",
          "프라이버시 우선 설계: 모든 렌더링은 브라우저 내에서 로컬로 실행되며 개인정보가 수집되거나 전송되지 않습니다.",
          "글로벌 다국어 지원: 전 세계 주요 언어를 완벽 지원하며 글로벌 CDN을 통해 초고속으로 전송됩니다.",
          "최대 8K 고해상도 배경 다운로드: 8K Ultra HD 규격의 무손실 배경 이미지를 PNG, JPG, WEBP 형식으로 제공합니다."
        ]
      }
    ]
  },
  contact: {
    title: "문의하기 - TheWhiteScreen.org",
    metaDescription: "TheWhiteScreen.org 팀에 기술적 질문, 기능 제안 및 지원을 문의하세요.",
    h1: "문의 및 고객 지원",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "TheWhiteScreen.org는 웹에서 가장 신뢰할 수 있고 쾌적한 화면 도구가 되기 위해 노력하고 있습니다. 질문이나 개선 의견이 있으시면 언제든지 연락해 주세요.",
      "보내주신 모든 메시지는 영업일 기준 24~48시간 이내에 정성껏 답변해 드립니다."
    ],
    sections: [
      {
        heading: "이메일 직접 문의",
        content: "기능 건의, 버그 제보, 제휴 문의는 support@thewhitescreen.org 로 이메일을 보내주시면 신속히 확인하겠습니다."
      }
    ],
    contactInfo: {
      email: "support@thewhitescreen.org",
      responseTime: "영업일 기준 24~48시간 이내",
      nameLabel: "성함",
      emailLabel: "이메일 주소",
      messageLabel: "문의 내용",
      submitBtn: "메시지 보내기"
    }
  },
  'privacy-policy': {
    title: "개인정보처리방침 - TheWhiteScreen.org",
    metaDescription: "TheWhiteScreen.org 개인정보처리방침: 추적 없음, 개인정보 수집 없음, 로컬 렌더링을 통한 완벽한 프라이버시 보장.",
    h1: "개인정보처리방침",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "TheWhiteScreen.org는 사용자의 프라이버시를 매우 소중하게 생각합니다. 본 방침은 웹사이트 이용 시 정보가 어떻게 취급되는지 안내합니다.",
      "당사는 사용자의 개인 식별 정보를 수집, 판매 또는 외부에 공유하지 않습니다."
    ],
    sections: [
      {
        heading: "1. 수집하는 정보",
        bullets: [
          "개인정보: 서비스 이용을 위해 이름, 이메일, 전화번호 등의 개인정보를 요구하거나 보관하지 않습니다.",
          "브라우저 로컬 처리: 색상 선택, 밝기 조절, 타이머, 배경화면 렌더링은 전적으로 사용자 기기의 브라우저 내부에서만 실행됩니다.",
          "서버 로그: 시스템 보안 및 안정적인 네트워크 운영을 위한 기본적인 웹서버 접속 로그가 일시적으로 기록될 수 있습니다."
        ]
      },
      {
        heading: "2. 쿠키 및 로컬 저장소",
        content: "사이트는 사용자가 선택한 색상 및 환경설정을 브라우저 세션 중에 기억하기 위해 오직 로컬 저장소(localStorage)만을 활용하며, 광고 추적 쿠키는 사용하지 않습니다."
      },
      {
        heading: "3. 제3자 정보 제공",
        content: "당사는 사용자의 어떠한 데이터도 마케팅이나 광고를 목적으로 제3자에게 판매하거나 제공하지 않습니다."
      }
    ]
  },
  'terms-and-conditions': {
    title: "이용약관 - TheWhiteScreen.org",
    metaDescription: "TheWhiteScreen.org 이용약관: 무료 서비스 이용 조건 및 책임의 한계에 관한 안내.",
    h1: "이용약관",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "TheWhiteScreen.org를 이용해 주셔서 감사합니다. 웹사이트에 접속하고 이용함으로써 귀하는 다음 약관에 동의하게 됩니다.",
      "약관의 내용에 동의하지 않으시는 경우 사이트 이용을 중단해 주시기 바랍니다."
    ],
    sections: [
      {
        heading: "1. 서비스 이용 허가",
        bullets: [
          "사용자는 개인적, 교육적, 창작적 또는 전문적인 디스플레이 점검 목적으로 본 도구를 무료로 자유롭게 이용할 수 있습니다.",
          "도구에서 생성된 단색 배경 이미지를 기기용 배경화면으로 자유롭게 다운로드할 수 있습니다.",
          "서버에 무단 부하를 가하거나 정상적인 운영을 방해하는 자동화된 공격 행위는 엄격히 금지됩니다."
        ]
      },
      {
        heading: "2. 보증의 부인",
        content: "본 사이트의 모든 도구는 '있는 그대로(as-is)' 제공되며, 하드웨어적 결함이나 불량화소의 영구적인 수리를 보증하지 않습니다."
      },
      {
        heading: "3. 책임의 한계",
        content: "TheWhiteScreen.org 및 운영진은 본 사이트 도구의 사용 또는 사용 불능으로 인해 발생하는 어떠한 손해에 대해서도 책임을 지지 않습니다."
      }
    ]
  },
  'cookie-policy': {
    title: "쿠키 정책 - TheWhiteScreen.org",
    metaDescription: "TheWhiteScreen.org 쿠키 및 로컬 저장소 정책: 최소한의 기능 유지, 추적 광고 배제.",
    h1: "쿠키 정책",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "본 쿠키 정책은 TheWhiteScreen.org에서 브라우저 쿠키 및 로컬 저장소 기술을 어떻게 활용하는지 설명합니다.",
      "침해적인 광고 추적을 배제하고 투명하고 안전한 웹 환경을 제공합니다."
    ],
    sections: [
      {
        heading: "1. 쿠키 및 로컬 저장소란?",
        content: "웹사이트가 방문자의 기기에 저장하는 작은 데이터 조각으로, 사용자의 기본 설정을 기억하는 데 사용됩니다."
      },
      {
        heading: "2. 사용 목적",
        bullets: [
          "테마 환경설정: 라이트/다크 인터페이스 선택 상태 저장.",
          "도구 조작값 기억: 밝기 및 색온도 조절 바의 현재 세션 유지.",
          "보안 유지: 악성 트래픽을 차단하기 위한 CDN 보안 인증."
        ]
      },
      {
        heading: "3. 사용자 관리 방법",
        content: "브라우저의 개인정보 설정 메뉴에서 저장된 쿠키와 로컬 데이터를 언제든지 확인하고 삭제할 수 있습니다."
      }
    ]
  },
  license: {
    title: "라이선스 및 저작권 - TheWhiteScreen.org",
    metaDescription: "TheWhiteScreen.org 라이선스 정책: 퍼블릭 도메인(CC0) 단색 배경화면 및 콘텐츠 권리 안내.",
    h1: "라이선스 및 저작권",
    lastUpdated: "2026-10-23",
    paragraphs: [
      "TheWhiteScreen.org는 제공하는 모든 디지털 자산에 대해 명확하고 투명한 라이선스를 적용합니다.",
      "사용자가 저작권 분쟁에 대한 염려 없이 자유롭게 도구를 이용할 수 있도록 보장합니다."
    ],
    sections: [
      {
        heading: "1. 다운로드된 배경화면 자산",
        content: "본 도구를 통해 생성되는 모든 단색 배경화면은 크리에이티브 커먼즈 제로(CC0 1.0 Universal) 퍼블릭 도메인으로 제공됩니다. 출처 표기 없이 개인적 및 상업적 용도로 모두 자유롭게 사용할 수 있습니다."
      },
      {
        heading: "2. 기술 가이드 및 사이트 디자인",
        content: "TheWhiteScreen.org의 기술 문서, 사이트 디자인, 브랜드 로고는 저작권법의 보호를 받으며 무단 전재 및 복제를 금합니다."
      }
    ]
  }
};
