module.exports.run = (bot, message, args) => {
  if (message.guild.id != '450088547857465349') return;
  
    var i = Math.abs(Math.round((Math.random() * 19) + 0));
    message.channel.send({embed: {
        color: 0x000000,
        author: {
          name: `For ${message.author.tag}...`,
          icon_url: message.author.avatarURL
        },
        title: "Here is a randomly generated waifu.",
        image: {
        url: `attachment://img_${i}.png`
        },
        files: [{ attachment: `./waifus/img_${i}.png`, name: `img_${i}.png` }],
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: `I'm ${bot.user.tag}!`
        }
      }
    });
    }

    module.exports.config = {
      n: "waifu",
      na: "N/A",
      a: [],
      d: "PRESS F",
      u: "F TO PAY RESPECTS",
      ab: "All Users",
      s: "%waifu"
    }