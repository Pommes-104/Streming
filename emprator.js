const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("/", (request, response) => {
  console.log(Date.now() + "hostemprator");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

client.on("ready", () => {
  let statuses = ["𝘽𝙚 𝙎𝙩𝙧𝙤𝙣𝙜", "V͜͡VG | ALPHA +19", "BaBy", "𝙃𝙖𝙫𝙚 𝙖 𝙜𝙤𝙤𝙙 𝙙𝙖𝙮"];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/alhouda/video/45587399"
    });
  }, 2000);
});

client.on("ready", () => {
  var join = client.channels.get("787677007991406602");
  if (join) join.join();
});

client.login(process.env.TOKEN);
