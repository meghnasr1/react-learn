// const eventEmitter = require('events');
// const ee = new eventEmitter();
// ee.addListener("karancoming",()=>{
//     console.log("Calling Meghna1");
// })
// ee.addListener("karancoming",()=>{
//     console.log("Calling Meghna2");
// })
// ee.emit("karancoming");
// ee.emit("karancoming");

// const eventEmitter = require('events');
const http = require("http");
const server = http.createServer();
server.on("request",(req,res)=>{
    // res.write("Hello");
    // res.end();
    if(req.url=="/"){
        res.write("Hello");
        res.end();
    }else if(req.url=="/about"){
        res.write("About");
        res.end();
    }else{
        res.write("404 Not Found");
        res.end();
    }
})
server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});