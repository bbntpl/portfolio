import {
	Skill,
	SkillCategories,
	SkillLevelsValues,
	SkillLevels,
	SkillCategoriesKeys,
	SkillCategoriesValues
} from './index.types';

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
		this.#rootContainer = document.createElement('section');
		this.#sectionHeading = document.createElement('h1');
		this.#sectionHeading.id = 'skills';
		this.#sectionHeading.textContent = 'Skills';
		this.#contentContainer = document.createElement('div');
		this.#skillCategories = document.createElement('div');

		this.#rootContainer.appendChild(this.#sectionHeading);
		this.#rootContainer.appendChild(this.#contentContainer);
		this.#contentContainer.appendChild(
			this.createSkillLevelLegend(skillLevels.map(sl => sl.value))
		)
		this.#contentContainer.appendChild(this.#skillCategories);

		for (const skillCategory of skillCategories) {
			const filteredSkills = skills.filter(skill => {
				return skill.category === skillCategory.key;
			})
				.sort((a, b) => { // sort by experience
					const bLevelIndex = Number(skillLevels.find(sl => sl.value === b.level).key);
					const aLevelIndex = Number(skillLevels.find(sl => sl.value === a.level).key);

					return bLevelIndex - aLevelIndex;
				});

			this.#skillCategories.appendChild(this.createSkillCategory(filteredSkills));
		}

		this.#rootContainer.classList.add('portfolio-section');
		this.#sectionHeading.classList.add(
			'section-text-heading',
			'viewport-element-transition'
		);
		this.#contentContainer.classList.add(
			'font-sans',
			'flex',
			'flex-col',
		)
	}

	private createSkillLevelLegend(skillLevels: Array<SkillLevelsValues>): HTMLDivElement {
		const legend = document.createElement('div');
		legend.classList.add(
			'flex',
			'flex-row',
			'flex-wrap',
			'gap-8',
			'justify-center',
			'select-none',
			'mb-12',
			'px-6'
		)

		for (let i = 0; i < skillLevels.length; i++) {
			const legendItem = document.createElement('span');
			const colorLevel = document.createElement('div');
			const skillLevel = document.createElement('p');
			skillLevel.textContent = skillLevels[i];
			const textColor = `text-${skillLevelColors[i]}`;
			const bgColor = `bg-${skillLevelColors[i]}`;

			legendItem.appendChild(colorLevel);
			legendItem.appendChild(skillLevel);
			legend.appendChild(legendItem);

			legendItem.classList.add(
				'inline-flex',
				'items-center',
				'gap-3',
				'viewport-element-transition'
			)
			colorLevel.classList.add(
				bgColor,
				'w-4',
				'h-4'
			)
			skillLevel.classList.add(
				textColor
			)
		}

		return legend;
	}

	private createSkillCategory(skillsByCategory: Array<Skill>): HTMLDivElement {
		const skillCategoryContainer = document.createElement('div');
		const skillCategoryText = document.createElement('h2');
		skillCategoryText.textContent = SkillCategories[skillsByCategory[0]?.category] || '';
		const skillList = document.createElement('div');

		skillCategoryContainer.appendChild(skillCategoryText);
		skillCategoryContainer.appendChild(skillList);

		skillCategoryContainer.classList.add(
			'mb-6',
			'pl-8',
			'md:pl-12',
			'lg:pl-12',
			'xl:pl-12',
			'2xl:pl-12',
		)
		skillCategoryText.classList.add(
			'mb-4',
			'text-bluemine-200',
			'text-xl',
			'viewport-element-transition'
		)
		skillList.classList.add(
			'flex',
			'flex-row',
			'flex-wrap',
			'ml-12',
			'md:ml-18',
			'lg:ml-24',
			'gap-4',
			'ml-4'
		)

		for (let i = 0; i < skillsByCategory.length; i++) {
			const skill = skillsByCategory[i];
			const skillEl = document.createElement('div');
			const skillText = document.createElement('p');
			skillText.textContent = skill.name;

			// Color and skill level are associated by their indexes
			// E.g. colors[0] -> skillLevel[0] and so on...
			const colorIndex = skillLevels.findIndex(l => l.value === skill.level);
			const color = skillLevelColors[colorIndex];
			const textColor = `text-${color}`;
			const borderColor = `border-${color}`;
			const bgColor = `bg-${color}`;

			// Skill elements are to apply their own tier-esque minimal styles based on experience level
			const skillLevelTierStylings = colorIndex === skillLevels.length - 1
				? [borderColor, bgColor]
				: [borderColor];
			const skillLevelText = colorIndex === skillLevels.length - 1 ? 'text-midnight' : textColor;

			skillEl.classList.add(
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
			)

			skillText.classList.add(
				skillLevelText,
				'font-semibold'
			)

			skillEl.appendChild(skillText);
			skillList.appendChild(skillEl);
		}

		return skillCategoryContainer;
	}

	public getRootElement(): HTMLElement {
		return this.#rootContainer;
	}
}