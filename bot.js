const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

// Attack and effectivness options (randomises output)
var Attack = ["Draining Kiss", "Moonblast", "Moonblast", "Hyper voice"];
var Attack_respone = Attack[Math.floor(Math.random()*Attack.length)];
var effect = ["It's Super Effective!", "It's not very effective"];
var effect_respone = effect[Math.floor(Math.random()*effect.length)];

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === `trans`) {
        message.channel.send('<3');  // send back "<3" to the channel the message was sent in
    }
    else if (command === `beep`) {
        message.channel.send('Boop.');
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
    if (!message.mentions.users.size) {
        return message.reply('you need to tag a user in order to Attack them!');
    }
    else if (command === 'attack') {
        // 'Attacks' mentioned user
        const taggedUser = message.mentions.users.first();
    
        message.channel.send(`Sylveon uses ${Attack_respone} on ${taggedUser.username} ${effect_respone} `);
    }
});

client.login(token); // no-hack-please
