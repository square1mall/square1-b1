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
// [START] ⭐ 이벤트 관리 영역 — 이 부분만 수정하세요!
//
// ⭐ 구역 구분: type: "marketing" = 마케팅팀 이벤트 / type: "brand" = 입점 브랜드 이벤트
// ⭐ 예: type: "brand"로 바꾸면 메인 화면의 BRAND EVENT 영역에 표시됩니다.
// =========================================================

// =========================================================
// [START] ⭐ 바로가기 링크 관리 영역 — 이 부분만 수정하세요!
//
// ⭐ 메인 홈 화면 맨 아래 MORE SQUARE1 바로가기 링크입니다.
// ⭐ 홈페이지 / 인스타그램 / 카카오톡 채널 주소만 바꾸면 됩니다.
// =========================================================
const QUICK_LINKS = {
  homepage: "https://www.square1.co.kr",
  instagram: "https://www.instagram.com/square1_incheon/",
  kakao: "https://pf.kakao.com/_dExfVj"
};
// =========================================================
// [END] ⭐ 바로가기 링크 관리 영역


// =========================================================
// ⭐ HERO 메인 배너 관리 영역 — 여기만 수정하세요!
// type: "image" / "video"
// image: pc + mobile 각각 파일 지정
// video: pc / mobile 영상을 각각 지정할 수 있습니다.
// duration: 이미지가 보여지는 시간(초)
// start / end: 영상에서 보여줄 구간(초). end를 비우면 영상 끝까지.
// =========================================================
const HERO_DEFAULT_DURATION = 3;

const HERO_SLIDES = [
  {
    type: "video",
    // ⭐ PC용 영상: 가로형 MP4를 넣을 경우 파일명만 수정하세요.
    pc: "",
    // ⭐ 모바일용 영상: 첨부해주신 15초 세로 영상을 사용합니다.
    mobile: "images/main-video-mobile.mp4",
    // ⭐ PC용 영상이 없을 때 대신 보여줄 PC 이미지
    pcFallback: "images/main-pc.jpg",
    start: 0,
    end: 15
  },
  {
    type: "image",
    pc: "images/main-pc.jpg",
    mobile: "images/main-mobile.jpg",
    duration: 3
  }
];

// =========================================================
// ⭐ B1 브랜드 로고 관리 영역 — 여기만 수정하세요!
// 6개를 넘으면 PC에서는 6개씩 보이고, 1개씩 이동합니다.
// 모바일에서는 손가락으로 좌우 스와이프할 수 있습니다.
// =========================================================
const BRAND_LOGOS = [
  { image: "images/brand01.jpg", name: "B1 BRAND 01" },
  { image: "images/brand02.jpg", name: "B1 BRAND 02" },
  { image: "images/brand03.jpg", name: "B1 BRAND 03" },
  { image: "images/brand04.jpg", name: "B1 BRAND 04" },
  { image: "images/brand05.jpg", name: "B1 BRAND 05" },
  { image: "images/brand06.jpg", name: "B1 BRAND 06" }
];

const EVENTS = [
  {
    // ⭐ ① 이벤트 순서 — 숫자가 작을수록 먼저 표시
    order: 1,
    id: "event01",
    // ⭐ ①-1 구역: marketing = 마케팅 / brand = 브랜드 이벤트
    type: "marketing",
    mode: "auto",
    startDate: "2026-09-01",
    startTime: "10:00",
    endDate: "2026-09-30",
    endTime: "22:00",

    // ⭐ ② 카드에 표시되는 정보
    label: "EVENT",
    title: "신규 오픈 기념 특별 이벤트",
    dateText: "2026. 09. 01 — 09. 30",
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
      { label: "기간", value: "2026. 09. 01 — 09. 30" },
      { label: "장소", value: "THE GREAT SQUARE1 B1" },
      { label: "참여방법", value: "" }
    ]
  },

  {
    order: 2,
    id: "event02",
    // ⭐ ①-1 구역: marketing = 마케팅 / brand = 브랜드 이벤트
    type: "brand",
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

    content: [
      // "HEADING|이벤트 혜택",
      // "TEXT|이벤트 상세 내용을 입력하세요.",
      // "IMAGE|images/event02-detail-02.jpg|이벤트 상세 이미지"
    ],

    info: [
      { label: "기간", value: "2026. 09. 05 — 09. 20" },
      { label: "장소", value: "THE GREAT SQUARE1 B1" },
      { label: "참여방법", value: "" }
    ]
  },

  {
    order: 3,
    id: "event03",
    // ⭐ ①-1 구역: marketing = 마케팅 / brand = 브랜드 이벤트
    type: "marketing",
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
    type: "marketing",
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

    content: [
      // "HEADING|이벤트 혜택",
      // "TEXT|이벤트 상세 내용을 입력하세요.",
      // "IMAGE|images/event04-detail-02.jpg|이벤트 상세 이미지"
    ],

    info: [
      { label: "기간", value: "2026. 09. 01 — 09. 30" },
      { label: "장소", value: "THE GREAT SQUARE1 B1" },
      { label: "참여방법", value: "" }
    ]
  }
];

