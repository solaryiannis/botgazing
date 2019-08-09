const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
await message.channel.send(message.guild.iconURL);
}

module.exports.config = {
    n: "servericon",
    a: ["sicon"],
    d: "Find out what the server icon looks like in full.",
    u: "Get the server icon's url.",
    ab: "All Users",
    s: "%servericon"
  }