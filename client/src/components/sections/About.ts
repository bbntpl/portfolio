import { Profile } from '../../types';

export default class About {
	#container: HTMLElement;
	constructor({
		imageUrl,
		about,
		socialMediaLinks,
		randomFacts
	}: Profile) {
		this.#container = document.createElement('section');

	}

	public getElement(): HTMLElement {
		return this.#container;
	}
}