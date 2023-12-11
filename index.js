const { Client, GatewayIntentBits, Partials } = require('discord.js');
const { token } = require('./config.json');

function log(x) {
    return console.log(x)
}

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
    log(`[DiscordJS] Login as ${client.user.tag} successfully!`);
});