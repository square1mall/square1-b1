/*
=================================================================
THE GREAT SQUARE1 B1 — 관리 파일 목차
※ 아래 관리영역은 실제 홈페이지 화면의 위→아래 순서로 정리했습니다.
※ 이벤트 내용·이미지·기간 등은 아래 관리영역에서 수정하고,
   그 아래의 기능 코드는 가급적 수정하지 마세요.

[01] MAIN — 메인 이미지/영상, PC·모바일 문구 및 위치
[02] NOW AT B1 — 카테고리 문구와 링크 (index.html에서 수정)
[03] EVENT & PROMOTION — 마케팅 이벤트 카드/기간/상세내용
[04] BRAND EVENT — 브랜드 이벤트 카드/기간/상세내용
[05] B1 BRAND — 브랜드 로고 이미지/이름
[06] B1 FLOOR GUIDE — 안내 문구/도면 이미지 (index.html 및 images 폴더)
[07] MORE SQUARE1 — 하단 홈페이지/인스타그램/카카오톡 링크

[관리 방법]
- 이벤트는 [03]과 [04] 구역에 각각 모아두었습니다.
- 이벤트 노출 순서는 각 항목의 order 숫자로 정합니다.
- 상세페이지 내용은 각 이벤트의 content / info에서 수정합니다.
- 이미지 파일을 교체할 때는 기존 파일명 또는 코드의 경로를 함께 확인하세요.
=================================================================
*/




// =========================================================
// [01] MAIN — HERO 메인 배너 관리 영역 (PC/모바일 이미지·영상)
// type: "image" / "video"
// image: pc + mobile 각각 파일 지정
// video: pc / mobile 영상을 각각 지정할 수 있습니다.
// duration: 이미지가 보여지는 시간(초)
// start / end: 영상에서 보여줄 구간(초). end를 비우면 영상 끝까지.
// =========================================================
const HERO_DEFAULT_DURATION = 5; // 이미지 기본 노출 시간(초)

// ⭐ 메인 비주얼 화면 크기·이미지 위치 관리 — PC와 모바일을 각각 수정하세요.
// height: 메인 비주얼 영역의 세로 높이 (예: "1040px", "85vh")
// positionX / positionY: 이미지·영상의 보이는 기준 위치 (0%~100%, 예: "50%", "40%")
// fit: "cover"는 화면을 꽉 채우며 일부 잘릴 수 있고, "contain"은 전체 이미지가 보이며 여백이 생길 수 있습니다.
const HERO_LAYOUT = {
  pc: {
    height: "1040px",
    positionX: "50%",
    positionY: "10%",
    fit: "cover"
  },
  mobile: {
    height: "760px",
    positionX: "50%",
    positionY: "50%",
    fit: "cover"
  }
};

// ⭐ 메인 문구 관리 — PC와 모바일을 각각 독립적으로 수정하세요.
// title: 메인 영문 문구 / copyLines: 한 줄씩 입력하면 해당 위치에서 줄바꿈됩니다.
// fontSize, fontWeight, color, lineHeight, letterSpacing: 글자 스타일
// titleX/titleY, copyX/copyY: 각 문구 위치 / contentLeft, contentBottom: 문구 묶음 위치
const HERO_TEXT = {
  pc: {
    title: "THE GREAT SQUARE1",
    titleFontSize: "clamp(48px, 6vw, 90px)", titleFontWeight: "700", titleColor: "#ffffff",
    titleLineHeight: "0.9", titleLetterSpacing: "-0.01em", titleX: "0px", titleY: "0px",
    copyLines: ["스퀘어원, 지하층까지 확장!", "기대하세요!"],
    copyFontSize: "clamp(22px, 2.8vw, 40px)", copyFontWeight: "400", copyColor: "#ffffff",
    copyLineHeight: "1.45", copyLetterSpacing: "-0.04em", copyX: "0px", copyY: "0px",
    contentLeft: "48px", contentBottom: "68px"
  },
  mobile: {
    title: "THE GREAT SQUARE1",
    titleFontSize: "clamp(32px, 8vw, 48px)", titleFontWeight: "700", titleColor: "#ffffff",
    titleLineHeight: "0.95", titleLetterSpacing: "-0.02em", titleX: "0px", titleY: "0px",
    copyLines: ["스퀘어원, 지하층까지 확장!", "기대하세요!"],
    copyFontSize: "clamp(18px, 4.8vw, 25px)", copyFontWeight: "500", copyColor: "#ffffff",
    copyLineHeight: "1.5", copyLetterSpacing: "-0.04em", copyX: "0px", copyY: "0px",
    contentLeft: "24px", contentBottom: "68px"
  }
};

// ⭐ 메인 비주얼 관리 — 위에서부터 순서대로 재생됩니다.
// type: "image" 또는 "video"
// image: pc/mobile에 각각 JPG 경로 지정
// video: pc/mobile에 각각 MP4 경로 지정, pcFallback/mobileFallback은 영상 오류 시 대체 이미지
// duration: 이미지 노출 시간(초) / start·end: 영상 재생 시작·종료 구간(초)
// 원하는 순서로 항목을 이동하거나 복사해 추가하세요.
const HERO_SLIDES = [
  {
    type: "video",
    pc: "images/main-video-pc.mp4",
    mobile: "images/main-video-mobile.mp4",
    pcFallback: "images/main-pc-01.jpg",
    mobileFallback: "images/main-mobile-01.jpg",
    start: 0,
    end: "" // 빈 값이면 영상이 끝난 뒤 다음 슬라이드로 이동
  },
  {
    type: "image",
    pc: "images/main-pc-01.jpg",
    mobile: "images/main-mobile-01.jpg",
    duration: 5
  },
  {
    type: "image",
    pc: "images/main-pc-02.jpg",
    mobile: "images/main-mobile-02.jpg",
    duration: 5
  }
  // ⭐ JPG 추가 예시 — images 폴더에 파일을 넣고 아래 항목을 복사해 추가하세요.
  // ,{ type: "image", pc: "images/main-pc-03.jpg", mobile: "images/main-mobile-03.jpg", duration: 5 }
  // ⭐ 영상 추가 예시
  // ,{ type: "video", pc: "images/main-video-pc-02.mp4", mobile: "images/main-video-mobile-02.mp4", pcFallback: "images/main-pc-01.jpg", mobileFallback: "images/main-mobile-01.jpg", start: 0, end: "" }
];


