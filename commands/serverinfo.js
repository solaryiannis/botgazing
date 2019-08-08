module.exports.run = (bot, message, args) => {
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
            value: `${new Date(message.guild.createdTimestamp)}`
        },
        {
            name: "Region",
            value: `${message.guild.region}`
        },
        {
            name: "Channels",
            value: `${message.guild.channels.size}`
        },
        {
            name: "Roles",
            value: `${message.guild.roles.size} roles`
        }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: `I'm ${bot.user.tag}!`
        }
      }
    });
    };