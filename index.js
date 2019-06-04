const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client();

const bot_secret_token = process.env.Bot_token;

client.on("ready", () => {
  console.log("Connected as " + client.user.tag);
});

client.login(bot_secret_token);
