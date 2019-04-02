module.exports.run = (bot, message, args) => {
if (message.mentions.users.size === 0) {
    message.channel.send(message.author.avatarURL);
}
else {
    message.channel.send(message.mentions.users.first().avatarURL);
}
};