// =========================================================
// [02] NOW AT B1 — 카테고리 문구와 링크
// 이 영역은 events.js가 아니라 index.html에서 수정합니다.
// =========================================================

// =========================================================
// [03] EVENT & PROMOTION / [04] BRAND EVENT — 이벤트 관리
// 아래 EVENTS 목록은 마케팅 이벤트를 먼저, 브랜드 이벤트를 다음에 배치했습니다.
// 각 이벤트의 order 값은 각 구역 안에서 표시 순서를 결정합니다.
// =========================================================
const EVENTS = [
  // -------------------------------------------------------
  // [03] EVENT & PROMOTION — 마케팅 이벤트를 이 구역에 모아 관리
  // type: "marketing" / order 숫자가 작을수록 해당 구역에서 먼저 표시
  // -------------------------------------------------------
  {
      // ⭐ ① 이벤트 순서 — 숫자가 작을수록 먼저 표시
      order: 1,
      id: "event01",
      // ⭐ ①-1 구역: marketing = 마케팅 / brand = 브랜드 이벤트
      type: "marketing", // [03] EVENT & PROMOTION
      mode: "auto",
      startDate: "2026-11-01",
      startTime: "10:00",
      endDate: "2026-12-25",
      endTime: "22:00",
  
      // ⭐ ② 카드에 표시되는 정보
      label: "EVENT",
      title: "크리스마스 산타 퍼레이드",
      dateText: "2026. 12. 25 — 12. 25",
      thumb: "images/event01-thumb.jpg",
  
      // ⭐ ③ 상세페이지 맨 위 메인 이미지
      detailImage: "images/event01.jpg",
      // ⭐ ③-1 상세페이지 MP4 영상 (없으면 ""로 두세요)
      // detailVideo: "images/event01-video.mp4",
  
      // ⭐ ④ 상세페이지 본문 — 아래 한 줄씩만 수정하세요!
      // HEADING = 소제목 / TEXT = 본문 / IMAGE = 이미지 / DIVIDER = 구분선 / BUTTON = 버튼
      // 작성한 순서 그대로 상세페이지에 표시됩니다.
      // ⭐ 예시 내용이 입력되어 있습니다.
      // ⭐ 실제 이벤트가 확정되면 아래 문구만 바꿔주세요.
      content: [
        "HEADING|THE GREAT SQUARE1 B1 GRAND OPEN",
        "TEXT|새롭게 확장된 THE GREAT SQUARE1 B1에서 더욱 다양한 쇼핑과 라이프스타일을 만나보세요.",
        "HEADING|신규 오픈 기념 특별 이벤트",
        "TEXT|THE GREAT SQUARE1 B1 신규 오픈을 기념해 특별한 이벤트를 준비했습니다.",
        "DIVIDER",
        "HEADING|이벤트 안내",
        "TEXT|기간 내 B1에서 진행되는 다양한 이벤트와 혜택을 확인해보세요."
      ],
  
      // ⭐ ⑤ EVENT INFORMATION — 필요한 것만 남기고 순서도 자유롭게 변경
      info: [
        { label: "기간", value: "2026. 12. 25 — 12. 25" },
        { label: "장소", value: "스퀘어원 몰순회" },
        { label: "참여방법", value: "" }
      ]
    },
  {
      order: 2,
      id: "event02",
      // ⭐ ①-1 구역: marketing = 마케팅 / brand = 브랜드 이벤트
      type: "marketing", // [03] EVENT & PROMOTION
      mode: "auto",
      startDate: "2026-11-27",
      startTime: "10:00",
      endDate: "2026-12-31",
      endTime: "22:00",
  
      label: "SPECIAL EVENT",
      title: "겨울속 한장면 스노우 트리",
      dateText: "2026. 12. 01 — 12. 31",
      thumb: "images/event02-thumb.jpg",
      detailImage: "images/event02.jpg",
  
      content: [
        // "HEADING|이벤트 혜택",
        // "TEXT|이벤트 상세 내용을 입력하세요.",
        // "IMAGE|images/event02-detail-01.jpg|이벤트 상세 이미지"
      ],
  
      info: [
        { label: "기간", value: "소진시까지" },
        { label: "장소", value: "야외 Gate1 크리스마스트리 앞" },
        { label: "참여방법", value: "" }
      ]
    },

  {
      order: 3,
      id: "event03",
      // ⭐ ①-1 구역: marketing = 마케팅 / brand = 브랜드 이벤트
      type: "marketing", // [03] EVENT & PROMOTION
      mode: "auto",
      startDate: "2026-11-04",
      startTime: "10:00",
      endDate: "2026-12-31",
      endTime: "22:00",
  
      label: "SPECIAL EVENT",
      title: "B1 GRAND OPENING EVENT",
      dateText: "2026. 11. 04 — 12. 31",
      thumb: "images/event03-thumb.jpg",
      detailImage: "images/event03.jpg",
  
      content: [
        // "HEADING|이벤트 혜택",
        // "TEXT|이벤트 상세 내용을 입력하세요.",
        // "IMAGE|images/event03-detail-02.jpg|이벤트 상세 이미지"
      ],
  
      info: [
        { label: "기간", value: "소진시까지" },
        { label: "장소", value: "THE GREAT SQUARE1 B1" },
        { label: "참여방법", value: "" }
      ]
    },

  {
      order: 4,
      id: "event04",
      // ⭐ ①-1 구역: marketing = 마케팅 / brand = 브랜드 이벤트
      type: "marketing", // [03] EVENT & PROMOTION
      mode: "auto",
      startDate: "2026-11-04",
      startTime: "10:00",
      endDate: "2026-12-31",
      endTime: "22:00",
  
      label: "EVENT",
      title: "신규 오픈 기념 특별 이벤트",
      dateText: "2026. 11. 04 — 12. 31",
      thumb: "images/event04-thumb.jpg",
      detailImage: "images/event04.jpg",
  
      content: [
        // "HEADING|이벤트 혜택",
        // "TEXT|이벤트 상세 내용을 입력하세요.",
        // "IMAGE|images/event04-detail-02.jpg|이벤트 상세 이미지"
      ],
  
      info: [
        { label: "기간", value: "2026. 11. 04 — 12. 31" },
        { label: "장소", value: "THE GREAT SQUARE1 B1" },
        { label: "참여방법", value: "" }
      ]
    },

  // -------------------------------------------------------
  // [04] BRAND EVENT — 입점 브랜드 이벤트를 이 구역에 모아 관리
  // type: "brand" / order 숫자가 작을수록 해당 구역에서 먼저 표시
  // -------------------------------------------------------
  {
      order: 1,
      id: "brandevent01",
      // ⭐ ①-1 구역: marketing = 마케팅 / brand = 브랜드 이벤트
      type: "brand", // [04] BRAND EVENT
      mode: "auto",
      startDate: "2026-11-25",
      startTime: "10:00",
      endDate: "2027-01-05",
      endTime: "22:00",
  
      label: "OPEN EVENT",
      title: "오픈 세일 최대 50%",
      dateText: "2026. 11. 25 — 2027. 01. 05",
      thumb: "images/brandevent01-thumb.jpg",
      detailImage: "images/brandevent01.jpg",
  
      content: [
        // "HEADING|이벤트 혜택",
        // "TEXT|이벤트 상세 내용을 입력하세요.",
        // "IMAGE|images/brandevent01-detail-01.jpg|이벤트 상세 이미지"
      ],
  
      info: [
        { label: "기간", value: "2026. 11. 25 — 2027. 01. 05 " },
        { label: "장소", value: "THE GREAT SQUARE1 B1" },
        { label: "참여방법", value: "" }
      ]
    },  
{
      order: 2,
      id: "brandevent02",
      // ⭐ ①-1 구역: marketing = 마케팅 / brand = 브랜드 이벤트
      type: "brand", // [04] BRAND EVENT
      mode: "auto",
      startDate: "2026-11-05",
      startTime: "10:00",
      endDate: "2026-12-30",
      endTime: "22:00",
  
      label: "OPEN EVENT",
      title: "새롭게 만나는 B1 신규 브랜드",
      dateText: "2026. 11. 05 — 12. 30",
      thumb: "images/brandevent02-thumb.jpg",
      detailImage: "images/brandevent02.jpg",
  
      content: [
        // "HEADING|이벤트 혜택",
        // "TEXT|이벤트 상세 내용을 입력하세요.",
        // "IMAGE|images/event02-detail-02.jpg|이벤트 상세 이미지"
      ],
  
      info: [
        { label: "기간", value: "2026. 11. 05 — 12. 30 " },
        { label: "장소", value: "THE GREAT SQUARE1 B1" },
        { label: "참여방법", value: "" }
      ]
    },
  {
      order: 3,
      id: "brandevent03",
      // ⭐ ①-1 구역: marketing = 마케팅 / brand = 브랜드 이벤트
      type: "brand", // [04] BRAND EVENT
      mode: "auto",
      startDate: "2026-11-27",
      startTime: "10:00",
      endDate: "2027-01-30",
      endTime: "22:00",
  
      label: "OPEN EVENT",
      title: "GRAND OPEN EVENT",
      dateText: "2026. 11. 27 — 2027. 01. 01",
      thumb: "images/brandevent03-thumb.jpg",
      detailImage: "images/brandevent03.jpg",
  
      content: [
        // "HEADING|이벤트 혜택",
        // "TEXT|이벤트 상세 내용을 입력하세요.",
        // "IMAGE|images/brandevent03-detail-01.jpg|이벤트 상세 이미지"
      ],
  
      info: [
        { label: "기간", value: "2026. 11. 27 — 2027. 01. 01 " },
        { label: "장소", value: "THE GREAT SQUARE1 B1" },
        { label: "참여방법", value: "" }
      ]
    },
 {
      order: 4,
      id: "brandevent04",
      // ⭐ ①-1 구역: marketing = 마케팅 / brand = 브랜드 이벤트
      type: "brand", // [04] BRAND EVENT
      mode: "auto",
      startDate: "2026-11-27",
      startTime: "10:00",
      endDate: "2027-01-30",
      endTime: "22:00",
  
      label: "GRAND OPEN EVENT",
      title: "GRRAND OPEN EVENT",
      dateText: "2026. 11. 27 — 2027. 01. 01",
      thumb: "images/brandevent04-thumb.jpg",
      detailImage: "images/brandevent04.jpg",
  
      content: [
        // "HEADING|이벤트 혜택",
        // "TEXT|이벤트 상세 내용을 입력하세요.",
        // "IMAGE|images/brandevent04-detail-01.jpg|이벤트 상세 이미지"
      ],
  
      info: [
        { label: "기간", value: "2026. 11. 27 — 2027. 01. 01 " },
        { label: "장소", value: "THE GREAT SQUARE1 B1" },
        { label: "참여방법", value: "" }
      ]
    },


];

