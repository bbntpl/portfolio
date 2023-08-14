import { Sections } from '../../types';
import getIcon from '../icons';

export default class ProgressIndicator {
	#container: HTMLDivElement;
	constructor() {
		this.#container = document.createElement('div');
	}

	public getElement(): HTMLDivElement {
		return this.#container;
	}
}
