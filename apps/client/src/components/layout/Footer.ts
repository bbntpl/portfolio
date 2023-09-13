import createElement from '../../helpers/create-element';

export default class Footer {
	#rootContainer: HTMLElement;
	#footerLink: HTMLAnchorElement;

	constructor({ githubUrl }: { githubUrl: string }) {
		const currentYear = new Date().getFullYear();
		const copyrightSymbol = String.fromCharCode(169);
		const footerText = `${copyrightSymbol} Beaver Bryan Antipolo ${currentYear}`

		this.#footerLink = createElement('a', {
			attributes: {
				href: githubUrl,
				class: [
					'text-downy-source',
					'font-layout',
					'text-align',
					'transition',
					'duration-300',
					'hover:text-downy-100',
					'hover:cursor-pointer',
					'viewport-element-transition'
				]
			},
			textContent: footerText,
		});

		this.#rootContainer = createElement('footer', {
			attributes: {
				class: [
					'flex',
					'justify-center',
					'bottom-0',
					'w-full',
					'py-10',
					'z-10',
				]
			},
			children: [this.#footerLink]
		});
	}

	public getRootElement = (): HTMLElement => this.#rootContainer;
}