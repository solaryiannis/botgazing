module.exports.run = (bot, message, args) => {
    if (args == 'help' || !args) {
        message.channel.send('**Info Commands**```gmt, help, m-help, rolelist, servericon, serverinfo, usericon, userinfo```**Math Commands**```add, subtract, multiply, divide```**Other Commands**```bird, cat, coin, dog, roll, snap, tarot```');
        if (message.guild.id === '450088547857465349') {
            message.channel.send("**Bunker Commands** ```kinkshame, mod-me, sad, say, thanosquote```");
        }
    }
    if (args) {
        let cmd = args;
        if (bot.commands.has(cmd)) {
            cmd = bot.commands.get(cmd);
            message.channel.send({embed: {
                color: 0x000000,
                author: {
                  name: `${message.author.username} requested help!`,
                  icon_url: message.author.avatarURL
                },
                title: "Command Name (Aliases)",
                description: `${cmd.config.n} (${cmd.config.na || cmd.config.a})`,
                fields: [
                {
                    name: "Description",
                    value: cmd.config.d
                },
                {
                    name: "Usage",
                    value: cmd.config.u
                },
                {
                    name: "Accessable By",
                    value: cmd.config.ab
                },
                {
                    name: "Sample Input",
                    value: cmd.config.s
                }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: bot.user.avatarURL,
                  text: `I'm ${bot.user.tag}!`
                }
              }
            });
        }
    }
};

module.exports.config = {
    n: "help",
    a: ["h", "halp"],
    d: "You shouldn't be viewing this.",
    u: "Something's gone wrong if you have."
    ab: "All Users",
    s: "%help"
  }