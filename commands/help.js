const Discord = require('discord.js');

module.exports = {
	n: 'help',
	a: ['help', 'h', 'command', 'commands', 'c'],
    d: 'It\'s time to help!',
    u: '%help or %help <command>',
    b: false,
    async execute(client, message, args) {
        const { commands } = message.client;
        if (!args.length) {
          if (message.guild.id == '450088547857465349') return message.channel.send(`**Commands List:**\n\`\`\`${commands.map(command => command.n).join(', ')}\`\`\`\nFor help with a specific command, type \`$help <command>\`!`);
            else return message.channel.send(`**Commands List:**\n\`\`\`${commands.filter(command => command.b !== true).map(command => command.n).join(', ')}\`\`\`\nFor help with a specific command, type \`$help <command>\`!`);
        }

        const name = args[0];
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
	        return message.channel.send(`**Commands List:**\n\`\`\`${commands.map(command => command.n).join(', ')}\`\`\`\nFor help with a specific command, type \`$help <command>\`!`);
        }

        const embed = new Discord.RichEmbed()
    .setColor(0x000000)
    .setTitle(`%help`)
  	.addField('Command Name (Aliases)', `${command.n} (${command.a.join(', ')})`)
  	.addBlankField()
  	.addField('Description', command.d, true)
  	.addField('Usage', command.d, true)
  	.setTimestamp()
  	.setFooter(`I'm ${client.user.tag}!`, client.user.avatarURL);
    message.channel.send({embed});
	},
};