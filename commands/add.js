const Discord = require('discord.js');

module.exports = {
	n: 'add',
	a: ['add'],
    d: 'Forget your calculator at home? Have no fear!',
    u: '%add <number> <number>',
	async execute(message, args) {
		let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce((p,c) => p+c);
    message.channel.send(`The sum is ${total}.`);
	},
};