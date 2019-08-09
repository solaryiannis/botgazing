module.exports.run = (bot, message, args) => {
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Reason left blank";
  
    if (!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("BAN_MEMBERS")) return;
    let warnMember = (message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]));
    if(!warnMember || message.mentions.users.size === 0) return;
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS") || !message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return;
  
      message.delete(1).catch(console.error);
      warnMember.send(`${warnMember}, you have been warned for your behaviour in ${message.guild}: ${reason}`).catch(console.error);
      message.author.send(`${message.mentions.users.first().tag} (${warnMember.id}) was warned in ${message.guild}: ${reason}`).catch(console.error);
    };

    module.exports.config = {
      n: "warn",
      a: ["w"],
      d: "For people who aren't quite too far gone.",
      u: "Warns the mention user for the reason after it."
      ab: "Users with ban or kick permissions.",
      s: "%warn @Troublemaker for being troublesome"
    }