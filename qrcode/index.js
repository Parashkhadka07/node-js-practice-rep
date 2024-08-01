const http = require("http");
const qrcode = require("qrcode");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    qrcode.toDataURL("google.com", (err, url) => {
      if (err) console.log(err);
      res.end(`<img src="${url}" />`);
    });
  })
  .listen(3999);
console.log("running");
