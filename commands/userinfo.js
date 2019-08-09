const Discord = require('discord.js');

module.exports = {
	n: 'userinfo',
	a: ['userinfo', 'uinfo'],
    d: 'Gets the mentioned user\'s (or your) info.',
    u: '%userinfo or %userinfo <user>',
	b: false,
	async execute(client, message, args) {
    var member;
    var user;
    
    member = message.mentions.members.first();
    if (!member) {
      member = message.guild.members.get(args[0]);
      if (!member)
      {
        if (message.guild.members.find(args[0])) return message.channel.send ("Couldn't find the user...");
        member = message.guild.members.find(args[0]);
      }
    }
    const user = member.user;
    
    const embed = new Discord.RichEmbed()
    .setColor(member.displayColor)
    .setTitle(`%userinfo`)
  	.setThumbnail(user.avatarURL)
  	.addField('User', `${user.tag} (${user.id})`)
  	.addBlankField()
  	.addField('Bot User', user.bot, true)
    .addField('Presence', member.presence.status, true)
    .addField('Account Created', new Date(user.createdTimestamp).toGMTString())
    .addField('Server Joined', new Date(member.joinedTimestamp).toGMTString())
    .addField(`Roles (${member.roles.size})`, member.roles.map(role => role.name).join(", "))
  	.setTimestamp()
  	.setFooter(`I'm ${client.user.tag}!`, client.user.avatarURL);
    message.channel.send({embed});
},
};