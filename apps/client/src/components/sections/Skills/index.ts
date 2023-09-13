import {
	Skill,
	SkillCategories,
	SkillLevelsValues,
	SkillLevels,
	SkillCategoriesKeys,
	SkillCategoriesValues
} from './index.types';

import createElement from '../../../helpers/create-element';
import createElementWithText from '../../../helpers/create-text';

interface SkillsInstanceArgs {
	skills: Array<Skill>
}

const skillLevelColors: Array<string> = [
	'bluemine-100',
	'bluemine-400',
	'downy-500',
	'frostedmint-source',
	'bluemine-source',
];

const skillCategories: { key: SkillCategoriesKeys, value: SkillCategoriesValues }[]
	= Object.keys(SkillCategories).map(key => ({
		key: key as SkillCategoriesKeys,
		value: SkillCategories[key as keyof typeof SkillCategories] as SkillCategoriesValues
	}));

const skillLevels: { key: keyof typeof SkillLevels, value: SkillLevelsValues }[]
	= Object.keys(SkillLevels).map(key => ({
		key: key as unknown as keyof typeof SkillLevels,
		value: SkillLevels[key as unknown as keyof typeof SkillLevels] as SkillLevelsValues
	}))

export default class SkillsSection {
	#rootContainer: HTMLElement;
	#sectionHeading: HTMLHeadingElement;
	#contentContainer: HTMLDivElement;
	#skillCategories: HTMLDivElement;

	constructor({ skills }: SkillsInstanceArgs) {
		this.#skillCategories = createElement('div');

		this.#sectionHeading = createElementWithText('h1', {
			text: 'Skills',
			class: [
				'section-text-heading',
				'viewport-element-transition'
			]
		});

		this.#contentContainer = createElement('div', {
			attributes: {
				class: ['font-sans', 'flex', 'flex-col',]
			},
			children: [
				this.createSkillLevelLegend(skillLevels.map(sl => sl.value)),
				this.#skillCategories
			]
		});

		this.#rootContainer = createElement('section', {
			attributes: {
				id: 'skills',
				class: ['portfolio-section']
			},
			children: [this.#sectionHeading, this.#contentContainer]
		});


		for (const skillCategory of skillCategories) {
			const filteredSkills = skills.filter(skill => {
				return skill.category === skillCategory.key;
			}).sort((a, b) => { // sort by experience
				const bLevelIndex = Number(skillLevels.find(sl => sl.value === b.level).key);
				const aLevelIndex = Number(skillLevels.find(sl => sl.value === a.level).key);

				return bLevelIndex - aLevelIndex;
			});

			this.#skillCategories.appendChild(this.createSkillCategory(filteredSkills));
		}

	}

	private createSkillLevelLegend(skillLevels: Array<SkillLevelsValues>): HTMLDivElement {
		const legend = createElement('div', {
			attributes: {
				class: [
					'flex',
					'flex-row',
					'flex-wrap',
					'gap-8',
					'justify-center',
					'select-none',
					'mb-12',
					'px-6'
				]
			}
		});

		for (let i = 0; i < skillLevels.length; i++) {
			const textColor = `text-${skillLevelColors[i]}`;
			const bgColor = `bg-${skillLevelColors[i]}`;

			const colorLevel = createElement('div', {
				attributes: {
					class: [bgColor, 'w-4', 'h-4']
				}
			});

			const skillLevel = createElementWithText('p', {
				text: skillLevels[i],
				class: textColor
			});

			const legendItem = createElement('span', {
				attributes: {
					class: [
						'inline-flex',
						'items-center',
						'gap-3',
						'viewport-element-transition'
					]
				},
				children: [colorLevel, skillLevel]
			});
			legend.appendChild(legendItem);
		}

		return legend;
	}

	private createSkillCategory(skillsByCategory: Array<Skill>): HTMLDivElement {
		const skillCategoryText = createElementWithText('h2', {
			text: SkillCategories[skillsByCategory[0]?.category] || '',
			class: [
				'mb-4',
				'text-bluemine-200',
				'text-xl',
				'viewport-element-transition'
			]
		});

		const skillList = createElement('div', {
			attributes: {
				class: [
					'flex',
					'flex-row',
					'flex-wrap',
					'ml-12',
					'md:ml-18',
					'lg:ml-24',
					'gap-4',
					'ml-4'
				]
			}
		});

		const skillCategoryContainer = createElement('div', {
			attributes: {
				class: [
					'mb-6',
					'pl-8',
					'md:pl-12',
					'lg:pl-12',
					'xl:pl-12',
					'2xl:pl-12',
				]
			},
			children: [skillCategoryText, skillList]
		});

		for (let i = 0; i < skillsByCategory.length; i++) {
			const skill = skillsByCategory[i];

			// Color and skill level are associated by their indexes
			// E.g. colors[0] -> skillLevel[0] and so on...
			const colorIndex = skillLevels.findIndex(l => l.value === skill.level);
			const color = skillLevelColors[colorIndex];
			const textColor = `text-${color}`;
			const borderColor = `border-${color}`;
			const bgColor = `bg-${color}`;

			// Skill elements are to apply their own tier-esque minimal styles based on experience level
			const skillLevelTierStylings = colorIndex === 0
				? [borderColor]
				: [borderColor, bgColor]
			const skillLevelText = colorIndex === 0
				? textColor : 'text-midnight';

			const skillText = createElementWithText('p', {
				text: skill.name,
				class: [skillLevelText, 'font-semibold']
			});

			const skillEl = createElement('div', {
				attributes: {
					class: [
						'flex',
						'flex-row',
						'flex-wrap',
						'items-start',
						'px-6',
						'py-2',
						...skillLevelTierStylings,
						'border-2',
						'rounded-md',
						'viewport-element-transition'
					]
				},
				children: [skillText]
			});

			skillList.appendChild(skillEl);
		}

		return skillCategoryContainer;
	}

	public getRootElement = (): HTMLElement => this.#rootContainer;
}