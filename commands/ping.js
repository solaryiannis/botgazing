const Discord = require('discord.js');

module.exports = {
	n: 'ping',
	a: ['ping', 'p'],
    d: 'Ping pong!',
    u: '%ping',
	b: false,
	async execute(client, message, args) {
    message.channel.send(`Pong! (currently at ${client.pings[0]} ms)`);
},
};