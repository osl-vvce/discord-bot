const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");

bot.on("ready", () => {
  console.log("I am ready!");
});

bot.on("message", function(message) {
  console.log(message.content);

  
  if(message.content == "!discord") {
    
    var embed1 = new Discord.RichEmbed()
    .setColor(0x00ae86)
    .setAuthor("** USING DISCORD **")
    .setDescription("Getting started with Discord:")
    .addField("1. Servers", "Servers are groups, you could think of them as companies. The tool bar on the far left shows all the servers your are currently in.")
    .addField("2. Channels", "Channels are topics of conversations. You should choose a channel that closely matches what you wish to discuss before posting. Unlike slack you do not need join channels, you already have access to them all by default.")
    .addField("3. Channel Info", "Some channels may have some further information, you can click this to see more.")
    .addField("4. Notification Bell", "You can disable notifications for this channel by click this icon. You will only recieve notifications if you are @mentioned")
    .addField("5. Pinned Messages", "Each channel has a pinned message section, where you can find posts that have been pinned for future reference")
    .addField("6. Mentions", "This icons will display a panel that shows all instances where you were @mentioned")
    .addField("Changing Theme", "Discord has 2 themes, light and dark. To change theme click the cog button (7), Appearance, Select theme. You could also change the way the posts appear, or the text size.")
    message.channel.sendEmbed(embed1);

      var embed2 = new Discord.RichEmbed()
      .setColor(0xf45c42)
      .setAuthor("** HOW TO SEND CODE **")
      .setDescription("Following the guidelines below will help others read your code easily and be able to assist you much quicker")
      .addField("Small Code Snippets", "For small code snippets consisting of a couple of lines, encase the code in backticks ")
      .addField("Larger Code", "Head over to https://codepen.io/ and create a new pen.")
      .addField("React Code", "If you need help with your react code, head on over to https://codesandbox.io/s/new")
      message.channel.sendEmbed(embed2);

      let embed3 = new Discord.RichEmbed()
        .setAuthor("** Markdown & Styling **")
        .setColor("#075eea")
        .setDescription("Discord has some built in styling options known as markdown. One that you might find the most useful is code blocks using back ticks.")
        .addField("Bold Text", "```\*\*Text\*\*```")
        .addField("Italics", "```*italics*```")
        .addField("underlined", "```__underline__```")
        .addField("Codeblocks", "Using backticks as shown below you can create codeblocks.")
        .setImage("https://support.discordapp.com/hc/en-us/article_attachments/211601448/HelloWorldForm.png")
    message.channel.send({embed: embed3});

    const embed = new Discord.RichEmbed()
    .setAuthor("** USING VOICE CHAT **")
    .setColor(0x00AE86)
    .setDescription("Getting started with voice chat, click the image below for a larger view.")
    .setImage("https://cdn.discordapp.com/attachments/435949792389234690/440117418824826890/voice.png")
    .addField(
        "1. Connecting to a voice channel",
        "Connecting to a voice channel as simple as locating a voice channel and clicking on it. Voice channels will have a little speaker icon to the left of the name.")
    .addField(
        "2. Disconnecting from a voice channel", 
        "Leaving a voice channel is just a case of clicking the hang up icon.")
    .addField(
        "3. Muting yourself", 
        "Clicking this will stop Discord listening to your mic, no one will be able to hear you! This icon will also appear next to your name to show everyone that you are muted")
    .addField(
        "4. Deafen yourself", 
        "Clicking this will stop Discord broadcasting to your speakers, you will not be able to hear anyone! Again this icon will appear next to your name.")
    .addBlankField(true)
    .addField(
        "ADVANCED SETTINGS", 
        "Check out this video for some advanced voice settings, such as setting push-to-talk and volume controls! https://youtu.be/LDVqruRsYtA?t=6m14s")
    .addBlankField(true)
  
    message.channel.send({embed});


  }

});

bot.login(config.token);

