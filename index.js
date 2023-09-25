// 'use strict';

// var fs = require('fs');

// const ViberBot = require('viber-bot').Bot;
// const BotEvents = require('viber-bot').Events;

// const bot = new ViberBot({
// 	authToken: '51acb82bf1e7dcd3-917b66c231c4e424-9020200045e9c5ee',
// 	name: "TestBotAccountpandorum",
// 	avatar: "11111.jpg" // It is recommended to be 720x720, and no more than 100kb.
// });

// // Perfect! Now here's the key part:
// bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
// 	// Echo's back the message to the client. Your bot logic should sit here.
// 	response.send(message);
// });

// // Wasn't that easy? Let's create HTTPS server and set the webhook:
// const https = require('https');
// const port = process.env.PORT || 8080;

// // Viber will push messages sent to this URL. Web server should be internet-facing.
// const webhookUrl = process.env.WEBHOOK_URL;

// console.log('1')

// // const httpsOptions = {
// //     key: fs.readFileSync("rsa.key"),
// //     cert: fs.readFileSync("csr.crt"),
// //     ca: fs.readFileSync("tender-bear-underclothes.cyclic.cloud.ca-bundle")
// //   };// Trusted SSL certification (not self-signed).
// //   https.createServer(httpsOptions, bot.middleware()).listen(port, () => bot.setWebhook(webhookUrl).catch((err)=>{
// //       console.log(err)
// //   }));

const http = require('http');

console.log('11')

const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;

console.log('11')
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});