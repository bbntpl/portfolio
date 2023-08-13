export default class Intro {
	#introSection: HTMLElement;
	#welcomeText: HTMLDivElement;
	#nameText: HTMLDivElement;
	#identityText: HTMLDivElement;
	constructor() {
		this.#introSection = document.createElement('div');
		this.#welcomeText = document.createElement('div');
		this.#nameText = document.createElement('div');
		this.#identityText = document.createElement('div');

		this.#welcomeText.textContent = 'Kumusta! Hi! Hola! I\'m';
		this.#nameText.textContent = 'Beaver Bryan Antipolo';
		this.#identityText.textContent = 'A lifelong learner and full-stack developer';

		this.#introSection.appendChild(this.#welcomeText);
		this.#introSection.appendChild(this.#nameText);
		this.#introSection.appendChild(this.#identityText);

		// Add classnames to apply styles
		this.#introSection.classList.add(
			'min-h-screen',
			'flex',
			'flex-col',
			'justify-center',
			'pb-24',
			'select-none'
		)
		this.#welcomeText.classList.add(
			'text-lg',
			'font-bold',
			'text-center',
			'text-downy-200',
			'mb-10',
			'sm:text-2xl',
			'md:text-3xl',
		);
		this.#nameText.classList.add('text-2xl',
			'font-semibold',
			'text-center',
			'text-bluemine-300',
			'mb-7',
			'text-4xl',
			'sm:text-5xl',
			'md:text-5xl',
			'lg:text-6xl',
			'xl:text-6xl',
			'2xl:text-6xl'
		);
		this.#identityText.classList.add(
			'text-base',
			'text-center',
			'text-bluemine-400',
			'sm:text-lg',
			'md:text-xl',
			'lg:text-2xl'
		);

	}

	public getElement(): HTMLElement {
		return this.#introSection;
	}
}