(() => {
  // Wait for HTML document to been completely loaded, then call main function
  window.addEventListener("load", main);

  function main() {
    let nav = document.querySelector("nav");
    if (screen.width > 320) {
      // Nav Bar Sticky On Scroll
      window.addEventListener("scroll", () => {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          nav.id = "nav-sticky";
        } else nav.id = "";
      });
    } else {
      nav.id = "nav-sticky";
    }
  }
})();
