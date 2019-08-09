module.exports.run = (bot, message, args) => {
if (message.mentions.users.size === 0) {
    message.channel.send(message.author.avatarURL);
}
else {
    message.channel.send(message.mentions.users.first().avatarURL);
}
}

module.exports.config = {
    n: "usericon",
    a: ["uicon"],
    d: "Find out what the mentioned user's (or your) icon looks like in full.",
    u: "Get the requested icon's url.",
    ab: "All Users",
    s: "%usericon"
  }