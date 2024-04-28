import createElement from '../../helpers/create-element';
import createElementWithText from '../../helpers/create-text';

export default class IntroSection {
	#rootContainer: HTMLElement;
	#welcomeText: HTMLHeadingElement;
	#myNameText: HTMLHeadingElement;
	#identityText: HTMLHeadingElement;

	constructor() {
		this.#welcomeText = createElementWithText('h2', {
			text: 'Kumusta! Hi! Hola! I\'m',
			class: [
				'text-lg',
				'font-bold',
				'text-center',
				'text-downy-100',
				'mb-10',
				'sm:text-lg',
				'md:text-2xl',
				'md:text-3xl',
				'viewport-element-transition'
			]
		});

		this.#myNameText = createElementWithText('h1', {
			text: 'Beaver Bryan Antipolo',
			class: [
				'text-2xl',
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
			]
		});

		this.#identityText = createElementWithText('h2', {
			text: 'Full-stack developer',
			class: [
				'text-base',
				'text-center',
				'text-bluemine-300',
				'sm:text-xl',
				'md:text-2xl',
				'lg:text-3xl',
				'viewport-element-transition'
			]
		});

		this.#rootContainer = createElement('section', {
			attributes: {
				class: [
					'min-h-screen',
					'flex',
					'flex-col',
					'justify-center',
					'pb-24',
					'select-none',
					'font-intro',
					'intro-section'
				]
			},
			children: [
				this.#welcomeText,
				this.#myNameText,
				this.#identityText,
			]
		});
	}

	public getRootElement = (): HTMLElement => this.#rootContainer;
}