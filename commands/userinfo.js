const Discord = require('discord.js');

module.exports = {
	n: 'userinfo',
	a: ['userinfo', 'uinfo'],
    d: 'Gets the mentioned user\'s (or your) info.',
    u: '%userinfo or %userinfo <user>',
	b: false,
	async execute(client, message, args) {
    var userMember;

    if (message.mentions.users.size === 0) {
        userMember = message.author;
        memberUser = message.member;
    }
    else {
        userMember = message.mentions.users.first();
        memberUser = message.mentions.members.first();
    }
    
    message.channel.send({embed: {
        color: memberUser.displayColor,
        author: {
          name: `${userMember.tag} (${userMember.id})`,
          icon_url: userMember.avatarURL
        },
        title: "Display Name",
        description: memberUser.displayName,
        fields: [
            {
                name: "Bot User",
                value: userMember.bot
            },
            {
                name: "Presence",
                value: memberUser.presence.status
            },
            {
                name: "Account Created",
                value: new Date(userMember.createdTimestamp).toGMTString()
            },
            {
                name: "Server Joined",
                value: new Date(memberUser.joinedTimestamp).toGMTString()
            },
            {
                name: `Roles (${memberUser.roles.size})`,
                value: memberUser.roles.map(role => role.name).join(", ")
            }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: `I'm ${client.user.tag}!`
        }
      }
    });
},
};