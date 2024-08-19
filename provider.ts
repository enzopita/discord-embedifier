export abstract class Provider {
	/**
	 * Verifica se a mensagem contém um link do provedor
	 */
	abstract hasLink(message: string): boolean;

	/**
	 * Reescreve o link do provedor para um formato que exiba a miniatura da imagem
	 */
	abstract rewriteLink(message: string): string;
}
