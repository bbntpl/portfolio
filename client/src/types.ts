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
	value: string;
}

export interface Profile {
	imageUrl: string;
	socialMediaLinks: Array<SocialMediaLink> | null;
	// In-between elements (paragraphs) are spacing when displaying on client-side
	about: Array<string>;
	randomFacts: Array<RandomFact> | null;
}

export interface Skill {
	level: 'beginner' | 'intermediate' | 'experienced';
	name: string;
	category: 'Front-end' | 'Back-end' | 'Dev Tools' | 'Others';
}

export type Skillset = Array<Skill>;

export type Sections = 'About' | 'Education' | 'Projects' | 'Skills';

export interface Education {
	school: string;
	degree: string;
	fieldOfStudy: string;
	startDate: string;
	endDate: string;
	description?: string;
}

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
	educationalBackgrounds: Education[];
	projects: Project[];
}