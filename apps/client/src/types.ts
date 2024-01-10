import { Profile } from './components/sections/About/index.types';
import { Education } from './components/sections/Education/index.types';
import { Project } from './components/sections/Projects/index.types';
import { Skillset } from './components/sections/Skills/index.types';

export type TypeResponse<T> = {
	data: T | null;
	message: string;
	ok: boolean;
}

export type State<T> = {
	loading: boolean;
	error: Error | null;
	data: T | null;
};

export type Sections = 'About' | 'Education' | 'Projects' | 'Skills';

export interface Portfolio {
	profile: Profile;
	skillset: Skillset;
	educationalBackgrounds: Array<Education>;
	projects: Array<Project>;
}