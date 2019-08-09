module.exports.run = (bot, message, args) => {
    var i = [];
    var k = [];
    var l = [];
    
    i[0] = `0 - Aidan`;
    i[1] = `I - Makena`;
    i[2] = `II - Finn`;
    i[3] = `III - Star`;
    i[4] = `IV - Jaden`;
    i[5] = `V - Pitohui`;
    i[6] = `VI - Zange and Spooks`;
    i[7] = `VII - Setellite Lovers`;
    i[8] = `VIII - Otter Chat`;
    i[9] = `IX - Nick`;
    i[10] = `X - The Rate Command`;
    i[11] = `XI - Shygul`;
    i[12] = `XII - Mariofan`;
    i[13] = `XIII - Raregold's Everyone Ping`;
    i[14] = `XIV - Aidan and Finn over Finn's Smash roster`;
    i[15] = `XV - Roller`;
    i[16] = `XVI - Aidan's Domain`;
    i[17] = `XVII - Botgazing`;
    i[18] = `XVIII - Gacha`;
    i[19] = `XIX - #general`;
    i[20] = `XX - Bunker Bliss`;
    i[21] = `XXI - The Bunker`;

    k[0] = `0 - Waluigi`;
    k[1] = `I - Prince Mallow`;
    k[2] = `II - Rosalina`;
    k[3] = `III - Peach Toadstool`;
    k[4] = `IV - Bowser Koopa`;
    k[5] = `V - Merlon`;
    k[6] = `VI - Blumiere and Timpani`;
    k[7] = `VII - Iggy Koopa`;
    k[8] = `VIII - Twink`;
    k[9] = `IX - Kamek`;
    k[10] = `X - ? Block`;
    k[11] = `XI - Queen Jaydes`;
    k[12] = `XII - Luvbi`;
    k[13] = `XIII - The Dark Star`;
    k[14] = `XIV - Starlow`;
    k[15] = `XV - Dimentio`;
    k[16] = `XVI - The Thousand-Year Door`;
    k[17] = `XVII - The Star Spirits`;
    k[18] = `XVIII - Twila`;
    k[19] = `XIX - Brighton`;
    k[20] = `XX - The Void and Chaos Heart`;
    k[21] = `XXI - Grand Finale Galaxy`;

    l[0] = `0 - The Fool`;
    l[1] = `I - The Magician`;
    l[2] = `II - The High Priestess`;
    l[3] = `III - The Empress`;
    l[4] = `IV - The Emperor`;
    l[5] = `V - The Hierophant`;
    l[6] = `VI - The Lovers`;
    l[7] = `VII - The Chariot`;
    l[8] = `VIII - Justice`;
    l[9] = `IX - The Hermit`;
    l[10] = `X - Wheel of Fortune`;
    l[11] = `XI - Strength`;
    l[12] = `XII - The Hanged Man`;
    l[13] = `XIII - Death`;
    l[14] = `XIV - Temperance`;
    l[15] = `XV - The Devil`;
    l[16] = `XVI - The Tower`;
    l[17] = `XVII - The Star`;
    l[18] = `XVIII - The Moon`;
    l[19] = `XIX - The Sun`;
    l[20] = `XX - Judgement`;
    l[21] = `XXI - The World`;

    var j = Math.round(Math.random() * 21);

    const filter = (reaction, user) => {
        return ['💜', '💚', '🖤'].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    message.channel.send(`Ask the desk a question. This could be out loud, or in your head. When you have something you would like the answer to:\nPress the 💜 reaction for **Major Arcana**.\nPress the 💚 reaction for **Mario Arcana**.`).then(message => {
        message.delete(30000)
        if (message.guild.id == '450088547857465349') {
            message.edit(`Ask the desk a question. This could be out loud, or in your head. When you have something you would like the answer to:\nPress the 💜 reaction for **Major Arcana**.\nPress the 💚 reaction for **Mario Arcana**.\nPress the 🖤 reaction for **Bunker Arcana**.`);
        }
      });
        message.react("💜").catch(console.error);
        message.react("💚").catch(console.error);
        if (message.guild.id == '450088547857465349') {
        message.react("🖤").catch(console.error);
        }
        message.awaitReactions(filter, {max: 1, time: 30000, errors: ['time'] })
        .then(collected => {
          const reaction = collected.first();
          if (reaction.emoji.name === '💜') {
        message.channel.send(`You have pulled **${l[j]}**.`);
          }
            else if (reaction.emoji.name === '💚') {
            message.channel.send(`You have pulled **${k[j]}**.`);
          }
          else if (reaction.emoji.name === '🖤') {
            message.channel.send(`You have pulled **${i[j]}**.`);
          }
      })
      .catch(collected => {
        message.channel.send(`${message.author.username}, the action timed out.`).then(message => {
          message.delete(15000)
        });
      }).catch(e => {
          console.error(e);
        });
    }

    module.exports.config = {
      n: "tarot",
      na: "N/A",
      a: ["t"],
      d: "What does the universe want you to know today...?",
      u: "Follow the prompt, and find your fortune.",
      ab: "All Users",
      s: "%tarot"
    }