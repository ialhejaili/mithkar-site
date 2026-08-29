/* Mobile drawer navigation — the header nav becomes an off-canvas panel below 48rem. */
(function () {
  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");
  var scrim = document.querySelector(".nav-scrim");
  var close = nav && nav.querySelector(".nav-close");
  if (!nav || !toggle) return;

  function setOpen(open) {
    var was = nav.classList.contains("open");
    if (was === open) return;
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (scrim) scrim.hidden = !open;
    document.body.style.overflow = open ? "hidden" : "";
    if (open && close) close.focus();
    else if (was) toggle.focus();
  }

  toggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("open"));
  });

  if (close) close.addEventListener("click", function () { setOpen(false); });
  if (scrim) scrim.addEventListener("click", function () { setOpen(false); });

  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) setOpen(false);
  });
})();
