export default class IntroSection {
	#rootContainer: HTMLElement;
	#welcomeText: HTMLHeadingElement;
	#nameText: HTMLHeadingElement;
	#identityText: HTMLHeadingElement;
	constructor() {
		this.#rootContainer = document.createElement('section');
		this.#welcomeText = document.createElement('h2');
		this.#nameText = document.createElement('h1');
		this.#identityText = document.createElement('h2');

		this.#welcomeText.textContent = 'Kumusta! Hi! Hola! I\'m';
		this.#nameText.textContent = 'Beaver Bryan Antipolo';
		this.#identityText.textContent = 'A lifelong learner and full-stack developer';

		this.#rootContainer.appendChild(this.#welcomeText);
		this.#rootContainer.appendChild(this.#nameText);
		this.#rootContainer.appendChild(this.#identityText);

		// Add classnames to apply styles
		this.#rootContainer.classList.add(
			'min-h-screen',
			'flex',
			'flex-col',
			'justify-center',
			'pb-24',
			'select-none',
			'font-intro',
			'intro-section'
		)
		this.#welcomeText.classList.add(
			'text-lg',
			'font-bold',
			'text-center',
			'text-downy-100',
			'mb-10',
			'sm:text-lg',
			'md:text-2xl',
			'md:text-3xl',
			'viewport-element-transition'
		);
		this.#nameText.classList.add('text-2xl',
			'font-semibold',
			'text-center',
			'text-bluemine-200',
			'mb-7',
			'text-4xl',
			'sm:text-5xl',
			'md:text-5xl',
			'lg:text-6xl',
			'xl:text-6xl',
			'2xl:text-6xl',
			'viewport-element-transition'
		);
		this.#identityText.classList.add(
			'text-base',
			'text-center',
			'text-bluemine-300',
			'sm:text-xl',
			'md:text-2xl',
			'lg:text-3xl',
			'viewport-element-transition'
		);
	}

	public getRootElement(): HTMLElement {
		return this.#rootContainer;
	}
}