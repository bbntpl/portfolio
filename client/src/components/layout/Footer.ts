export default class Footer {
	#rootContainer: HTMLElement;
	#footerLink: HTMLAnchorElement;
	#currentYear: Number;
	constructor({ githubLink }: { githubLink: string }) {
		this.#rootContainer = document.createElement('footer');
		this.#footerLink = document.createElement('a');
		this.#currentYear = new Date().getFullYear();

		const copyrightSymbol = String.fromCharCode(169);

		this.#footerLink.href = githubLink;
		this.#footerLink.textContent = `${copyrightSymbol} Beaver Bryan Antipolo ${this.#currentYear}`;

		this.#rootContainer.appendChild(this.#footerLink);

		// Add classes to apply styles
		this.#rootContainer.classList.add(
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

	public getRootElement(): HTMLElement {
		return this.#rootContainer;
	}
}