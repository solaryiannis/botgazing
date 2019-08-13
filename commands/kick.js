const Discord = require('discord.js');

module.exports = {
	n: 'kick',
	a: ['kick', 'k', 'boot', 'b'],
    d: 'For those who have you at your wits end.',
    u: '%kick <user> <reason>',
    b: false,
    async execute(client, message, args) {
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Reason left blank";
    message.delete(3000).catch(console.error);
  
      if (!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send("You don't have the permissions...").then(message => {
          message.delete(15000)
        });
      }
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
                    if (!member) return message.channel.send("Please also type a user to kick.").then(message => {
                      message.delete(15000)
                    });
                }  
              }
            }
          }
      if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
        return message.channel.send("I don't have the permissions...").then(message => {
          message.delete(15000)
        });
      }
  
      const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    message.channel.send(`Would you like to kick **${member.user.tag}**? Please react with ✅ if you confirm the kick, and ❌ if you cancel.`).then(message => {
      message.delete(30000)
    });
      message.react("✅").catch(console.error);
      message.react("❌").catch(console.error);
      message.awaitReactions(filter, {max: 1, time: 30000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();
        if (reaction.emoji.name === '✅') {
          member.kick(reason).then(member => {
            message.channel.send(`The kick against ${member.user.tag} was successful. Kick Reason: ${reason}`)
            });
            member.send(`${member}, you have been kicked from ${message.guild}: ${reason}`).catch(console.error);
          }
        else if (reaction.emoji.name === '❌') {
          return message.channel.send(`The kick against ${member.user.tag} was cancelled.`);
        }
    })
    .catch(collected => {
      message.channel.send(`${message.author.username}, the action timed out.`).then(message => {
        message.delete(15000)
      });
    }).catch(e => {
        console.error(e);
      });
	},
};