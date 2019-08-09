const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (message.guild.id != '450088547857465349') return;
    
    message.channel.send(`Okay, ${message.author}, you'd like to be a mod? Very well...`);
    setTimeout(function(){ 
    message.channel.send("```let roleAdd = Mod```");
    }, 5000);
    setTimeout(function(){ 
    message.channel.send("```message.author.addRole(roleAdd)```");
    }, 5000);
    setTimeout(function(){ 
    message.channel.send("Actually, why would I do that...? I'm not modding you.");
    }, 10000);
    }

    module.exports.config = {
        n: "mod-me",
        a: ["mm", "modme"],
        d: "Since you've asked so nicely...",
        u: "Beg for your modhood through this command.",
        ab: "All Users (Bunker)",
        s: "%mod-me"
      }