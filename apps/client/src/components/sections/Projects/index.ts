import { Project } from './index.types';

import createElement from '../../../helpers/create-element';
import createElementWithText from '../../../helpers/create-text';

type ProjectsInstanceArgs = {
	projects: Array<Project>
}

const absoluteWrapperStyles: Array<string> = [
	'absolute',
	'h-full',
	'bg-transparent'
];

const linkStyles: Array<string> = [
	'underline',
	'hover:text-frostedmint-source'
]

const projectListLinkWrapperStyles = [
	'bg-bluemine-300',
	'text-sm',
	'text-semibold',
	'text-midnight',
	'hover:bg-bluemine-200',
	'py-2',
	'my-2',
	'viewport-element-transition'
]

const projectListLinkStyles = [
	'px-4',
	'py-2',
	'top-0',
	'bottom-0'
]

export default class ProjectsSection {
	#rootContainer: HTMLElement;
	#sectionHeading: HTMLHeadingElement;
	#contentContainer: HTMLDivElement;
	#projectGrids: HTMLDivElement;

	#mainProjectsHeading: HTMLHeadingElement;
	#secondaryProjectsLinkWrapper: HTMLDivElement;
	#secondaryProjectsLink: HTMLAnchorElement;
	#otherProjectsLinkWrapper: HTMLDivElement;
	#otherProjectsLink: HTMLAnchorElement;

