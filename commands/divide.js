module.exports.run = (bot, message, args) => {
let numArray = args.map(n=> parseInt(n));
let total = numArray.reduce((p,c) => p/c);
message.channel.send(`The quotient is ${total}.`);
}

module.exports.config = {
    n: "divide",
    na: "N/A",
    a: [],
    d: "Forget your calculator at home? Have no fear!",
    u: "Type in numbers, seperated by spaces.",
    ab: "All Users",
    s: "%divide 32 4"
  }