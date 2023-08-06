import { Endpoints } from '@octokit/types';
import 'dotenv/config';

export type ListUserStarredRepos =
	Endpoints['GET /user/starred']['response'];

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
	about: string;
	randomFacts: Array<RandomFact> | null;
}

export interface Skill {
	level: 'beginner' | 'intermediate' | 'experienced';
	name: string;
}

export type SkillSet = Array<Skill>;

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
	skillset: SkillSet;
	educationalBackgrounds: Education[];
	projects: Project[];
}