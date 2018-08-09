const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.content === '!trans') {
        // send back "<3." to the channel the message was sent in
        message.channel.send('<3');
    }
});

client.login(config.token); // no-hack-please