// =========================================================
// [05] B1 BRAND — 브랜드 로고 관리 영역
// 6개를 넘으면 PC에서는 6개씩 보이고, 1개씩 이동합니다.
// 모바일에서는 손가락으로 좌우 스와이프할 수 있습니다.
// 이미지 파일은 images 폴더에 넣고 경로와 이름을 수정하세요.
// =========================================================
const BRAND_LOGOS = [
  { image: "images/brand01.jpg", name: "B1 BRAND 01" },
  { image: "images/brand02.jpg", name: "B1 BRAND 02" },
  { image: "images/brand03.jpg", name: "B1 BRAND 03" },
  { image: "images/brand04.jpg", name: "B1 BRAND 04" },
  { image: "images/brand05.jpg", name: "B1 BRAND 05" },
  { image: "images/brand06.jpg", name: "B1 BRAND 06" }
];

// =========================================================
// [END] ⭐ 이벤트 관리 영역

// [06] B1 FLOOR GUIDE
// 층별안내 문구와 이미지 배치는 index.html에서 수정합니다.
// 이미지 파일: images/floor-map-pc.jpg / images/floor-map-mobile.jpg


// =========================================================
// [07] MORE SQUARE1 — 하단 바로가기 링크 관리 영역
// 홈페이지 / 인스타그램 / 카카오톡 채널 주소를 수정하세요.
// =========================================================
const QUICK_LINKS = {
  homepage: "https://www.square1.co.kr",
  instagram: "https://www.instagram.com/square1_incheon/",
  kakao: "https://pf.kakao.com/_dExfVj"
};
// =========================================================
// [END] ⭐ 바로가기 링크 관리 영역

