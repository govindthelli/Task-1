const http = require("http");

http.createServer((req, res) => {
    res.write(`
        <div style="font-family: Arial, sans-serif; padding: 40px; text-align: center;">
            <h1 style="color: #1e90ff; font-size: 42px;"> Deployment Successful!</h1>
            <p style="color: #28a745; font-size: 24px; font-weight: bold;">
                Hello from <span style="color:#ff4500;">index.js notifying you that you will receive a mail after successfull deployment</span>
            </p>
        </div>
    `);
    res.end();
}).listen(4000, () => {
    console.log("Server running on port 4000");
});
