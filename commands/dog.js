const Discord = require('discord.js');

module.exports = {
	n: 'dog',
	a: ['dog', 'dog', 'pupper', 'puppy'],
    d: 'Sometimes, all you need to cheer up are some paw prints.',
    u: '%dog',
	async execute(message, args) {
    const superagent = require ("superagent");

    let {body} = await superagent
    .get(`https://dog.ceo/api/breeds/image/random`);
    if (!{body}) return message.channel.send("File not generated. Please try again!");

    const embed = new Discord.RichEmbed()
    .setTitle("%dog")
    .setColor(0x00000)
    .setImage(body.message)
 
  message.channel.send({embed});
	},
};