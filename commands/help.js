const Discord = require('discord.js');

module.exports = {
	n: 'help',
	a: ['help', 'h', 'command', 'commands', 'c'],
    d: 'It\'s time to help!',
    u: '%help or %help <command>',
    async execute(client, message, args) {
        const { commands } = message.client;
        if (!args.length) {
            return message.channel.send(`**Commands List:**\n\`\`\`${commands.map(command => command.n).join(', ')}\`\`\`\nFor help with a specific command, type \`$help <command>\`!`);
        }

        const name = args[0];
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
	        return message.channel.send(`**Commands List:**\n\`\`\`${commands.map(command => command.n).join(', ')}\`\`\`\nFor help with a specific command, type \`$help <command>\`!`);
        }

        message.channel.send({embed: {
            color: 0x000000,
            author: {
              name: `${message.author.username} requested help!`,
              icon_url: message.author.avatarURL
            },
            title: "Command Name (Aliases)",
            description: `${command.n} (${command.a.join(', ')})`,
            fields: [
            {
                name: "Description",
                value: command.d
            },
            {
                name: "Usage",
                value: command.u
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