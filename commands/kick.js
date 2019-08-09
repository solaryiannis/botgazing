module.exports.run = (bot, message, args) => {
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Reason left blank";
    message.delete(3000).catch(console.error);
  
      if (!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send("You don't have the permissions...").then(message => {
          message.delete(15000)
        });
      }
      let kickMember = (message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]));
      if(!kickMember || message.mentions.users.size === 0) {
        return message.channel.send("Please mention a user to kick.").then(message => {
          message.delete(15000)
        });
      }
      if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
        return message.channel.send("I don't have the permissions...").then(message => {
          message.delete(15000)
        });
      }
  
      const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    message.channel.send(`Would you like to kick **${message.mentions.users.first().tag}**? Please react with ✅ if you confirm the kick, and ❌ if you cancel.`).then(message => {
      message.delete(30000)
    });
      message.react("✅").catch(console.error);
      message.react("❌").catch(console.error);
      message.awaitReactions(filter, {max: 1, time: 30000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();
        if (reaction.emoji.name === '✅') {
          kickMember.kick(reason).then(member => {
            message.channel.send(`The kick against ${member.user.tag} was successful. Kick Reason: ${reason}`)
            });
            kickMember.send(`${kickMember}, you have been kicked from ${message.guild}: ${reason}`).catch(console.error);
          }
        else if (reaction.emoji.name === '❌') {
          return message.channel.send(`The kick against ${kickMember.user.tag} was cancelled.`);
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
      n: "kick",
      a: ["k"],
      d: "For those who have you at your wits end.",
      u: "Follow this command with a mention, and you'll be prompted to kick them.",
      ab: "Users with kick permissions",
      s: "%kick @Troublemaker"
  }