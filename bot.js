const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const Enmap = require('enmap');

const prefix = "?";

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/${file}`);
      let command = file.split(".")[0];
      bot.commands.set(command, props);
    });
  });

bot.on ("ready", () => {
console.log(`spiderman 2 pizza theme`);
bot.user.setActivity('?help');
});

bot.on ("message", message => {
if (message.author.bot) return;
if(!message.content.startsWith(prefix)) return;

const args = message.content.split(" ").slice(1);
let cmd = message.content.split(" ")[0];
let commandfile = bot.commands.get(cmd.slice(prefix.length));

if(commandfile) {
commandfile.run(bot, message, args);
};

});

bot.login(process.env.CLIENT_TOKEN);