module.exports.run = (bot, message, args) => {
    var i = [];
    
    i[0] = `Heads`;
    i[1] = `Tails`;
    
    var j = Math.round(Math.random() * 1);
    
    message.channel.send(`It landed on **${i[j]}**.`);
    };