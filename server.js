// const http = require('http');
// const fs = require('fs');
// const server = http.createServer();
// const user = JSON.parse(fs.readFileSync('user.json'));
// const profile = JSON.parse(fs.readFileSync('profile.json'));
// const password = "12345";

// server.on("request", (req, res) => {

//     console.log('request.headers: ', req.headers);

//     console.log('request.method: ', req.method)
//     console.log('request.url: ', req.url)

//     if (req.headers.authorization !== password) {
//         console.log('auth header:', req.headers.authorization);
//         res.statusCode = 401;
//         res.end("Unauthorized");
//         return;
//     }
//     else if (req.method === 'GET' && req.url === '/api/user') {
//         res.end(JSON.stringify(user));
//     } else if (req.method === 'GET' && req.url === '/api/profile') {
//         res.end(JSON.stringify(profile));
//     }
//     // else if (req.method === 'POST' && req.url === '/api/create') {
//     //     //fs.writeFileSync()
//     // }
// })
// server.listen(5000, () => {
//     console.log("Server is running on port 5000");
// })