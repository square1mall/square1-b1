from pathlib import Path
import re, zipfile, shutil
root=Path('/mnt/data/v26work')

# Replace events.js with V26 centralized manager
js = r'''/* =========================================================
   ⭐ THE GREAT SQUARE1 B1 — 이벤트 관리
   앞으로 이벤트를 추가/수정할 때는 이 파일의 EVENTS 영역만 수정하세요.

   [관리 순서]
   1) 이벤트 순서       → order 숫자만 변경
   2) 노출 여부/기간    → mode / startDate / startTime / endDate / endTime
   3) 카드 정보         → label / title / dateText / thumb
   4) 상세 메인 이미지  → detailImage
   5) 상세 본문         → content 안에 블록을 추가/삭제/순서변경
   6) EVENT INFORMATION → info 안에 원하는 순서대로 입력

   [mode]
   - "auto" : 설정한 기간에 자동 노출
   - "on"   : 날짜와 상관없이 강제 노출
   - "off"  : 강제 숨김

   [본문 content 사용법]
   { type: "heading", text: "소제목" }
   { type: "text", text: "본문 내용을 입력하세요." }
   { type: "image", src: "images/추가이미지.jpg", alt: "이미지 설명" }
   { type: "divider" }
   { type: "button", text: "자세히 보기", url: "https://example.com" }

   [EVENT INFORMATION info 사용법]
   원하는 순서대로 줄을 작성하면 그 순서 그대로 표시됩니다.
   value가 비어 있으면 해당 줄은 자동으로 숨겨집니다.
   예) 기간을 "소진시까지"로 쓰고 싶다면 value에 그대로 입력하세요.
   ========================================================= */

const EVENTS = [
  {
    // ⭐ 이벤트 노출 순서 — 숫자가 작을수록 먼저 표시
    order: 1,
    id: "event01",
    mode: "auto",
    startDate: "2026-09-01",
    startTime: "10:00",
    endDate: "2026-09-30",
    endTime: "22:00",

    label: "EVENT",
    title: "신규 오픈 기념 특별 이벤트",
    dateText: "2026. 09. 01 — 09. 30",
    thumb: "images/event01-thumb.jpg",
    detailImage: "images/event01.jpg",

    // ===== ⭐ 상세페이지 본문 =====
    // 아래 블록을 원하는 만큼 추가/삭제/순서변경하세요.
    content: [
      // { type: "heading", text: "EVENT TITLE" },
      // { type: "text", text: "이벤트 상세 내용을 입력하세요.\n줄바꿈도 가능합니다." },
      // { type: "image", src: "images/event01-detail-02.jpg", alt: "이벤트 상세 이미지" },
      // { type: "divider" },
      // { type: "button", text: "자세히 보기", url: "https://example.com" }
    ],

    // ===== ⭐ EVENT INFORMATION =====
    // 줄 순서를 바꾸면 화면의 순서도 바뀝니다.
    // 참여방법이 없으면 value를 ""로 두세요.
    info: [
      { label: "기간", value: "2026. 09. 01 — 09. 30" },
      { label: "장소", value: "THE GREAT SQUARE1 B1" },
      { label: "참여방법", value: "이벤트 참여방법을 입력하세요." }
    ]
  },

  {
    order: 2,
    id: "event02",
    mode: "auto",
    startDate: "2026-09-03",
    startTime: "10:00",
    endDate: "2026-09-20",
    endTime: "22:00",

    label: "OPEN EVENT",
    title: "새롭게 만나는 B1 신규 브랜드",
    dateText: "2026. 09. 05 — 09. 20",
    thumb: "images/event02-thumb.jpg",
    detailImage: "images/event02.jpg",

    content: [],

    info: [
      { label: "기간", value: "2026. 09. 05 — 09. 20" },
      { label: "장소", value: "THE GREAT SQUARE1 B1" },
      { label: "참여방법", value: "" }
    ]
  },

  {
    order: 3,
    id: "event03",
    mode: "auto",
    startDate: "2026-09-03",
    startTime: "10:00",
    endDate: "2026-09-30",
    endTime: "22:00",

    label: "SPECIAL EVENT",
    title: "B1 GRAND OPENING EVENT",
    dateText: "2026. 09. 10 — 09. 30",
    thumb: "images/event03-thumb.jpg",
    detailImage: "images/event03.jpg",

    content: [],

    info: [
      { label: "기간", value: "소진시까지" },
      { label: "장소", value: "THE GREAT SQUARE1 B1" },
      { label: "참여방법", value: "" }
    ]
  },

  {
    order: 4,
    id: "event04",
    mode: "auto",
    startDate: "2026-09-01",
    startTime: "10:00",
    endDate: "2026-09-30",
    endTime: "22:00",

    label: "EVENT",
    title: "신규 오픈 기념 특별 이벤트",
    dateText: "2026. 09. 01 — 09. 30",
    thumb: "images/event04-thumb.jpg",
    detailImage: "images/event04.jpg",

    content: [],

    info: [
      { label: "기간", value: "2026. 09. 01 — 09. 30" },
      { label: "장소", value: "THE GREAT SQUARE1 B1" },
      { label: "참여방법", value: "" }
    ]
  }
];

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

function createEventCard(event) {
  const a = document.createElement("a");
  a.className = "event-card";
  a.href = eventUrl(event);
  a.innerHTML = `
    <img src="${event.thumb}" alt="${escapeHtml(event.title || "이벤트")}">
    <div>
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

function renderEvents() {
  const visibleEvents = sortedEvents().filter(eventIsVisible);

  const mainList = document.querySelector("#event-list-auto");
  if (mainList) {
    mainList.innerHTML = "";
    visibleEvents.forEach(event => mainList.appendChild(createEventCard(event)));
  }

  const allList = document.querySelector("#event-list-all-auto");
  if (allList) {
    allList.innerHTML = "";
    visibleEvents.forEach(event => allList.appendChild(createEventListCard(event)));
  }
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

    blocks.forEach(block => {
      if (!block || !block.type) return;
      const type = String(block.type).toLowerCase();

      if (type === "heading" && block.text) {
        const el = document.createElement("h3");
        el.textContent = block.text;
        box.appendChild(el);
        count++;
      }

      if (type === "text" && block.text) {
        const el = document.createElement("p");
        el.textContent = block.text;
        box.appendChild(el);
        count++;
      }

      if (type === "image" && block.src) {
        const el = document.createElement("img");
        el.src = block.src;
        el.alt = block.alt || "";
        el.className = "detail-content-image";
        if (block.width) el.style.width = block.width;
        if (block.align) el.style.marginLeft = block.align === "left" ? "0" : block.align === "right" ? "auto" : "auto";
        if (block.align === "right") el.style.marginRight = "0";
        else if (block.align === "center" || !block.align) el.style.marginRight = "auto";
        box.appendChild(el);
        count++;
      }

      if (type === "divider") {
        const el = document.createElement("hr");
        el.className = "detail-content-divider";
        box.appendChild(el);
        count++;
      }

      if (type === "button" && block.url && block.text) {
        const el = document.createElement("a");
        el.href = block.url;
        el.target = "_blank";
        el.rel = "noopener noreferrer";
        el.className = "detail-content-button";
        el.textContent = block.text;
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

    const visibleEvents = sortedEvents().filter(eventIsVisible);
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

    setText(".detail-label-text", event.label);
    setText(".detail-title", event.title);
    setText(".detail-date", event.dateText);

    const img = document.querySelector(".detail-hero");
    if(img && event.detailImage){
      img.src = event.detailImage;
      img.alt = event.title || "";
      img.style.display = "";
    } else if (img) {
      img.style.display = "none";
    }

    renderContent(event);
    renderInfo(event);
    renderEventNavigation(event);
  }

  document.addEventListener("DOMContentLoaded", function(){
    renderEvents();
    renderDetail();
  });
})();
'''
(root/'events.js').write_text(js, encoding='utf-8')

