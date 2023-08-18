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
	imageUrl: 'https://lh3.googleusercontent.com/fife/AKsag4NhJust1IqeNdNgxYWx088iGZkS_W85O_p8wQTEnetz3zC6BIbjP-ng2BCyi0K_kSA58AWrQ9EgqykVOHhg0mhl3S8T3Dma2QmafKv5Tvfvqg1X7tLzE27zZjNlS85xfpNQ-THIwKy4wTRj6UNYqx3-RDwS3kPMRiI2E9z1uzR0UViaV7XxgL2w9cCejKK_mTA9I1x6cMS_Oyvi7-MS0b_7WeR7oUVNh6xe_qfN9cr3KoytCOHTy64yA2UGQMinMAGaYqsw8UZt8BpEMLyHgTnqR_1i1I6WTYonj7AMVWTV5EsTrNjvKFcTbpK2oFGLZD1DNb9qJsl4SsZ5o5xHweCMPAIb9-Q6lRDfZkjg2DZnBHdAaCYhZIW4xkhyz94CRDccbmVU9wyTMnkth4QSUE8WG_mosSiyLXtTFrW3Lb7w7L9lj4bb-ClI9g4aSv05dZLrKiCYH2foKqP6bOpfwzI1qjiuE0smH4NUZZlgl8WO4TM3Po1ahkTSg4maK-1x0ztR733iTerN7x5poSvS-mUFKpRgbw3fPm5S0K_MXPI_lU1B20R2gmmKOaaJmQKiduintExIh4XRQ1GQnfFdXibCPb4ByY-MM0blAFqCNV0D0Y4SqhxxAU1RcRukK4_6g8pipBikLm2_4bUuyVDw8sJd8BtMV00hdYZffS4zltcWgbDjK23bmgilkmoQWd5Trj9nEJtAW-oLiPHxoGw_REBjJqhHYaUu1sfW4lZ-hHfFbxLCOqQ7hroPiT5qKvH11g_-5sDM2mkv4YmE4XfbbCKxL0lwyE__I3rkf2KE_n1239Hr6ejbnpUlsv7YD4TrxGGRKiHWc5ZDtmk9Rs3J5bWJFT-b3QfsGruzlQBn824OVT1Kr7QszqRT1bUTIrtCUd0s5xXG7D-WSPZA70izxBEr1pxsfXFAp_Ys63YacFpQinUApDnkVWKtDSqCgAXImaa2pexYnzuiP5tuRme4VZxRZvD6Zr2V1qznsEsB7dWdx7BOi3wRZcfZtsShIUTdSVXPshjTu8Z20SexhedcOU-lsI34UK7ap4lAdfwO8fE3G-HlGkUqLmhJfQwSgJ-7sdrI5WBmZVChhy-Tg9nb9kJQ4xP2Nsgy=w958-h935',
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

