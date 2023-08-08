import getIcon from './icons';

export default class LoadingScreen {
	container: HTMLDivElement;
	text: HTMLParagraphElement;
	image: HTMLImageElement;

	constructor() {
		this.container = document.createElement('div');
		this.container.className = 'loading-container';
		this.text = document.createElement('p');
		this.text.textContent = 'Data minions are spawning...'
		this.image = new Image();
		this.image.src = getIcon({ name: 'Loading' });

		// Set SVG image attrs 
		this.image.setAttribute('width', '110');
		this.image.setAttribute('height', '110');

		this.container.classList.add(
			'flex',
			'flex-col',
			'items-center',
			'justify-center',
			'h-screen',
		);

		this.text.classList.add('text-lg', 'text-gray-600', 'mb-4', 'sm:ml-4');

		// Add the text and image to the container
		this.container.appendChild(this.image);
		this.container.appendChild(this.text);
	}

	public displayError(errorMessage: string = 'Something went wrong.') {
		this.text.textContent = `${errorMessage} Try reload.`
		this.image.src = getIcon({ name: 'Error' });
	}
}