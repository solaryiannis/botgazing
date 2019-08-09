const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
var int = parseInt(args);
var i = Math.round((Math.random() * int) + 1);

await message.channel.send(`D${int} Roll: ${i}`);
    }

    module.exports.config = {
        n: "roll",
        a: ["d"],
        d: "Roll the dice!",
        u: "Follow this command by the number of sides on your dice.",
        ab: "All Users",
        s: "%roll 20"
      }