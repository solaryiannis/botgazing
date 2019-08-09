const Discord = require('discord.js');

module.exports = {
	n: 'sad',
	a: ['sad', 'thisissosad', 'tiss', 'tissbpd', 'thisissosadbotgazingplaydespacito'],
    d: 'Find out what happens when this is so sad.',
    u: '%sad',
	b: true,
	async execute(client, message, args) {
    if (message.guild.id != '450088547857465349') return;
    var i = [];
    
    i[0] = `This is so sad, can we cancel Timo's killing game?`;
    i[1] = `This is so sad, Botgazing, play Despacito.`;
    i[2] = `This is so sad, can we record another podcast?`;
    i[3] = `This is so sad, can we make Mak the killer?`;
    i[4] = `This is so sad, can we find Mfan's Wii U?`;
    i[5] = `This is so sad, F in chat.`;
    i[6] = `This is so sad, can we buy Sofia some iTunes cards for weeb pngs?`;
    i[7] = `This is so sad, can we cancel Bunker Bliss?`;
    i[8] = `This is so sad, come to voice chat.`;
    i[9] = `This is so sad, can we demote Aidan?`;
    i[10] = `This is so sad, can we make Sofia more active?`;
    i[11] = `This is so sad, can we wake Mfan up?`;
    i[12] = `This is so sad, delete Math.`;
    i[13] = `This is so sad, can we finish Pirate Killing Games's maps?`;
    i[14] = `This is so sad, can we drop Aidan's DS?`;
    i[15] = `This is so sad, host a VC party.`;
    
    var j = Math.round(Math.random() * 15);
    
    message.channel.send(`${i[j]}`);
	},
};