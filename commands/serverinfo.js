const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  await message.channel.send({embed: {
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
          icon_url: bot.user.avatarURL,
          text: `I'm ${bot.user.tag}!`
        }
      }
    });
    }

    module.exports.config = {
      n: "serverinfo",
      a: ["sinfo"],
      d: "Get the current server's info.",
      u: "Get the requested embed, with a bit of info.",
      ab: "All Users",
      s: "%serverinfo"
    }
