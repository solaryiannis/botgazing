const Discord = require('discord.js');

module.exports = {
	n: 'bird',
	a: ['bird', 'birb', 'kotori'],
  d: 'Sometimes, all you need to cheer up are feathers.',
  u: '%bird',
	async execute (message, args) {
    const superagent = require ("superagent");

    let {body} = await superagent
    .get(`https://some-random-api.ml/img/birb`);
    if (!{body}) return message.channel.send("File not generated. Please try again!");

    const embed = new Discord.RichEmbed()
    .setTitle("%bird")
    .setColor(0x00000)
    .setImage(body.link)
 
  message.channel.send({embed});
	},
};