import {
	Education,
	isSelfDirectedCourse,
	isUniversityDegree
} from './index.types';

import createElement from '../../../helpers/create-element';
import createElementWithText from '../../../helpers/create-text';
import appendChildren from '../../../helpers/append-children';

type EducationInstanceArgs = {
	educationalBackgrounds: Array<Education>;
}

const educationCategoryHeaderTextStyles = [
	'text-bluemine-200',
	'uppercase',
	'mt-10',
	'mb-4',
	'text-xl',
	'text-center',
	'viewport-element-transition'
]

export default class EducationSection {
	#rootContainer: HTMLElement;
	#sectionHeading: HTMLHeadingElement;
	#contentContainer: HTMLDivElement;

	#hasUniversityDegree: boolean;
	#hasFinishedSelfDirectedCourse: boolean;

	constructor({ educationalBackgrounds }: EducationInstanceArgs) {
		this.#sectionHeading = createElementWithText('h1', {
			text: 'Educational Background',
			class: [
				'section-text-heading',
				'viewport-element-transition'
			]
		})

		this.#contentContainer = createElement('div', {
			attributes: {
				class: ['flex', 'flex-col', 'items-center']
			}
		});

		this.#rootContainer = createElement('section', {
			attributes: {
				id: 'education',
				class: ['portfolio-section']
			},
			children: [this.#sectionHeading, this.#contentContainer]
		});

		this.#hasUniversityDegree = false;
		this.#hasFinishedSelfDirectedCourse = false;

		for (const education of educationalBackgrounds) {
			if (isUniversityDegree(education) && !this.#hasUniversityDegree) {
				const universityHeaderText = createElementWithText('h2', {
					text: 'Universities/Colleges',
					class: educationCategoryHeaderTextStyles
				});

				appendChildren(this.#contentContainer, [universityHeaderText]);

				if (!this.#hasUniversityDegree) {
					this.#hasUniversityDegree = true;
				}
			} else if (isSelfDirectedCourse(education) && !this.#hasFinishedSelfDirectedCourse) {
				const selfDirectedCourseHeaderText = createElementWithText('h2', {
					text: 'Self-Directed Courses',
					class: educationCategoryHeaderTextStyles
				});

				appendChildren(this.#contentContainer, [selfDirectedCourseHeaderText]);

				if (!this.#hasFinishedSelfDirectedCourse) {
					this.#hasFinishedSelfDirectedCourse = true;
				}
			}

			appendChildren(this.#contentContainer, [this.createEducationExpEl(education)]);
		}

	}

	private createEducationExpEl(educationalBackground: Education): HTMLDivElement {
		const { name, fieldOfStudy, startDate, endDate, description } = educationalBackground;
		const educationTitleEl = createElementWithText('span', {
			text: name,
			class: [
				'inline-flex',
				'flex-wrap',
				'justify-start',
				'text-lg',
				'gap-x-2',
				'font-semibold',
				'mb-4'
			]
		});
		const degreeEl = createElementWithText('p', {
			class: ['text-frostedmint-900', 'font-normal']
		});
		const dateEl = createElementWithText('h3', {
			text: `${startDate} ${!endDate ? '' : '- ' + endDate}`,
			class: ['text-sm']
		});

		const subjectEl = createElementWithText('h4', {
			text: fieldOfStudy,

		});
		const secondaryContent = createElement('div', {
			attributes: {
				class: [
					'flex',
					'flex-col',
					'md:flex-row',
					'lg:flex-row',
					'xl:flex-row',
					'2xl:flex-row',
				]
			},
			children: [subjectEl]
		});
		const descriptionEl = createElementWithText('p', {
			text: description,
			class: [
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
			]
		})

		const educationExpEl = createElement('div', {
			attributes: {
				class: [
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
					'w-full',
					'viewport-element-transition'
				]
			},
			children: [dateEl, educationTitleEl, secondaryContent]
		});

		if ('degree' in educationalBackground) {
			appendChildren(educationTitleEl, [degreeEl]);
			degreeEl.textContent = ` (${educationalBackground.degree})`;
		}

		if (description) {
			appendChildren(secondaryContent, [descriptionEl]);
		}

		return educationExpEl;
	}

	public getRootElement = (): HTMLElement => this.#rootContainer;
}