(function () {
  "use strict";

  var STEAM = "https://store.steampowered.com/app/5337790/Panda_Flora/?utm_source=pandaflora_site&utm_medium=web";

  var JA = {
    "nav.bouquets": "ブーケ",
    "nav.features": "特徴",
    "nav.press": "プレス",
    "nav.wishlist": "ウィッシュリスト",
    "hero.tagline": "一人称視点で楽しむ、ほっこりお花屋さんゲーム。",
    "hero.sub": "自分で花を育て、ブーケを一つひとつ手で包み、小さなお店を少しずつ大きくしていこう。",
    "cta.wishlist": "Steamでウィッシュリスト登録",
    "cta.discord": "Discordに参加",
    "hero.status": "開発中 · PC（Steam）",
    "play.eyebrow": "フローリストの作業台で",
    "play.title": "育てて、包んで、届ける。",
    "play.body": "ブーケはすべて、庭にまいた一粒の種から始まります。花が咲いたら作業台へ。花を選び、紙を切り、リボンを結んだら、棚に並べてお客さんを待ちましょう。",
    "botd.eyebrow": "今日のブーケ",
    "botd.title": "毎日、新しいブーケを",
    "botd.lead": "毎日ゲームの中で新しいブーケを一つ作って公開しています。これまでのコレクションはこちら。",
    "botd.follow": "毎日の更新はこちらから：",
    "f1.title": "手で包む",
    "f1.body": "花を選び、紙を切り、リボンを結ぶのも全部自分の手で。紙、花瓶、鉢、ボックス、バスケット。どのブーケもあなただけのデザインです。",
    "f2.title": "庭で育てる",
    "f2.body": "種をまいて、芽から花が咲くまで見守ろう。チューリップやバラからシャクヤク、ダリアまで、15のショップレベルで45種類の花が解放されます。",
    "f3.title": "お店を切り盛りする",
    "f3.body": "棚に商品を並べ、それぞれ違う注文をするお客さんに対応。ネット注文の発送や、お店の模様替えも自由自在。",
    "f4.title": "アルバムを埋める",
    "f4.body": "お気に入りのブーケを撮影して、スクラップブックに貼ろう。45ページのレシピを集めたら、ベストショットを自由なページに飾れます。",
    "band.title": "ウィッシュリスト登録が、いちばんの応援です",
    "band.body": "ひとりで作っているゲームにとって、ウィッシュリストの一つひとつが大きな力になります。Steamで登録すると、発売日にお知らせが届きます。",
    "dev.title": "ひとりで作っています",
    "dev.body": "Panda Floraは個人開発のゲームです。花を一つずつ増やしながら作っています。開発日誌や先行公開、毎日のブーケはまずDiscordで。",
    "dev.link": "Discordで気軽に声をかけてください",
    "foot.press": "プレスキット",
    "feat.label": "掲載メディア",
    "feat.automaton": "日本 · 2026年10月"
  };

  // Steam links with UTM so Steamworks can show site traffic
  document.querySelectorAll(".js-steam").forEach(function (a) {
    a.href = STEAM;
    a.target = "_blank";
    a.rel = "noopener";
  });

  // Language
  var EN = {};
  document.querySelectorAll("[data-i18n]").forEach(function (el) { EN[el.dataset.i18n] = el.textContent; });
  var langBtn = document.getElementById("langToggle");
  function getStored() { try { return localStorage.getItem("pf-lang"); } catch (e) { return null; } }
  function setStored(v) { try { localStorage.setItem("pf-lang", v); } catch (e) {} }
  var lang = getStored() || ((navigator.language || "").toLowerCase().indexOf("ja") === 0 ? "ja" : "en");

  function applyLang(l) {
    lang = l;
    document.documentElement.lang = l;
    var dict = l === "ja" ? JA : EN;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var t = dict[el.dataset.i18n];
      if (t) el.textContent = t;
    });
    if (langBtn) langBtn.textContent = l === "ja" ? "English" : "日本語";
    renderMarquee();
  }
  if (langBtn) langBtn.addEventListener("click", function () {
    var next = lang === "ja" ? "en" : "ja";
    setStored(next);
    applyLang(next);
  });

  // Bouquet marquee
  var track = document.getElementById("marqueeTrack");
  var tilts = [-2.5, 1.5, -1, 2.2, -1.8, 1, -2.2, 1.8];
  function card(b, i, dup) {
    var name = lang === "ja" ? b.ja : b.en;
    var label = lang === "ja" ? "Day " + b.day : "Day " + b.day;
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
    el.addEventListener("click", function () { openLightbox(b); });
    return el;
  }
  function renderMarquee() {
    if (!track || !window.BOUQUETS) return;
    var list = window.BOUQUETS.slice().reverse();
    while (list.length < 8) list = list.concat(list);
    track.innerHTML = "";
    list.forEach(function (b, i) { track.appendChild(card(b, i, false)); });
    list.forEach(function (b, i) { track.appendChild(card(b, i, true)); });
    track.style.animationDuration = Math.max(40, list.length * 6.5) + "s";
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
    lbImg.alt = lang === "ja" ? b.ja : b.en;
    lbCap.innerHTML = "";
    lbCap.appendChild(document.createTextNode((lang === "ja" ? "今日のブーケ #" : "Bouquet of the Day #") + b.day));
    var s = document.createElement("small");
    s.textContent = lang === "ja" ? b.ja : b.en;
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
  var revealEls = document.querySelectorAll(".feature, .gameplay__grid, .section__head, .cta-band__card, .devnote__inner");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  }

  applyLang(lang);
})();
