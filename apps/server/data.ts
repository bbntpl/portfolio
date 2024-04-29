import { UniversityDegree, Profile, SelfDirectedCourse, Skillset } from './types';

export const educationalBackgrounds: Array<UniversityDegree | SelfDirectedCourse> = [
	{
		name: 'Coastal Carolina Community College',
		degree: 'Associates in Applied Science',
		fieldOfStudy: 'Computer Programming',
		startDate: 'August 2018',
		endDate: 'August 2020',
		description: 'I learned the following programming languages: C#, C++, Java, SQL, Visual BASIC, COBOL, etc.'
	},
	{
		name: 'The Odin Project',
		fieldOfStudy: 'Full-stack Development',
		startDate: 'January 2022',
		endDate: '2023',
		description: 'The Odin Project guided me towards acquiring full-stack development skills. The course authors equipped learners with valuable tools and best practices for becoming successful full-stack developers. Thanks to the authors of TOP, I\'ve gained proficiency in both front-end/backend development skills listed above and soft skills I have developed myself throughout the process of learning.'
	}, {
		name: 'FullStackOpen',
		fieldOfStudy: 'Full-stack Development',
		startDate: 'March 2023',
	}
]

export const aboutMeInfo: Profile = {
	imageUrl: 'https://imgur.com/tymN6yG.jpg',
	socialMediaLinks: [
		{
			platform: 'Linkedin',
			url: 'https://www.linkedin.com/in/beaver-bryan-a-a54a8620a/'
		},
		{
			platform: 'Github',
			url: 'https://github.com/bbntpl'
		},
		{
			platform: 'Email',
			url: 'mailto:bbantipolo@gmail.com'
		},
	],
	about: [
		'I\'m Beaver Bryan Antipolo, but most of my friends and family call me Beaver. I studied computer programming in college and graduated several years ago. I still enjoy working on programming projects in my free time as a hobby.',
		'Recently, I completed a series of free online courses from The Odin Project, where I gained a thorough understanding of fundamental web dev concepts and developed well-rounded skills necessary to build modern full-stack apps.',
	],
	randomFacts: []
}

export const mySkillset: Skillset = [
	// Front-end stuff
	{ level: 'experienced', name: 'HTML5', category: 'frontend' },
	{ level: 'experienced', name: 'CSS/Sass', category: 'frontend' },
	{ level: 'experienced', name: 'JavaScript', category: 'frontend' },
	{ level: 'experienced', name: 'React', category: 'frontend' },
	{ level: 'intermediate', name: 'TypeScript', category: 'frontend' },
	{ level: 'beginner', name: 'Vue.js', category: 'frontend' },
	{ level: 'beginner', name: 'Design systems', category: 'frontend' },

	// Back-end stuff
	{ level: 'experienced', name: 'Node.js', category: 'backend' },
	{ level: 'intermediate', name: 'Express', category: 'backend' },
	{ level: 'intermediate', name: 'MongoDB', category: 'backend' },
	{ level: 'beginner', name: 'GraphQL Yoga', category: 'backend' },

	// Dev Tools
	{ level: 'beginner', name: 'Cypress', category: 'devtools' },
	{ level: 'intermediate', name: 'Postman', category: 'devtools' },
	{ level: 'intermediate', name: 'Chrome/Firefox Dev Tools', category: 'devtools' },
	{ level: 'experienced', name: 'Git & Github', category: 'devtools' },

	// Others	
	{ level: 'intermediate', name: 'Firebase', category: 'others' },
	{ level: 'intermediate', name: 'Figma', category: 'others' },
	{ level: 'beginner', name: 'GraphQL', category: 'others' },
	{ level: 'beginner', name: 'Auth0', category: 'others' },
	{ level: 'beginner', name: 'Julia', category: 'others' },
	{ level: 'beginner', name: 'Accessibility', category: 'others' },
]

