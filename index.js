// "use strict";

// var fs = require("fs");

// const ViberBot = require("viber-bot").Bot;
// const BotEvents = require("viber-bot").Events;

// const bot = new ViberBot({
//   authToken: "51acb82bf1e7dcd3-917b66c231c4e424-9020200045e9c5ee",
//   name: "TestBotAccountpandorum",
//   avatar: "11111.jpg", // It is recommended to be 720x720, and no more than 100kb.
// });

// // Perfect! Now here's the key part:
// bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
//   // Echo's back the message to the client. Your bot logic should sit here.
//   response.send(message);
// });

// // Wasn't that easy? Let's create HTTPS server and set the webhook:
// const https = require("https");
// const port = process.env.PORT || 8080;

// // Viber will push messages sent to this URL. Web server should be internet-facing.
// const webhookUrl = process.env.WEBHOOK_URL;

// console.log("1");

// var MY_CRT = fs.readFileSync("csr.crt");

// const httpsOptions = {
//   key: fs.readFileSync("rsa.key"),
//   cert: MY_CRT,
//   //ca: fs.readFileSync("tender-bear-underclothes.cyclic.cloud.ca-bundle")
// }; // Trusted SSL certification (not self-signed).
// https.createServer(httpsOptions, bot.middleware()).listen(port, () =>
//   bot.setWebhook(webhookUrl).catch((err) => {
//     console.log(err);
//   })
// );

// var fs = require('fs');

// const key = fs.readFileSync("tender-bear-underclothes_cyclic_cloud.key", 'utf-8')
// const cert = fs.readFileSync("tender-bear-underclothes_cyclic_cloud.csr", 'utf-8')
// console.log(cert);
// console.log(key);

// var https = require('https');

// var https_options = {
// key: key,
// cert: cert
// };
// https.createServer(https_options, function (req, res) {
// res.writeHead(200);
// res.end("Welcome to Node.js HTTPS Servern");
// }).listen(8443)

// const http = require('http');
// const express = require('express')
// const app = express()

// const hostname = '127.0.0.1';
// const port = 3000;

// app.get("/.well-known/pki-validation/B61165D617DB9E09CD380BBF6379AF8D.txt", function (req, res) {
//   res.send("Wiki home page");
// });

// app.get("/", function (req, res) {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// const server = http.createServer();

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// const http = require('http');
// var fs = require('fs');

// // Create a server object
// http.createServer(function (req, res) {

//     // http header
//     res.writeHead(200, {'Content-Type': 'text/html'});

//     const url = req.url;

//     if(url ==='/about') {
//         res.write(' Welcome to about us page');
//         res.end();
//     }
//     else if(url ==='/.well-known/pki-validation/B61165D617DB9E09CD380BBF6379AF8D.txt') {
//       fs.readFile('B61165D617DB9E09CD380BBF6379AF8D.txt', function(err, data) {
//         res.write(data);
//         return res.end();
//       });
//     }
//     else {
//         res.write('Hello World!');
//         res.end();
//     }
// }).listen(3000, function() {

//     // The server object listens on port 3000
//     console.log("server start at port 3000");
// });

const express = require("express");
const app = express();
const PORT = 3000;

var fs = require("fs");

// Without middleware

app.get("/", function (req, res) {
  res.send({ title: "GeeksforGeeks" });
});


app.get('/.well-known/pki-validation/B61165D617DB9E09CD380BBF6379AF8D.txt', function (req, res) {
  fs.readFile('B61165D617DB9E09CD380BBF6379AF8D.txt', function(err, data) {
    res.send(data);
    //return res.end();
  });
});

// app.use(function(request, response, next) {
//   if (process.env.NODE_ENV != 'development' && !request.secure) {
//      return response.redirect("https://" + request.headers.host + request.url);
//   }
//   next();
// })

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