// =========================================================
// [END] ⭐ 이벤트 관리 영역
// =========================================================




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

  // 모바일은 자연스러운 터치 스크롤, PC는 JS로 연속 자동 이동합니다.
  const viewport = document.createElement("div");
  viewport.className = "event-carousel-viewport";
  viewport.dataset.carousel = key;

  const track = document.createElement("div");
  track.className = "event-carousel-track";

  // 카드가 부족해도 PC에서 자연스럽게 흐르도록 최소 2세트를 만듭니다.
  const copies = events.length === 1 ? 1 : Math.max(2, Math.ceil(8 / events.length));
  for (let i = 0; i < copies; i++) {
    events.forEach(event => track.appendChild(createEventCard(event)));
  }

  viewport.appendChild(track);
  listEl.appendChild(viewport);

  setupEventCarousel(viewport, track, events.length, key);
}

function setupEventCarousel(viewport, track, originalCount, key) {
  if (originalCount <= 1) return;
  let raf = null;
  let paused = false;
  let dragging = false;
  let startX = 0;
  let startScroll = 0;
  let lastTime = performance.now();
  const speed = 28; // PC 자동 이동 속도(px/sec)

  function isDesktop() {
    return window.matchMedia("(min-width: 768px)").matches;
  }

  function tick(now) {
    const dt = Math.min(50, now - lastTime) / 1000;
    lastTime = now;

    if (isDesktop() && !paused && !dragging) {
      viewport.scrollLeft += speed * dt;
      const half = track.scrollWidth / 2;
      if (half > 0 && viewport.scrollLeft >= half) {
        viewport.scrollLeft -= half;
      }
    }
    raf = requestAnimationFrame(tick);
  }

  viewport.addEventListener("mouseenter", () => paused = true);
  viewport.addEventListener("mouseleave", () => paused = false);

  viewport.addEventListener("mousedown", e => {
    if (!isDesktop()) return;
    dragging = true;
    startX = e.clientX;
    startScroll = viewport.scrollLeft;
    viewport.classList.add("is-dragging");
  });

  window.addEventListener("mousemove", e => {
    if (!dragging) return;
    viewport.scrollLeft = startScroll - (e.clientX - startX);
  });

  window.addEventListener("mouseup", () => {
    dragging = false;
    viewport.classList.remove("is-dragging");
  });

  viewport.addEventListener("touchstart", e => {
    if (isDesktop()) return;
    startX = e.touches[0].clientX;
    startScroll = viewport.scrollLeft;
  }, {passive:true});

  viewport.addEventListener("touchmove", e => {
    if (isDesktop()) return;
    const dx = startX - e.touches[0].clientX;
    viewport.scrollLeft = startScroll + dx;
  }, {passive:true});

  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(tick);
}

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


