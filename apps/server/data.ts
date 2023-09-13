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
	imageUrl: 'https://drive.google.com/uc?export=view&id=1qIuDMS4B9gtw9tLBuosfH2eHjOJpBLAO',
	socialMediaLinks: [
		{
			platform: 'Facebook',
			url: 'https://www.facebook.com/profile.php?id=100070263205172'
		},
		{
			platform: 'Github',
			url: 'https://github.com/bvrbryn445'
		},
		{
			platform: 'Instagram',
			url: 'https://instagram.com/leisebegeistert'
		},
		{
			platform: 'Linkedin',
			url: 'https://www.linkedin.com/in/b-b-a-a54a8620a/'
		},
		{
			platform: 'Twitter',
			url: 'https://twitter.com/qesabito'
		}
	],
	about: [
		'The first website I have created ever was for my high school senior project on deforestation. I used only HTML/CSS written in Notepad++ and hosted the website through GoDaddy. A few years later, around 2019, I wrote my first real code (that is not HTML & CSS) in C#. Eventually, I stumbled upon learning to develop websites again in 2022 using The Odin Project courses.',
		'My life\'s purpose revolves around constant improvement, both in myself and in my surroundings (if possible). I generally enjoy refining my skills and enriching my comprehension of things.',
		'As for my interests, it\'s difficult to narrow down my interests because I\'m almost interested in everything that can be grasped/comprehend. And about my hobbies, my current ones: programming, learning languages,studying, reading books and writing drafts for blogging purposes.',
		'During Q3 and Q4 of 2023, I\'ve been focused on developing my personal blogging site, a google calendar clone, an online therapy appointment system, and a Facebook-inspired social media clone.'
	],
	randomFacts: [
		{
			label: 'Age',
			value: 23
		},
		{
			label: 'Favorite Music Genre',
			value: 'Jazz Fusion/High-Energy Jazz'
		},
	]
}

export const mySkillset: Skillset = [
	// Front-end stuff
	{ level: 'experienced', name: 'HTML5', category: 'frontend' },
	{ level: 'experienced', name: 'CSS/Sass', category: 'frontend' },
	{ level: 'experienced', name: 'JavaScript', category: 'frontend' },
	{ level: 'experienced', name: 'React', category: 'frontend' },
	{ level: 'beginner', name: 'TypeScript', category: 'frontend' },
	{ level: 'beginner', name: 'Vue.js', category: 'frontend' },
	{ level: 'intermediate', name: 'Redux', category: 'frontend' },
	// Back-end stuff
	{ level: 'experienced', name: 'Node.js', category: 'backend' },
	{ level: 'intermediate', name: 'Express', category: 'backend' },
	{ level: 'intermediate', name: 'MongoDB', category: 'backend' },
	// Dev Tools
	{ level: 'beginner', name: 'Cypress', category: 'devtools' },
	{ level: 'intermediate', name: 'Postman', category: 'devtools' },
	{ level: 'experienced', name: 'Git & Github', category: 'devtools' },
	{ level: 'intermediate', name: 'Chrome/Firefox Dev Tools', category: 'devtools' },
	// Others	
	{ level: 'intermediate', name: 'Firebase', category: 'others' },
	{ level: 'beginner', name: 'GraphQL', category: 'others' },
	{ level: 'intermediate', name: 'Webpack', category: 'others' },
	{ level: 'intermediate', name: 'Figma', category: 'others' },
	{ level: 'beginner', name: 'Julia', category: 'others' },
	{ level: 'beginner', name: 'Ruby', category: 'others' },
	{ level: 'intermediate', name: 'VSCodeVim', category: 'others' }
]

