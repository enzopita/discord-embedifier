import { type ActivityOptions, ActivityType } from "discord.js";

export const config = {
	discordToken: process.env.DISCORD_TOKEN,
	activity: {
		type: ActivityType.Watching,
		name: process.env.DISCORD_ACTIVITY_MESSAGE,
	} as ActivityOptions,
};