/* =========================================================
   THE GREAT SQUARE1 B1 — EVENT MANAGEMENT CENTER (V28)

   ========================================================
   ⭐⭐⭐  이벤트를 수정할 때는 이 파일의 [관리영역]만 수정하세요!  ⭐⭐⭐
   ========================================================

   📌 상세페이지 본문은 이제 어렵게 { type: ... }를 쓰지 않습니다.
   아래처럼 한 줄씩 작성하면 됩니다.

   [소제목]
   "HEADING|이벤트 혜택"

   [본문]
   "TEXT|신규 오픈을 기념하여 특별한 혜택을 준비했습니다."

   [이미지]
   "IMAGE|images/event01-detail-02.jpg|이벤트 상세 이미지"

   [구분선]
   "DIVIDER"

   [버튼]
   "BUTTON|자세히 보기|https://example.com"

   ⭐ 위 줄들을 원하는 순서로 배치하면 상세페이지도 같은 순서로 표시됩니다.

   ========================================================
   [관리영역에서 자주 수정하는 것]
   ① order        : 이벤트 표시 순서 (1, 2, 3...)
   ② mode         : auto / on / off
   ③ 기간          : startDate / startTime / endDate / endTime
   ④ 카드 정보      : label / title / dateText / thumb
   ⑤ 상세 메인 이미지 : detailImage
   ⑥ 상세 본문      : content 안의 한 줄들을 추가/삭제/순서변경
   ⑦ EVENT INFORMATION : info 안에서 기간/장소/참여방법 순서 변경

   [mode]
   - "auto" : 설정한 날짜/시간에만 자동 노출
   - "on"   : 날짜와 상관없이 항상 노출
   - "off"  : 항상 숨김

   [EVENT INFORMATION]
   - 필요 없는 항목은 value를 ""로 비워두세요. 해당 줄이 자동으로 숨겨집니다.
   - 기간은 "소진시까지"처럼 자유롭게 입력할 수 있습니다.
   - 줄의 순서를 바꾸면 화면의 순서도 바뀝니다.

   [새 이벤트 추가]
   1. 아래 이벤트 하나를 복사합니다.
   2. id를 event05, event06처럼 새로 지정합니다.
   3. images 폴더에 썸네일/상세 이미지를 넣습니다.
   4. 내용과 기간을 수정합니다.
   5. 저장하면 메인·전체목록·상세페이지에 자동 반영됩니다.
   ======================================================== */


// =========================================================


// =========================================================
// 아래부터는 화면 출력·슬라이드 동작을 담당하는 기능 코드입니다.
// 일반적인 이벤트/이미지/문구 수정 시에는 위 관리영역만 수정하세요.
// =========================================================

// [FUNCTION 01] 공통 링크 / 이벤트 데이터 처리
function renderQuickLinks() {
  document.querySelectorAll("[data-quick-link]").forEach(link => {
    const key = link.dataset.quickLink;
    if (QUICK_LINKS[key]) link.href = QUICK_LINKS[key];
  });
}

function sortedEvents() {
  return EVENTS.slice().sort((a, b) => {
    const ao = Number.isFinite(Number(a.order)) ? Number(a.order) : 9999;
    const bo = Number.isFinite(Number(b.order)) ? Number(b.order) : 9999;
    return ao - bo;
  });
}

function eventIsVisible(event) {
  if (event.mode === "on") return true;
  if (event.mode === "off") return false;

  const start = new Date(`${event.startDate}T${event.startTime || "00:00"}:00`);
  const end = new Date(`${event.endDate}T${event.endTime || "23:59"}:59`);
  const now = new Date();
  return now >= start && now <= end;
}

function eventUrl(event) {
  return `event.html?id=${encodeURIComponent(event.id)}`;
}

// ⭐ 이벤트 구역별 전체목록 페이지
function eventListUrl(type) {
  return type === "brand" ? "events-brand.html" : "events-marketing.html";
}

function eventTypeLabel(type) {
  return type === "brand" ? "BRAND EVENT" : "EVENT & PROMOTION";
}

function eventTypeTitle(type) {
  return type === "brand" ? "브랜드 이벤트 & 할인" : "마케팅 이벤트 & 프로모션";
}

function createEventCard(event) {
  const a = document.createElement("a");
  a.className = "event-card";
  a.href = eventUrl(event);
  a.innerHTML = `
    <img src="${event.thumb}" alt="${escapeHtml(event.title || "이벤트")}">
    <div class="event-card-text">
      <small>${escapeHtml(event.label || "")}</small>
      <h3>${escapeHtml(event.title || "")}</h3>
      <p>${escapeHtml(event.dateText || "")}</p>
    </div>
    <b>↗</b>
  `;
  return a;
}

