module.exports.run = (bot, message, args) => {
if (message.guild.id != '450088547857465349' && message.author.id != '462492224349929483') return;

message.delete();
message.channel.send(args.join(" "));
};