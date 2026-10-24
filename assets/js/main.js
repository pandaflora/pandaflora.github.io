(function () {
  "use strict";

  var STEAM = "https://store.steampowered.com/app/5337790/Panda_Flora/?utm_source=pandaflora_site&utm_medium=" + (/press\.html/.test(location.pathname) ? "presskit" : "web");

  // Steam links with UTM so Steamworks can show site traffic
  document.querySelectorAll(".js-steam").forEach(function (a) {
    a.href = STEAM;
    a.target = "_blank";
    a.rel = "noopener";
  });

  // Language
  var EN = {};
  document.querySelectorAll("[data-i18n]").forEach(function (el) { EN[el.dataset.i18n] = el.textContent; });
  var I18N = window.I18N || {};
  var ORDER = window.I18N_ORDER || ["en"];
  var langBtn = document.getElementById("langBtn");
  var langList = document.querySelector(".langmenu__list");
  var langCur = document.getElementById("langCurrent");
  function info(l) { return l === "en" ? { name: "English", code: "EN", html: "en", day: "Bouquet of the Day #", t: EN } : I18N[l]; }
  if (langList) {
    langList.innerHTML = "";
    ORDER.forEach(function (l) {
      var x = info(l); if (!x) return;
      var li = document.createElement("li");
      li.setAttribute("role", "option"); li.tabIndex = -1; li.dataset.lang = l;
      var c = document.createElement("span"); c.className = "langmenu__code"; c.textContent = x.code;
      li.appendChild(c); li.appendChild(document.createTextNode(x.name));
      langList.appendChild(li);
    });
  }
  function getStored() { try { return localStorage.getItem("pf-lang"); } catch (e) { return null; } }
  function setStored(v) { try { localStorage.setItem("pf-lang", v); } catch (e) {} }
  var MAP = { ja: "ja", ko: "ko", fr: "fr", de: "de", es: "es", it: "it", pt: "pt", nl: "nl", pl: "pl", ru: "ru", uk: "uk", el: "el", sv: "sv", nb: "no", nn: "no", no: "no", tr: "tr", ar: "ar", az: "az", en: "en" };
  function detect() {
    var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
    for (var i = 0; i < langs.length; i++) {
      var n = (langs[i] || "").toLowerCase();
      if (n.indexOf("zh") === 0) return (n === "zh-tw" || n === "zh-hk" || n === "zh-mo" || n.indexOf("zh-hant") === 0) ? "zh" : "zhs";
      var m = MAP[n.split("-")[0]];
      if (m) return m;
    }
    return "en";
  }
  var lang = getStored();
  if (!info(lang)) lang = detect();
  function nameOf(b) {
    if (lang === "en") return b.en;
    if (b[lang]) return b[lang];
    var x = I18N[lang];
    return (x && x.b && x.b[b.day - 1]) || b.en;
  }

  function applyLang(l) {
    lang = info(l) ? l : "en";
    var x = info(lang);
    document.documentElement.lang = x.html;
    document.documentElement.dir = x.dir || "ltr";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var t = (x.t && x.t[el.dataset.i18n]) || EN[el.dataset.i18n];
      if (t) el.textContent = t;
    });
    document.querySelectorAll(".js-langimg").forEach(function (img) { img.src = img.dataset.src.replace("{lang}", lang); });
    if (langCur) langCur.textContent = x.name;
    if (langList) langList.querySelectorAll("li").forEach(function (li) { li.setAttribute("aria-selected", li.dataset.lang === lang ? "true" : "false"); });
    if (typeof renderMarquee === "function") renderMarquee();
  }

  function openMenu() {
    langList.hidden = false; langBtn.setAttribute("aria-expanded", "true");
    var sel = langList.querySelector('[aria-selected="true"]') || langList.querySelector("li");
    sel.focus();
  }
  function closeMenu(focusBtn) {
    if (langList.hidden) return;
    langList.hidden = true; langBtn.setAttribute("aria-expanded", "false");
    if (focusBtn) langBtn.focus();
  }
  function choose(l) { setStored(l); applyLang(l); closeMenu(true); }
  if (langBtn && langList) {
    langBtn.addEventListener("click", function (e) { e.stopPropagation(); langList.hidden ? openMenu() : closeMenu(false); });
    langList.addEventListener("click", function (e) { var li = e.target.closest("li"); if (li) choose(li.dataset.lang); });
    langList.addEventListener("keydown", function (e) {
      var items = Array.prototype.slice.call(langList.querySelectorAll("li"));
      var i = items.indexOf(document.activeElement);
      if (e.key === "ArrowDown") { e.preventDefault(); items[(i + 1) % items.length].focus(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
      else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); if (i >= 0) choose(items[i].dataset.lang); }
      else if (e.key === "Escape" || e.key === "Tab") { closeMenu(e.key === "Escape"); }
    });
    document.addEventListener("click", function (e) { if (!e.target.closest(".langmenu")) closeMenu(false); });
  }

  // Bouquet marquee
  var track = document.getElementById("marqueeTrack");
  var tilts = [-2.5, 1.5, -1, 2.2, -1.8, 1, -2.2, 1.8];
  function card(b, i, dup) {
    var name = nameOf(b);
    var label = "Day " + b.day;
    var el = document.createElement("button");
    el.type = "button";
    el.className = "polaroid";
    el.style.setProperty("--tilt", tilts[i % tilts.length] + "deg");
    if (dup) { el.tabIndex = -1; el.setAttribute("aria-hidden", "true"); }
    el.innerHTML = '<img loading="lazy" alt="" width="460" height="460">' +
      '<span class="polaroid__day"></span><span class="polaroid__name"></span>';
    el.querySelector("img").src = "assets/img/bouquets/" + b.img;
    el.querySelector("img").alt = name;
    el.querySelector(".polaroid__day").textContent = label;
    el.querySelector(".polaroid__name").textContent = name;
    el.addEventListener("click", function (e) { if (dragMoved) { e.preventDefault(); return; } openLightbox(b); });
    return el;
  }
  function renderMarquee() {
    if (!track || !window.BOUQUETS) return;
    var list = window.BOUQUETS.slice().reverse();
    while (list.length < 8) list = list.concat(list);
    track.innerHTML = "";
    list.forEach(function (b, i) { track.appendChild(card(b, i, false)); });
    list.forEach(function (b, i) { track.appendChild(card(b, i, true)); });
  }

  // Marquee motion: auto-drifts, and can be dragged, swiped or moved with the arrows
  var marquee = document.getElementById("marquee");
  var dragMoved = false;
  if (marquee && track) {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var hovering = false, dragging = false, startX = 0, startScroll = 0, idleUntil = 0;
    var SPEED = 0.45; // px per frame
    var pos = 0; // float position, scrollLeft rounds small steps away
    function half() { return track.scrollWidth / 2; }
    function wrap() {
      var h = half();
      if (h <= 0) return;
      if (marquee.scrollLeft >= h) marquee.scrollLeft -= h;
      else if (marquee.scrollLeft <= 0) marquee.scrollLeft += h;
      pos = marquee.scrollLeft;
    }
    function pause(ms) { idleUntil = Date.now() + (ms || 2500); }
    function tick() {
      if (!reduce && !hovering && !dragging && Date.now() > idleUntil) {
        pos += SPEED;
        marquee.scrollLeft = pos;
        if (pos >= half()) { pos -= half(); marquee.scrollLeft = pos; }
      } else {
        pos = marquee.scrollLeft;
      }
      requestAnimationFrame(tick);
    }
    marquee.addEventListener("mouseenter", function () { hovering = true; });
    marquee.addEventListener("mouseleave", function () { hovering = false; });
    marquee.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "mouse") return; // touch scrolls natively
      dragging = true; dragMoved = false; startX = e.clientX; startScroll = marquee.scrollLeft;
    });
    window.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      var dx = e.clientX - startX;
      if (!dragMoved && Math.abs(dx) > 5) { dragMoved = true; marquee.classList.add("is-dragging"); }
      if (!dragMoved) return;
      marquee.scrollLeft = startScroll - dx;
      wrap();
    });
    window.addEventListener("pointerup", function () {
      if (!dragging) return;
      dragging = false; marquee.classList.remove("is-dragging"); pause();
      setTimeout(function () { dragMoved = false; }, 0);
    });
    marquee.addEventListener("touchstart", function () { pause(4000); }, { passive: true });
    marquee.addEventListener("scroll", function () { if (!dragging && (hovering || Date.now() <= idleUntil)) wrap(); }, { passive: true });
    marquee.addEventListener("wheel", function (e) {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) pause();
    }, { passive: true });
    document.querySelectorAll(".marquee__arrow").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var dir = btn.dataset.dir === "prev" ? -1 : 1;
        marquee.scrollBy({ left: dir * 260, behavior: "smooth" });
        pause(4000);
      });
    });
    requestAnimationFrame(function () { pos = 1; marquee.scrollLeft = 1; tick(); });
  }

  // Lightbox
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lightboxImg");
  var lbCap = document.getElementById("lightboxCap");
  var lastFocus = null;
  function openLightbox(b) {
    if (!lb) return;
    lastFocus = document.activeElement;
    lbImg.src = "assets/img/bouquets/" + b.img;
    lbImg.alt = nameOf(b);
    lbCap.innerHTML = "";
    lbCap.appendChild(document.createTextNode(info(lang).day + b.day));
    var s = document.createElement("small");
    s.textContent = nameOf(b);
    lbCap.appendChild(s);
    lb.hidden = false;
    lb.querySelector(".lightbox__close").focus();
  }
  function closeLightbox() {
    if (!lb || lb.hidden) return;
    lb.hidden = true;
    if (lastFocus) lastFocus.focus();
  }
  if (lb) {
    lb.addEventListener("click", function (e) { if (e.target === lb || e.target.classList.contains("lightbox__close")) closeLightbox(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeLightbox(); });
  }

  // Nav background on scroll
  var nav = document.querySelector(".nav");
  function onScroll() { if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 40); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Gentle reveal on scroll
  var revealEls = document.querySelectorAll(".feature, .extra, .gameplay__grid, .section__head, .cta-band__card, .devnote__inner");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });

    // Feature videos load and play only while on screen
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var v = en.target;
        if (en.isIntersecting) { v.preload = "auto"; var p = v.play(); if (p && p.catch) p.catch(function () {}); }
        else v.pause();
      });
    }, { threshold: 0.25 });
    document.querySelectorAll(".js-lazyvideo").forEach(function (v) { vio.observe(v); });
  } else {
    document.querySelectorAll(".js-lazyvideo").forEach(function (v) { v.autoplay = true; v.preload = "auto"; });
  }

  applyLang(lang);
})();
