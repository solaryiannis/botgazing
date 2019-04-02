module.exports.run = (bot, message, args) => {
    if (message.guild.id != '450088547857465349') return;
    message.react("✅").catch(console.error);
    message.author.send({embed: {
      color: 0xBBA1E4,
      author: {
        name: "Oh shit, now you fucked up.",
        icon_url: message.author.avatarURL
      },
      fields: [{
          name: `Really, ${message.author.username}?`,
          value: "Did you really think I'd add a nsfw command to my bot? You're ridiculous."
        },
        {
          name: "The police are coming to your door now.",
          value: "You shouldn't have done this. Why did you do this? Just for an extra image that you can probably Google Search?"
        },
      ],
      timestamp: new Date(),
      footer: {
        text: `I'm ${client.user.tag}!`,
        icon_url: client.user.avatarURL
      }
    }
  }).catch(console.error);
    };