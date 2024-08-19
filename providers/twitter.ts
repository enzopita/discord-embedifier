import { Provider } from "../provider";

// Substitui o domínio "twitter.com" para "fxtwitter.com"
// Substitui o domínio "x.com" para "fixupx.com"
export class TwitterProvider extends Provider {
	hasLink(message: string): boolean {
		return /https?:\/\/(www\.)?(twitter\.com|x\.com)\//.test(message);
	}

	rewriteLink(message: string): string {
		return message
			.replace(/https?:\/\/(www\.)?twitter\.com\//g, "https://fxtwitter.com/")
			.replace(/https?:\/\/(www\.)?x\.com\//g, "https://fixupx.com/");
	}
}
