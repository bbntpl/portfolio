import { Education, Profile, Skillset } from './types';

export const educationalBackgrounds: Education[] = [
	{
		school: 'Coastal Carolina Community College',
		degree: 'Associates in Applied Science',
		fieldOfStudy: 'Computer Programming',
		startDate: 'August 15, 2018',
		endDate: 'August 7, 2020',
		description: ''
	}
]

export const aboutMeInfo: Profile = {
	imageUrl: '',
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
		'Will add something later.',
		'Making sure there is an empty line above.'
	],
	randomFacts: null
}

export const mySkillset: Skillset = [
	// Front-end stuff
	{ level: 'experienced', name: 'HTML5', category: 'Front-end' },
	{ level: 'experienced', name: 'CSS/Sass', category: 'Front-end' },
	{ level: 'experienced', name: 'JavaScript', category: 'Front-end' },
	{ level: 'experienced', name: 'React', category: 'Front-end' },
	{ level: 'beginner', name: 'TypeScript', category: 'Front-end' },
	{ level: 'beginner', name: 'Vue.js', category: 'Front-end' },
	// Back-end stuff
	{ level: 'experienced', name: 'Node', category: 'Back-end' },
	{ level: 'intermediate', name: 'Express', category: 'Back-end' },
	{ level: 'intermediate', name: 'MongoDB', category: 'Back-end' },
	// Dev Tools
	{ level: 'beginner', name: 'Cypress', category: 'Dev Tools' },
	{ level: 'intermediate', name: 'Postman', category: 'Dev Tools' },
	{ level: 'experienced', name: 'Git & Github', category: 'Dev Tools' },
	// Others	
	{ level: 'beginner', name: 'Firebase', category: 'Others' },
	{ level: 'beginner', name: 'GraphQL', category: 'Others' },
	{ level: 'beginner', name: 'Figma', category: 'Others' },
	{ level: 'beginner', name: 'Julia', category: 'Others' }
]

