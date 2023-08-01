export interface Education {
	school: string;
	degree: string;
	fieldOfStudy: string;
	startDate: string;
	endDate: string;
	description: string;
}

export type TypeResponse<T> = {
	data: T | null;
	ok: boolean;
}

export type State<T> = {
	loading: boolean;
	error: Error | null;
	data: T | null;
};

interface Topic {
	name: string;
}

export interface Project {
	title: string;
	imageUrl: string;
	description: string;
	date: string;
	topics: Topic[];
	updatedAt: string;
}

export interface Portfolio {
	educations: Education[];
	projects: Project[];
}