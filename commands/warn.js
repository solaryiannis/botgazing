const Discord = require('discord.js');

module.exports = {
	n: 'warn',
	a: ['warn', 'w'],
    d: 'For people who aren\'t quite too far gone.',
    u: '%warn <user> <reason>',
	b: false,
	async execute(client, message, args) {
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Reason left blank";
  
    if (!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("BAN_MEMBERS")) return;
    var member;
          member = message.mentions.members.first();
          if (!member) {
            member = message.guild.members.get(args[0]);
            if (!member)
            {
              member = message.guild.members.find(m => m.user.username === args.join(" "));
              if (!member) {
                member = message.guild.members.find(m => m.displayName === args.join(" "));
                if (!member) {
                    member = message.guild.members.find(m => m.user.tag === args.join(" "));
                    if (!member) return;
                }  
              }
            }
          }
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS") || !message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return;
  
      message.delete(1).catch(console.error);
      member.send(`${member}, you have been warned for your behaviour in ${message.guild}: ${reason}`).catch(console.error);
      message.author.send(`${message.mentions.users.first().tag} (${member.id}) was warned in ${message.guild}: ${reason}`).catch(console.error);
	},
};