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
export const isUniversityDegree = (x: Education):
	x is UniversityDegree => 'degree' in x;
export const isSelfDirectedCourse = (x: Education):
	x is SelfDirectedCourse => !('degree' in x);