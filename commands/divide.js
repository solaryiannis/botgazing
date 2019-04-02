module.exports.run = (bot, message, args) => {
let numArray = args.map(n=> parseInt(n));
let total = numArray.reduce((p,c) => p/c);
message.channel.send(`The quotient is ${total}.`);
};