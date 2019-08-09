module.exports.run = async (bot, message, args) => {
    const Discord = require('discord.js');
    const superagent = require ("superagent");

    let {body} = await superagent
    .get(`https://some-random-api.ml/img/birb`);
    if (!{body}) return message.channel.send("File not generated. Please try again!");

    const embed = new Discord.RichEmbed()
    .setTitle("%bird")
    .setColor(0x00000)
    .setImage(body.link)
 
  message.channel.send({embed});
};

module.exports.config = {
  n: "bird",
  a: ["birb", "kotori"],
  d: "Sometimes, all you need to cheer up are feathers.",
  u: "Get presented with a randomly generated image of a bird."
  ab: "All Users",
  s: "%bird"
}