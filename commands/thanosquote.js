module.exports.run = (bot, message, args) => {
    if (message.guild.id != '450088547857465349') return;
    var i = [];
    
    i[0] = `You’re strong. But, I could snap my fingers, and you’d all cease to exist.`;
    i[1] = `Fun isn’t something one considers when balancing the universe. But this… does put a smile on my face.`;
    i[2] = `With all six stones, I can simply snap my fingers, they would all cease to exist. I call that mercy.`;
    i[3] = `You're not the only one cursed with knowledge.`;
    i[4] = `I hope they remember you.`;
    i[5] = `Perfectly balanced, as all things should be.`;
    i[6] = `You should have gone for the head.`;
    i[7] = `I know what it’s like to lose. To feel so desperately that you’re right, yet to fail nonetheless.`;
    i[8] = `Dread it. Run from it. Destiny still arrives.`;
    i[9] = `Your planet was on the brink of collapse. I was the one who stopped that. You know what’s happened since then? The children born have known nothing but full bellies and clear skies. It’s a paradise.`;
    i[10] = `I’m the only one who knows that. At least, I’m the only who has the will to act on it.`;
    i[11] = `I ignored my destiny once, I can not do that again. Even for you.`;
    i[12] = `I’m sorry, little one.`;
    i[13] = `Your optimism is misplaced, Asgardian.`;
    i[14] = `But, I never taught you to lie. That’s why you’re so bad at it.`;
    i[15] = `You should choose your words wisely.`;
    i[16] = `The hardest choices require the strongest wills.`;
    i[17] = `Stark... you have my respect. I hope the people of Earth will remember you.`;
    i[18] = `You could not live with your own failure, and where did that bring you? Back to me.`;
    i[19] = `I am inevitable.`;
    i[20] = `I thought by eliminating half of life, the other half would thrive, but you have shown me that's impossible.`;
    i[21] = `As long as there are those that remember what was, there will always be those, that are unable to accept what can be. They will resist.`;
    i[22] = `I don't even know who you are.`;
    i[23] = `It is not what is lost but only what it is been given... a grateful universe.`;
    i[24] = `I used the stones to destroy the stones.`;
    i[25] = `I will shred this universe down to it's last atom and then, with the stones you've collected for me, create a new one.`;
    i[26] = `In all my years of conquest, violence, slaughter, it was never personal.`;
    i[27] = `I'll tell you now, what I'm about to do to your stubborn, annoying little planet... I'm gonna enjoy it. Very, very much.`;
    i[28] = `It nearly killed me, but the work is done. It always will be.`;
    i[29] = `You should be grateful.`;
    i[29] = `Avengers... Unloyal wretches.`;
    i[30] = `I'm thankful. Because now I know what I must do.`;
    i[31] = `They'll never know. Because you won't be alive to tell them.`;
    
    var j = Math.round(Math.random() * 31);
    
    message.channel.send(`${i[j]}`);
    };