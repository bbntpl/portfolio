import {
	Education,
	isSelfDirectedCourse,
	isUniversityDegree
} from './index.types';

type EducationInstanceArgs = {
	educationalBackgrounds: Array<Education>;
}

const educationCategoryHeaderTextStyles = [
	'text-bluemine-200',
	'uppercase',
	'mt-10',
	'mb-4',
	'text-xl',
	'text-center'
]

export default class EducationalBackgrounds {
	#portfolioSection: HTMLElement;
	#sectionName: HTMLHeadingElement;
	#container: HTMLDivElement;

	#hasUniversityDegree: boolean;
	#hasFinishedSelfDirectedCourse: boolean;
	constructor({ educationalBackgrounds }: EducationInstanceArgs) {
		this.#portfolioSection = document.createElement('section');
		this.#sectionName = document.createElement('h1');
		this.#sectionName.textContent = 'Educational Background';
		this.#container = document.createElement('div');

		this.#portfolioSection.appendChild(this.#sectionName);
		this.#portfolioSection.appendChild(this.#container);

		this.#hasUniversityDegree = false;
		this.#hasFinishedSelfDirectedCourse = false;

		for (const education of educationalBackgrounds) {
			if (isUniversityDegree(education) && !this.#hasUniversityDegree) {
				const universityHeaderText = document.createElement('h2');
				universityHeaderText.textContent = 'Universities/Colleges';
				this.#container.appendChild(universityHeaderText);

				universityHeaderText.classList.add(...educationCategoryHeaderTextStyles)
				this.#hasUniversityDegree = true;
			} else if (isSelfDirectedCourse(education) && !this.#hasFinishedSelfDirectedCourse) {
				const selfDirectedCourseHeaderText = document.createElement('h2');
				selfDirectedCourseHeaderText.textContent = 'Self-Directed Courses';
				this.#container.appendChild(selfDirectedCourseHeaderText);

				selfDirectedCourseHeaderText.classList.add(...educationCategoryHeaderTextStyles);
				this.#hasFinishedSelfDirectedCourse = true;
			}

			this.#container.appendChild(this.createEducationExpEl(education))
		}

		this.#portfolioSection.classList.add('portfolio-section');
		this.#sectionName.classList.add('section-text-heading');
		this.#container.classList.add(
			'flex',
			'flex-col',
			'items-center'
		)
	}

	private createEducationExpEl(educationalBackground: Education): HTMLDivElement {
		const { name, fieldOfStudy, startDate, endDate, description } = educationalBackground;
		const educationExpEl = document.createElement('div');
		const educationTitleEl = document.createElement('span');
		const degreeEl = document.createElement('p');
		const dateEl = document.createElement('h3');

		const secondaryContent = document.createElement('div');
		const subjectEl = document.createElement('h4');
		const descriptionEl = document.createElement('p')


		educationTitleEl.textContent = name;
		dateEl.textContent = `${startDate} ${!endDate ? '' : '- ' + endDate}`;
		subjectEl.textContent = fieldOfStudy;
		descriptionEl.textContent = description;

		if ('degree' in educationalBackground) {
			educationTitleEl.appendChild(degreeEl);
			degreeEl.textContent = ` (${educationalBackground.degree})`;
		}
		educationExpEl.appendChild(dateEl);
		educationExpEl.appendChild(educationTitleEl);
		educationExpEl.appendChild(secondaryContent);
		secondaryContent.appendChild(subjectEl);
		if (description) {
			secondaryContent.appendChild(descriptionEl);
		}

		educationExpEl.classList.add(
			'bg-midnight-100',
			'md:mx-6',
			'lg:mx-12',
			'xl:mx-12',
			'2xl:mx-12',
			'mb-6',
			'px-4',
			'pt-2',
			'pb-4',
			'max-w-5xl',
			'w-full'
		);
		educationTitleEl.classList.add(
			'inline-flex',
			'flex-wrap',
			'justify-start',
			'text-lg',
			'gap-x-2',
			'font-semibold',
			'mb-4'
		)
		degreeEl.classList.add(
			'text-frostedmint-900',
			'font-normal'
		)
		dateEl.classList.add(
			'text-sm'
		);
		secondaryContent.classList.add(
			'flex',
			'flex-col',
			'md:flex-row',
			'lg:flex-row',
			'xl:flex-row',
			'2xl:flex-row',
		);
		descriptionEl.classList.add(
			'text-sm',
			'border-frostedmint-900',
			'text-frostedmint-900',
			'pl-0',
			'md:pl-4',
			'pb-6',
			'ml-0',
			'md:ml-4',
			'pt-2',
			'md:pt-0',
			'border-t',
			'md:border-t-0',
			'md:border-l',
		)

		return educationExpEl;
	}

	public getElement(): HTMLElement {
		return this.#portfolioSection;
	}
}