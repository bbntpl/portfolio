import { Education } from '../../types';

type EducationInstanceArgs = {
	educationalBackgrounds: Array<Education>;
}

export default class EducationalBackgrounds {
	#portfolioSection: HTMLElement;
	#sectionName: HTMLHeadingElement;
	#container: HTMLDivElement;

	constructor({ educationalBackgrounds }: EducationInstanceArgs) {
		this.#portfolioSection = document.createElement('section');
		this.#sectionName = document.createElement('h1');
		this.#sectionName.textContent = 'Educational Background';
		this.#container = document.createElement('div');

		this.#portfolioSection.appendChild(this.#sectionName);
		this.#portfolioSection.appendChild(this.#container);
		for (const instance of educationalBackgrounds) {
			this.#container.appendChild(this.createEducationExpEl(instance))
		}

		this.#portfolioSection.classList.add('portfolio-section');
		this.#sectionName.classList.add('section-text-heading');
	}

	private createEducationExpEl(educationalBackground: Education): HTMLDivElement {
		const educationExpEl = document.createElement('div');
		const nameEl = document.createElement('h2');


		return educationExpEl;
	}

	public getElement(): HTMLElement {
		return this.#portfolioSection;
	}
}