const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');

bot.once ("ready", () => {
  console.log(`spiderman 2 pizza theme`);
  bot.user.setActivity(`${process.env.PREFIX}help`);
  });

const prefix = process.env.PREFIX;

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(f => f.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
  bot.commands.set(command.n, command);
}

bot.on ("message", async message => {
if (message.author.bot || !message.content.startsWith(prefix)) return;

const args = message.content.slice(prefix.length).split(/ +/);
const cmdName = args.shift().toLowerCase();

const cmd = bot.commands.get(cmdName) || bot.commands.find(cmd => cmd.a && cmd.a.includes(cmdName));
console.log(`${cmd} loaded!`);
if (!cmd) return;
console.log(`${cmd} trying to execute.`);

try {
bot.commands.get(cmd).execute(message, args);
} catch (e) {
console.log(e);
}
});

bot.login(process.env.CLIENT_TOKEN);