function createEventListCard(event) {
  const a = document.createElement("a");
  a.className = "list-card";
  a.href = eventUrl(event);
  a.innerHTML = `
    <small>${escapeHtml(event.label || "")}</small>
    <h2>${escapeHtml(event.title || "")}</h2>
    <p>${escapeHtml(event.dateText || "")}</p>
  `;
  return a;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderEventCarousel(listEl, events, key) {
  if (!listEl) return;
  listEl.innerHTML = "";
  if (!events.length) {
    listEl.innerHTML = '<p class="event-empty">현재 진행 중인 이벤트가 없습니다.</p>';
    return;
  }
  const shell = document.createElement("div");
  shell.className = "event-carousel-shell";
  const viewport = document.createElement("div");
  viewport.className = "event-carousel-viewport";
  viewport.dataset.carousel = key;
  const track = document.createElement("div");
  track.className = "event-carousel-track";

  events.forEach(event => track.appendChild(createEventCard(event)));
  if (events.length > 1) {
    events.forEach(event => {
      const clone = createEventCard(event);
      clone.setAttribute("aria-hidden", "true");
      clone.dataset.carouselClone = "true";
      track.appendChild(clone);
    });
  }
  viewport.appendChild(track);
  shell.appendChild(viewport);
  // 마케팅 이벤트와 브랜드 이벤트 모두 같은 PC 화살표 컨트롤을 사용합니다.
  {
    const controls = document.createElement("div");
    controls.className = "event-carousel-controls";
    controls.innerHTML = `
      <button type="button" class="event-carousel-arrow event-carousel-prev" aria-label="이전 이벤트" ${events.length <= 1 ? "disabled" : ""}>‹</button>
      <button type="button" class="event-carousel-arrow event-carousel-next" aria-label="다음 이벤트" ${events.length <= 1 ? "disabled" : ""}>›</button>
    `;
    shell.appendChild(controls);
  }
  listEl.appendChild(shell);
  setupEventCarousel(viewport, track, events.length, shell);
}

function setupEventCarousel(viewport, track, originalCount, shell) {
  if (originalCount <= 1) return;

  let raf = null;
  let paused = false;
  let dragging = false;
  let pointerInside = false;
  let startX = 0;
  let startScroll = 0;
  let lastTime = performance.now();
  let loopWidth = 0;

  // PC 자동 이동 속도(px/초)
  const speed = 36;

  function isDesktop() {
    return window.matchMedia('(min-width: 768px)').matches;
  }

  function measureLoopWidth() {
    // 첫 번째 원본 카드부터 첫 번째 복제 카드까지의 거리가
    // 원본 카드 한 묶음의 정확한 이동 거리입니다.
    const firstCard = track.children[0];
    const firstClone = track.children[originalCount];
    if (!firstCard || !firstClone) return 0;
    return firstClone.getBoundingClientRect().left - firstCard.getBoundingClientRect().left;
  }

  function ensureCloneWidth() {
    loopWidth = measureLoopWidth();
    if (loopWidth <= 0) return;

    // 한 묶음 + 화면 너비 이상의 복제 영역을 항상 확보합니다.
    // 원본 카드만 복제하므로 복제본이 다시 복제되는 일은 없습니다.
    const originals = Array.from(track.children).slice(0, originalCount);
    const minimumTrackWidth = loopWidth * 2 + viewport.clientWidth;
    let safety = 0;
    while (track.scrollWidth < minimumTrackWidth && safety < 20) {
      originals.forEach(source => {
        const clone = source.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        clone.dataset.carouselClone = 'true';
        track.appendChild(clone);
      });
      safety++;
    }
    loopWidth = measureLoopWidth();
  }

  function normalizeScroll() {
    if (loopWidth <= 0) {
      loopWidth = measureLoopWidth();
      if (loopWidth <= 0) return;
    }

    // 복제된 카드 묶음 구간에서 원본 묶음의 동일 위치로 순환시킵니다.
    // 모듈로 정규화해 빠른 드래그/화살표 이동에도 끝에 걸리지 않습니다.
    if (viewport.scrollLeft >= loopWidth || viewport.scrollLeft < 0) {
      viewport.scrollLeft = ((viewport.scrollLeft % loopWidth) + loopWidth) % loopWidth;
    }
  }

  function resumeIfPossible() {
    if (!pointerInside && !dragging && isDesktop() && document.visibilityState !== 'hidden') {
      paused = false;
      lastTime = performance.now();
    }
  }

  function moveOne(direction) {
    const first = track.children[0];
    if (!first) return;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const amount = first.getBoundingClientRect().width + gap;

    paused = true;
    viewport.scrollTo({ left: viewport.scrollLeft + direction * amount, behavior: 'smooth' });
    window.setTimeout(() => {
      normalizeScroll();
      resumeIfPossible();
    }, 550);
  }

  const prev = shell.querySelector('.event-carousel-prev');
  const next = shell.querySelector('.event-carousel-next');
  if (prev) prev.addEventListener('click', () => moveOne(-1));
  if (next) next.addEventListener('click', () => moveOne(1));

  function tick(now) {
    const dt = Math.min(50, now - lastTime) / 1000;
    lastTime = now;

    if (isDesktop() && !paused && !dragging && document.visibilityState !== 'hidden') {
      viewport.scrollLeft += speed * dt;
      normalizeScroll();
    }
    raf = requestAnimationFrame(tick);
  }

  // 기존 동작 유지: PC에서 마우스를 올리면 잠시 멈추고 벗어나면 재개합니다.
  viewport.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse' && isDesktop()) {
      pointerInside = true;
      paused = true;
    }
  });
  viewport.addEventListener('pointerleave', event => {
    if (event.pointerType === 'mouse') {
      pointerInside = false;
      resumeIfPossible();
    }
  });

  viewport.addEventListener('mousedown', event => {
    if (!isDesktop() || event.button !== 0) return;
    dragging = true;
    startX = event.clientX;
    startScroll = viewport.scrollLeft;
    viewport.classList.add('is-dragging');
    paused = true;
  });
  window.addEventListener('mousemove', event => {
    if (!dragging) return;
    viewport.scrollLeft = startScroll - (event.clientX - startX);
    normalizeScroll();
  });
  window.addEventListener('mouseup', () => {
    if (!dragging) return;
    dragging = false;
    viewport.classList.remove('is-dragging');
    resumeIfPossible();
  });

  window.addEventListener('blur', () => { paused = true; });
  window.addEventListener('focus', resumeIfPossible);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') paused = true;
    else {
      resumeIfPossible();
      lastTime = performance.now();
    }
  });

  // 모바일은 기존처럼 자동 이동 없이 터치 스와이프를 유지합니다.
  viewport.addEventListener('touchstart', () => {}, { passive: true });

  function startLoop() {
    ensureCloneWidth();
    if (raf !== null) cancelAnimationFrame(raf);
    raf = null;
    if (isDesktop()) {
      lastTime = performance.now();
      raf = requestAnimationFrame(tick);
    }
  }

  startLoop();
  window.addEventListener('resize', () => {
    // 화면 크기 변경으로 카드 폭/간격이 달라져도 반복 기준을 다시 계산합니다.
    startLoop();
  });
}

