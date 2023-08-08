export type TypeResponse<T> = {
	data: T | null;
	ok: boolean;
}

export type State<T> = {
	loading: boolean;
	error: Error | null;
	data: T | null;
};

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
	educationalBackgrounds: Education[];
	projects: Project[];
}