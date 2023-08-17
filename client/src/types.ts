export type TypeResponse<T> = {
	data: T | null;
	ok: boolean;
}

export type State<T> = {
	loading: boolean;
	error: Error | null;
	data: T | null;
};

interface SocialMediaLink {
	platform: string;
	url: string;
}

interface RandomFact {
	label: string;
	value: string | number;
}

export interface Profile {
	imageUrl: string;
	socialMediaLinks: Array<SocialMediaLink> | null;
	// In-between elements (paragraphs) are spacing when displaying on client-side
	about: Array<string>;
	randomFacts: Array<RandomFact> | null;
}

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

export type Sections = 'About' | 'Education' | 'Projects' | 'Skills';

export interface SelfDirectedCourse {
	name: string;
	fieldOfStudy: string;
	startDate: string;
	endDate?: string;
	description?: string;
}

export interface UniversityDegree extends SelfDirectedCourse {
	degree: string;
}

export type Education = UniversityDegree | SelfDirectedCourse;

interface Topic {
	name: string;
}

export interface Project {
	id: number,
	title: string;
	url: string;
	imageUrl: string;
	description: string;
	createdAt: string;
	topics: Topic[];
	updatedAt: string;
}

export interface Portfolio {
	profile: Profile;
	skillset: Skillset;
	educationalBackgrounds: Array<UniversityDegree | SelfDirectedCourse>;
	projects: Array<Project>;
}