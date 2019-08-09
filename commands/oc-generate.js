const Discord = require('discord.js');

module.exports = {
      n: 'oc-generate',
      a: ['oc-generate', 'oc', 'ocg', 'ocgenerate'],
        d: 'Need your next DND characters apperance in a pinch?',
        u: '%oc-generate',
      execute(message, args) {
        var colour = [];
        colour [0] = `white`;
        colour [1] = `black`;
        colour [2] = `red`;
        colour [3] = `orange`;
        colour [4] = `yellow`;
        colour [5] = `green`;
        colour [6] = `teal`;
        colour [7] = `blue`;
        colour [8] = `purple`;
        colour [9] = `pink`;
        colour [10] = `light brown`;
        colour [11] = `dark brown`;
        colour [12] = `peach`;
        colour [13] = `rainbow`;
        colour [14] = `colourless`;
        var a = Math.round(Math.random() * 14);
        var b = Math.round(Math.random() * 14);
        var c = Math.round(Math.random() * 14);
    
        var feature = [];
        feature [0] = `cat ears`;
        feature [1] = `a fluffy tail`;
        feature [2] = `a collar`;
        feature [3] = `hair ribbons`;
        feature [4] = `fishnet stockings`;
        var g = Math.round(Math.random() * 4);
    
        var ability = [];
        ability [0] = `fire`;
        ability [1] = `water`;
        ability [2] = `electric`;
        ability [3] = `telekinetic`;
        ability [4] = `ice`;
        ability [5] = `solar`;
        ability [6] = `lunar`;
        ability [7] = `snow`;
        ability [8] = `wind`;
        ability [9] = `no`;
        ability [10] = `floral`;
        ability [11] = `love`;
        ability [12] = `all the`;
        var f = Math.round(Math.random() * 12);
    
        var height = [];
        height [0] = `very short`;
        height [1] = `short`;
        height [2] = `average height`;
        height [3] = `tall`;
        height [4] = `very tall`;
        var d = Math.round(Math.random() * 4);
    
        var weight = [];
        weight [0] = `very lean`;
        weight [1] = `lean`;
        weight [2] = `average weight`;
        weight [3] = `overweight`;
        weight [4] = `very overweight`;
        weight [5] = `buff`;
        weight [6] = `very buff`;
        weight [7] = `very curvy`;
        weight [8] = `curvy`;
        var e = Math.round(Math.random() * 8);
    
        message.channel.send(`Hi guys, here's my new OC! They have **${colour [a]}** hair, **${colour [b]}** eyes, and **${colour [c]}** skin, they are **${height [d]}** and **${weight [e]}**. As well, they have **${ability [f]} powers**, and **${feature [g]}**!`);
      },
    };