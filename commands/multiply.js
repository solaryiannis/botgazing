const Discord = require('discord.js');

module.exports = {
	n: 'multiply',
	a: ['multiply'],
    d: 'Forget your calculator at home? Have no fear!',
    u: '%multiply <number> <number>',
	b: false,
	async execute(client, message, args) {
        let numArray = args.map(n=> parseInt(n));
        let total = numArray.reduce((p,c) => p*c);
        message.channel.send(`The product is ${total}.`);
	},
};