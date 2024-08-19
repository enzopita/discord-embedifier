import { Provider } from "../provider";

// Substitui o domínio "tiktok.com" para "tnktok.com"
export class TikTokProvider extends Provider {
	hasLink(message: string): boolean {
		return /https?:\/\/(www\.)?tiktok\.com\//.test(message);
	}

	rewriteLink(message: string): string {
		return message.replace(
			/https?:\/\/(www\.)?tiktok\.com\//g,
			"https://tnktok.com/",
		);
	}
}
