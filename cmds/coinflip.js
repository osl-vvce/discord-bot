module.exports.run = async (client, message, args) => {
  var coin = Math.floor(Math.random() * 20);
  var coin_string = "";

  if (coin % 7 === 0) coin_string += "**Heads**";
  else coin_string += "**Tails**";

  return message.channel.send(`<@${message.author.id}> Its ${coin_string}`);
};

module.exports.help = {
  name: "coinflip",
  name_2: "flipcoin",
  descr: "Throw a coin up and display the result"
};
