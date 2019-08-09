const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');

bot.on ("ready", () => {
  console.log(`spiderman 2 pizza theme`);
  bot.user.setActivity('%help');
  });

const prefix = "%";

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (e, files) => {
  if (e) console.error(e);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0) {
    return console.log("????????? No Commands ?????????");
  }
    jsfile.forEach((f, i) => {
      let props = require(`./commands/${f}`);
      bot.commands.set(props.config.n, props);
      props.config.a.forEach(alias => {
        bot.aliases.set(alias, props.config.n);
      });
    });
  });

bot.on ("message", async message => {
try{
if (message.author.bot) return;
if(!message.content.startsWith(prefix)) return;

let messageArray = message.content.split(" ");
let cmd = messageArray[0].toLowerCase();
let args = messageArray.slice(1);
let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));

if(commandfile) commandfile.run(bot, message, args);
}
catch (e) {
  console.log(e);
}

});

bot.login(process.env.CLIENT_TOKEN);