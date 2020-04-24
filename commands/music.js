const Discord = require('discord.js');
const ytdl = require('ytdl-core');

module.exports = {
	n: 'music',
	a: ['music', 'tunes', 'dj'],
    d: 'Play some tunes!',
    u: '%music <youtube url>, %music skip',
    b: false,
	async execute(client, message, args) {

        const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.channel.send('Hello? Hello? Can anyone hear me? You need to be in a voice channel!');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) return message.channel.send('Hello? Hello? Can anyone hear me? I need permissions to join and speak!');
        
        const queue = new Map();
            const songInfo = await ytdl.getInfo(args[1]);
            const song = {
                title: songInfo.title,
                url: songInfo.video_url,
            };

            if (!serverQueue) {
            }
            else {
                serverQueue.songs.push(add().song);
                console.log(serverQueue.songs);
                return message.channel.send(`${song.title} is in the queue!`);
            }

        const queueConstruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true,
           };

           function play(guild, song) {
            const serverQueue = queue.get(guild.id);
            if (!song) {
             serverQueue.voiceChannel.leave();
             queue.delete(guild.id);
             return;
            }
           }

           queue.set(message.guild.id, queueConstruct);
           queueContruct.songs.push(song);
           
           try {
            var connection = await voiceChannel.join();
            queueContruct.connection = connection;
            play(message.guild, queueConstruct.songs[0]);
           } catch (err) {
            console.log(err);
            queue.delete(message.guild.id);
            return message.channel.send(`ERROR: ${err}. Song queue wiped.`);
           }

           const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
                .on('end', () => {
                    console.log('Music ended!');
                    serverQueue.songs.shift();
                    play(guild, serverQueue.songs[0]);
                })
                .on('error', error => {
                    message.channel.send(`ERROR: ${error}.`);
                });
            dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
	},
};