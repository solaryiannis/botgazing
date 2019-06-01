module.exports.run = async (bot, message, args) => {
    const Discord = require('discord.js');
    const superagent = require ("superagent");

    let {body} = await superagent
    .get(`http://random.birb.pw/tweet.json`);
    if (!{body}) return message.channel.send("File not generated. Please try again!");

    const embed = new Discord.RichEmbed()
    .setTitle("%bird")
    .setColor(0x00000)
    .setImage(`https://random.birb.pw/img/${body.file}`)
 
  message.channel.send({embed});
};