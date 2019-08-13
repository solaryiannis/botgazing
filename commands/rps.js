const Discord = require('discord.js');

module.exports = {
	n: 'rps',
	a: ['rps', 'rockpaperscissors'],
    d: 'Let\'s play a game!',
    u: '%rps <throw>',
	b: false,
	async execute(client, message, args) {
    if (!args) return message.channel.send(`Hey, you didn't tell me what you threw...`);
    if (args[0] != "rock" || args[0] != "scissors" || args[0] != "paper") return message.channel.send(`Hey, you threw something invalid...`);
    
    var threw = args[0].toLowerCase();
    var botThrow = ["rock", "paper", "scissors"];
    var botEmoji = [":fist:", ":raised_hand:", ":v:"];
    var i = Math.round(Math.random() * 2);

    if (threw == "rock" && i = 1) return message.channel.send(`Yay! I threw **${botThrow[i]}**. ${botEmoji[i]} That means I win!!`);
    else if (threw == "paper" && i = 2) return message.channel.send(`Yay! I threw **${botThrow[i]}**. ${botEmoji[i]} That means I win!!`);
    else if (threw == "scissors" && i = 0) return message.channel.send(`Yay! I threw **${botThrow[i]}**. ${botEmoji[i]} That means I win!!`);
    else if (threw == botThrow [i]) return message.channel.send(`Hm, I threw **${botThrow[i]}**. ${botEmoji[i]} We tied.`);
    else return message.channel.send(`Aw, I threw **${botThrow[i]}**. ${botEmoji[i]} I didn't win...`);
},
};