const Discord = require('discord.js');

module.exports = {
      n: 'serverinfo',
      a: ['serverinfo', 'sinfo', '', ''],
        d: 'Get the current server\'s info.',
        u: '%serverinfo or %serverinfo <user>',
        b: false,
        async execute(client, message, args) {

          const embed = new Discord.RichEmbed()
    .setColor(0x000000)
    .setTitle(`%serverinfo`)
  	.setThumbnail(message.guild.iconURL)
  	.addField('Server', `${message.guild.name} (${message.guild.id})`)
  	.addBlankField()
  	.addField('Members', message.guild.members.size, true)
    .addField('Owner', message.guild.owner, true)
    .addField('Region', message.guild.region, true)
    .addField('Channels', message.guild.channels.size, true)
    .addField('Server Created', new Date(message.guild.createdTimestamp).toGMTString())
    .addField(`Roles`, `${message.guild.roles.size} roles. To see all role names, use "%rolelist"!`)
  	.setTimestamp()
  	.setFooter(`I'm ${client.user.tag}!`, client.user.avatarURL);
    message.channel.send({embed});
      },
    };