const Discord = require("discord.js");
const fs = require("fs");

require("dotenv").config();
const bot_secret_token = process.env.Bot_token;

const client = new Discord.Client();
client.commands = new Discord.Collection();

fs.readdir("./cmds/", (err, files) => {
  let modules = files.filter(f => f.split(".").pop() === "js");
  modules.forEach((f, i) => {
    let props = require(`./cmds/${f}`);
    try {
      client.commands.set(props.help.name, props);
    } catch (err) {
      console.log("Error => " + err);
      process.exit(1);
    }
  });
  console.log(`Success => Loaded ${modules.length} modules.`);
});

client.on("ready", () => {
  console.log("Connected => " + client.user.tag);
});

client.on("message", message => {
  let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);
  let cmd = messageArray[0];

  let command_file = client.commands.get(cmd.slice(1));

  if (cmd[0] === "!") {
    if (command_file) {
      console.log(
        `\nUser [${message.author.username}] sent [${message}]\nserver`
      );
      try {
        command_file.run(client, message, args);
      } catch (e) {
        console.error(
          `${e}: 'run' function not found in file [${command_file}].`
        );
      }
    }
  }
});

client.on("message", msg => {
  if (msg.content === "!p") {
    msg.reply("Just Testing");
  }
});

client.login(bot_secret_token);
