import { Provider } from "../provider";

// Substitui o domínio "instagram.com" para "ddinstagram.com"
export class InstagramProvider extends Provider {
	hasLink(message: string): boolean {
		return /https?:\/\/(www\.)?instagram\.com\//.test(message);
	}

	rewriteLink(message: string): string {
		return message.replace(
			/https?:\/\/(www\.)?instagram\.com\//g,
			"https://ddinstagram.com/",
		);
	}
}
