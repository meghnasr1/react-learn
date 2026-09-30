// const http = require('http');
// const server = http.createServer();
// const fs = require('fs');

// const user = JSON.parse(fs.readFileSync('user.json'));
// const profile = JSON.parse(fs.readFileSync('profile.json'))

// server.on("request",(req,res)=>{
//     console.log('request.headers: ', req.headers);

//     console.log('request.method: ', req.method)
//     console.log('request.url: ', req.url)
// if(req.headers.authorization!=="12345"){
//     res.statusCode=401;
//     res.end("Not Authorize");
//     return;
// }

// // 2 api end points
// if(req.url ==='/api/user'){
//     //fs.readFile('user.json',(err,data)=>{
//         res.end(JSON.stringify(user));
//     //})
// }
//  if(req.url==='/api/profile'){
//     //fs.readFile('profile.json',(err,data)=>{
//         res.end(JSON.stringify(profile));
//    //})
// }
// if(req.url==='api/login'){
//     if(req.headers.Authorization!=="abcdefg"){
//         res.end("Unauthorized");
//     }
//     else{
//         res.end("You are authorizes");
//     }
       
//     } 
// // if(req.method==="POST"){
// //     if(req.url==='api/createUser'){
// //         fs.write('createUser.json',(err,data)=>{
          
// //         })
// //     }
// // }
// })
// server.listen(8080, () => {
//     console.log('Server Started')
// });




// const http = require('http');
// const server = http.createServer();
// const fs=require('fs');
// const user = JSON.parse(fs.readFileSync('user.json'));
// const profile = JSON.parse(fs.readFileSync('profile.json'));
// const password = "12345";
// server.on('request',(req,res)=>{
//    if(req.headers.authorization!==password){
//        res.statusCode=401;
//        res.end("Unauthorized");
//        return;
//    }
//    else if(req.method==='GET' && req.url==='/api'){
//     res.end("Welcome Home");
//    }
//    else if(req.method==='GET' && req.url==='/api/user'){
//     res.end(JSON.stringify(user));
//    }
//    else if(req.method==='GET' && req.url==='/api/profile'){
//     res.end(JSON.stringify(profile));
//    }
//    else if(req.method==='POST' && req.url.startsWith('/api/updateusers')){
//     let body = '';
//     req.on('data',(chunk)=>{
//         body=body+chunk;
//     })
//     req.on('end',()=>{
//         res.end("User Added"+ body);
//     })
//    }
//    else{
//     res.statusCode=404;
//     res.end("Page not found");
//    }
// })
// server.listen(5000,()=>{
//     console.log("Server is runiing");
// })