// [FUNCTION 04] B1 BRAND — 브랜드 로고 슬라이드
function renderBrandCarousel() {
  const scroller = document.querySelector("#brand-scroller");
  const arrows = document.querySelector("#brand-arrows");
  if (!scroller) return;

  scroller.innerHTML = "";
  BRAND_LOGOS.forEach((brand, index) => {
    const card = document.createElement("div");
    card.className = "brand-card";
    card.innerHTML = `<img src="${brand.image}" alt="${escapeHtml(brand.name || `B1 BRAND ${index+1}`)}">`;
    scroller.appendChild(card);
  });

  const showArrows = BRAND_LOGOS.length > 6;
  if (arrows) arrows.style.display = showArrows ? "flex" : "none";
  if (!showArrows) return;

  const prev = arrows.querySelector(".brand-prev");
  const next = arrows.querySelector(".brand-next");

  function moveOne(direction) {
    const first = scroller.querySelector(".brand-card");
    if (!first) return;
    const gap = parseFloat(getComputedStyle(scroller).gap) || 0;
    const amount = first.getBoundingClientRect().width + gap;
    scroller.scrollBy({left: direction * amount, behavior:"smooth"});
  }

  prev.onclick = () => moveOne(-1);
  next.onclick = () => moveOne(1);
}

// [FUNCTION 03-04] EVENT & PROMOTION / BRAND EVENT — 이벤트 출력
function renderEvents() {
  const visibleEvents = sortedEvents().filter(eventIsVisible);

  const marketingEvents = visibleEvents.filter(event => (event.type || "marketing") === "marketing");
  const brandEvents = visibleEvents.filter(event => event.type === "brand");

  renderEventCarousel(document.querySelector("#event-list-marketing"), marketingEvents, "marketing");
  renderEventCarousel(document.querySelector("#event-list-brand"), brandEvents, "brand");

  const marketingAll = document.querySelector("#event-list-marketing-all");
  if (marketingAll) {
    marketingAll.innerHTML = "";
    if (marketingEvents.length) marketingEvents.forEach(event => marketingAll.appendChild(createEventListCard(event)));
    else marketingAll.innerHTML = '<p class="event-empty">현재 진행 중인 마케팅 이벤트가 없습니다.</p>';
  }

  const brandAll = document.querySelector("#event-list-brand-all");
  if (brandAll) {
    brandAll.innerHTML = "";
    if (brandEvents.length) brandEvents.forEach(event => brandAll.appendChild(createEventListCard(event)));
    else brandAll.innerHTML = '<p class="event-empty">현재 진행 중인 브랜드 이벤트가 없습니다.</p>';
  }
}


