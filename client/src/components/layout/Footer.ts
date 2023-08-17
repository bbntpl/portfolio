export default class Footer {
	#container: HTMLDivElement
	#footerLink: HTMLAnchorElement;
	#currentYear: Number;
	constructor({ githubLink }: { githubLink: string }) {
		this.#container = document.createElement('div');
		this.#footerLink = document.createElement('a');
		this.#currentYear = new Date().getFullYear();

		const copyrightSymbol = String.fromCharCode(169);

		this.#footerLink.href = githubLink;
		this.#footerLink.textContent = `${copyrightSymbol} Beaver Bryan Antipolo ${this.#currentYear}`;

		this.#container.appendChild(this.#footerLink);

		// Add classes to apply styles
		this.#container.classList.add(
			'flex',
			'justify-center',
			'bottom-0',
			'w-full',
			'py-10',
			'z-10',
		)
		this.#footerLink.classList.add(
			'text-downy-source',
			'font-layout',
			'text-align',
			'transition',
			'duration-300',
			'hover:text-downy-100',
			'hover:cursor-pointer'
		)
	}

	public getElement(): HTMLDivElement {
		return this.#container;
	}
}