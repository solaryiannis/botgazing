module.exports.run = (bot, message, args) => {
    if (!message.author.hasPermission("KICK_MEMBERS")) return message.channel.send(`Hey ${message.author}, you don't have the permissions...`);
    if (!bot.user.hasPermission("KICK_MEMBERS")) return message.channel.send(`Hey ${message.author}, I don't have the permissions...`);

    let kickMember = message.mentions.users.first();
    if (!kickMember) return message.channel.send(`Hey ${message.author}, you forgot to **mention** someone to kick...`);
    if (!kickMember.kickable) return message.channel.send(`Hey ${message.author}, I can't kick this person...`);

    kickMember.kick();
    kickMember.send(`Hey ${kickMember}, you were kicked from ${message.guild.name}...`);
    message.channel.send(`Hey ${message.author}, the kick worked!`);
    };