// [FUNCTION 01] MAIN — 메인 비주얼 슬라이드
function renderHero() {
  const slider = document.querySelector("#hero-slider");
  const dots = document.querySelector("#hero-dots");
  const prevBtn = document.querySelector(".hero-prev");
  const nextBtn = document.querySelector(".hero-next");
  const hero = document.querySelector("#hero");
  const titleEl = document.querySelector("#hero-title");
  const copyEl = document.querySelector("#hero-copy");
  if (!slider || !Array.isArray(HERO_SLIDES) || !HERO_SLIDES.length) return;

  slider.innerHTML = "";
  if (dots) dots.innerHTML = "";

  let current = 0;
  let timer = null;
  let activeVideo = null;
  let touchStartX = 0;
  let pointerStartX = 0;
  let pointerDragging = false;
  let resizeTimer = null;

  function isMobile() { return window.matchMedia("(max-width: 899px)").matches; }

  // PC·모바일 메인 비주얼 높이와 이미지/영상 위치를 설정값에 맞춰 적용합니다.
  function applyHeroLayout() {
    const cfg = isMobile() ? HERO_LAYOUT.mobile : HERO_LAYOUT.pc;
    if (!cfg) return;
    if (hero && cfg.height) hero.style.height = cfg.height;
    slider.querySelectorAll(".hero-media").forEach(media => {
      media.style.objectFit = cfg.fit || "cover";
      media.style.objectPosition = `${cfg.positionX || "50%"} ${cfg.positionY || "50%"}`;
    });
  }

  function applyHeroText() {
    const cfg = isMobile() ? HERO_TEXT.mobile : HERO_TEXT.pc;
    if (!cfg) return;
    if (titleEl) {
      titleEl.textContent = cfg.title || "";
      titleEl.style.fontSize = cfg.titleFontSize || "";
      titleEl.style.fontWeight = cfg.titleFontWeight || "";
      titleEl.style.color = cfg.titleColor || "";
      titleEl.style.lineHeight = cfg.titleLineHeight || "";
      titleEl.style.letterSpacing = cfg.titleLetterSpacing || "";
      titleEl.style.transform = `translate(${cfg.titleX || "0px"}, ${cfg.titleY || "0px"})`;
    }
    if (copyEl) {
      copyEl.replaceChildren();
      (cfg.copyLines || []).forEach((line, index) => {
        if (index) copyEl.appendChild(document.createElement("br"));
        copyEl.appendChild(document.createTextNode(line));
      });
      copyEl.style.fontSize = cfg.copyFontSize || "";
      copyEl.style.fontWeight = cfg.copyFontWeight || "";
      copyEl.style.color = cfg.copyColor || "";
      copyEl.style.lineHeight = cfg.copyLineHeight || "";
      copyEl.style.letterSpacing = cfg.copyLetterSpacing || "";
      copyEl.style.transform = `translate(${cfg.copyX || "0px"}, ${cfg.copyY || "0px"})`;
    }
    const content = hero ? hero.querySelector(".hero-content") : null;
    if (content) {
      content.style.paddingLeft = cfg.contentLeft || "";
      content.style.paddingBottom = cfg.contentBottom || "";
    }
  }
  applyHeroText();

  HERO_SLIDES.forEach((slide, index) => {
    const item = document.createElement("div");
    item.className = "hero-slide";
    item.dataset.index = String(index);
    item.dataset.type = slide.type || "image";

    if (slide.type === "video") {
      const fallback = document.createElement("picture");
      fallback.className = "hero-video-fallback-wrap";
      const source = document.createElement("source");
      source.media = "(max-width: 899px)";
      source.srcset = slide.mobileFallback || slide.mobile || slide.pcFallback || slide.pc || "";
      const fallbackImg = document.createElement("img");
      fallbackImg.className = "hero-media hero-video-fallback";
      fallbackImg.src = slide.pcFallback || slide.pc || slide.mobileFallback || slide.mobile || "";
      fallbackImg.alt = "";
      fallback.append(source, fallbackImg);

      const video = document.createElement("video");
      video.className = "hero-media hero-video";
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      item.append(fallback, video);
      item.dataset.pc = slide.pc || "";
      item.dataset.mobile = slide.mobile || "";
      item.dataset.start = String(Number(slide.start ?? 0));
      item.dataset.end = slide.end === "" || slide.end == null ? "" : String(Number(slide.end));
    } else {
      const picture = document.createElement("picture");
      const source = document.createElement("source");
      source.media = "(max-width: 899px)";
      source.srcset = slide.mobile || slide.pc || "";
      const img = document.createElement("img");
      img.className = "hero-media";
      img.src = slide.pc || slide.mobile || "";
      img.alt = "";
      img.loading = index === 0 ? "eager" : "lazy";
      picture.append(source, img);
      item.appendChild(picture);
    }
    slider.appendChild(item);

    if (dots) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "hero-dot";
      dot.setAttribute("aria-label", `배너 ${index + 1}`);
      dot.addEventListener("click", () => goTo(index, true));
      dots.appendChild(dot);
    }
  });

  applyHeroLayout();
  const slides = Array.from(slider.querySelectorAll(".hero-slide"));
  const dotEls = dots ? Array.from(dots.querySelectorAll(".hero-dot")) : [];

  function stopTimer() {
    if (timer !== null) { clearTimeout(timer); timer = null; }
  }
  function stopVideo() {
    if (!activeVideo) return;
    activeVideo.pause();
    activeVideo.onended = null;
    activeVideo.onerror = null;
    activeVideo.ontimeupdate = null;
    activeVideo = null;
  }
  function updateUI() {
    slides.forEach((slide, index) => slide.classList.toggle("is-active", index === current));
    dotEls.forEach((dot, index) => dot.classList.toggle("is-active", index === current));
    if (prevBtn) prevBtn.style.display = slides.length > 1 ? "" : "none";
    if (nextBtn) nextBtn.style.display = slides.length > 1 ? "" : "none";
    if (dots) dots.style.display = slides.length > 1 ? "" : "none";
  }
  function goTo(index) {
    if (!slides.length) return;
    current = (index + slides.length) % slides.length;
    scheduleCurrent();
  }
  function scheduleCurrent() {
    stopTimer();
    stopVideo();
    updateUI();
    const item = slides[current];
    const slide = HERO_SLIDES[current] || {};

    if (slide.type === "video") {
      const video = item.querySelector("video");
      const fallback = item.querySelector(".hero-video-fallback-wrap");
      const src = isMobile() ? (item.dataset.mobile || item.dataset.pc) : (item.dataset.pc || item.dataset.mobile);
      if (src && video) {
        if (video.dataset.source !== src) {
          video.pause();
          video.src = src;
          video.dataset.source = src;
          video.load();
        }
        video.style.display = "block";
        if (fallback) fallback.style.display = "none";
        activeVideo = video;
        const start = Number(slide.start ?? 0);
        const end = slide.end === "" || slide.end == null ? null : Number(slide.end);
        const advance = () => { if (slides[current] === item) goTo(current + 1); };
        video.onended = advance;
        video.onerror = () => {
          if (fallback) fallback.style.display = "block";
          video.style.display = "none";
          activeVideo = null;
          timer = setTimeout(advance, Math.max(1, Number(slide.duration || HERO_DEFAULT_DURATION)) * 1000);
        };
        video.ontimeupdate = () => {
          if (end !== null && video.currentTime >= end - 0.05) {
            video.ontimeupdate = null;
            video.pause();
            advance();
          }
        };
        const playWhenReady = () => {
          if (slides[current] !== item || activeVideo !== video) return;
          try { video.currentTime = Math.max(0, start); } catch (e) {}
          video.play().catch(() => {
            // 자동재생이 차단된 경우에도 슬라이더가 멈추지 않도록 영상 길이 또는 기본 시간 후 이동
            const wait = end !== null && end > start ? (end - start) : (video.duration || Number(slide.duration) || HERO_DEFAULT_DURATION);
            timer = setTimeout(advance, Math.max(1, wait) * 1000);
          });
        };
        if (video.readyState >= 1) playWhenReady();
        else video.addEventListener("loadedmetadata", playWhenReady, { once: true });
        return;
      }
      if (fallback) fallback.style.display = "block";
      if (video) video.style.display = "none";
    }
    const duration = Math.max(0.5, Number(slide.duration || HERO_DEFAULT_DURATION)) * 1000;
    timer = setTimeout(() => goTo(current + 1), duration);
  }

  if (prevBtn) prevBtn.addEventListener("click", e => { e.preventDefault(); e.stopPropagation(); goTo(current - 1); });
  if (nextBtn) nextBtn.addEventListener("click", e => { e.preventDefault(); e.stopPropagation(); goTo(current + 1); });
  slider.addEventListener("touchstart", e => { if (e.touches[0]) touchStartX = e.touches[0].clientX; }, { passive: true });
  slider.addEventListener("touchend", e => {
    if (!e.changedTouches[0]) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 45) goTo(current + (dx < 0 ? 1 : -1));
  }, { passive: true });
  slider.addEventListener("mousedown", e => {
    if (!window.matchMedia("(min-width: 768px)").matches) return;
    pointerDragging = true; pointerStartX = e.clientX; slider.classList.add("is-dragging");
  });
  window.addEventListener("mouseup", e => {
    if (!pointerDragging) return;
    const dx = e.clientX - pointerStartX;
    pointerDragging = false; slider.classList.remove("is-dragging");
    if (Math.abs(dx) > 50) goTo(current + (dx < 0 ? 1 : -1));
  });
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { applyHeroLayout(); applyHeroText(); scheduleCurrent(); }, 120);
  });
  scheduleCurrent();
}

