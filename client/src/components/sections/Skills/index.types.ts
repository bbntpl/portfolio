export const SkillCategories = {
	frontend: 'Front-end',
	backend: 'Back-end',
	devtools: 'Dev Tools',
	others: 'Others'
} as const;

export const SkillLevels = {
	0: 'beginner',
	1: 'intermediate',
	2: 'experienced'
} as const;

export type SkillLevelsValues = 'beginner' | 'intermediate' | 'experienced';
export type SkillCategoriesKeys = keyof typeof SkillCategories;
export type SkillCategoriesValues = keyof typeof SkillCategories[keyof typeof SkillCategories];
export interface Skill {
	level: SkillLevelsValues;
	name: string;
	category: SkillCategoriesKeys;
}

export type Skillset = Array<Skill>;