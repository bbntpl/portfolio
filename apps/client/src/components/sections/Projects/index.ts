import { Project } from './index.types';

type ProjectsInstanceArgs = {
	projects: Array<Project>
}

export default class ProjectsSection {
	#rootContainer: HTMLElement;
	#sectionHeading: HTMLHeadingElement;
	#contentContainer: HTMLDivElement;
	#projectGrids: HTMLDivElement;
	#secondaryProjectListLinkWrapper: HTMLDivElement;
	#secondaryProjectListLink: HTMLAnchorElement;

	constructor({ projects }: ProjectsInstanceArgs) {
		this.#rootContainer = document.createElement('section');
		this.#rootContainer.id = 'projects';
		this.#sectionHeading = document.createElement('h1');
		this.#sectionHeading.textContent = 'Projects';
		this.#contentContainer = document.createElement('div');
		this.#projectGrids = document.createElement('div');
		this.#secondaryProjectListLinkWrapper = document.createElement('div');
		this.#secondaryProjectListLink = document.createElement('a');
		this.#secondaryProjectListLink.textContent = 'VIEW OTHER WEB DEV PROJECTS'
		this.#secondaryProjectListLink.href = 'https://github.com/stars/bvrbryn445/lists/my-webdev-projects-2';
		this.#secondaryProjectListLink.target = '_blank';

		this.#rootContainer.appendChild(this.#sectionHeading);
		this.#rootContainer.appendChild(this.#contentContainer);
		this.#contentContainer.appendChild(this.#projectGrids);
		this.#contentContainer.appendChild(this.#secondaryProjectListLinkWrapper);
		this.#secondaryProjectListLinkWrapper.appendChild(this.#secondaryProjectListLink);

		for (const project of projects) {
			this.#projectGrids.appendChild(this.createProjectGridItem(project))
		}

		this.#rootContainer.classList.add('portfolio-section');
		this.#sectionHeading.classList.add(
			'section-text-heading',
			'viewport-element-transition'
		);
		this.#contentContainer.classList.add(
			'flex',
			'flex-col',
			'items-center',
			'font-sans'
		);
		this.#projectGrids.classList.add(
			'flex',
			'flex-row',
			'flex-wrap',
			'my-12',
			'justify-center',
		)
		this.#secondaryProjectListLinkWrapper.classList.add(
			'bg-bluemine-300',
			'text-sm',
			'text-semibold',
			'text-midnight',
			'hover:bg-bluemine-200',
			'py-2',
			'viewport-element-transition'
		)
		this.#secondaryProjectListLink.classList.add(
			'px-4',
			'py-2',
			'top-0',
			'bottom-0'
		)
	}

	private createProjectGridItem(project: Project): HTMLDivElement {
		const splitDesc = project.description.split('|');
		const projectTitle = splitDesc[0];
		const projectDesc = splitDesc[1];
		const projectImage = splitDesc[2];

		const rootEl = document.createElement('div');
		const bgImage: HTMLImageElement = new Image();
		if (projectImage) {
			bgImage.src = projectImage;
		}

		const projectInfoWrapper = document.createElement('div');

		const titleEl = document.createElement('h3');
		titleEl.textContent = projectTitle;

		const secondaryContent = document.createElement('div');
		const projectLinks = document.createElement('div');
		const repoLinkWrapper = document.createElement('div');
		const websiteLinkWrapper = document.createElement('div');
		const repoLink = document.createElement('a');
		const websiteLink = document.createElement('a');
		const descriptionEl = document.createElement('p');
		const topicContainer = document.createElement('div');

		repoLink.textContent = 'visit repo';
		repoLink.href = project.url;
		repoLink.target = '_blank';

		if (project.homepage) {
			websiteLink.textContent = 'access live demo';
			websiteLink.href = project.homepage;
			websiteLink.target = '_blank';
		}

		if (projectDesc) {
			descriptionEl.textContent = projectDesc;
		}

		rootEl.appendChild(bgImage);
		rootEl.appendChild(projectInfoWrapper);
		projectInfoWrapper.appendChild(titleEl);
		projectInfoWrapper.appendChild(secondaryContent);
		secondaryContent.appendChild(projectLinks);
		projectLinks.appendChild(repoLinkWrapper);
		if (project.homepage) {
			projectLinks.appendChild(websiteLinkWrapper);
		}
		repoLinkWrapper.appendChild(repoLink);
		websiteLinkWrapper.appendChild(websiteLink);
		secondaryContent.appendChild(descriptionEl);
		secondaryContent.appendChild(topicContainer);

		for (const topic of project.topics) {
			topicContainer.appendChild(this.topicTag(topic.name));
		}

		const imgPosByNaturalDimensions = bgImage.naturalHeight > bgImage.naturalWidth
			? 'object-portrait' : 'object-cover';

		const absoluteWrapperStyles = [
			'absolute',
			'h-full',
			'bg-transparent'
		];
		const linkStyles = [
			'underline',
			'hover:text-frostedmint-source'
		]

		rootEl.classList.add(
			'group',
			'flex',
			'items-center',
			'justify-center',
			'w-96',
			'h-96',
			'viewport-element-transition',
			'overflow-hidden',
		);
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
		projectInfoWrapper.classList.add(
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
		);
		projectInfoWrapper.setAttribute('tabindex', '0');
		projectLinks.classList.add(
			'flex',
			'content-center',
			'gap-x-4',
		)
		repoLink.classList.add(...linkStyles);
		websiteLink.classList.add(...linkStyles);
		titleEl.classList.add(
			'text-2xl',
			'text-bold',
			'uppercase',
			'text-center',
			'text-frostedmint-source',
			'group-hover:-translate-y-30',
			'transform-all',
		)
		secondaryContent.classList.add(
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
		)
		descriptionEl.classList.add(
			'text-sm',
			'text-justify'
		)
		topicContainer.classList.add(
			'flex',
			'flex-row',
			'flex-wrap',
			'gap-y-2',
			'gap-x-4',
			'justify-start'
		)

		return rootEl;
	}

	private topicTag(topicName: string) {
		const tagEl = document.createElement('div');
		const topicText = document.createElement('p');
		topicText.textContent = topicName;

		tagEl.appendChild(topicText);

		tagEl.classList.add(
			'px-2',
			'py-1',
			'border-frostedmint-source',
			'rounded-lg',
			'bg-transparent',
			'lowercase',
			'border-2',
			'p-4',
			'truncate'
		)

		topicText.classList.add(
			'text-xs',
			'text-frostedmint-source'
		)

		return tagEl;
	}

	public getRootElement(): HTMLElement {
		return this.#rootContainer;
	}
}