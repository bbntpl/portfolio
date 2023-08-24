interface ParallaxScrollConstructorArgs {
	containerBgColor: string;
	backgroundUrl: string;
	contentElement: HTMLDivElement;
}

export default class ParallaxScrollElement {
	#parallaxContainer: HTMLDivElement;
	#parallaxBackground: HTMLDivElement;

	constructor({
		containerBgColor,
		backgroundUrl,
		contentElement
	}: ParallaxScrollConstructorArgs) {
		this.#parallaxContainer = document.createElement('div');
		this.#parallaxBackground = document.createElement('div');
		this.#parallaxContainer.id = 'parallax';

		this.#parallaxContainer.appendChild(contentElement);
		this.#parallaxContainer.appendChild(this.#parallaxBackground);

		// Add classnames to applly styles
		this.#parallaxContainer.classList.add(
			containerBgColor,
			'relative',
			'overflow-hidden',
			'parallax-container',
			'min-h-screen'
		);
		this.#parallaxBackground.classList.add(
			'absolute',
			'top-0',
			'left-0',
			'w-full',
			'h-full',
			'bg-80%',
			'bg-top',
			'bg-fixed',
			'parallax-bg',
			'opacity-60'
		);

		this.#parallaxBackground.style.backgroundImage = `url('${backgroundUrl}')`;

		// Apply parallax scroll effect
		window.addEventListener('scroll', () => {
			/* Increasing the factor will make the scrolling illusion effect faster since the background 
			 image is being moved in response to the scroll event.

			 Once the background image has reached its final set of pixels, it'll repeat
			 the process of repainting the background with the new position. This requires expensive
			 rendering which highly impacts tperformance

			 I need to find a better solution for this or minimize the impact of performance issue */
			const factor = 0.1;

			const scrollY = window.scrollY;
			const yValue = scrollY * factor;
			this.#parallaxBackground.style.backgroundPosition = `center ${yValue}px`;
		});
	}

	public getRootElement(): HTMLDivElement {
		return this.#parallaxContainer;
	}
}