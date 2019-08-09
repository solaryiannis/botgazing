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

const commandFiles = fs.readdirSync('./commands').filter(f => f.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.n, command);
}

bot.on ("message", async message => {
if (message.author.bot || !message.content.startsWith(prefix)) return;

let messageArray = message.content.split(" ");
let cmd = messageArray[0].toLowerCase();
let args = messageArray.slice(1);

if (!bot.commands.has(cmd)) return;
try {
bot.commands.get(command).execute(message, args);
} catch (e) {
console.log(e);
}
});

bot.login(process.env.CLIENT_TOKEN);