interface ParallaxScrollConstructorArgs {
	containerBgColor: string;
	backgroundUrl: string;
	contentElement: HTMLDivElement;
}

export default class ParallaxScroll {
	#parallaxContainer: HTMLDivElement;
	#parallaxBackground: HTMLDivElement;

	constructor({
		containerBgColor,
		backgroundUrl,
		contentElement
	}: ParallaxScrollConstructorArgs) {
		this.#parallaxContainer = document.createElement('div');
		this.#parallaxBackground = document.createElement('div');

		this.#parallaxContainer.appendChild(contentElement);
		this.#parallaxContainer.appendChild(this.#parallaxBackground);

		// Add classnames to applly styles
		this.#parallaxContainer.classList.add(
			containerBgColor,
			'relative',
			'overflow-hidden',
			'h-screen',
			'parallax-container',
		);
		this.#parallaxBackground.classList.add(
			'absolute',
			'top-0',
			'left-0',
			'w-full',
			'h-full',
			'bg-cover',
			'parallax-bg',
		);
		this.#parallaxBackground.style.backgroundImage = `url('${backgroundUrl}')`;

		// Apply parallax scroll effect
		window.addEventListener('scroll', () => {
			const scrolled = window.scrollY;
			this.#parallaxBackground.style.transform = `translateY(-${scrolled * 0.5}px)`; // Adjust the factor for desired speed
		});
	}

	public getElement(): HTMLDivElement {
		return this.#parallaxContainer;
	}
}