const Discord = require('discord.js');

module.exports = {
	n: 'divide',
	a: ['divide'],
    d: 'Forget your calculator at home? Have no fear!',
    u: '%divide <number> <number>',
	async execute(client, message, args) {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce((p,c) => p/c);
    message.channel.send(`The quotient is ${total}.`);
	},
};