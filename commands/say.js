const Discord = require('discord.js');

module.exports = {
    n: 'say',
    a: ['say', 'speak', 's'],
      d: 'Have technology speak its mind!',
      u: '%say <text>',
      async execute(client, message, args) {
      if (message.guild.id != '450088547857465349' && message.author.id != '462492224349929483') return;

      message.delete();
      message.channel.send(args.join(" "));
    },
  };