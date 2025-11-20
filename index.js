const http = require("http");

http.createServer((req, res) => {
    res.write("Deployment successful! Hello from index.js");
    res.end();
}).listen(4000);
