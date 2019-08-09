const Discord = require('discord.js');

module.exports = {
      n: 'coin',
      a: ['coin', 'coinflip', 'flipcoin', 'flip'],
        d: 'Deciding between two options? Flip!',
        u: '%coin',
        async execute(client, message, args) {
        var i = [];
    
        i[0] = `Heads`;
        i[1] = `Tails`;
        
        var j = Math.round(Math.random() * 1);
        
        message.channel.send(`It landed on **${i[j]}**.`);
      },
    };