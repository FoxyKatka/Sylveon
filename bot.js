const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const version = ("Version: 1.0.2")

client.on('ready', () => {
	console.log('Ready!');
	client.user.setActivity(".help for cmds")
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
	console.log("Someone added the sylveon bot to a server created by: " + guild.owner.user.username)
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === `trans`) {
		message.channel.send(`<3, Look mom its a link!, where could it lead? https://www.reddit.com/r/traaaaaaannnnnnnnnns/ `); 
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
	else if (command === `uptime`) {
		// Gather uptime of bot
		let totalSeconds = (client.uptime / 1000);
		let hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		let minutes = Math.floor(totalSeconds / 60);
		let seconds = totalSeconds % 60;
		let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
		message.channel.send(`Bot uptime: ${uptime}`);
	}

	else if (command === `say`) {
		const embed = new Discord.RichEmbed()
			.setColor(0x74d7ec)
			.setDescription(message.author.username + " says: " + args.join(" "));
		message.channel.send({embed})
	}

	else if (command === 'attack') {
		// Attack and effectivness options (randomises output)
		const Attack = ["Draining Kiss", "Moonblast", "Moonblast", "Hyper voice"];
		const Attack_response = Attack[Math.floor(Math.random()*Attack.length)];
		const effect = ["It's Super Effective!", "It's not very effective"];
		const effect_response = effect[Math.floor(Math.random()*effect.length)];
		// 'Attacks' mentioned user
		const taggedUser = message.mentions.users.first(); 
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to use Attack!');
		}
		message.channel.send(`Sylveon uses ${Attack_response} on ${taggedUser.username}, ${effect_response} `);
	}

	else if (command === `kiss`){
		const taggedUser = message.mentions.users.first(); 
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to Kiss them!');
		}
		message.channel.send(`Sylveon Kissed ${taggedUser.username}`, {files: ["./cmd_specific_files/kiss.gif"]})
	}

	else if (command === `hug`){
		const taggedUser = message.mentions.users.first(); 
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to hug them!');
		}
		message.channel.send(`Sylveon hugged ${taggedUser.username}`, {files: ["./cmd_specific_files/hug.gif"]})
	}

	else if (command === `excited`){
		message.channel.send({files: ["./cmd_specific_files/NPYl.gif"]})
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
		// Chooses random amv from array
		const amv = ["https://www.youtube.com/watch?v=_8igtZ1Jyz4", "https://www.youtube.com/watch?v=O-MGT2z3fOs", "https://www.youtube.com/watch?v=oa49FiAl61g",
			"https://www.youtube.com/watch?v=HWO3ZFOOiIM", "https://www.youtube.com/watch?v=CVdfOGHm8vo", "https://www.youtube.com/watch?v=-vVpeuO5e0Y",
			"https://www.youtube.com/watch?v=uj6zzmzcogk", "https://www.youtube.com/watch?v=1UfiHYC7sn8", "https://www.youtube.com/watch?v=UZLTkSoaSPo",
			"https://www.youtube.com/watch?v=rBk_MH7OlAc", "https://www.youtube.com/watch?v=SDPp1b0qitI", "https://www.youtube.com/watch?v=8sWqefrAMmI",
			"https://www.youtube.com/watch?v=9jmeQESgDG8", "https://www.youtube.com/watch?v=JmggCilz5R4", "https://www.youtube.com/watch?v=4L9FZZpZKdg",
			"https://www.youtube.com/watch?v=NDMbNQc_gcc", "https://www.youtube.com/watch?v=0gOcq24IqjA", "https://www.youtube.com/watch?v=b5ta_USrqoE",
			"https://www.youtube.com/watch?v=639Yw9l7XqE", "https://www.youtube.com/watch?v=uI2e60ZFm7Q", "https://www.youtube.com/watch?v=i5h_Xr1tF9Q",
			"https://www.youtube.com/watch?v=OV-7D3cEzfU", "https://www.youtube.com/watch?v=qLBHnuD7VWU", "https://www.youtube.com/watch?v=Du5yT56lBLQ",
			"https://www.youtube.com/watch?v=UwMHN9gD33U", "https://www.youtube.com/watch?v=wiJ5EexHhAY", "https://www.youtube.com/watch?v=nEqOrwiDTVA",
			"https://www.youtube.com/watch?v=93_ZmyJyBSM"];
		const amv_response = amv[Math.floor(Math.random()*amv.length)];
		message.channel.send(`${amv_response}`);
	}

	else if (command === `quote`) {     
		// Chooses random quote from array
		const quote = ["“If I’m wearing a bikini...where do I put my Pokeballs? Teehee...woman’s secret!” - Swimmer Kylie", "“By the way...boy...you ever had a lover?” - Hiker Andy", "“My Rattata is different from regular Rattata. It’s like my Rattata is in the top percentage of Rattatas.” - Youngster Joey",
			"“Hi! I like shorts! They’re comfy and easy to wear!” - A Youngster trainer", "“Wow. You and your Pokemon’s power levels are amazing! They’re over 9000 for sure!” - Psychic Robert", "“The air is tasty here.” - A little boy",
			"“You’re pretty hot, but not as hot as Brock.” - Jr Trainer", "“My body is ready.” - Veteran Timeo", "“Give...me...blood…” - Channeler trainer",
			"“Technology is incredible!/The power of science is staggering!” - science/technology enthusiast", "“Did you come to hear me brag about my Pokemon? Good! Then listen up! My favorite Rapidash... It... cute... lovely... smart...plus...amazing...you think so?... Oh yes... it...stunning...kindly...love it! Hug it ...when... sleeping...warm and cuddly...spectacular...ravishing... Oops! Look at the time! I kept you too long! Thanks for hearing me out. I want you to have this.” - President of the Pokemon Fan Club", "“Even If we don’t understand each other, that’s not a reason to reject each other. There are two sides to any argument. Is there one point of view that has all the answers? Give it some thought.” – Alder",
			"“Everybody makes a wrong turn once in a while” – Ash Ketchum", "“Make your wonderful dream a reality, it will become your truth. If anyone can, it’s you.” – N, Pokemon Black/White", "“I see now that one’s birth is irrelevant. It’s what you do that determines who you are.” – Mewtwo",
			"“Take charge of your destiny.” – Rayquaza", "“It’s more important to master the cards you’re holding than to complain about the ones your opponent was dealt.” – Grimsley", "“You see, sometimes friends have to go away, but a part of them stays behind with you.” – Ash Ketchum",
			"“We do have a lot in common. The same earth, the same air, the same sky. Maybe if we started looking at what’s the same, instead of looking at what’s different, well, who knows?” – Meowth", "“The important thing is not how long you live. It’s what you accomplish with your life.” – Grovyle", "“Me give up? No way!” – Ash Ketchum",
			"“Well ash ya snooze la lose and you're behind right from the start” - Gary oak", "“You only live once, So i live.” - Biker", "“Don't you know that love is the most important thing in the world” - Misty",
			"“Close your eyes, believe and make a wish” - Aska Hayashi", "“You and me where a miracle” - Pokemon the first movie", "“Humans may create me, but they cannot enslave me. This cannot be my destiny!” - Mewtwo",
			"“The more wonderful the meeting, the sadder the parting.” - Looker", "“When you bring out the best in others, it helps you find the best in yourself, too.” – Guzma", "“Remember that time you enjoy wasting is not wasted time.” – Alolan Cafe Man",
			"“All dreams are but another reality. Never forget.” - A signpost on Southern Island", "“Living is using time given to you. You cannot recall lost time. Don't forget that.” - NPC in Driftveil city", "“There are bad ways to win, and good ways to lose. What's interesting and troubling is that it's not always clear which is which. A flipped coin doesn't always land on heads or tails. Sometimes it may never land at all.” - Grimsley",
			"“If there is someone in this world who understands you, it feels like that person is right beside you. Even if you're as far apart as the end of the land and top of the sky.” - Giallo", "“Getting wrapped up in worries is bad for your body and spirit. That's when you must short our your logic and reboot your heart.” - Elesa", "“Physical wounds can be treated without much difficulty, but emotional wounds are not so easy to heal.” - N",
			"“Even if you lose in battle, if you surpass what you've done before, you have bested yourself.” - Marshal"]; 
		const quote_response = quote[Math.floor(Math.random()*quote.length)];
		message.channel.send(`${quote_response}`);
	}

	else if (command === `theme`) {
		var VC = message.member.voiceChannel;
		if (!VC)
			return message.reply("You need to be in a voice channel to play audio files!")
		VC.join()
			.then(connection => {
				const dispatcher = connection.playFile('./cmd_specific_files/audio/theme.mp3');
				dispatcher.on("end", end => {VC.leave()});
			})
			.catch(console.error);
	}
	// Sending multiple discord rich elements in 1 command.
	else if (command === 'help') {
		const embed = new Discord.RichEmbed()
			.setColor(0x74d7ec)
			.setTitle("Command List")
			.addField(".help", "Will show the current command list")
			.addField(".ping", "WIll show the ping time for the bot")
			.addField(".say [text]", "Will make the bot say something")
			.addField(".uptime", "Will Show how long the bot has been online for")
			.addField(".server", "Server info")
			.addField(".user-info", "User info")
		message.channel.send(embed);
        
		const embed2 = new Discord.RichEmbed()
			.setColor(0xffafc7)
			.addField(".trans", "links to the best place on [reddit](https://www.reddit.com/r/traaaaaaannnnnnnnnns/)")
			.addField(".theme", "If user is in a voice channel, sylveon will join and play the Pokemon theme song")
			.addField(".amv", "Sends a random AMV youtube video")
			.addField(".gif", "Sends a random gif of Sylveon related Art")
			.addField(".image", "Sends a random image of Sylveon related Art")
		message.channel.send(embed2);

		const embed3 = new Discord.RichEmbed()
			.setColor(0xfbf9f5)
			.addField(".attack [@user]", "Attack's the mentioned user")
			.addField(".hug [@user]", "hugs the mentioned user")
			.addField(".kiss [@user]", "Kisses the mentioned user")
			.addField(".quote", "Sends a random Pokemon quote")
		message.channel.send(embed3);

		const embed4 = new Discord.RichEmbed()
			.setColor(0xffb5cb)
			.addField("Warning", "Sylveon bot is in an experimental state. Just like a hormone raging, moody teenager. They may refuse to do certain commands under the stresses of real life.")
        
		message.channel.send(embed4);

		const embed5 = new Discord.RichEmbed()
			.setColor(0x73d5ea)
			.setTitle("Credits")
			.addField("Stalk my owner", 
				`Twitter: [Twitter](https://twitter.com/FoxyKatka)
         Discord: Foxy#0002`
			)
			.addField("Contribute", `If you have any suggestions for the bot, Send me a dm on either twitter or discord. Otherwise if you directly want to contribute you can do so by checking out the github :)`)
			.addField("Documentation", "Further Documentation and full code is available on [Github](https://github.com/FoxyKatka/Sylveon)",true)
			.addBlankField(true)
			.setImage("https://i.imgur.com/XOdnMKY.gif")
			.setFooter(`Foxy | ${version}`,  "https://i.imgur.com/Tn205iZ.png")
			.setTimestamp()
		message.channel.send(embed5);
	}
});

client.login(token); // no-hack-please