# Update event.html with clear template comments and optional detail hero
html = r'''<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>이벤트 | THE GREAT SQUARE1 B1</title>
<link rel="stylesheet" href="event-detail.css">
</head>
<body>
<header class="page-top">
  <a class="page-logo" href="index.html"><img src="images/logo.png" alt="THE GREAT SQUARE1"></a>
  <a class="back" href="events.html">← EVENT LIST</a>
</header>

<main class="event-detail">
  <!-- ⭐ 아래 내용은 events.js에서 이벤트 ID에 맞춰 자동 입력됩니다. -->
  <p class="detail-label"><span class="detail-label-text"></span></p>
  <h1 class="detail-title"></h1>
  <p class="detail-date"></p>

  <!-- 상세 메인 이미지: events.js의 detailImage -->
  <img class="detail-hero" src="" alt="">

  <!-- ⭐ 상세 본문: events.js의 content에서 입력한 순서대로 표시 -->
  <div class="detail-copy"></div>

  <!-- ⭐ EVENT INFORMATION: events.js의 info 순서대로 표시 -->
  <div class="detail-box">
    <h2>EVENT INFORMATION</h2>
    <div class="detail-info-text"></div>
  </div>

  <div class="detail-actions">
    <a class="detail-btn" href="events.html">← 전체 이벤트 리스트로 돌아가기</a>
  </div>

  <div class="event-nav">
    <a class="detail-btn event-prev" href="#">← 이전 이벤트</a>
    <a class="detail-btn event-next" href="#">다음 이벤트 →</a>
  </div>
</main>

<footer>THE GREAT SQUARE1 · © SQUARE1. ALL RIGHTS RESERVED.</footer>
<script src="events.js"></script>
</body>
</html>
'''
(root/'event.html').write_text(html, encoding='utf-8')

