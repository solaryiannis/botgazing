module.exports.run = (bot, message, args) => {
message.channel.send('```ban, kick, warn```');
}

module.exports.config = {
  n: "m-help",
  a: ["mhelp", "mh", "modhelp"],
  d: "Forget your calculator at home? Have no fear!",
  u: "Type in numbers, seperated by spaces.",
  ab: "All Users",
  s: "%m-help"
}
