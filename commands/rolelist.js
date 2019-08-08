module.exports.run = (bot, message, args) => {
    message.channel.send({embed: {
        color: 0x000000,
        author: {
          name: `Role List for ${message.guild.name} (${message.guild.id})`,
          icon_url: message.guild.iconURL
        },
        title: "Roles",
        description: message.guild.roles.map(role => role.name).join(", "),
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: `I'm ${bot.user.tag}!`
        }
      }
    });
    };