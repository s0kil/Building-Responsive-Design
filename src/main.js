(() => {
  // Wait for HTML document to been completely loaded and parsed
  window.addEventListener("DOMContentLoaded", () => {
    let includes = [...document.getElementsByTagName("include")];
    includes.forEach((include, index) => {
      let src = include.getAttribute("src");
      fetch(src, { mode: "no-cors" })
        .then(response => {
          if (!response.ok) throw Error(response.statusText);
          return response.text();
        })
        .then(html => {
          include.innerHTML = html || "";
        })
        .catch(error => {
          console.error(`Failed To Load <include src="${src}" />`);
          console.error(error);
        })
        .finally(() => {
          // If Last Include Is Loaded
          if (index === includes.length - 1) {
            main(); // Call main function
          }
        });
    });
  });

  function main() {
    // Load Category List Images
    let categoriesListItem = [
      ...document.getElementsByClassName("category-item-list-popular")
    ];
    categoriesListItem.forEach(listItem => {
      let categoryItemBgImage = listItem.dataset.categoryItemBgImage;
      if (categoryItemBgImage !== undefined) {
        listItem.style.backgroundImage = `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 1)
      ), url(${categoryItemBgImage})`;
      }
    });

    let nav = document.querySelector("nav");
    if (screen.width > 320) {
      // Nav Bar Sticky On Scroll
      window.onscroll = () => {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          nav.id = "nav-sticky";
        } else nav.id = "";
      };
    } else {
      nav.id = "nav-sticky";
    }
  }
})();
