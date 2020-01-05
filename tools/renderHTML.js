/*
This Script Will Start A Local Static File Server
And Open Chrome Browser In Headless Mode To Capture
The JavaScript Rendered DOM Then Save It
To A Local File As `index-full.html`
*/

let fs = require("fs");
let path = require("path");
let sirv = require("sirv");
let polka = require("polka");
let puppeteer = require("puppeteer-core");

const assets = sirv(".", {
  immutable: true
});

let app = polka()
  .use(assets)
  .listen(3000, err => {
    if (err) throw err;
    getHtml().then(pageContent => {
      fs.writeFileSync(
        path.join(process.cwd(), "index-full.html"),
        pageContent
      );
      app.server.close();
    });
  });

async function getHtml() {
  let browser = await puppeteer.launch({
    executablePath: "google-chrome" // Assumes google-chrome is installed.
  });
  let page = await browser.newPage();
  await page.goto("http://localhost:3000/");
  await page.waitForFunction("main");
  let pageContent = await page.content();
  await browser.close();
  return pageContent;
}
