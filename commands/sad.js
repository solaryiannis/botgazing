module.exports.run = (bot, message, args) => {
if (message.guild.id != '450088547857465349') return;
var i = [];

i[0] = `This is so sad, can we cancel Timo's killing game?`;
i[1] = `This is so sad, Botgazing, play Despacito.`;
i[2] = `This is so sad, can we record another podcast?`;
i[3] = `This is so sad, can we make Mak the killer?`;
i[4] = `This is so sad, can we find Franklin's Wii U?`;
i[5] = `This is so sad, F in chat.`;
i[6] = `This is so sad, can we buy Star some iTunes cards for gacha whaling?`;

var j = Math.round(Math.random() * 6);

message.channel.send(`${i[j]}`);
};