# Add content CSS, preserving all existing styles
css_path=root/'event-detail.css'
css=css_path.read_text(encoding='utf-8')
extra=r'''

/* ===== V26 상세 본문 블록 ===== */
.detail-copy h3{
  margin:32px 0 12px;
  font-family:"Noto Sans KR";
  font-size:20px;
  font-weight:700;
  line-height:1.5;
  letter-spacing:-.03em;
  color:var(--detail-text)
}
.detail-copy p{
  margin:0 0 18px;
  white-space:pre-line
}
.detail-content-image{
  display:block;
  width:100%;
  max-width:100%;
  height:auto;
  margin:26px auto;
  border-radius:14px
}
.detail-content-divider{
  border:0;
  border-top:1px solid rgba(255,255,255,.12);
  margin:32px 0
}
.detail-content-button{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  margin:8px 0 24px;
  padding:12px 20px;
  border:1px solid var(--detail-button-border);
  border-radius:999px;
  font-family:"Noto Sans KR";
  font-size:12px;
  font-weight:600;
  color:var(--detail-button-color)
}
'''
if '/* ===== V26 상세 본문 블록 ===== */' not in css:
    css += extra
css_path.write_text(css, encoding='utf-8')

# Write updated guide
(root/'EVENT_MANAGEMENT_GUIDE.txt').write_text(r'''THE GREAT SQUARE1 B1 이벤트 관리 안내 — V26

⭐ 앞으로 이벤트를 수정할 때는 events.js의 EVENTS 영역만 수정하면 됩니다.
별도의 event01.html, event02.html 파일을 만들 필요가 없습니다.

[1. 이벤트 순서]
각 이벤트의 order 숫자로 순서를 자유롭게 정합니다.
- order: 1 → 첫 번째
- order: 2 → 두 번째
- order: 3 → 세 번째
숫자가 작을수록 먼저 표시됩니다.
이 순서는 메인 이벤트 카드, 전체 이벤트 리스트, 이전/다음 이벤트에 모두 적용됩니다.
예: event04를 맨 앞으로 보내고 싶으면 event04의 order를 1로 바꾸고 기존 1번을 2 이상으로 변경하세요.

[2. 이벤트 추가]
- EVENTS 배열에 이벤트 하나를 복사해 추가합니다.
- id를 event05처럼 변경합니다.
- images 폴더에 event05-thumb.jpg(카드용), event05.jpg(상세용)을 넣습니다.
- order 숫자를 지정합니다.
- 별도의 event05.html은 만들 필요가 없습니다.

[3. 노출 설정]
mode: "auto" = 설정한 기간에 맞춰 자동 노출
mode: "on"   = 날짜와 상관없이 노출
mode: "off"  = 숨김

[4. 날짜/시간]
startDate/startTime = 노출 시작
endDate/endTime = 노출 종료
※ 고객에게 보여주는 기간 문구는 dateText와 info의 기간을 따로 수정할 수 있습니다.
※ 실제 이벤트 기간이 "소진시까지"라면 EVENT INFORMATION의 value를 "소진시까지"로 입력하면 됩니다.

[5. 카드 + 상세 기본 정보]
label = 이벤트 분류
title = 이벤트 제목
dateText = 카드/상세 상단에 보이는 날짜
thumb = 카드 이미지
detailImage = 상세 메인 이미지

[6. ⭐ 상세페이지 본문 편집]
content 안에 원하는 블록을 원하는 순서대로 넣습니다.

① 일반 본문
{ type: "text", text: "이벤트 내용을 입력하세요." }

② 소제목
{ type: "heading", text: "EVENT BENEFIT" }

③ 추가 이미지
{ type: "image", src: "images/event01-detail-02.jpg", alt: "상세 이미지" }
※ 해당 이미지는 images 폴더에 넣어주세요.

④ 구분선
{ type: "divider" }

⑤ 외부 링크 버튼
{ type: "button", text: "자세히 보기", url: "https://example.com" }

예시:
content: [
  { type: "heading", text: "이벤트 혜택" },
  { type: "text", text: "첫 번째 혜택을 입력하세요.\n줄바꿈도 가능합니다." },
  { type: "image", src: "images/event01-detail-02.jpg", alt: "혜택 이미지" },
  { type: "heading", text: "참여 안내" },
  { type: "text", text: "참여방법을 입력하세요." }
]

※ content가 비어 있으면 상세 메인 이미지 아래 본문 영역이 자동으로 숨겨집니다.

[7. ⭐ EVENT INFORMATION]
info 안에 원하는 순서대로 입력합니다.
예:
info: [
  { label: "기간", value: "소진시까지" },
  { label: "장소", value: "THE GREAT SQUARE1 B1" },
  { label: "참여방법", value: "1층 안내데스크에서 참여" }
]

- 참여방법이 없으면 value: "" 로 입력 → 해당 줄 자동 숨김
- 기간이 소진시라면 value: "소진시까지" 입력
- 순서를 바꾸면 화면 순서도 그대로 바뀜
- 원하는 항목을 추가할 수도 있음
  예) { label: "문의", value: "032-000-0000" }

[8. 이전/다음 이벤트]
order 순서 + 현재 자동 노출 중인 이벤트 기준으로 자동 연결됩니다.
숨김(off) 또는 기간이 지난 이벤트는 이전/다음 이동에서 제외됩니다.

※ 이벤트 상세페이지는 event.html 하나만 사용합니다.
※ 기존 event01.html~event04.html은 _old-event-pages 폴더에 백업되어 있습니다.
''', encoding='utf-8')

