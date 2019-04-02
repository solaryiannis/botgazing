module.exports.run = (bot, message, args) => {
    if (!message.author.hasPermission("BAN_MEMBERS")) return message.channel.send(`Hey ${message.author}, you don't have the permissions...`);
    if (!bot.user.hasPermission("BAN_MEMBERS")) return message.channel.send(`Hey ${message.author}, I don't have the permissions...`);

    let banMember = message.mentions.users.first();
    if (!banMember) return message.channel.send(`Hey ${message.author}, you forgot to **mention** someone to ban...`);
    if (!banMember.bannable) return message.channel.send(`Hey ${message.author}, I don't have the permission to ban this person...`);

    banMember.ban();
    banMember.send(`Hey ${banMember}, you were banned from ${message.guild.name}...`);
    message.channel.send(`Hey ${message.author}, the ban worked!`);
    };