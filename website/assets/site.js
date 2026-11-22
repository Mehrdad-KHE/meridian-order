// Meridian Books — site behaviour: mobile menu toggle + book-form confirmation.
// No external requests; loaded with defer on every page.
(function () {
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("mainnav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  var presetLinks = document.querySelectorAll("[data-behind]");
  for (var i = 0; i < presetLinks.length; i++) {
    presetLinks[i].addEventListener("click", function () {
      var sel = document.getElementById("cf-behind");
      if (sel) { sel.value = this.getAttribute("data-behind"); }
    });
  }
  var form = document.getElementById("book-form");
  if (form) {
    form.addEventListener("submit", function () {
      var panel = document.getElementById("form-confirm");
      if (panel) {
        // Let the mailto submission proceed, then show the confirmation.
        setTimeout(function () { panel.hidden = false; }, 300);
      }
    });
  }
})();
