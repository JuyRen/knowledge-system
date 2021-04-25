const http = require("http");

const fs = require("fs");

const result = fs.readFileSync("./text.txt");

const server = http.createServer((request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "Cache-Control");
  response.setHeader("Content-Type", "text/plain");
  response.setHeader("Cache-Control", "no-cache");
  // response.setHeader("Expires", "Wed, 14 Apr 2022 08:24:55 GMT");
  response.write(result);
  response.end();
});

server.listen(8000, "localhost", () => {
  console.log("server at http://localhost:8000");
});
