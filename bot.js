const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

// Attack and effectivness options (randomises output)
const Attack = ["Draining Kiss", "Moonblast", "Moonblast", "Hyper voice"];
const Attack_response = Attack[Math.floor(Math.random()*Attack.length)];
const effect = ["It's Super Effective!", "It's not very effective"];
const effect_response = effect[Math.floor(Math.random()*effect.length)];
 
const amv = ["https://www.youtube.com/watch?v=_8igtZ1Jyz4", "https://www.youtube.com/watch?v=O-MGT2z3fOs", "https://www.youtube.com/watch?v=oa49FiAl61g",
             "https://www.youtube.com/watch?v=HWO3ZFOOiIM", "https://www.youtube.com/watch?v=CVdfOGHm8vo", "https://www.youtube.com/watch?v=-vVpeuO5e0Y",
             "https://www.youtube.com/watch?v=uj6zzmzcogk", "https://www.youtube.com/watch?v=1UfiHYC7sn8", "https://www.youtube.com/watch?v=UZLTkSoaSPo",
             "https://www.youtube.com/watch?v=rBk_MH7OlAc", "https://www.youtube.com/watch?v=SDPp1b0qitI", "https://www.youtube.com/watch?v=8sWqefrAMmI",
             "https://www.youtube.com/watch?v=9jmeQESgDG8", "https://www.youtube.com/watch?v=JmggCilz5R4", "https://www.youtube.com/watch?v=4L9FZZpZKdg",
             "https://www.youtube.com/watch?v=NDMbNQc_gcc", "https://www.youtube.com/watch?v=0gOcq24IqjA", "https://www.youtube.com/watch?v=b5ta_USrqoE",
             "https://www.youtube.com/watch?v=639Yw9l7XqE", "https://www.youtube.com/watch?v=uI2e60ZFm7Q", "https://www.youtube.com/watch?v=i5h_Xr1tF9Q",
             "https://www.youtube.com/watch?v=OV-7D3cEzfU", "https://www.youtube.com/watch?v=qLBHnuD7VWU", "https://www.youtube.com/watch?v=Du5yT56lBLQ",
             "https://www.youtube.com/watch?v=UwMHN9gD33U",];
const amv_response = amv[Math.floor(Math.random()*Attack.length)];

client.on('ready', () => {
    console.log('Ready!');
    client.user.setActivity("!help for cmds")
});

// welcome message

client.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.find('name', 'welcome');
    if (!welcomeChannel === null) return;
    client.channels.get(welcomeChannel.id).send("Welcome to: " + member.guild.name + " Have a fairy awesome time")
});

client.on("guildMemberRemove", member => {
    const welcomeChannel = member.guild.channels.find('name', 'welcome');
    if (!welcomeChannel === null) return;
    client.channels.get(welcomeChannel.id).send("Goodbye: " + member.user.username + " from " + member.guild.name)
});

client.on("guildCreate", guild => {
    console.log("Some one added the sylveon bot to a server created by: " + guild.owner.user.username)
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === `trans`) {
        message.channel.send('<3');  // send back "<3" to the channel the message was sent in
    }
    else if (command === `ping`) {
        message.channel.send(`Time took: ${Date.now() - message.createdTimestamp} ms`);
    }
    else if (command === `server`) {
        message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCreated: ${message.guild.createdAt}\nRegion: ${message.guild.region}`);
    }
    else if (command === `user-info`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
    else if (command === 'args-info') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
    
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    }
    
    else if (command === 'attack') {
        // 'Attacks' mentioned user
        const taggedUser = message.mentions.users.first(); 
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to use Attack!');
        }
        message.channel.send(`Sylveon uses ${Attack_response} on ${taggedUser.username} ${effect_response} `);
    }

    else if (command === `excited`){
        message.channel.send( {files: ["./gifs/NPYl.gif"]})
    }
    
    else if (command === `image`) {
        number = 124;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send( {files: ["./images/" + imageNumber + ".png"]} )
    }

    else if (command === `gif`) {
        number = 73;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send( {files: ["./gifs/" + imageNumber + ".gif"]} )
    }

    else if (command === `amv`) {
        message.channel.send(`${amv_response}`);
    }
    // Sending multiple discord rich elements in 1 command.
    else if (command === 'help') {
        const embed = new Discord.RichEmbed()
        .setColor(0x74d7ec)
		.setTitle("Command List")
		.addField("!help", "Will show the current command list")
		.addField("!ping", "WIll show the ping time for the bot")
		.addField("!say [text]", "Will make the bot say something")
		.addField("!announcement [text]", "Will make the bot say an announcement and tag everyone")
        .addField("!trans", "send back <3 to the user")
        .addField("!gif", "Sends a random gif of Sylveon related Art")
        .addField("!image", "Sends a random image of Sylveon related Art")
        .addField("!attack", "Attack's the mentioned user")
        .addField("!server", "Server info")
        .addField("!user-info", "User info");
        message.channel.send(embed)
        
        const embed2 = new Discord.RichEmbed()
        .setColor(0xffafc7)
        .setTitle("2")
        message.channel.send(embed2);

        const embed3 = new Discord.RichEmbed()
        .setColor(0xfbf9f5)
        .setTitle("3")
        message.channel.send(embed3);

        const embed4 = new Discord.RichEmbed()
        .setColor(0xffb5cb)
        .setTitle("4")
        
        message.channel.send(embed4);

        const embed5 = new Discord.RichEmbed()
        .setColor(0x73d5ea)
        .setTitle("Credits")
        .addField("Stalk my owner", 
        `Twitter: [Twitter](https://twitter.com/FoxyKatka)
         Discord: Foxy ^_~#0002`
        )
        .addField("Contribute", `If you have any suggestions for the bot, Send me a dm on either twitter or discord. I will make sure to credit you! :)`)
        .addField("Documentation", "Further Documentation and full code is available on [Github](https://github.com/FoxyKatka/Sylveon)",true)
        .addBlankField(true)
        .setImage("https://i.imgur.com/XOdnMKY.gif")
        .setFooter("Foxy ^_~ |",  "https://i.imgur.com/Tn205iZ.png")
        .setTimestamp()
        message.channel.send(embed5);
    }
});

client.login(token); // no-hack-please
