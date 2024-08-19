import type { Client } from "discord.js";

export const handleReadyEvent = async (client: Client) => {
	console.log(`Logged in as ${client.user?.tag}`);
	console.log("Total of", client.guilds.cache.size, "guilds");
	console.log("Total of", client.channels.cache.size, "channels");
	console.log("Total of", client.users.cache.size, "users");
	console.log();
};