# Add a beginner guide specifically for V26
(root/'V26_DETAIL_EDIT_GUIDE.txt').write_text(r'''V26 상세페이지 편집 초간단 가이드

⭐ 정말 자주 수정할 부분은 events.js 안의 각 이벤트입니다.

1. 제목 바꾸기
   title: "여기에 제목"

2. 이벤트 순서 바꾸기
   order: 1
   숫자를 바꾸세요. 작은 숫자가 먼저 나옵니다.

3. 기간 문구 바꾸기
   info: [
     { label: "기간", value: "소진시까지" },
     ...
   ]

4. 참여방법 없애기
   { label: "참여방법", value: "" }

5. 본문 추가하기
   content: [
     { type: "text", text: "본문을 입력하세요." }
   ]

6. 본문에 소제목 + 문장 + 추가 이미지를 넣기
   content: [
     { type: "heading", text: "이벤트 혜택" },
     { type: "text", text: "혜택 내용을 입력하세요." },
     { type: "image", src: "images/event01-detail-02.jpg", alt: "혜택 이미지" }
   ]

7. 본문 순서 바꾸기
   content 배열 안에서 블록의 위치를 위/아래로 옮기면 됩니다.

8. 새 이벤트 만들기
   기존 이벤트 하나를 통째로 복사 → id/title/images/order/기간 등을 새 이벤트에 맞게 변경.
   event05.html은 만들지 않습니다.
''', encoding='utf-8')

# Zip all project files
out=Path('/mnt/data/THE_GREAT_SQUARE1_B1_v26_DETAIL_EDITOR_FINAL.zip')
if out.exists(): out.unlink()
with zipfile.ZipFile(out,'w',zipfile.ZIP_DEFLATED) as z:
    for p in root.rglob('*'):
        if p.is_file() and p.name != out.name:
            z.write(p, p.relative_to(root))
print(out, out.stat().st_size)
