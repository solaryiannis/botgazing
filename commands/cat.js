const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const superagent = require ("superagent");

    let {body} = await superagent
    .get(`http://aws.random.cat/meow`);
    if (!{body}) return message.channel.send("File not generated. Please try again!");

    const embed = new Discord.RichEmbed()
    .setTitle("%cat")
    .setColor(0x00000)
    .setImage(body.file)
 
  message.channel.send({embed});
}

module.exports.config = {
  n: "cat",
  a: ["kitty", "kitten"],
  d: "Sometimes, all you need to cheer up is some warm fur.",
  u: "Get presented with a randomly generated image of a cat.",
  ab: "All Users",
  s: "%cat"
}