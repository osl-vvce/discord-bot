const Discord = require("discord.js");
const fs = require("fs");

function getcmd_name(array) {
  let path = "./cmds/";
  let ignore = "global_message.js";

  fs.readdir(path, (e, files) => {
    if (e) console.error(`\n=> Path '${path}' does not exists.\n`);

    var jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length < 1) throw new Error("=> Could not find commands");

    jsfile.forEach(f => {
      if (f != ignore) {
        // removes the .js from file name and push full file name into array
        array.push(f.slice(0, f.length - 3));
      }
    });
  });
}

let bot_cmdarr = new Array();

getcmd_name(bot_cmdarr);

module.exports.run = async (client, message, args) => {
  const bot_commands = bot_cmdarr.join(", ");

  let help_embed = new Discord.RichEmbed()
    .setAuthor(`${client.user.username} Commands `)
    .setColor("#00FF00")
    .addField("Commands", bot_commands)
    .addField(
      "\u200B",
      "**Use ``" +
        `!${this.help.name} [command]` +
        "`` for help on a given command\n"
    )
    .addField("Example", `!${this.help.name} ping`);

  // Function writes the information in the subhelp
  function writefn(array) {
    /*
        Get the description of the current command in a given category as a map
        that sets as [key : value] -> [command : description]
        */
    let descr_map = new Map();
    let fn_arr = new Array();

    // Reads the commands in runtime
    for (let i = 0; i < array.length; i++) {
      let c_path = require("../" + foldername + "/" + array[i] + ".js");
      fn_arr.push(c_path.help.descr);
      descr_map.set(array[i], fn_arr[i]);
    }

    // Write the map as output in a Discord embed
    let descr_str = "";
    descr_map.forEach((value, key) => {
      let cmd_file = require("../" + foldername + "/" + key + ".js");

      if (cmd_file.help.arg) {
        descr_str +=
          "``" +
          `!${key} [${cmd_file.help.arg.join("] [")}]` +
          "`` " +
          `${value}\n`;
      } else {
        descr_str += "``" + `!${key}` + "`` " + `${value}\n`;
      }
    });
  }

  function send_singlemsg(path) {
    let havearg = "";
    if (path.help.arg) havearg += ` [${path.help.arg.join("] [")}]`;

    return message.channel.send(
      new Discord.RichEmbed()
        .addField("Use", "``" + `!${args[0]}${havearg}` + "``")
        .addField("Description", path.help.descr)
        .setColor("#00FF00")
    );
  }

  if (bot_cmdarr.includes(args[0])) {
    let fn = require("./" + args[0]);
    return send_singlemsg(fn);
  }

  switch (args[1]) {
    case `${client.user.username.toLowerCase()}`:
      return writefn(bot_cmdarr);
    default:
      return message.channel.send(help_embed);
  }
};

module.exports.help = {
  name: "help",
  name_2: "h",
  descr: "Show all bot commands",
};
