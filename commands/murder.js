const Discord = require('discord.js');

module.exports = {
      n: 'murder',
      a: ['dr', 'danganronpa', 'death', 'dead'],
        d: 'Visualize your potential Killing Game murder and suicide attempts!',
        u: '%murder',
        b: false,
        async execute(client, message, args) {
        var user = message.author();
        var room = [];
        room [0] = `The Armoury`;
        room [1] = `The Tavern`;
        room [2] = `The Kitchen`;
        room [3] = `The Wardrobe`;
        room [4] = `The Dining Room`;
        room [5] = `The Garden`;
        room [6] = `The Washroom`;
        room [7] = `The Art Studio`;
        room [8] = `The Observatory`;
        room [9] = `The Parlour`;
        room [10] = `The Cellar`;
        room [11] = `The Roof`;
        room [12] = `The Rec Room`;
        room [13] = `The Astral Hall`;
        room [14] = `The Foyer`;
        var d = Math.round(Math.random() * 14);
    
        var ult = [];
        ult [0] = `Technician`;
        ult [1] = `Chef`;
        ult [2] = `Astrologer`;
        ult [3] = `Shitposter`;
        ult [4] = `Gambler`;
        ult [5] = `Liar`;
        ult [6] = `Chemist`;
        ult [7] = `Preacher`;
        ult [8] = `Scapegoat`;
        ult [9] = `Hope`;
        ult [10] = `Despair`;
        ult [11] = `Photographer`;
        ult [12] = `Artist`;
        ult [13] = `Gamer`;
        ult [14] = `Instagram Influencer`;
        ult [15] = `Youtube Demonitizer`;
        ult [16] = `Detective`;
        ult [17] = `Kitchen Investigator`;
        ult [18] = `Sweeper`;
        ult [19] = `Idiot`;
        ult [20] = `Bath Water Connoisseur`;
        var b = Math.round(Math.random() * 1);

        var mark = [];
        mark [0] = `wound`;
        mark [1] = `bruise`;
        var c = Math.round(Math.random() * 1);
        var d = Math.round(Math.random() * 1);
        var e = Math.round(Math.random() * 1);

        var body = [];
        body [0] = `head`;
        body [1] = `face`;
        body [2] = `neck`;
        body [3] = `chest`;
        body [4] = `upper torso`;
        body [5] = `lower torso`;
        body [6] = `stomach`;
        body [7] = `hips`;
        body [8] = `waist`;
        body [9] = `left thigh`;
        body [10] = `left calf`;
        body [11] = `left bicep`;
        body [12] = `left forearm`;
        body [13] = `left foot`;
        body [14] = `left hand`;
        body [14] = `left entire arm`;
        body [15] = `left entire leg`;
        body [16] = `right thigh`;
        body [17] = `right calf`;
        body [18] = `right bicep`;
        body [19] = `right forearm`;
        body [20] = `right foot`;
        body [21] = `right hand`;
        body [22] = `entire right arm`;
        body [23] = `entire right leg`;
        var f = Math.round(Math.random() * 23);
        var g = Math.round(Math.random() * 23);
        var h = Math.round(Math.random() * 23);

        var condition = [];
        condition [0] = `burnt on the left side of their body`;
        condition [1] = `burnt on the right side of their body`;
        condition [2] = `surrounded by flour`;
        condition [3] = `surrounded by ash`;
        condition [4] = `entirely naked`;
        condition [5] = `in a pool of pink liquid`;
        condition [6] = `covered in red paint`;
        condition [7] = `with a crown in their chest`;
        condition [8] = `on top of a pile of Playboy magazines`;
        condition [9] = `buried in sand`;
        condition [10] = `very, very wet`;
        condition [11] = `without any eyes`;
        condition [12] = `without their skin`;
        condition [13] = `with half their skull missing`;
        condition [14] = `partially dissolved by acid`;
        condition [15] = `covered in glass shards and smelling of onion`;
        var i = Math.round(Math.random() * 15);
    
        message.channel.send(`**Attention, residents of The ${message.guild.name} Mansion! A BODY HAS BEEN DISCOVERED!!!!**\n${message.member.user.username} was found dead in ${room[a]}. They were the **Ultimate ${ult[b]}**!\nTheir body is ${condition[i]}, with a ${mark[f]} to their ${body[c]}, ${mark[g]} to their ${body[d]}, and ${mark[h]} to their ${body[e]}.`);
      },
    };