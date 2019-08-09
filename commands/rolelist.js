const Discord = require('discord.js');

module.exports = {
	n: 'rolelist',
	a: ['rolelist', 'rl', 'role', 'roles'],
    d: 'If you need to know what role is what.',
    u: '%rolelist',
    async execute(message, args) {
    message.channel.send(`**Commands List:**\n\`\`\`${message.guild.roles.map(role => role.name).join(", ")}\`\`\``);
  },
};