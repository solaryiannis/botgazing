const Discord = require('discord.js');

module.exports = {
	n: 'subtract',
	a: ['subtract'],
    d: 'Forget your calculator at home? Have no fear!',
    u: '%subtract <number> <number>',
	async execute(message, args) {
        let numArray = args.map(n=> parseInt(n));
        let total = numArray.reduce((p,c) => p-c);
        message.channel.send(`The difference is ${total}.`);
	},
};