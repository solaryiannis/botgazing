const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    var num = Math.round((Math.random() * 2) + 1);
    if (num === 1) {
        message.react("✅").catch(console.error);
        await message.channel.send(`**You were snapped.** You have had the privilege of being saved by the Great Titan. You took it.`);
    }
    else if (num === 2) {
        message.react("❌").catch(console.error);
        await message.channel.send(`**You were spared.** You have had the privilege of being saved by the Great Titan. You did not take it.`);
    }
}

module.exports.config = {
    n: "snap",
    na: "N/A",
    a: [],
    d: "HEAR ME AND REJOICE",
    u: "Find out if you were saved by the Great Titan.",
    ab: "All Users",
    s: "%snap"
  }