const fs = require('fs');
const Discord = require('discord.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const prefix = process.env.PREFIX;

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.n, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
  const command = client.commands.get(commandName) | client.commands.find(cmd => cmd.a && cmd.a.includes(commandName));
  console.log(`command: ${command.n} (${command.a})`);
  if (!command) return;
  console.log(`success in loading ${command.n} (${command.a})`);

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});
client.login(process.env.CLIENT_TOKEN);