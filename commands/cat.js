const Discord = require('discord.js');

module.exports = {
	n: 'cat',
	a: ['cat', 'kitty', 'kitten'],
    d: 'Sometimes, all you need to cheer up is some warm fur.',
    u: '%cat',
	async execute(client, message, args) {
    const superagent = require ("superagent");

    let {body} = await superagent
    .get(`http://aws.random.cat/meow`);
    if (!{body}) return message.channel.send("File not generated. Please try again!");

    const embed = new Discord.RichEmbed()
    .setTitle("%cat")
    .setColor(0x00000)
    .setImage(body.file)
 
  message.channel.send({embed});
	},
};