function renderHero() {
  const slider = document.querySelector("#hero-slider");
  const dots = document.querySelector("#hero-dots");
  const prevBtn = document.querySelector(".hero-prev");
  const nextBtn = document.querySelector(".hero-next");
  if (!slider || !Array.isArray(HERO_SLIDES) || !HERO_SLIDES.length) return;

  slider.innerHTML = "";
  if (dots) dots.innerHTML = "";

  let current = 0;
  let timer = null;
  let activeVideo = null;
  let touchStartX = 0;
  let pointerStartX = 0;
  let pointerDragging = false;

  HERO_SLIDES.forEach((slide, index) => {
    const item = document.createElement("div");
    item.className = "hero-slide";
    item.dataset.index = String(index);

    if (slide.type === "video") {
      const fallback = document.createElement("img");
      fallback.className = "hero-media hero-video-fallback";
      fallback.src = slide.pcFallback || slide.pc || slide.mobile || "";
      fallback.alt = "";

      const video = document.createElement("video");
      video.className = "hero-media hero-video";
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");

      item.appendChild(fallback);
      item.appendChild(video);
      item.dataset.pc = slide.pc || "";
      item.dataset.mobile = slide.mobile || "";
      item.dataset.fallback = slide.pcFallback || slide.pc || slide.mobile || "";
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
      picture.appendChild(source);
      picture.appendChild(img);
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

  const slides = Array.from(slider.querySelectorAll(".hero-slide"));
  const dotEls = dots ? Array.from(dots.querySelectorAll(".hero-dot")) : [];

  function isMobile() {
    return window.matchMedia("(max-width: 899px)").matches;
  }

  function stopTimer() {
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function stopVideo() {
    if (!activeVideo) return;
    activeVideo.pause();
    activeVideo.removeEventListener("timeupdate", handleVideoTime);
    activeVideo = null;
  }

  function applyVideoSource(item) {
    const video = item.querySelector("video");
    const fallback = item.querySelector(".hero-video-fallback");
    if (!video) return false;

    const src = isMobile() ? item.dataset.mobile : item.dataset.pc;
    const isVideo = /\.(mp4|webm|ogg)(\?|$)/i.test(src || "");

    if (!isVideo || !src) {
      video.pause();
      video.removeAttribute("src");
      video.load();
      video.style.display = "none";
      if (fallback) {
        fallback.src = item.dataset.fallback || "";
        fallback.style.display = "block";
      }
      return false;
    }

    if (fallback) fallback.style.display = "none";
    video.style.display = "block";

    if (video.dataset.source !== src) {
      video.pause();
      video.src = src;
      video.dataset.source = src;
      video.load();
    }
    return true;
  }

  function handleVideoTime() {
    if (!activeVideo) return;
    const item = slides[current];
    const end = item.dataset.end === "" ? null : Number(item.dataset.end);
    if (end !== null && activeVideo.currentTime >= end - 0.05) {
      goTo(current + 1, false);
    }
  }

  function updateUI() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === current);
    });
    dotEls.forEach((dot, index) => {
      dot.classList.toggle("is-active", index === current);
    });
  }

  function scheduleCurrent() {
    stopTimer();
    stopVideo();
    updateUI();

    const item = slides[current];
    const slide = HERO_SLIDES[current] || {};

    if (slide.type === "video") {
      const hasVideo = applyVideoSource(item);
      if (hasVideo) {
        const video = item.querySelector("video");
        const start = Number(slide.start ?? 0);
        const end = slide.end === "" || slide.end == null ? null : Number(slide.end);
        activeVideo = video;

        const startPlayback = () => {
          if (slides[current] !== item || !activeVideo) return;
          try { video.currentTime = Math.max(0, start); } catch (e) {}
          video.removeEventListener("timeupdate", handleVideoTime);
          video.addEventListener("timeupdate", handleVideoTime);
          video.play().catch(() => {
            // 자동재생이 막혀도 사용자가 다음 슬라이드로 이동할 수 있도록 합니다.
            if (end !== null && end > start) {
              timer = setTimeout(() => goTo(current + 1, false), (end - start) * 1000);
            }
          });
        };

        if (video.readyState >= 1) startPlayback();
        else video.addEventListener("loadedmetadata", startPlayback, { once: true });
        return;
      }
    }

    // 이미지 슬라이드 또는 PC에서 영상이 없는 경우: 항상 자동 전환
    const duration = Math.max(0.5, Number(slide.duration || HERO_DEFAULT_DURATION)) * 1000;
    timer = setTimeout(() => goTo(current + 1, false), duration);
  }

  function goTo(index, userAction) {
    if (!slides.length) return;
    current = (index + slides.length) % slides.length;
    scheduleCurrent();
  }

  // 버튼은 DOMContentLoaded 이후에 존재하므로 여기서 직접 연결합니다.
  if (prevBtn) prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    goTo(current - 1, true);
  });
  if (nextBtn) nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    goTo(current + 1, true);
  });

  slider.addEventListener("touchstart", (e) => {
    if (e.touches[0]) touchStartX = e.touches[0].clientX;
  }, { passive: true });
  slider.addEventListener("touchend", (e) => {
    if (!e.changedTouches[0]) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 45) goTo(current + (dx < 0 ? 1 : -1), true);
  }, { passive: true });

  slider.addEventListener("mousedown", (e) => {
    if (!window.matchMedia("(min-width: 768px)").matches) return;
    pointerDragging = true;
    pointerStartX = e.clientX;
    slider.classList.add("is-dragging");
  });
  window.addEventListener("mouseup", (e) => {
    if (!pointerDragging) return;
    const dx = e.clientX - pointerStartX;
    pointerDragging = false;
    slider.classList.remove("is-dragging");
    if (Math.abs(dx) > 50) goTo(current + (dx < 0 ? 1 : -1), true);
  });

  window.addEventListener("resize", () => {
    const active = slides[current];
    if (active && active.querySelector("video")) scheduleCurrent();
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
    renderQuickLinks();
    renderHero();
    renderBrandCarousel();
    renderEvents();
    renderDetail();
  });
})();
