module.exports.run = (bot, message, args) => {
    var i = [];
    
    i[0] = `Heads`;
    i[1] = `Tails`;
    
    var j = Math.round(Math.random() * 1);
    
    message.channel.send(`It landed on **${i[j]}**.`);
    };

    module.exports.config = {
        n: "coin",
        na: "N/A",
        a: [],
        d: "Deciding between two options? Flip!",
        u: "Randomly decides between heads or tails."
        ab: "All Users",
        s: "%coin"
      }