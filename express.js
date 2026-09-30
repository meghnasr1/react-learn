const http = require('http');
const express = require("express");
const app = express();
app.get('/', (req, res) => {
    return res.send("Hello from Home Page");
});
app.get("/about", (req, res) => {
    return res.send("Hello From About Page" + 'hey ' + req.query.name);
})

// const server = http.createServer(app);
// server.listen(1000, () => {
//     console.log("server is on");
    
// })
app.listen(1000, () => {
    console.log("Server on");
    
})

