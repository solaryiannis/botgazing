const Discord = require('discord.js');

module.exports = {
	n: 'usericon',
	a: ['usericon', 'uicon', 'useravatar', 'uavatar', 'ua'],
    d: 'Find out what the mentioned user\'s (or your) icon looks like in full.',
    u: '%usericon or %usericon <user>',
	b: false,
	async execute(client, message, args) {
        var user;
        let argsMember = message.guild.members.get("name", args[0]).id;
        if (argsMember) user = client.fetchUser(argsMember);
        else user = message.mentions.users.first() || message.author;
        message.channel.send(user.avatarURL);
	},
};