let http = require("http");
let url = require("url");
let fs = require("fs");

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = ".";  

    switch(q.pathname) {
        case "/": 
            filename += "/index.html";
            break;
        case "/about":
            filename += "/about.html";
            break;
        case "/contact-me":
            filename += "/contact-me.html";
            break;
        default: 
            filename += "/404.html";
            break;
    }

    fs.readFile(filename, function(err, data) {
        
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            return res.end();
    });
  })
  .listen(8080);
