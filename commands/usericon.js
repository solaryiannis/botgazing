const Discord = require('discord.js');

module.exports = {
	n: 'usericon',
	a: ['usericon', 'uicon', 'useravatar', 'uavatar', 'ua'],
    d: 'Find out what the mentioned user's (or your) icon looks like in full.',
    u: '%usericon or %usericon <user>',
	execute(message, args) {
        if (message.mentions.users.size === 0) {
            message.channel.send(message.author.avatarURL);
        }
        else {
            message.channel.send(message.mentions.users.first().avatarURL);
        }
	},
};