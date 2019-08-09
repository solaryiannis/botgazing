const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Reason left blank";
  message.delete(30000).catch(console.error);
    
      if (!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send("You don't have the permissions...").then(message => {
          message.delete(15000)
        });
      }
      let banMember = (message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]));
      if(!banMember || message.mentions.users.size === 0) {
        return message.channel.send("Please mention a user to ban.").then(message => {
          message.delete(15000)
        });
      }
      if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
        return message.channel.send("I don't have the permissions...").then(message => {
          message.delete(15000)
        });
      }
      const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    message.channel.send(`Would you like to ban ${message.mentions.users.first().tag}? Please react with ✅ if you confirm the ban, and ❌ if you cancel.`).then(message => {
      message.delete(30000)
    });
      message.react("✅").catch(console.error);
      message.react("❌").catch(console.error);
      message.awaitReactions(filter, {max: 1, time: 30000, errors: ['time'] })
      .then(collected => {
        const reaction = collected.first();
        if (reaction.emoji.name === '✅') {
          banMember.ban(reason).then(member => {
            message.channel.send(`The ban against ${member.user.tag} was successful. Ban Reason: ${reason}`)
            });
            banMember.send(`${banMember}, you have been banned from ${message.guild}: ${reason}`).catch(console.error);
          }
        else if (reaction.emoji.name === '❌') {
          return message.channel.send(`The ban against ${banMember.user.tag} was cancelled.`);
        }
    })
    .catch(collected => {
      message.channel.send(`${message.author.username}, the action timed out.`).then(message => {
        message.delete(15000)
      });
    }).catch(e => {
        console.error(e);
      });
    }

    module.exports.config = {
      n: "ban",
      a: ["b"],
      d: "For those who have you at your wits end.",
      u: "Follow this command with a mention, and you'll be prompted to ban them.",
      ab: "Users with ban permissions",
      s: "%ban @Troublemaker"
  }