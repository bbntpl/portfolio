import getIcon from './icons';

export default class LoadingScreen {
	#container: HTMLDivElement;
	#text: HTMLParagraphElement;
	#animatedLogoSrc: string;
	#staticLogoSrc: string;
	#animatedLogoObject: HTMLObjectElement;
	#animatedLogoWrapper: HTMLDivElement;

	constructor() {
		this.#container = document.createElement('div');
		this.#container.className = 'loading-container';
		this.#text = document.createElement('p');
		this.#text.textContent = 'Data minions are spawning...'

		this.#animatedLogoSrc = getIcon({ name: 'Loading' });
		this.#staticLogoSrc = getIcon({ name: 'Error' });

		this.#animatedLogoWrapper = document.createElement('div');

		this.#animatedLogoObject = document.createElement('object');
		this.#animatedLogoObject.setAttribute('type', 'image/svg+xml');
		this.#animatedLogoObject.setAttribute('data', this.#animatedLogoSrc);
		this.#animatedLogoObject.setAttribute('width', '110');
		this.#animatedLogoObject.setAttribute('height', '110');

		// Add the text and image to the container
		this.#animatedLogoWrapper.appendChild(this.#animatedLogoObject);
		this.#container.appendChild(this.#animatedLogoWrapper);
		this.#container.appendChild(this.#text);

		// Add classnames to set styles
		this.#container.classList.add(
			'flex',
			'flex-col',
			'items-center',
			'justify-center',
			'h-screen',
			'bg-midnight'
		);

		this.#text.classList.add('text-lg', 'text-downy-source', 'mb-4', 'sm:ml-4');
	}

	public displayError(errorMessage: string = 'Something went wrong.') {
		this.#text.textContent = `${errorMessage} Try reload.`
		this.#animatedLogoObject.setAttribute('data', this.#staticLogoSrc);
	}

	public getElement(): HTMLDivElement {
		return this.#container;
	}
}