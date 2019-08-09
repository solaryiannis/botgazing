const Discord = require('discord.js');

module.exports = {
	n: 'roll',
	a: ['roll', 'd'],
    d: 'Roll the dice!',
    u: '%roll <number>',
	b: false,
	async execute(client, message, args) {
    var int = parseInt(args);
    var i = Math.round((Math.random() * int) + 1);
    
    message.channel.send(`D${int} Roll: ${i}`);
	},
};