// const http = require('http');
// const server = http.createServer();
// server.on("request",(req,res)=>{
//     res.end("Hello from nodejs server");
// })
// server.listen(8080,()=>{
//    console.log("server is on");
// })


// const http = require('http');
// const server = http.createServer();
// server.on("request",(req,res)=>{
//     console.log('request.method:',req.method);
//     console.log('request.url:',req.url);
//     res.end("Hello from server");
// })
// server.listen(8080,()=>{
//     console.log("server is running on 8080");
// })


// const http = require('http');
// const server = http.createServer((req,res)=>{
//     if(req.url==='/api'){
//         res.end("hello from home page");
//     }
//    else if(req.url==='/api/about'){
//         res.end("Hello from about page ")
//     }
//     else if(req.url==='/api/contact'){
//         res.end("Contact me at response.8@gmail.com");
//     }
//     else{
//         res.statusCode=404;
//         res.end("page not found");
//     }
// })
// server.listen(9000,()=>{
//     console.log("Running");
// })


// const http = require('http');
// const server = http.createServer();
// server.on("request",(req,res)=>{
//     //homepage
//     if(req.method==='GET' && req.url==='/api'){
//         res.end("Welcome to home Page");
//     }
//     else if(req.method==='GET' && req.url==='/api/user'){
//         res.end("Welcome meghna");
//     }
//     else if(req.method ==='POST' && req.url==='/api/update'){
//         let body ='';
//         res.on('data',(chunk)=>{
//             body=body+chunk;
//         })
//         res.on('end',()=>{
//             res.end('Data Received:', data);
//         })
//     } else {
//         res.statusCode=404;
//         res.end("User not found");
//     }
// })
// server.listen(50000,()=>{
//     console.log("Server is running");
// })

// const http = require('http');
// const server = http.createServer();
// server.on("request",(req,res)=>{
  
//     if(req.url==='/api' && req.method==='GET'){
//         res.end("Homepage");
//     }

//     if(req)



// })

// process.stdout.write("Hello\n");
// console.log("Hello");
// console.log("Meghna");
// process.stdout.write("Meghna");
// process.stdout.write("Meghna");

// const http = require('http');
// const fs = require('fs');
// const user = JSON.parse(fs.readFileSync('user.json'));
// const profile = JSON.parse(fs.readFileSync('profile.json'));
// const server = http.createServer();
// const password = "abcde";
// let users = [];
// server.on("request", (req, res) => {
//     console.log('request.headrer:', req.headers);
//     console.log('request.path:', req.url);
   
//       if (req.headers.authorization !== password) {
//         console.log('auth header:', req.headers.authorization);
//         res.statusCode = 401;
//         res.end("Unauthorized");
//         return;
//     }
//     if (req.method === "GET" && req.url === '/api') {
//         res.end("Welcome to home page")
//     }
//     else if (req.method === 'GET' && req.url === '/api/users') {
//         res.end(JSON.stringify(user));
//     }
//     else if (req.method === 'GET' && req.url === '/api/profile') {
//         res.end(JSON.stringify(profile))
//     }
//     else if (req.method === 'POST' && req.url === '/api/update') {
//         let body = '';
//         req.on('data', (chunk) => {
//             body += chunk;
//         })
//         req.on('end', () => {
//             user.push(body);
//            res.end('Data Received:\n' +body);
//      })
//     }
//     else if (req.method === 'POST' && req.url === '/api/createfile') {
//         const log = `${Date.now()} a new request is given on ${req.url} using ${JSON.stringify(req.headers)} headers`;
//         let body = '';
//         req.on('data', (chunk) => {
//             body = body + chunk;
//         })
//         req.on('end', () => {
//             users.push(body);
//         fs.writeFileSync('./text.txt', "Hello You just created a file\n" +log + "\n" +body);
//         res.end("File is added\n" +body);
//         })

//     }
//     else if (req.method === 'GET' && req.url === '/api/getusers') {
//         res.end(JSON.stringify(users));
//         }
//     else {
//         res.statusCode = 404;
//         res.end("Page not found");
//     }
// })
// server.listen(9000, () => {
//     console.log("Server is running on port 9000");
// })


const http = require("http");
const fs = require("fs");
const url = require("url");


function handler(req, res) {
    (req, res) => {
    if (req.url === "/fevicon.icon") return res.end();
    const log = `${Date.now()} : ${req.method} ${req.url} New request has been raised`;
    const myurl = url.parse(req.url, true);
    console.log(myurl);
    fs.appendFile("log.txt", log, (err, data) => {
        switch (myurl.pathname) {
            case "/":
                res.end("Welcome to home page");
                break;
            case "/about":
                const username = myurl.query.myname;
                res.end(`Hi ${username}`);
                res.end("Done");
                break;
            case "/search":
                const search = myurl.query.search_query;
                res.end("Here are your results for " + serach);
            default:
                res.end("Not found");
        }
    })
    
}
}

const myserver = http.createServer(handler);
myserver.listen(9000, () => {
    console.log("My server is running");
    
})