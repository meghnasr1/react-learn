// console.log("a");
// console.log("b");
// // setTimeout(()=>{
// //   console.log("c");
// // },20000)
// let arr=[1,2,3,4,5,6,7,8,9];
// function calculateNewArray(arr1){
//     const res=[];
//     for(let i=0;i<arr.length;i++){
//         res[i]=arr[i]*5;
//     }
//     return res;
// }
// console.log(calculateNewArray(arr));

// const EventEmitter = require('events');
// const ee = new EventEmitter();
// ee.addListener("karancoming",()=>{
//     console.log("Calling Meghna1");
// })
// ee.addListener("karancoming",()=>{
//     console.log("Calling Meghna2");
// })
// ee.emit("karancoming");
// ee.emit("karancoming");
// ee.emit("karancoming");
// ee.emit("karancoming");
// ee.emit("karancoming");


// const http = require('http');
// const server = http.createServer();
// server.on("request",()=>{
//     console.log("request");
// })
// server.listen(3000);

const EventEmiter = require('events');
const ee = new EventEmiter();
ee.addListener("KaranCalling",()=>{
    console.log("Calling Meghna");
})
ee.addListener("karancoming",()=>{
    console.log("Calling Meghna2");
})
ee.emit("karancoming");


// event={
//   karancoming:[f1,fn2];
// }

// const http = require('http');
// const server = http.createServer();
// server.on("request",(req, res)=>{
//     res.write("Hello")
//     res.end()
//     //internally what it does it server.emit("request",req,res)
//     console.log("request");
// })

// server.listen(3000);


// const http = require('http');
// const fs = require('fs');

// const server = http.createServer();

// server.on("request", (req, res) => {
//     console.log("request came");
//     console.log(req.url);
//     console.log(req.method);
//     res.write("Hello ");
//     res.write("Meghna ");
//     const log = `{Date.now()}: New Request Received\n on ${req.url}`;
//     switch(req.url){
//         case "/": res.end("Home Page");
//         break;
//         case "/about": res.end("About page is triggered");
//         break;
//         case "/info": res.end("Info page is opened");
//         break;
//         default : res.end("404 error page");
//     }
//     fs.appendFile('log.txt',log,(err,data)=>{
//       res.end("Response sent");
//     })
    
// });

// server.listen(3000);
// const http = require('http');

// const server = http.createServer((req, res) => {

//     console.log("Request came");

//     res.setHeader("Content-Type", "text/plain");

//     res.write("Hello ");
//     res.write("Meghna ");

//     res.end("Done");
// });

// server.listen(3000);