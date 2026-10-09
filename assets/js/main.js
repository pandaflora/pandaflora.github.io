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
    "sc.release": "発売日：未定",
    "feat.label": "掲載メディア",
    "feat.automaton": "日本 · 2026年10月"
  };

  var ZH = {
      "nav.bouquets": "花束",
      "nav.features": "特色",
      "nav.press": "媒體資料",
      "nav.wishlist": "加入願望清單",
      "hero.tagline": "第一人稱視角的療癒花店遊戲。",
      "hero.sub": "親手種花、親手包裝每一束花，經營一間和你一起成長的小花店。",
      "cta.wishlist": "在 Steam 加入願望清單",
      "cta.discord": "加入 Discord",
      "hero.status": "開發中 · PC（Steam）",
      "play.eyebrow": "在花藝工作台前",
      "play.title": "種花・包花・賣花。",
      "play.body": "每一束花都從花園裡的一顆種子開始。花開了就帶到工作台，挑選花材、裁剪包裝紙、繫上緞帶，再擺上架等客人上門。",
      "botd.eyebrow": "每日花束",
      "botd.title": "每天一束新花束",
      "botd.lead": "我每天在遊戲裡包一束新的花束並分享出來。這是目前為止的收藏。",
      "botd.follow": "每日更新請看：",
      "f1.title": "親手包裝",
      "f1.body": "挑選花材、裁剪包裝紙、繫上緞帶，全都由你親手完成。包裝紙、花瓶、花盆、禮盒或花籃，每一束都是你獨一無二的設計。",
      "f2.title": "打造你的花園",
      "f2.body": "播下種子，看著它們從嫩芽長到盛開。在 15 個商店等級中解鎖 45 種花，從鬱金香、玫瑰到芍藥和大理花。",
      "f3.title": "經營你的花店",
      "f3.body": "把商品擺上架，接待每位需求不同的客人，寄送網路訂單，還能隨心佈置你的店。",
      "f4.title": "填滿你的相簿",
      "f4.body": "拍下你最喜歡的花束，貼進剪貼簿。完成 45 頁花束配方，再把得意之作自由擺在空白頁上。",
      "band.title": "加入願望清單，就是最大的支持",
      "band.body": "對一個人開發的遊戲來說，每一個願望清單都很重要。在 Steam 加入願望清單，發售當天就會收到通知。",
      "dev.title": "一個人開發",
      "dev.body": "Panda Flora 是由獨立開發者一個人製作的遊戲，一朵花一朵花地慢慢完成。開發日誌、搶先畫面和每日花束都會先在 Discord 分享。",
      "dev.link": "來 Discord 打聲招呼吧",
      "foot.press": "媒體資料",
      "sc.release": "發售日：未定",
      "feat.label": "媒體報導",
      "feat.automaton": "日本 · 2026年10月"
  };

  var TR = {
      "nav.bouquets": "Buketler",
      "nav.features": "Özellikler",
      "nav.press": "Basın",
      "nav.wishlist": "İstek listesi",
      "hero.tagline": "Birinci şahıs, sıcacık bir çiçekçi oyunu.",
      "hero.sub": "Kendi çiçeklerini yetiştir, her buketi elinle sar ve seninle birlikte büyüyen küçük bir dükkân işlet.",
      "cta.wishlist": "Steam'de istek listene ekle",
      "cta.discord": "Discord'a katıl",
      "hero.status": "Geliştiriliyor · PC (Steam)",
      "play.eyebrow": "Çiçekçi tezgâhında",
      "play.title": "Yetiştir. Sar. Sat.",
      "play.body": "Her buket bahçendeki bir tohumla başlar. Çiçek açınca tezgâha getir, çiçekleri seç, kâğıdı kes, kurdeleyi bağla. Sonra rafa koy ve kimin geleceğini bekle.",
      "botd.eyebrow": "Günün Buketi",
      "botd.title": "Her gün yeni bir buket",
      "botd.lead": "Her gün oyunda yeni bir buket sarıp paylaşıyorum. Şimdiye kadarki koleksiyon burada.",
      "botd.follow": "Yenileri her gün burada:",
      "f1.title": "Elinle sar",
      "f1.body": "Çiçekleri seç, kâğıdı kes, kurdeleyi kendin bağla. Kâğıt, vazo, saksı, kutu ya da sepet: her buket senin tasarımın.",
      "f2.title": "Bahçeni büyüt",
      "f2.body": "Tohum ek ve filizden çiçeğe büyümelerini izle. Lale ve gülden şakayık ve yıldız çiçeğine, 15 dükkân seviyesinde 45 çiçeğin kilidini aç.",
      "f3.title": "Dükkânını işlet",
      "f3.body": "Rafları doldur, her biri farklı şey isteyen müşterilere hizmet et, internet siparişlerini gönder ve dükkânı istediğin gibi dekore et.",
      "f4.title": "Fotoğraf albümünü doldur",
      "f4.body": "En sevdiğin buketlerin fotoğrafını çek, albüme yapıştır. 45 tarif sayfasını tamamla, en güzel karelerini serbest sayfalara diz.",
      "band.title": "İstek listesi düşündüğünden çok daha fazla yardım eder",
      "band.body": "Tek kişinin yaptığı bir oyun için her istek listesi çok değerli. Panda Flora'yı Steam'de istek listene ekle, çıktığı gün haberin olsun.",
      "dev.title": "Tek kişi yapıyor",
      "dev.body": "Panda Flora'yı tek bir geliştirici, çiçek çiçek yapıyor. Geliştirme notları, ilk görüntüler ve günün buketi önce Discord'a geliyor.",
      "dev.link": "Discord'a gel, merhaba de",
      "foot.press": "Basın kiti",
      "sc.release": "Çıkış tarihi: Duyurulacak",
      "feat.label": "Yer aldığı yerler",
      "feat.automaton": "Japonya · Ekim 2026"
  };

  var DAY = { en: "Bouquet of the Day #", ja: "今日のブーケ #", zh: "每日花束 #", tr: "Günün Buketi #" };

  // Steam links with UTM so Steamworks can show site traffic
  document.querySelectorAll(".js-steam").forEach(function (a) {
    a.href = STEAM;
    a.target = "_blank";
    a.rel = "noopener";
  });

  // Language
  var EN = {};
  document.querySelectorAll("[data-i18n]").forEach(function (el) { EN[el.dataset.i18n] = el.textContent; });
  var langSel = document.getElementById("langSelect");
  var DICTS = { en: EN, ja: JA, zh: ZH, tr: TR };
  var HTML_LANG = { en: "en", ja: "ja", zh: "zh-Hant", tr: "tr" };
  function getStored() { try { return localStorage.getItem("pf-lang"); } catch (e) { return null; } }
  function setStored(v) { try { localStorage.setItem("pf-lang", v); } catch (e) {} }
  function detect() {
    var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
    for (var i = 0; i < langs.length; i++) {
      var n = (langs[i] || "").toLowerCase();
      if (n.indexOf("ja") === 0) return "ja";
      if (n === "zh-tw" || n === "zh-hk" || n === "zh-mo" || n.indexOf("zh-hant") === 0) return "zh";
      if (n.indexOf("tr") === 0) return "tr";
      if (n.indexOf("en") === 0) return "en";
    }
    return "en";
  }
  var lang = getStored();
  if (!DICTS[lang]) lang = detect();
  function nameOf(b) { return lang !== "en" && b[lang] ? b[lang] : b.en; }

  function applyLang(l) {
    lang = DICTS[l] ? l : "en";
    document.documentElement.lang = HTML_LANG[lang];
    var dict = DICTS[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var t = dict[el.dataset.i18n] || EN[el.dataset.i18n];
      if (t) el.textContent = t;
    });
    if (langSel) langSel.value = lang;
    renderMarquee();
  }
  if (langSel) langSel.addEventListener("change", function () {
    setStored(langSel.value);
    applyLang(langSel.value);
  });

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
    lbImg.alt = nameOf(b);
    lbCap.innerHTML = "";
    lbCap.appendChild(document.createTextNode(DAY[lang] + b.day));
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
  var revealEls = document.querySelectorAll(".feature, .gameplay__grid, .section__head, .cta-band__card, .devnote__inner");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  }

  applyLang(lang);
})();
