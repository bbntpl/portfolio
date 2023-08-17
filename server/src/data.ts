import { UniversityDegree, Profile, SelfDirectedCourse, Skillset } from './types';

export const educationalBackgrounds: Array<UniversityDegree | SelfDirectedCourse> = [
	{
		name: 'Coastal Carolina Community College',
		degree: 'Associates in Applied Science',
		fieldOfStudy: 'Computer Programming',
		startDate: 'August 15, 2018',
		endDate: 'August 7, 2020',
	},
	{
		name: 'The Odin Project',
		fieldOfStudy: 'Full-stack Development',
		startDate: 'January 1, 2022',
		endDate: '2023'
	}, {
		name: 'FullStackOpen',
		fieldOfStudy: 'Full-stack Development',
		startDate: 'March 2023',
		endDate: '2023'
	}
]

export const aboutMeInfo: Profile = {
	imageUrl: 'https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/366247222_334221355596635_1691506449379061311_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=be3454&_nc_ohc=wWDAwVN_jmYAX_POZ9w&_nc_ht=scontent-atl3-1.xx&oh=00_AfCf4t5JHmyDe9CqSb47YkWddwaZCYXXzWKBtGcSdkU_-A&oe=64DE3CFC',
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
		'My life\'s purpose revolves around constant improvement, both in myself and in my surroundings. I am dedicated to refining my skills and developing my understanding.',
		'As for my interests and hobbies, it\'s difficult to narrow my interests because I\'m almost interested in everything that can be grasped/comprehend. However, if I have to share my current hobbies: web dev, language acquisition, studying, blogging, and mathematics.'
	],
	randomFacts: [
		{
			label: 'Age',
			value: 22
		},
		{
			label: 'Favorite Music Genre',
			value: 'Jazz Fusion'
		}
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
	// Back-end stuff
	{ level: 'experienced', name: 'Node', category: 'backend' },
	{ level: 'intermediate', name: 'Express', category: 'backend' },
	{ level: 'intermediate', name: 'MongoDB', category: 'backend' },
	// Dev Tools
	{ level: 'beginner', name: 'Cypress', category: 'devtools' },
	{ level: 'intermediate', name: 'Postman', category: 'devtools' },
	{ level: 'experienced', name: 'Git & Github', category: 'devtools' },
	{ level: 'intermediate', name: 'Chrome/Firefox Dev Tools', category: 'devtools' },
	// Others	
	{ level: 'beginner', name: 'Firebase', category: 'others' },
	{ level: 'beginner', name: 'GraphQL', category: 'others' },
	{ level: 'intermediate', name: 'Figma', category: 'others' },
	{ level: 'beginner', name: 'Julia', category: 'others' },
	{ level: 'experienced', name: 'Codepen', category: 'others' },
	{ level: 'intermediate', name: 'VSCodeVim', category: 'others' }
]
