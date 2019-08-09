const Discord = require('discord.js');

module.exports = {
	n: 'help',
	a: ['help', 'h', 'command', 'commands', 'c'],
    d: 'It\'s time to help!',
    u: '%help or %help <command>',
    async execute(message, args) {
        const { commands } = message.client;
        if (!args.length) {
            message.channel.send(`**Commands List:**\n\`\`\`${commands.map(command => command.n).join(', ')}\`\`\`\n\nFor help with a specific command, type \`$help <command>\`!`);
        }

        const name = args.toLowerCase()
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
	        return message.reply('That\'s not a valid command...');
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
              icon_url: bot.user.avatarURL,
              text: `I'm ${bot.user.tag}!`
            }
          }
        });
	},
};