const Discord = require('discord.js');

module.exports = {
	n: 'servericon',
	a: ['servericon', 'si', 'sicon', 'serveravatar', 'sa', 'savatar'],
    d: 'Find out what the server icon looks like in full.',
    u: '%servericon',
	b: false,
	async execute(client, message, args) {
    message.channel.send(message.guild.iconURL);
	},
};