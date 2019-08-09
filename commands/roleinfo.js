const Discord = require('discord.js');

module.exports = {
	n: 'roleinfo',
	a: ['roleinfo', 'ri', 'role'],
    d: 'If you need to know what role does what.',
    u: '%roleinfo <role name>',
    async execute(client, message, args) {

        if (!args) return message.channel.send("Please type the name of a role.");
        let findRole = message.guild.roles.find(r => r.name === args.join(" "));

        if (!findRole) return message.channel.send("I couldn't find that role...");

        message.channel.send({embed: {
            color: findRole.color,
            author: {
              name: `${findRole.name} (${findRole.id})`,
              icon_url: message.author.avatarURL
            },
            title: "Hex Colour",
            description: findRole.hexColor,
            fields: [
            {
                name: "Mentionable",
                value: findRole.mentionable
            },
            {
                name: "Hoisted",
                value: findRole.hoist
            },
            {
                name: "Role Position",
                value: findRole.calculatedPosition
            },
            {
                name: "Mentionable",
                value: findRole.mentionable
            },
            {
                name: "Permissions",
                value: new Discord.Permissions(findRole.permissions).toArray().map(p.join(", "))
            },
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