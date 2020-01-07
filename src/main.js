(() => {
  // Wait for HTML document to been completely loaded and parsed, then call main function
  /*   window.addEventListener("load", main); */

  function main() {
    // Load Category List Images
    let categoriesListItem = [
      ...document.getElementsByClassName("category-item-list-popular")
    ];
    categoriesListItem.forEach(listItem => {
      let categoryItemBgImage = listItem.dataset.categoryItemBgImage;
      if (categoryItemBgImage !== undefined) {
        listItem.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)), url(${categoryItemBgImage})`;
      }
    });



    let nav = document.querySelector("nav");
    if (screen.width > 320) {
      // Nav Bar Sticky On Scroll
      window.addEventListener("scroll", () => {
        if (
          document.body.scrollTop > 2 ||
          document.documentElement.scrollTop > 2
        ) {
          nav.id = "nav-sticky";
        } else nav.id = "";
      });
    } else {
      nav.id = "nav-sticky";
    }
  }
  main();
})();
