import {
	Education,
	isSelfDirectedCourse,
	isUniversityDegree
} from './index.types';

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

		for (const edu of educationalBackgrounds) {
			if (isUniversityDegree(edu)) {
				console.log('this is university degree');
			} else if (isSelfDirectedCourse(edu)) {
				console.log('this is self directed course');
			}
			this.#container.appendChild(this.createEducationExpEl(edu))
		}

		this.#portfolioSection.classList.add('portfolio-section');
		this.#sectionName.classList.add('section-text-heading');
	}

	private createEducationExpEl(educationalBackground: Education): HTMLDivElement {
		const { name, fieldOfStudy, startDate, endDate, description } = educationalBackground;
		const educationExpEl = document.createElement('div');
		const nameEl = document.createElement('h2');
		const educationTitleEl = document.createElement('span');
		const degreeEl = document.createElement('h2');
		const dateEl = document.createElement('h3');
		const subjectEl = document.createElement('h4');
		const descriptionEl = document.createElement('p')

		if ('degree' in educationalBackground) {
			degreeEl.textContent = ` (${educationalBackground.degree})`;
		}
		nameEl.textContent = name;
		dateEl.textContent = `${startDate} ${!endDate ? '' : '- ' + endDate}`;
		subjectEl.textContent = fieldOfStudy;
		descriptionEl.textContent = description;

		educationTitleEl.appendChild(nameEl);
		educationTitleEl.appendChild(degreeEl);
		educationExpEl.appendChild(dateEl);
		educationExpEl.appendChild(educationTitleEl);
		educationExpEl.appendChild(subjectEl);
		educationExpEl.appendChild(descriptionEl);

		educationExpEl.classList.add(
			'bg-midnight-100',
			'mx-12',
			'mb-6',
			'px-2',
			'pt-2',
			'pb-4'
		);
		educationTitleEl.classList.add(
			'inline-flex',
			'justify-center',
			'text-lg',
			'gap-2'
		)
		nameEl.classList.add(
			'font-semibold',
		)
		degreeEl.classList.add(
			'text-frostedmint-900'
		)
		dateEl.classList.add(
			'text-sm'
		);

		return educationExpEl;
	}

	public getElement(): HTMLElement {
		return this.#portfolioSection;
	}
}