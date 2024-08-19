import { Client, Events, GatewayIntentBits } from "discord.js";
import { config } from "./config";

import { handleGuildCreate } from "./events/guildCreate";
import { handleGuildDelete } from "./events/guildDelete";
import { handleMessageCreate } from "./events/messageCreate";
import { handleReadyEvent } from "./events/ready";

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
	presence: {
		activities: [config.activity],
	},
});

client.on(Events.ClientReady, handleReadyEvent);
client.on(Events.MessageCreate, handleMessageCreate);
client.on(Events.GuildCreate, handleGuildCreate);
client.on(Events.GuildDelete, handleGuildDelete);

client.login(config.discordToken);
