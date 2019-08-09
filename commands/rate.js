module.exports.run = (bot, message, args) => {
var i = Math.round(Math.random() * 100);
message.channel.send(`I'd rate **${args.join(" ")}** a **${i}/100**...`);
};

module.exports.config = {
    n: "rate",
    a: ["r", "judgment", "judgement"],
    d: "Do you have taste? We'll see if it's wrong.",
    u: "Get a rating for whatever you type."
    ab: "All Users",
    s: "%rate Love Live! Sunshine!!"
  }