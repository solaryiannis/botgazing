const Discord = require('discord.js');

module.exports = {
	n: 'usericon',
	a: ['usericon', 'uicon', 'useravatar', 'uavatar', 'ua'],
    d: 'Find out what the mentioned user\'s (or your) icon looks like in full.',
    u: '%usericon or %usericon <user>',
	b: false,
	async execute(client, message, args) {
        var member;
        var user;
    
        member = message.mentions.members.first();
        if (!member) {
          member = message.guild.members.get(args[0]);
          if (!member)
          {
            member = message.guild.members.find(m => m.user.username === args.join(" "));
            if (!member) {
              member = message.guild.members.find(m => m.displayName === args.join(" "));
              if (!member) {
                if (!args) member = message.member;
                  member = message.guild.members.find(m => m.user.tag === args.join(" "));
                  if (!member) return message.channel.send ("Couldn't find the user...");
              }  
            }
          }
        }
        user = member.user;

        message.channel.send(user.avatarURL);
	},
};