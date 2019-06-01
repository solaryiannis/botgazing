module.exports.run = async (bot, message, args) => {
    const Discord = require('discord.js');
    const superagent = require ("superagent");

    let {body} = await superagent
    .get(`http://shibe.online/api/birds`);
    if (!{body}) return message.channel.send("File not generated. Please try again!");

    const embed = new Discord.RichEmbed()
    .setTitle("%bird")
    .setColor(0x00000)
    .setImage(body.0)
 
  message.channel.send({embed});
};