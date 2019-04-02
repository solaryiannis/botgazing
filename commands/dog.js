module.exports.run = async (bot, message, args) => {
    const Discord = require('discord.js');
    const superagent = require ("superagent");

    let {body} = await superagent
    .get(`https://dog.ceo/api/breeds/image/random`);
    if (!{body}) return message.channel.send("File not generated. Please try again!");

    const embed = new Discord.RichEmbed()
    .setTitle("%dog")
    .setColor(0x00000)
    .setImage(body.message)
 
  message.channel.send({embed});
};