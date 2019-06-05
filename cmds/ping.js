const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  var ping = await client.ping;
  return message.channel.send(
    new Discord.RichEmbed()
      .setDescription(`**${client.user.username} Ping: ${Math.floor(ping)}ms**`)
      .setColor("#00FF00")
  );
};

module.exports.help = {
  name: "ping",
  descr: "Shows the current ping of the bot server"
};
