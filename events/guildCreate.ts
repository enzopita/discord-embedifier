import type { Guild } from "discord.js";

export const handleGuildCreate = async (guild: Guild) => {
	console.log(`Joined guild ${guild.name} (${guild.id})`);
};
