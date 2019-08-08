module.exports.run = (bot, message, args) => {
    message.channel.send(`It is ${new Date().toGMTString()}.`);
    };