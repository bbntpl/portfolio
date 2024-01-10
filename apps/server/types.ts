import { Endpoints } from '@octokit/types';
import 'dotenv/config';

export type ListUserStarredRepos =
	Endpoints['GET /user/starred']['response'];

export interface RequestError {
	message: string;
	documentation_url: string;
	(key: string): any | undefined;
}

export function isRequestError(data: any): data is RequestError {
	return 'message' in data && typeof data.message === 'string';
}

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

type SkillLevel = 'beginner' | 'intermediate' | 'experienced';
type SkillCategory = 'frontend' | 'backend' | 'devtools' | 'others';
export interface Skill {
	level: SkillLevel;
	name: string;
	category: SkillCategory;
}

export type Skillset = Array<Skill>;

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

interface Topic {
	name: string;
}

export interface Project {
	id: number,
	title: string;
	url: string;
	homepage: string;
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