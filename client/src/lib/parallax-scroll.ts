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
			const scrolltotop = document.scrollingElement.scrollTop;
			const xValue = 'center';
			const factor = 0.2;
			const yValue = scrolltotop * factor;
			this.#parallaxBackground.style.backgroundPosition = `${xValue} ${yValue}px`;
		});
	}

	public getRootElement(): HTMLDivElement {
		return this.#parallaxContainer;
	}
}