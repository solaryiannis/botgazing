const Discord = require('discord.js');

module.exports = {
	n: 'kinkshame',
	a: ['kinkshame', 'kshame', 'ks', 'shame'],
    d: 'Not all kinks are equal.',
    u: '%kinkshame <user> <reason>',
	async execute(message, args) {
    if (message.guild.id != '450088547857465349') return;
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Kink left blank";
  
    let kinkMember = (message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]));
    if(!kinkMember || message.mentions.users.size === 0) return;
  
      message.delete(1).catch(console.error);
      kinkMember.send(`${kinkMember}, you have been kinkshamed in ${message.guild}: ${reason}`).catch(console.error);
	},
};