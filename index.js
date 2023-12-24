const { Client, GatewayIntentBits, Partials } = require('discord.js');
const { token } = require('./config.js');
const { log } = require('./function.js');

const client = new Client({
  failIfNotExists: true,
  allowedMentions: {
      parse: ["roles", "users", "everyone"],
      repliedUser: false,
  },
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
  partials: [
    Partials.Message,
    Partials.Channel,
    Partials.Reaction
  ]
});

client.login(token);

client.on('ready', () => {
    log(`
█████████  █████████  █████████  █████████  █████████  █████████  █████████  █████████  █████████  █████████

		      ▀███▀▀▀██▄ ▀████▀████▀████▀███▀   ▀██▀  ▄▄█▀▀▀█▄█████▀  ▀████▀▀
		        ██   ▀██▄  ██   ██   ██   ███▄  ▄█  ▄██▀     ▀█ ██      ██   
		        ██   ▄██   ██   ██   ██    ▀██▄█▀   ██▀       ▀ ██      ██   
		        ███████    ██   ██   ██      ███    ██          ██████████   
		        ██  ██▄    ██   ██   ██    ▄█▀▀██▄  ██▄         ██      ██   
		        ██   ▀██▄  ██   ██   ██   ▄█   ▀██▄ ▀██▄     ▄▀ ██      ██   
		      ▄████▄ ▄███▄████▄████▄████▄██▄▄  ▄▄███▄ ▀▀█████▀▄████▄  ▄████▄▄
		             ▄▄                                        ▄▄                      
		▀███▀▀▀██▄   ██                                      ▀███        ▀████▀▄█▀▀▀█▄█
		  ██    ▀██▄                                           ██          ██ ▄██    ▀█
		  ██     ▀█████  ▄██▀███▄██▀██  ▄██▀██▄▀███▄███   ▄█▀▀███          ██ ▀███▄    
		  ██      ██ ██  ██   ▀▀█▀  ██ ██▀   ▀██ ██▀ ▀▀ ▄██    ██          ██   ▀█████▄
		  ██     ▄██ ██  ▀█████▄█      ██     ██ ██     ███    ██          ██ ▄     ▀██
		  ██    ▄██▀ ██  █▄   ███▄    ▄██▄   ▄██ ██     ▀██    ██     ███  ██ ██     ██
		▄████████▀ ▄████▄██████▀█████▀  ▀█████▀▄████▄    ▀████▀███▄    █████  █▀█████▀ 

█████████  █████████  █████████  █████████  █████████  █████████  █████████  █████████  █████████  █████████
`);
    log(`[DiscordJS] Login as ${client.user.tag} successfully!`);
});
