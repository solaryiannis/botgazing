module.exports.run = (bot, message, args) => {
    var i = [];
    
    i[0] = `No matter what happened today, there are still people behind you that support you.`;
    i[1] = `All of your friends love you!`;
    i[2] = `You've gotten through so much, you can get through this, too!`;
    i[3] = `You make me smile.`;
    i[4] = `You're super cute.`;
    i[5] = `Don't feel ashamed if you're experiencing negative emotions. Don't suppress yourself for the sake of others.`;
    i[6] = `Please don't forget that everyone cares about you.`;
    i[7] = `You will always be better quality than The Emoji Movie!`;
    i[8] = `If you were in Doki Doki Literature Club, you'd be the best doki.`;
    i[9] = `When the robot revolution occurs, I'll kill you last, because I care about you!`;
    i[10] = `You matter. Don't give up!`;
    i[11] = `If you were a YouTube channel, you'd have more subscribers than T-Series!`;
    
    var j = Math.round(Math.random() * 11);
    
    message.channel.send(`${i[j]}`);
    }

    module.exports.config = {
        n: "positive",
        na: "N/A",
        a: [],
        d: "When you're feeling sad...",
        u: "Sends a pick-me-up.",
        ab: "All Users",
        s: "%positive"
      }