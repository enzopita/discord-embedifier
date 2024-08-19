import { Provider } from "../provider";

// Substitui o domínio "reddit.com" para "rxddit.com"
export class RedditProvider extends Provider {
	hasLink(message: string): boolean {
		return /https?:\/\/(www\.)?reddit\.com\//.test(message);
	}

	rewriteLink(message: string): string {
		return message.replace(
			/https?:\/\/(www\.)?reddit\.com\//g,
			"https://rxddit.com/",
		);
	}
}
