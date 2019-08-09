const Discord = require('discord.js');

module.exports = {
      n: 'gmt',
      a: ['gmt', 'utc'],
        d: 'Figure out if it\'s quite time to send your friends to bed or not.',
        u: '%gmt',
        async execute(message, args) {
        message.channel.send(`It is ${new Date().toGMTString()}.`);
      },
    };