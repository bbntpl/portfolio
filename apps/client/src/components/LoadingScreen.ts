import appendChildren from '../helpers/append-children';
import createElement from '../helpers/create-element';
import createElementWithText from '../helpers/create-text';

import getIcon from './icons';

export default class LoadingScreen {
	#container: HTMLDivElement;
	#text: HTMLParagraphElement;
	#animatedLogoSrc: string;
	#staticLogoSrc: string;
	#animatedLogoObject: HTMLObjectElement;
	#animatedLogoWrapper: HTMLDivElement;

	constructor() {
		this.#container = createElement('div', {
			attributes: {
				class: [
					'loading-container',
					'flex',
					'flex-col',
					'items-center',
					'justify-center',
					'h-screen',
					'bg-midnight'
				]
			}
		});
		this.#text = createElementWithText('p', {
			text: 'Data minions are spawning...',
			class: [
				'text-lg',
				'text-downy-source',
				'mb-4',
				'sm:ml-4'
			]
		});

		this.#animatedLogoSrc = getIcon({ name: 'Loading' });
		this.#staticLogoSrc = getIcon({ name: 'Error' });

		this.#animatedLogoWrapper = createElement('div');
		this.#animatedLogoObject = createElement('object', {
			attributes: {
				type: 'image/svg+xml',
				data: this.#animatedLogoSrc,
				width: '110',
				height: '110'
			}
		});

		// Add the text and image to the container
		appendChildren(this.#animatedLogoWrapper, [this.#animatedLogoObject]);
		appendChildren(this.#container, [
			this.#animatedLogoWrapper, this.#text
		]);
	}

	public displayError(errorMessage: string = 'Something went wrong.') {
		this.#text.textContent = `${errorMessage}`
		this.#animatedLogoObject.setAttribute('data', this.#staticLogoSrc);
	}

	public getElement = (): HTMLDivElement => this.#container;
}