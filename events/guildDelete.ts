import type { Guild } from "discord.js";

export const handleGuildDelete = async (guild: Guild) => {
	console.log(`Left the guild ${guild.name} (${guild.id})`);
};
