module.exports.run = (bot, message, args) => {
    message.channel.send(message.guild.roles.map(role => role.name).join(", "));
    };