	constructor({ projects }: ProjectsInstanceArgs) {
		this.#otherProjectsLink = createElement('a', {
			attributes: {
				href: 'https://github.com/stars/bvrbryn445/lists/other-webdev-projects',
				target: '_blank',
				class: projectListLinkStyles
			},
			textContent: 'View my other small website projects'
		});

		this.#secondaryProjectsLink = createElement('a', {
			attributes: {
				href: 'https://github.com/stars/bvrbryn445/lists/my-webdev-projects-2',
				target: '_blank',
				class: projectListLinkStyles
			},
			textContent: 'View secondary website projects'
		});

		this.#projectGrids = createElement('div', {
			attributes: {
				class: [
					'flex',
					'flex-row',
					'flex-wrap',
					'my-12',
					'justify-center',
				]
			}
		});

		this.#mainProjectsHeading = createElement('h2', {
			attributes: {
				class: [
					'text-bluemine-200',
					'uppercase',
					'text-xl',
					'text-center',
					'viewport-element-transition',
				]
			},
			textContent: 'Developer\'s picks'
		})

		this.#secondaryProjectsLinkWrapper = createElement('div', {
			attributes: {
				class: projectListLinkWrapperStyles
			},
			children: [this.#secondaryProjectsLink]
		});

		this.#otherProjectsLinkWrapper = createElement('div', {
			attributes: {
				class: projectListLinkWrapperStyles
			},
			children: [this.#otherProjectsLink]
		});

		this.#sectionHeading = createElementWithText('h1', {
			text: 'Projects',
			class: ['section-text-heading', 'viewport-element-transition']
		});

		this.#contentContainer = createElement('div', {
			attributes: {
				class: [
					'flex',
					'flex-col',
					'items-center',
					'font-sans'
				]
			},
			children: [
				this.#mainProjectsHeading,
				this.#projectGrids,
				this.#secondaryProjectsLinkWrapper,
				this.#otherProjectsLinkWrapper
			]
		});

		this.#rootContainer = createElement('section', {
			attributes: {
				id: 'projects',
				class: ['portfolio-section']
			},
			children: [this.#sectionHeading, this.#contentContainer]
		});

		for (const project of projects) {
			this.#projectGrids.appendChild(this.createProjectGridItem(project))
		}
	}

	private createProjectGridItem(project: Project): HTMLDivElement {
		const [projectTitle, projectDesc, projectImage]
			= project.description.split('|');

		const bgImage: HTMLImageElement = new Image();
		if (projectImage) {
			bgImage.src = projectImage;
		}

		const imgPosByNaturalDimensions
			= bgImage.naturalHeight > bgImage.naturalWidth
				? 'object-portrait' : 'object-cover';

		bgImage.classList.add(
			...absoluteWrapperStyles,
			'z-15',
			imgPosByNaturalDimensions,
			'bg-top',
			'transition',
			'scale-150',
			'group-hover:scale-100',
			'transform-all'
		);

		const repoLink = createElement('a', {
			attributes: {
				href: project.url,
				target: '_blank',
				class: linkStyles
			},
			textContent: 'visit repo'
		});

		const websiteLink = createElement('a', {
			attributes: {
				class: linkStyles
			}
		});

		const repoLinkWrapper = createElement('div', {
			children: [repoLink]
		});

		const websiteLinkWrapper = createElement('div', {
			children: [websiteLink]
		});

		const projectLinks = createElement('div', {
			attributes: {
				class: ['flex', 'content-center', 'gap-x-4']
			},
			children: [repoLinkWrapper]
		});

		const descriptionEl = createElementWithText('p', {
			class: ['text-sm', 'text-justify']
		});

		const topicContainer = createElement('div', {
			attributes: {
				class: [
					'flex',
					'flex-row',
					'flex-wrap',
					'gap-y-2',
					'gap-x-4',
					'justify-start'
				]
			}
		});

		const titleEl = createElementWithText('h3', {
			text: projectTitle,
			class: [
				'text-2xl',
				'text-bold',
				'uppercase',
				'text-center',
				'text-frostedmint-source',
				'group-hover:-translate-y-30',
				'transform-all',
			]
		});

		const secondaryContent = createElement('div', {
			attributes: {
				class: [
					'flex',
					'flex-col',
					'justify-center',
					'items-center',
					'gap-6',
					'hidden',
					'opacity-0',
					'opacity-100',
					'group-hover:flex',
					'group-hover:opacity-100',
					'group-hover:scale-100',
					'transform-all',
				]
			},
			children: [projectLinks, descriptionEl, topicContainer]
		});

		const projectInfoWrapper = createElement('div', {
			attributes: {
				tabindex: '0',
				class: [
					...absoluteWrapperStyles,
					'group',
					'z-20',
					'w-full',
					'flex',
					'flex-col',
					'justify-center',
					'items-center',
					'text-frostedmint-50',
					'bg-midnight',
					'hover:bg-opacity-60',
					'bg-opacity-90',
					'y-translate-80',
					'px-16',
					'py-8',
					'gap-y-2',
					'duration-300',
					'focus:border-bluemine-200'
				]
			},
			children: [titleEl, secondaryContent]
		});

		const rootEl = createElement('div', {
			attributes: {
				class: [
					'group',
					'flex',
					'items-center',
					'justify-center',
					'w-96',
					'h-96',
					'viewport-element-transition',
					'overflow-hidden',
				]
			},
			children: [bgImage, projectInfoWrapper]
		});

		if (project.homepage) {
			websiteLink.textContent = 'access live demo';
			websiteLink.href = project.homepage;
			websiteLink.target = '_blank';
		}

		if (projectDesc) {
			descriptionEl.textContent = projectDesc;
		}

		if (project.homepage) {
			projectLinks.appendChild(websiteLinkWrapper);
		}

		for (const topic of project.topics) {
			topicContainer.appendChild(this.topicTag(topic.name));
		}

		return rootEl;
	}

	private topicTag(topicName: string) {
		const topicText = createElementWithText('p', {
			text: topicName,
			class: [
				'px-2',
				'py-1',
				'border-frostedmint-source',
				'rounded-lg',
				'bg-transparent',
				'lowercase',
				'border-2',
				'p-4',
				'truncate'
			]
		});

		const tagEl = createElement('div', {
			attributes: {
				class: ['text-xs', 'text-frostedmint-source']
			},
			children: [topicText]
		});

		return tagEl;
	}

	public getRootElement = (): HTMLElement => this.#rootContainer;
}