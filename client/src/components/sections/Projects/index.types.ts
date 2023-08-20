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