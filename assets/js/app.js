(function () {
  var BRAND_ZH = "轮上科技";
  var BRAND_EN = "WHEELBOTS";
  var NAV = [
    { h: "index.html", zh: "首页", en: "Home" },
    { h: "products.html", zh: "产品中心", en: "Products" },
    { h: "about.html", zh: "关于我们", en: "About" },
    { h: "contact.html", zh: "联系我们", en: "Contact" }
  ];
  var CONTACT = {
    addrZh: "浙江省宁波市鄞州区姜山镇",
    addrEn: "Jiangshan Town, Yinzhou District, Ningbo, Zhejiang, China",
    email: "yx@wheelbots.com",
    tel: ""
  };
  var LOGO_HEAD =
    '<img class="brand-logo" src="assets/img/logo-green.png" alt="WHEELBOTS.AI">' +
    '<span class="brand-sep" aria-hidden="true"></span>' +
    '<span class="brand-cn"><span class="zh">轮上科技</span><span class="en">Wheelbots</span></span>';
  var LOGO_FOOT =
    '<img class="brand-logo brand-logo-foot" src="assets/img/logo-green-white.png" alt="WHEELBOTS.AI">';

  function applyLang(l) {
    document.body.classList.remove("lang-zh", "lang-en");
    document.body.classList.add("lang-" + l);
    document.documentElement.lang = l === "zh" ? "zh-CN" : "en";
    var b = document.getElementById("langBtn");
    if (b) b.textContent = l === "zh" ? "EN" : "中";
  }

  var lang = localStorage.getItem("lang") || "zh";
  applyLang(lang);

  var path = (location.pathname.split("/").pop() || "index.html");
  if (path === "") path = "index.html";

  var header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML =
      '<div class="container header-inner">' +
      '<a class="brand" href="index.html">' + LOGO_HEAD + '</a>' +
      '<button class="nav-toggle" aria-label="menu"><span></span><span></span><span></span></button>' +
      '<nav class="nav">' +
      NAV.map(function (n) {
        return '<a href="' + n.h + '" class="' + (n.h === path ? "active" : "") + '">' +
          '<span class="zh">' + n.zh + '</span><span class="en">' + n.en + '</span></a>';
      }).join("") +
      '</nav>' +
      '<button class="lang-toggle" id="langBtn"></button>' +
      '</div>';
  }

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="container footer-inner">' +
      '<div class="footer-col"><div class="brand">' + LOGO_FOOT + '</div>' +
      '<p class="zh">宁波轮上机器人有限公司<br>智能化 · 模块化 · 农业机器人<br>让农田作业走向无人化</p>' +
      '<p class="en">Wheelbots Co. Ltd.<br>Intelligent, modular agricultural robots.<br>Towards unmanned field operations.</p></div>' +
      '<div class="footer-col"><h4><span class="zh">快速导航</span><span class="en">Navigation</span></h4>' +
      NAV.map(function (n) { return '<a href="' + n.h + '"><span class="zh">' + n.zh + '</span><span class="en">' + n.en + '</span></a>'; }).join("") +
      '</div>' +
      '<div class="footer-col"><h4><span class="zh">联系我们</span><span class="en">Contact</span></h4>' +
      '<p class="zh">地址：' + CONTACT.addrZh + '</p><p class="en">Address: ' + CONTACT.addrEn + '</p>' +
      '<p><a href="mailto:' + CONTACT.email + '">' + CONTACT.email + '</a></p></div>' +
      '</div>' +
      '<div class="footer-bottom"><span class="zh">© ' + new Date().getFullYear() + ' 宁波轮上机器人有限公司 保留所有权利</span>' +
      '<span class="en">© ' + new Date().getFullYear() + ' Wheelbots Co. Ltd. All rights reserved.</span></div>';
  }

  applyLang(lang);

  var lb = document.getElementById("langBtn");
  if (lb) {
    lb.addEventListener("click", function () {
      var nl = document.body.classList.contains("lang-zh") ? "en" : "zh";
      localStorage.setItem("lang", nl);
      applyLang(nl);
    });
  }
  var nt = document.querySelector(".nav-toggle");
  if (nt) {
    nt.addEventListener("click", function () {
      var nav = document.querySelector(".nav");
      if (nav) nav.classList.toggle("open");
    });
  }
})();
