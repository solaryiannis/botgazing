module.exports.run = (bot, message, args) => {
var i = Math.round(Math.random() * 100);
message.channel.send(`I'd rate **${args.join(" ")}** a **${i}/100**...`);
};