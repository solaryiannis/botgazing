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
    }

    module.exports.config = {
      n: "rolelist",
      a: ["rl", "roles"],
      d: "If you need to know what role is what.",
      u: "Get a list of every role name.",
      ab: "All Users",
      s: "%rolelist"
    }