const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");

bot.on("ready", () => {
  console.log("I am ready!");
});

bot.on("message", function(message) {
  console.log(message.content);

  
  if(message.content == "info") {
    message.channel.send(`hello`);
  }
  
});

bot.login(config.token);
