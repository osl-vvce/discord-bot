const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (args[0]) {
    if (args[0] < 1) return message.channel.send("Invalid data number");

    var dices = new Array();
    try {
      dices.length = parseInt(args[0]);
    } catch (e) {
      return message.channel.send("Invalid data number");
    }

    if (dices.length > 5)
      return message.channel.send(
        "You can only play a maximum of 5 dice at a time"
      );

    var dice_string = "";
    for (let i = 0; i < dices.length; i++) {
      dices[i] = Math.floor(Math.random() * 6) + 1;
      dice_string += `Dice ${i + 1}: **${dices[i]}**\n`;
    }

    return message.channel.send(
      new Discord.RichEmbed()
        .addField("Result of the data played", dice_string)
        .setColor("#00FF00")
    );
  } else {
    var dice = Math.floor(Math.random() * 6) + 1;
    return message.channel.send(
      `<@${message.author.id}> threw the die and stopped at **${dice}**`
    );
  }
};

module.exports.help = {
  name: "dice",
  descr: "Throw one or more dice up and display the result",
  arg: ["data"]
};
