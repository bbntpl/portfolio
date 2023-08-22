import { Sections } from '../../types';
import getIcon from '../icons';

interface ProgressIndicatorConstructorArgs {
	sections: Array<HTMLElement>
}

export default class ProgressIndicator {
	#rootContainer: HTMLDivElement;
	#progress: HTMLDivElement;
	constructor({ sections }: ProgressIndicatorConstructorArgs) {
		this.#rootContainer = document.createElement('div');
		this.#progress = document.createElement('div');

		this.#rootContainer.classList.add(
			'hidden',
			'sm:block',
			'md:block',
			'lg:block',
			'xl:block',
			'2xl:block'
		)
	}

	private hexaIcon(): HTMLDivElement {
		const hexagon = document.createElement('div');

		return hexagon;
	}

	public getElement(): HTMLDivElement {
		return this.#rootContainer;
	}
}
