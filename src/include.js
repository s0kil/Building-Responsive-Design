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
          main(); // Call main function, in `main.js` script
        }
      });
  });
});
