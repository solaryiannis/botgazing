const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.channel.send(`It is ${new Date().toGMTString()}.`);
    }

    module.exports.config = {
        n: "gmt",
        na: "N/A",
        a: [],
        d: "Figure out if it's quite time to send your friends to bed or not.",
        u: "Shows you the current time in the GMT timezone.",
        ab: "All Users",
        s: "%gmt"
      }