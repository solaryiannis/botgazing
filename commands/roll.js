module.exports.run = (bot, message, args) => {
var int = parseInt(args);
var i = Math.round((Math.random() * int) + 1);

message.channel.send(`D${int} Roll: ${i}`);
    };