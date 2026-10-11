/* ============================================================
   NACI Robotics 2935
   Two small things: the phone menu, and the fade in on scroll.
   ============================================================ */

/* ---- 1. PHONE MENU ----------------------------------------
   The Menu button shows and hides the nav on small screens.
   ------------------------------------------------------------ */
var menuBtn = document.querySelector(".menu-btn");
var navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", function () {
    var isOpen = navLinks.classList.toggle("open");
    menuBtn.textContent = isOpen ? "Close" : "Menu";
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

/* ---- 2. FADE IN ON SCROLL ---------------------------------
   Anything with class="reveal" starts invisible and fades up
   when you scroll to it. Add the class to any element and it
   just works, no extra code needed.
   ------------------------------------------------------------ */
var revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  var watcher = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          watcher.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealItems.forEach(function (item) {
    watcher.observe(item);
  });
} else {
  /* Very old browser, just show everything. */
  revealItems.forEach(function (item) {
    item.classList.add("visible");
  });
}

/* ---- 3. FOOTER YEAR ---------------------------------------
   Writes the current year so nobody has to update the footer
   every January.
   ------------------------------------------------------------ */
var yearSpot = document.querySelector("[data-year]");
if (yearSpot) {
  yearSpot.textContent = new Date().getFullYear();
}
