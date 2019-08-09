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
    
    const embed = new Discord.RichEmbed()
    .setColor(memberUser.displayColor)
    .setTitle(`%userinfo`)
  	.setThumbnail(userMember.avatarURL)
  	.addField('User', `${userMember.tag} (${userMember.id})`)
  	.addBlankField()
  	.addField('Bot User', userMember.bot, true)
    .addField('Presence', memberUser.presence.status, true)
    .addField('Account Created', new Date(userMember.createdTimestamp).toGMTString())
    .addField('Server Joined', new Date(memberUser.joinedTimestamp).toGMTString())
    .addField(`Roles (${memberUser.roles.size})`, memberUser.roles.map(role => role.name).join(", "))
  	.setTimestamp()
  	.setFooter(`I'm ${client.user.tag}!`, client.user.avatarURL);
    message.channel.send({embed});
},
};