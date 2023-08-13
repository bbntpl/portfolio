export default class Footer {
	#container: HTMLDivElement
	constructor() {
		this.#container = document.createElement('div');
		this.#container.textContent = 'This is the footer';

		// Add classes to apply styles
		this.#container.classList.add(
			'bottom-0',
			'fixed',
		)
	}

	public getElement(): HTMLDivElement {
		return this.#container;
	}
}