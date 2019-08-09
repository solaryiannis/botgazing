const Discord = require('discord.js');

module.exports = {
	n: 'rolelist',
	a: ['rolelist', 'rl', 'roles'],
    d: 'If you need to know what role is what.',
    u: '%rolelist',
    async execute(client, message, args) {
    message.channel.send(`**Role List:**\n\`\`\`${message.guild.roles.map(role => role.name).join(", ")}\`\`\`\nFor information about a specific role, type \`$roleinfo <role>\`!`);
  },
};