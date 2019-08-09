const Discord = require('discord.js');

module.exports = {
      n: 'serverinfo',
      a: ['serverinfo', 'sinfo', '', ''],
        d: 'Get the current server\'s info.',
        u: '%serverinfo or %serverinfo <user>',
        async execute(message, args) {
        message.channel.send({embed: {
          color: 0x000000,
          author: {
            name: `${message.guild.name} (${message.guild.id})`,
            icon_url: message.guild.iconURL
          },
          title: "Members",
          description: `${message.guild.members.size}`,
          fields: [
          {
              name: "Server Owner",
              value: `${message.guild.owner} (${message.guild.ownerID})`
          },
          {
              name: "Creation Date",
              value: new Date(message.guild.createdTimestamp).toGMTString()
          },
          {
              name: "Region",
              value: message.guild.region
          },
          {
              name: "Channels",
              value: message.guild.channels.size
          },
          {
              name: "Roles",
              value: `${message.guild.roles.size} roles. To see all role names, use "%rolelist"!`
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