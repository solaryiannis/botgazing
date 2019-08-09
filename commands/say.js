module.exports.run = (bot, message, args) => {
if (message.guild.id != '450088547857465349' && message.author.id != '462492224349929483') return;

message.delete();
message.channel.send(args.join(" "));
};

module.exports.config = {
    n: "say",
    na: "N/A",
    a: [],
    d: "Have technology speak its mind!",
    u: "Whatever you type will be deleted and repeated."
    ab: "All Users (Bunker)",
    s: "%say Riko Sakurauchi is best girl."
  }