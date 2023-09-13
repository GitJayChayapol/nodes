const http = require("http");

const server = http.createServer();

server.listen(8000);

const todo = "Go Home";

server.on("request", (req, res) => {
  console.log(req.url);
  if (req.url === "./todo") {
    res.statusCode = 200;
    es.setHeader("content-type", "text/html");
    res.write("<h1>Hello CodeCamp</h1>");
    res.write("<hr>");
    res.write(`<h1>${todo}</h1>`);
    res.end();
  } else {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.write("<h1>Hello CodeCamp !!!</h1>");
    res.write("<hr>");
    res.write("<p>is the BestCamp</p>");
    res.end();
  }
});
