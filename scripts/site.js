(function () {
  var clock = document.getElementById("clock");
  if (clock) {
    var fmt = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Istanbul", hour: "2-digit", minute: "2-digit" });
    var tick = function () { clock.textContent = fmt.format(new Date()); };
    tick();
    setInterval(tick, 15000);
  }

  // Assembled at runtime so the address never appears in the HTML source.
  var addr = ["hello", "sonereker.com"].join("@");
  var inline = document.querySelectorAll("a.email");
  for (var i = 0; i < inline.length; i++) {
    inline[i].href = "mailto:" + addr;
    inline[i].textContent = addr;
  }

  var btn = document.getElementById("copy-email");
  if (!btn) return;
  var label = document.getElementById("copy-label");
  var icon = document.getElementById("copy-icon");
  label.textContent = addr;

  function selectText() {
    var r = document.createRange();
    r.selectNodeContents(label);
    var s = window.getSelection();
    s.removeAllRanges();
    s.addRange(r);
  }

  btn.addEventListener("click", function () {
    function done() {
      label.textContent = "Copied";
      icon.setAttribute("href", "#i-check");
      btn.classList.add("copied");
      setTimeout(function () {
        label.textContent = addr;
        icon.setAttribute("href", "#i-copy");
        btn.classList.remove("copied");
      }, 1600);
    }
    try {
      navigator.clipboard.writeText(addr).then(done, selectText);
    } catch (e) { selectText(); }
  });
})();
