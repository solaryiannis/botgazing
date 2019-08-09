const Discord = require('discord.js');

module.exports = {
	n: 'rate',
	a: ['rate', 'r', 'judgment', 'judgement'],
    d: 'Do you have taste? We\'ll see if it\'s wrong.',
    u: '%rate <message>',
	b: false,
	async execute(client, message, args) {
    var i = Math.round(Math.random() * 100);
    message.channel.send(`I'd rate **${args.join(" ")}** a **${i}/100**...`);
	},
};