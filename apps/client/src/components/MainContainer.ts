interface MainContainerConstructorArgs {
	containerBgColor: string;
	contentElement: HTMLDivElement;
}

export default class ParallaxScrollElement {
	#mainContainer: HTMLDivElement;

	constructor({
		containerBgColor,
		contentElement
	}: MainContainerConstructorArgs) {
		this.#mainContainer = document.createElement('div');
		this.#mainContainer.id = 'main-container';

		this.#mainContainer.appendChild(contentElement);

		// Add classnames to apply styles
		this.#mainContainer.classList.add(
			containerBgColor, // expected bg-midnight
			'relative',
			'overflow-hidden',
			'parallax-container',
			'min-h-screen',
			'bg-[radial-gradient(ellipse_75%_75%_at_50%_-30%,rgba(0,86,96,0.2),rgba(255,255,255,0))]'
		);
	}

	public getRootElement(): HTMLDivElement {
		return this.#mainContainer;
	}
}