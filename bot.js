const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');

bot.once ("ready", () => {
  console.log(`spiderman 2 pizza theme`);
  bot.user.setActivity(`${process.env.PREFIX}help`);
  });

const prefix = process.env.PREFIX;

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(f => f.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
  bot.commands.set(command.n, command);
  console.log(`command.n: ${command.n}. ${file} successfully loaded`);
}

bot.on ("message", async message => {
if (message.author.bot || !message.content.startsWith(prefix)) return;

const args = message.content.slice(prefix.length).split(/ +/);
const cmd = args.shift().toLowerCase();

console.log(`args: ${args}. command: ${cmd}. ${cmd} successfully loaded`);

if (!bot.commands.has(cmd)) return;
try {
bot.commands.get(cmd).execute(message, args);
console.log(`trying to execute ${cmd}`);
} catch (e) {
console.log(e);
}
});

bot.login(process.env.CLIENT_TOKEN);