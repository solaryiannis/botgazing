const Discord = require('discord.js');

module.exports = {
      n: 'murder',
      a: ['murder', 'dr', 'danganronpa', 'death', 'dead', 'm'],
        d: 'Visualize your potential Killing Game murder and suicide attempts!',
        u: '%murder',
        b: false,
        async execute(client, message, args) {
          var member;
          var user;
          member = message.mentions.members.first();
          if (!member) {
            member = message.guild.members.get(args[0]);
            if (!member)
            {
              member = message.guild.members.find(m => m.user.username === args.join(" "));
              if (!member) {
                member = message.guild.members.find(m => m.displayName === args.join(" "));
                if (!member) {
                    member = message.guild.members.find(m => m.user.tag === args.join(" "));
                    if (!member) member = message.member;
                }  
              }
            }
          }
          user = member.user;

        var room = [];
        room [0] = `in The Armoury`;
        room [1] = `in The Tavern`;
        room [2] = `in The Kitchen`;
        room [3] = `in The Wardrobe`;
        room [4] = `in The Dining Room`;
        room [5] = `in The Garden`;
        room [6] = `in The Washroom`;
        room [7] = `in The Art Studio`;
        room [8] = `in The Observatory`;
        room [9] = `in The Parlour`;
        room [10] = `in The Cellar`;
        room [11] = `on The Roof`;
        room [12] = `in The Rec Room`;
        room [13] = `in The Astral Hall`;
        room [14] = `in The Foyer`;
        room [15] = `in The Meme Den`;
        room [16] = `on The Balcony`;
        room [17] = `at the bottom of The Pool`;
        room [18] = `floating in The Pool`;
        room [19] = `at the bottom of The Hot Tub`;
        room [20] = `floating in The Hot Tub`;
        room [21] = `in The Sauna`;
        room [22] = `in The Minecraft Diamond Mine`;
        room [23] = `in The Morgue`;
        var a = Math.round(Math.random() * 23);
    
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
        var b = Math.round(Math.random() * 20);

        var mark = [];
        mark [0] = `wound`;
        mark [1] = `bruise`;
        mark [2] = `burn`;
        mark [3] = `scratch`;
        mark [4] = `gash`;
        mark [5] = `cut`;
        mark [6] = `rash`;
        mark [7] = `paint mark`;
        var f = Math.round(Math.random() * 7);
        var g = Math.round(Math.random() * 7);
        var h = Math.round(Math.random() * 7);

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
        var c = Math.round(Math.random() * 23);
        var d = Math.round(Math.random() * 23);
        var e = Math.round(Math.random() * 23);

        var condition = [];
        condition [0] = `are burnt on the left side of their body`;
        condition [1] = `are burnt on the right side of their body`;
        condition [2] = `are surrounded by flour`;
        condition [3] = `are surrounded by ash`;
        condition [4] = `are entirely naked`;
        condition [5] = `are in a pool of pink liquid`;
        condition [6] = `are covered in red paint`;
        condition [7] = `have a crown in their chest`;
        condition [8] = `are on top of a pile of Playboy magazines`;
        condition [9] = `are buried in sand`;
        condition [10] = `are very, very wet`;
        condition [11] = `have no eyes`;
        condition [12] = `have no skin`;
        condition [13] = `are missing half their skull`;
        condition [14] = `are partially dissolved by acid`;
        condition [15] = `are slumped into half of a cheesecake`;
        condition [16] = `are covered in glass shards and smelling of onion`;
        condition [17] = `are covered in puppy paw prints`;
        condition [18] = `are wearing no pants (and no underwear)`;
        condition [19] = `have earbuds connected to a Walkman`;
        condition [20] = `have a partially severed hand`;
        condition [21] = `have a noticeable sunburn`;
        condition [22] = `have a baseball bat shoved down their throat`;
        condition [23] = `look like Sans`;
        condition [24] = `are sliced in two through their torso`;
        condition [25] = `are painted to look like Monokuma`;
        condition [26] = `are covered in purple dots`;
        var i = Math.round(Math.random() * 26);
        
        message.channel.send(`**Attention, members of ${message.guild.name}! A BODY HAS BEEN DISCOVERED!!!!**\n${user.username} was found dead ${room[a]}. They were the **Ultimate ${ult[b]}**!\nThey ${condition[i]}, with a ${mark[f]} to their ${body[c]}, ${mark[g]} to their ${body[d]}, and ${mark[h]} to their ${body[e]}.`);
      },
    };