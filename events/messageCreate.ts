import type { Message } from "discord.js";

import { InstagramProvider } from "../providers/instagram";
import { RedditProvider } from "../providers/reddit";
import { TikTokProvider } from "../providers/tiktok";
import { TwitterProvider } from "../providers/twitter";

const providers = [
	new InstagramProvider(),
	new TikTokProvider(),
	new TwitterProvider(),
	new RedditProvider(),
] as const;

export const handleMessageCreate = async (message: Message) => {
	if (message.author.bot) return;

	const links: string[] = [];

	for (const provider of providers) {
		if (provider.hasLink(message.content)) {
			links.push(provider.rewriteLink(message.content));
		}
	}

	if (links.length > 0) {
		try {
			await message.suppressEmbeds(true);
			await message.reply({
				content: links.join("\n"),
				allowedMentions: {
					repliedUser: false,
				},
			});
		} catch (error) {
			console.error("Error responding to message", error);
		}
	}
};
