const Discord = require('discord.js');

module.exports = {
	n: 'roleinfo',
	a: ['roleinfo', 'ri', 'role'],
    d: 'If you need to know what role does what.',
    u: '%roleinfo <role name>',
	b: false,
    async execute(client, message, args) {

        if (!args) return message.channel.send("Please type the name of a role.");
        let findRole = message.guild.roles.find(r => r.name === args.join(" "));

        if (!findRole) return message.channel.send("I couldn't find that role...");

        const embed = new Discord.RichEmbed()
    .setColor(findRole.color)
    .setTitle(`%roleinfo`)
  	.addField('Role', `${findRole.name} (${findRole.id})`)
  	.addBlankField()
  	.addField('Mentionable', findRole.mentionable, true)
    .addField('Hoisted', findRole.hoist, true)
    .addField('Colour', findRole.hexColor, true)
    .addField('Position', findRole.calculatedPosition, true)
    .addField('Permissions', new Discord.Permissions(findRole.permissions).toArray().join(", "))
    .addField(`Members (${findRole.members.size})`, findRole.members.array().join(", "))
  	.setTimestamp()
    .setFooter(`I'm ${client.user.tag}!`, client.user.avatarURL);
    message.channel.send({embed});
  },
};