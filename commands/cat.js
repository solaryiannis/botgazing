module.exports.run = async (bot, message, args) => {
    const Discord = require('discord.js');
    const superagent = require ("superagent");

    let {body} = await superagent
    .get(`http://aws.random.cat/meow`);
    if (!{body}) return message.channel.send("File not generated. Please try again!");

    const embed = new Discord.RichEmbed()
    .setTitle("%cat")
    .setColor(0x00000)
    .setImage(body.file)
 
  message.channel.send({embed});
};