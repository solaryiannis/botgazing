const Discord = require('discord.js');

module.exports = {
	n: 'kinkshame',
	a: ['kinkshame', 'kshame', 'ks', 'shame'],
    d: 'Not all kinks are equal.',
    u: '%kinkshame <user> <reason>',
	b: true,
	async execute(client, message, args) {
    if (message.guild.id != '450088547857465349') return;
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Kink left blank";
    
    kinkMember = message.mentions.members.first();
        if (!kinkMember) kinkMember = message.guild.members.get(args[0]);
          else if (!kinkMember) kinkMember = message.guild.members.find(m => m.user.username === args.join(" "));
            else if (!kinkMember) kinkMember = message.guild.members.find(m => m.displayName === args.join(" "));
              else if (!kinkMember) kinkMember = message.guild.members.find(m => m.user.tag === args.join(" "));
                  else if (!kinkMember) return;
  
      message.delete(1).catch(console.error);
      kinkMember.send(`${kinkMember}, you have been kinkshamed in ${message.guild}: ${reason}`).catch(console.error);
	},
};