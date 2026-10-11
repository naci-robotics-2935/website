var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

var menuBtn = document.querySelector(".menu-btn");
var navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", function () {
    var isOpen = navLinks.classList.toggle("open");
    menuBtn.textContent = isOpen ? "Close" : "Menu";
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

var bar = document.querySelector(".scroll-bar");

if (bar) {
  var updateBar = function () {
    var max = document.body.scrollHeight - window.innerHeight;
    var progress = max > 0 ? window.scrollY / max : 0;
    bar.style.transform = "scaleX(" + progress + ")";
  };
  window.addEventListener("scroll", updateBar, { passive: true });
  window.addEventListener("resize", updateBar);
  updateBar();
}

var revealItems = document.querySelectorAll(".reveal, .reveal-group, .split-in");

if ("IntersectionObserver" in window && !reducedMotion) {
  var revealWatcher = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealWatcher.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
  );
  revealItems.forEach(function (item) { revealWatcher.observe(item); });
} else {
  revealItems.forEach(function (item) { item.classList.add("visible"); });
}

document.querySelectorAll(".split-in").forEach(function (heading) {
  if (reducedMotion) return;

  var pieces = [];
  heading.childNodes.forEach(function (node) {
    var text = (node.textContent || "").trim();
    if (!text) return;
    var className = node.nodeType === 1 ? node.className : "";
    text.split(/\s+/).forEach(function (word) {
      pieces.push({ word: word, className: className });
    });
  });

  if (!pieces.length) return;

  heading.innerHTML = pieces
    .map(function (piece) {
      var cls = piece.className ? ' class="' + piece.className + '"' : "";
      return '<span class="word"><span' + cls + ">" + piece.word + "</span></span>";
    })
    .join(" ");
});

var counters = document.querySelectorAll("[data-count]");

if ("IntersectionObserver" in window && !reducedMotion) {
  var countWatcher = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        countWatcher.unobserve(entry.target);

        var el = entry.target;
        var target = parseInt(el.getAttribute("data-count"), 10);
        var suffix = el.getAttribute("data-suffix") || "";
        if (isNaN(target)) return;

        var duration = 1400;
        var started = null;

        var step = function (now) {
          if (!started) started = now;
          var p = Math.min((now - started) / duration, 1);

          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach(function (el) { countWatcher.observe(el); });
}

var parallaxItems = document.querySelectorAll(".parallax");
var hasMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (parallaxItems.length && hasMouse && !reducedMotion) {
  var pointerX = 0;
  var pointerY = 0;
  var queued = false;

  window.addEventListener("mousemove", function (e) {
    pointerX = e.clientX / window.innerWidth - 0.5;
    pointerY = e.clientY / window.innerHeight - 0.5;

    if (queued) return;
    queued = true;

    requestAnimationFrame(function () {
      parallaxItems.forEach(function (el) {
        var strength = parseFloat(el.getAttribute("data-parallax")) || 0.03;
        var x = pointerX * strength * 240;
        var y = pointerY * strength * 240;
        el.style.transform = "translate3d(" + x + "px," + y + "px,0)";
      });
      queued = false;
    });
  });
}

var heroVideo = document.querySelector(".hero-video");

if (heroVideo) {
  var dropVideo = function () {
    heroVideo.style.display = "none";
  };
  heroVideo.addEventListener("error", dropVideo, true);
  var heroSource = heroVideo.querySelector("source");
  if (heroSource) heroSource.addEventListener("error", dropVideo);
  window.setTimeout(function () {
    if (heroVideo.readyState === 0) dropVideo();
  }, 1200);
}

document.querySelectorAll(".logo-img, .footer-logo").forEach(function (img) {
  var swapForText = function () {
    var text = document.createElement("span");
    text.className = img.classList.contains("footer-logo")
      ? "display h-md"
      : "logo-name";
    text.textContent = "NACI Robotics";
    text.style.letterSpacing = "0.06em";
    img.replaceWith(text);
  };

  img.addEventListener("error", swapForText);

  if (img.complete && img.naturalWidth === 0) swapForText();
});

var yearSpot = document.querySelector("[data-year]");
if (yearSpot) {
  yearSpot.textContent = new Date().getFullYear();
}