(function(){
  function setText(selector, value) {
    const el = document.querySelector(selector);
    if (!el) return;
    el.textContent = value || "";
  }

  function renderContent(event) {
    const box = document.querySelector(".detail-copy");
    if (!box) return;
    box.innerHTML = "";

    const blocks = Array.isArray(event.content) ? event.content : [];
    let count = 0;

    blocks.forEach(item => {
      if (typeof item !== "string") return;

      const parts = item.split("|");
      const type = (parts.shift() || "").trim().toUpperCase();
      const value = parts.shift() || "";

      if (type === "HEADING" && value.trim()) {
        const el = document.createElement("h3");
        el.textContent = value;
        box.appendChild(el);
        count++;
      }

      if (type === "TEXT" && value.trim()) {
        const el = document.createElement("p");
        el.textContent = value;
        box.appendChild(el);
        count++;
      }

      if (type === "IMAGE" && value.trim()) {
        const el = document.createElement("img");
        el.src = value.trim();
        el.alt = parts.join("|").trim() || "이벤트 상세 이미지";
        el.className = "detail-content-image";
        box.appendChild(el);
        count++;
      }

      if (type === "DIVIDER") {
        const el = document.createElement("hr");
        el.className = "detail-content-divider";
        box.appendChild(el);
        count++;
      }

      if (type === "BUTTON" && value.trim()) {
        const url = parts.join("|").trim();
        if (!url) return;
        const el = document.createElement("a");
        el.href = url;
        el.target = "_blank";
        el.rel = "noopener noreferrer";
        el.className = "detail-content-button";
        el.textContent = value.trim();
        box.appendChild(el);
        count++;
      }
    });

    box.style.display = count ? "" : "none";
  }

  function renderInfo(event) {
    const box = document.querySelector(".detail-box");
    if (!box) return;

    const rows = Array.isArray(event.info)
      ? event.info.filter(row => row && row.value !== undefined && String(row.value).trim() !== "")
      : [];

    const text = box.querySelector(".detail-info-text");
    if (!text) return;

    text.innerHTML = "";
    rows.forEach(row => {
      const wrap = document.createElement("div");
      wrap.className = "detail-info-row";

      const label = document.createElement("strong");
      label.textContent = row.label || "";

      const value = document.createElement("span");
      value.textContent = row.value || "";

      wrap.appendChild(label);
      wrap.appendChild(value);
      text.appendChild(wrap);
    });

    box.style.display = rows.length ? "" : "none";
  }

  function renderEventNavigation(currentEvent){
    const nav = document.querySelector(".event-nav");
    if(!nav) return;

    // ⭐ 상세페이지 이전/다음도 같은 구역(type)의 이벤트끼리만 이동
    const currentType = currentEvent.type === "brand" ? "brand" : "marketing";
    const visibleEvents = sortedEvents()
      .filter(eventIsVisible)
      .filter(event => (event.type === "brand" ? "brand" : "marketing") === currentType);

    const currentIndex = visibleEvents.findIndex(e => e.id === currentEvent.id);
    const prevBtn = nav.querySelector(".event-prev");
    const nextBtn = nav.querySelector(".event-next");

    if(currentIndex > 0 && prevBtn){
      prevBtn.href = eventUrl(visibleEvents[currentIndex - 1]);
      prevBtn.textContent = "← 이전 이벤트";
      prevBtn.style.display = "";
    }else if(prevBtn){
      prevBtn.style.display = "none";
    }

    if(currentIndex >= 0 && currentIndex < visibleEvents.length - 1 && nextBtn){
      nextBtn.href = eventUrl(visibleEvents[currentIndex + 1]);
      nextBtn.textContent = "다음 이벤트 →";
      nextBtn.style.display = "";
    }else if(nextBtn){
      nextBtn.style.display = "none";
    }
  }

  function renderDetail(){
    const id = new URLSearchParams(location.search).get("id");
    if(!id) return;

    const event = EVENTS.find(e => e.id === id);
    if(!event) return;

    document.title = `${event.title || "이벤트"} | THE GREAT SQUARE1 B1`;

    const currentType = event.type === "brand" ? "brand" : "marketing";
    setText(".detail-section-label", eventTypeLabel(currentType));
    setText(".detail-section-title", eventTypeTitle(currentType));

    const backLinks = document.querySelectorAll(".event-list-back");
    backLinks.forEach(link => {
      link.href = eventListUrl(currentType);
      link.textContent = currentType === "brand"
        ? "← 브랜드 이벤트 리스트로 돌아가기"
        : "← 마케팅 이벤트 리스트로 돌아가기";
    });

    const headerBack = document.querySelector(".detail-list-back");
    if (headerBack) {
      headerBack.href = eventListUrl(currentType);
      headerBack.textContent = currentType === "brand" ? "← BRAND EVENT" : "← EVENT & PROMOTION";
    }

    setText(".detail-label-text", event.label);
    setText(".detail-title", event.title);
    setText(".detail-date", event.dateText);

    const img = document.querySelector(".detail-hero");
    let video = document.querySelector(".detail-video");

    if (!video) {
      video = document.createElement("video");
      video.className = "detail-video";
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("playsinline", "");
      if (img) img.insertAdjacentElement("afterend", video);
    }

    if (event.detailVideo) {
      if (img) img.style.display = "none";
      video.src = event.detailVideo;
      video.style.display = "";
    } else if (img && event.detailImage) {
      video.style.display = "none";
      video.removeAttribute("src");
      video.load();
      img.src = event.detailImage;
      img.alt = event.title || "";
      img.style.display = "";
    } else {
      video.style.display = "none";
      video.removeAttribute("src");
      if (img) img.style.display = "none";
    }

    renderContent(event);
    renderInfo(event);
    renderEventNavigation(event);
  }

  document.addEventListener("DOMContentLoaded", function(){
    // 홈페이지 위→아래 순서대로 화면을 초기화합니다.
    renderHero();          // [01] MAIN
    renderEvents();        // [03] EVENT & PROMOTION / [04] BRAND EVENT
    renderBrandCarousel(); // [05] B1 BRAND
    renderQuickLinks();    // [07] MORE SQUARE1
    renderDetail();        // 이벤트 상세 페이지에서만 표시
  });
})();
