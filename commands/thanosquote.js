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
    i[17] = `Stark… you have my respect. I hope the people of Earth will remember you.`;
    
    var j = Math.round(Math.random() * 17);
    
    message.channel.send(`${i[j]}`);
    };